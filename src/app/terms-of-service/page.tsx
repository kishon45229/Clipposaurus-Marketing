import React from 'react';
import LoadingFallback from "@/app/loading";
import { ComponentDataProvider } from "@/contexts/ComponentDataContext";
import { TermsOfServiceProvider } from "@/contexts/TermsOfServiceContext";
import { TermsAndConditions } from "@/components/terms-of-service";

/**
 * TERMS OF SERVICE PAGE COMPONENT
 * @returns SERVER COMPONENT
 */
export default async function TermsOfServicePage(): Promise<React.ReactElement> {
    return (
        <ComponentDataProvider>
            <React.Suspense fallback={<LoadingFallback />}>
                <TermsOfServiceProvider>
                    <section className="xl:min-h-screen max-w-7xl mx-auto py-2 sm:py-4">
                        <TermsAndConditions />
                    </section>
                </TermsOfServiceProvider>
            </React.Suspense>
        </ComponentDataProvider>
    );
}