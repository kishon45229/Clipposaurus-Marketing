import React from 'react';
import LoadingFallback from "@/app/loading";
import { ComponentDataProvider } from "@/contexts/ComponentDataContext";
import { PrivacyPolicyProvider } from '@/contexts/PrivacyPolicyContext';
import { PrivacyPolicy } from "@/components/privacy-policy";

/**
 * TERMS OF SERVICE PAGE COMPONENT
 * @returns SERVER COMPONENT
 */
export default async function PrivacyPolicyPage(): Promise<React.ReactElement> {
    return (
        <ComponentDataProvider>
            <React.Suspense fallback={<LoadingFallback />}>
                <PrivacyPolicyProvider>
                    <section className="xl:min-h-screen max-w-7xl mx-auto py-2 sm:py-4">
                        <PrivacyPolicy />
                    </section>
                </PrivacyPolicyProvider>
            </React.Suspense>
        </ComponentDataProvider>
    );
}