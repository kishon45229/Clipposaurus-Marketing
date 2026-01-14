import type { FAQComponent } from "@/types";

/**
 * Generate FAQ Page JSON-LD structured data for rich snippets
 * This helps search engines display FAQ results directly in search
 */
export function getFAQJsonLd(faqData: FAQComponent) {
  const BASE_URL =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL
      : process.env.NEXT_PUBLIC_DEVELOPMENT_BASE_URL;

  const faqItems = faqData.categories.flatMap((category) =>
    category.questions.map((question) => ({
      "@type": "Question" as const,
      name: question.question,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: question.answer,
      },
    }))
  );

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${BASE_URL}/faq#faqpage`,
    mainEntity: faqItems,
    about: {
      "@type": "SoftwareApplication",
      name: "Clipposaurus",
      applicationCategory: "SecurityApplication",
    },
    datePublished: faqData.lastUpdated,
    dateModified: faqData.lastUpdated,
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "Clipposaurus",
      url: BASE_URL,
    },
  };
}

/**
 * Generate BreadcrumbList JSON-LD for FAQ page
 */
export function getFAQBreadcrumbJsonLd() {
  const BASE_URL =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL
      : process.env.NEXT_PUBLIC_DEVELOPMENT_BASE_URL;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "FAQ",
        item: `${BASE_URL}/faq`,
      },
    ],
  };
}
