import React from "react";
import { ComponentDataProvider } from "@/context/ComponentDataContext";
import { FAQContainer } from "@/components/faq/FAQContainer";
import LoadingFallback from "@/app/loading";
import { FAQProvider } from "@/context/FAQContext";

/**
 * FAQ PAGE COMPONENT
 * @returns SERVER COMPONENT
 */
export default function FAQPage(): React.ReactElement {
    return (
        <ComponentDataProvider>
            <React.Suspense fallback={<LoadingFallback />}>
                <FAQProvider>
                    <section className="xl:min-h-screen max-w-480mx-auto py-2 sm:py-4">
                        <FAQContainer />
                    </section>
                </FAQProvider>
            </React.Suspense>
        </ComponentDataProvider>
    );
}
