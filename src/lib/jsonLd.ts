export function getSiteJsonLd() {
  const url =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL
      : process.env.NEXT_PUBLIC_DEVELOPMENT_BASE_URL;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        name: "Clipposaurus",
        description:
          "Secure zero-knowledge text and code sharing platform with end-to-end encryption, no account required, and auto-expiring drops",
        url,
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${url}/faq?search={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
        publisher: {
          "@id": `${url}/#organization`,
        },
      },
      {
        "@type": "Organization",
        "@id": `${url}/#organization`,
        name: "Clipposaurus",
        url,
        logo: {
          "@type": "ImageObject",
          url: `${url}/logo.png`,
          width: "512",
          height: "512",
        },
        sameAs: [
          // Add your social media profiles here
          // "https://twitter.com/clipposaurus",
          // "https://github.com/clipposaurus",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Support",
          email: "support@clipposaurus.com",
          availableLanguage: ["en"],
        },
      },
      {
        "@type": "WebApplication",
        "@id": `${url}/#webapplication`,
        name: "Clipposaurus",
        url,
        applicationCategory: "SecurityApplication",
        applicationSubCategory: "Content Sharing",
        operatingSystem: "Any",
        browserRequirements: "Requires JavaScript. Requires HTML5.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          ratingCount: "150",
          bestRating: "5",
          worstRating: "1",
        },
        featureList: [
          "Zero-knowledge encryption",
          "No account required",
          "Auto-expiring drops",
          "Code snippet sharing",
          "Cross-device sync",
          "End-to-end encryption",
        ],
      },
      {
        "@type": "SoftwareApplication",
        name: "Clipposaurus",
        applicationCategory: "WebApplication",
        applicationSubCategory: "Content Sharing & Collaboration",
        operatingSystem: "Web Browser",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        description:
          "Secure, zero-knowledge text and code sharing platform with end-to-end encryption",
      },
    ],
  };
}
