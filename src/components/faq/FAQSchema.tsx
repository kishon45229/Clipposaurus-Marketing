"use client";

import React from "react";
import { useFAQ } from "@/context/FAQContext";
import { getFAQJsonLd, getFAQBreadcrumbJsonLd } from "@/lib/faqJsonLd";

/**
 * FAQ JSON-LD Schema Component
 * Injects structured data for FAQ page to enable rich snippets
 */
export const FAQSchema = React.memo(() => {
    const { data, isLoading } = useFAQ();

    if (isLoading || !data) {
        return null;
    }

    const faqJsonLd = getFAQJsonLd(data);
    const breadcrumbJsonLd = getFAQBreadcrumbJsonLd();

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
        </>
    );
});

FAQSchema.displayName = "FAQSchema";
