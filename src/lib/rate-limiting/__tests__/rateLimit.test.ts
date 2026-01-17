import { checkRateLimit } from "../index";
import { RATE_LIMIT_CONFIG } from "../config";
import { NextRequest } from "next/server";

jest.mock("../../env", () => ({
  default: {
    NODE_ENV: "development",
    NEXT_PUBLIC_CLIPPOSAURUS_CONTACT_EMAIL: "support@clipposaurus.com",
    NEXT_PUBLIC_DEVELOPMENT_APP_URL: "http://localhost:3000",
    NEXT_PUBLIC_PRODUCTION_APP_URL: "https://app.clipposaurus.com",
    NEXT_PUBLIC_DEVELOPMENT_MARKETING_URL: "http://localhost:3002",
    NEXT_PUBLIC_PRODUCTION_MARKETING_URL: "https://clipposaurus.com",
    NEXT_PUBLIC_GITHUB_REPO_URL: "https://github.com/kishon45229/Clipposaurus",
    NEXT_PUBLIC_GITHUB_SPONSOR_URL: "https://github.com/sponsors/kishon45229",
    NEXT_PUBLIC_GITHUB_ISSUES_URL:
      "https://github.com/kishon45229/Clipposaurus/issues",
    NEXT_PUBLIC_GITHUB_STARS_API_URL:
      "https://api.github.com/repos/kishon45229/Clipposaurus",
    UPSTASH_REDIS_REST_URL: "https://redis.example.com",
    UPSTASH_REDIS_REST_TOKEN: "test-token",
  },
}));
jest.mock("../client-IP");
jest.mock("../fingerprint");
jest.mock("../storage");
jest.mock("../utils");

import mockGetClientIP from "../client-IP";
import { generateIdentifier as mockGenerateIdentifier } from "../fingerprint";
import {
  isBlocked as mockIsBlocked,
  blockIdentifier as mockBlockIdentifier,
  trackRequest as mockTrackRequest,
} from "../storage";
import { getPathConfig as mockGetPathConfig } from "../utils";

describe("checkRateLimit", () => {
  let mockRequest: NextRequest;

  beforeEach(() => {
    jest.clearAllMocks();
    mockRequest = {
      url: "http://localhost:3000/api/create-drop",
      headers: new Headers(),
    } as NextRequest;
  });

  it("should allow request when IP is not available", async () => {
    (mockGetClientIP as jest.Mock).mockReturnValue(null);

    const result = await checkRateLimit(mockRequest);

    expect(result.allowed).toBe(true);
    expect(result.remaining).toBe(RATE_LIMIT_CONFIG.capacity);
  });

  it("should block request when identifier is blocked", async () => {
    (mockGetClientIP as jest.Mock).mockReturnValue("127.0.0.1");
    (mockGenerateIdentifier as jest.Mock).mockReturnValue("test-identifier");
    (mockIsBlocked as jest.Mock).mockResolvedValue({
      blocked: true,
      resetTime: Date.now() + 3600000,
    });

    const result = await checkRateLimit(mockRequest);

    expect(result.allowed).toBe(false);
    expect(result.remaining).toBe(0);
    expect(result.blockReason).toContain("Temporarily blocked");
  });

  it("should allow request within limits", async () => {
    (mockGetClientIP as jest.Mock).mockReturnValue("127.0.0.1");
    (mockGenerateIdentifier as jest.Mock).mockReturnValue("test-identifier");
    (mockIsBlocked as jest.Mock).mockResolvedValue({ blocked: false });
    (mockGetPathConfig as jest.Mock).mockReturnValue(
      RATE_LIMIT_CONFIG.pathLimits["/api/create-drop"],
    );
    (mockTrackRequest as jest.Mock).mockResolvedValue({
      allowed: true,
      tokensRemaining: 9,
      resetTime: Date.now() + 180000,
    });

    const result = await checkRateLimit(mockRequest);

    expect(result.allowed).toBe(true);
    expect(result.remaining).toBe(9);
  });

  it("should block request when rate limit exceeded", async () => {
    (mockGetClientIP as jest.Mock).mockReturnValue("127.0.0.1");
    (mockGenerateIdentifier as jest.Mock).mockReturnValue("test-identifier");
    (mockIsBlocked as jest.Mock).mockResolvedValue({ blocked: false });
    (mockGetPathConfig as jest.Mock).mockReturnValue(
      RATE_LIMIT_CONFIG.pathLimits["/api/create-drop"],
    );
    (mockTrackRequest as jest.Mock).mockResolvedValue({
      allowed: false,
      tokensRemaining: 0,
      resetTime: Date.now() + 180000,
    });
    (mockBlockIdentifier as jest.Mock).mockResolvedValue(undefined);

    const result = await checkRateLimit(mockRequest);

    expect(result.allowed).toBe(false);
    expect(result.remaining).toBe(0);
    expect(result.blockReason).toContain("Rate limit exceeded");
    expect(mockBlockIdentifier).toHaveBeenCalledWith(
      "test-identifier",
      "Token bucket depleted - rate limit exceeded",
    );
  });

  it("should handle errors gracefully", async () => {
    (mockGetClientIP as jest.Mock).mockImplementation(() => {
      throw new Error("Test error");
    });

    const result = await checkRateLimit(mockRequest);

    expect(result.allowed).toBe(true);
    expect(result.remaining).toBe(1);
  });
});
