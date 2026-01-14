import type { Metadata } from "next";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL || "https://clipposaurus.com"
    : process.env.NEXT_PUBLIC_DEVELOPMENT_BASE_URL || "http://localhost:3002";

export const siteMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "Clipposaurus - Secure Zero-Knowledge File & Code Sharing Platform",
    template: "%s | Clipposaurus",
  },
  description:
    "Share files, code snippets, and text securely with zero-knowledge encryption. No signup required, auto-expiring drops, and complete privacy. Built for developers and privacy-conscious users.",
  keywords: [
    // Primary Keywords
    "secure file sharing",
    "encrypted file sharing",
    "zero knowledge encryption",
    "privacy file sharing",
    "anonymous file sharing",
    // Feature-specific
    "code snippet sharing",
    "pastebin alternative",
    "temporary file storage",
    "ephemeral file sharing",
    "self-destructing files",
    // Use cases
    "developer tools",
    "secure clipboard",
    "cross-device file transfer",
    "no signup file sharing",
    "end-to-end encrypted sharing",
    // Technical
    "client-side encryption",
    "browser encryption",
    "drop key sharing",
    "auto-expiring files",
    // Brand
    "clipposaurus",
    "clip sharing",
    "secure drops",
  ],
  authors: [{ name: "G. Kishon", url: `${BASE_URL}/about` }],
  creator: "G. Kishon",
  publisher: "G. Kishon",
  applicationName: "Clipposaurus",
  category: "Productivity",
  classification: "File Sharing & Collaboration Tool",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": `${BASE_URL}/rss.xml`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Clipposaurus",
    title: "Clipposaurus - Secure Zero-Knowledge File & Code Sharing Platform",
    description:
      "Share files, code snippets, and text securely with zero-knowledge encryption. No signup required, auto-expiring drops, and complete privacy.",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Clipposaurus - Secure File & Code Sharing",
        type: "image/png",
      },
      {
        url: `${BASE_URL}/og-image-square.png`,
        width: 1200,
        height: 1200,
        alt: "Clipposaurus Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clipposaurus - Secure Zero-Knowledge File Sharing",
    description:
      "Share files, code, and text securely with zero-knowledge encryption. No signup, auto-expiring, completely private.",
    images: [`${BASE_URL}/twitter-image.png`],
    creator: "@clipposaurus",
    site: "@clipposaurus",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
    yahoo: process.env.YAHOO_VERIFICATION,
    other: {
      bing: process.env.BING_VERIFICATION || "",
    },
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Clipposaurus",
    "mobile-web-app-capable": "yes",
  },
};
