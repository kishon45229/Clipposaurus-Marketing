import React from "react";
import LoadingFallback from "@/app/loading";
import { About } from "@/components/about";
import { AboutProvider } from "@/contexts/AboutContext";

/**
 * ABOUT PAGE COMPONENT
 * @returns SERVER COMPONENT
 */
export default function AboutPage(): React.ReactElement {
    return (
        <React.Suspense fallback={<LoadingFallback />}>
            <AboutProvider>
                <section className="xl:min-h-screen max-w-7xl mx-auto py-2 sm:py-4">
                    <About />
                </section>
            </AboutProvider>
        </React.Suspense>
    );
}
