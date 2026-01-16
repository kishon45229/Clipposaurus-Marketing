export const checkRateLimitAndRedirect = async (redirectFn: () => void) => {
  try {
    const response = await fetch("/api/rate-limit");
    const result = await response.json();

    if (!result.allowed) {
      const retryMinutes = result.retryAfter
        ? Math.ceil(result.retryAfter / 60)
        : 1;
      const message =
        result.blockReason ||
        `Rate limit exceeded. Please try again in ${retryMinutes} minute${
          retryMinutes > 1 ? "s" : ""
        }.`;

      return {
        allowed: false,
        message,
      };
    } else {
      redirectFn();
      return { allowed: true };
    }
  } catch (error) {
    console.error("Rate limit check failed:", error);
    // Fail open - allow redirect on error
    redirectFn();
    return { allowed: true };
  }
};
