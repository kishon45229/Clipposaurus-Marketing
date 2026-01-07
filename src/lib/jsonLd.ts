export function getSiteJsonLd() {
  const url =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL
      : process.env.NEXT_PUBLIC_DEVELOPMENT_BASE_URL;

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Clipposaurus",
    description:
      "Secure file and code sharing platform with no account required",
    url,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${url}/verify?code={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    sameAs: [],
    publisher: { "@type": "Organization", name: "Clipposaurus", url },
  };
}
