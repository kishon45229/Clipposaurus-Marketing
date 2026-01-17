import React from "react";
import { FAQContainer } from "@/components/faq/FAQContainer";
import LoadingFallback from "@/app/loading";
import { FAQProvider } from "@/context/FAQContext";
import { FAQSchema } from "@/components/faq/FAQSchema";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQ - Frequently Asked Questions",
    description:
        "Find answers to common questions about encryption, privacy, and how to use our Clipposaurus zero-knowledge platform.",
    keywords: [
        "clipposaurus faq",
        "encryption faq",
        "how to use clipposaurus",
        "zero knowledge encryption questions",
    ],
    openGraph: {
        title: "FAQ - Frequently Asked Questions | Clipposaurus",
        description:
            "Find answers to common questions about encryption, privacy, and how to use our Clipposaurus zero-knowledge platform.",
        type: "website",
    },
};

/**
 * FAQ PAGE COMPONENT
 * @returns SERVER COMPONENT
 */
export default function FAQPage(): React.ReactElement {
    return (
        <React.Suspense fallback={<LoadingFallback />}>
            <FAQProvider>
                <FAQSchema />
                <section className="min-h-screen max-w-7xl mx-auto py-2 sm:py-4">
                    <FAQContainer />
                </section>
            </FAQProvider>
        </React.Suspense>
    );
}
