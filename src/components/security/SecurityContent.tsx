"use client";

import { SecurityHeader } from "@/components/security/SecurityHeader";
import { SecurityFeatures } from "@/components/security/SecurityFeatures";
import { SecurityTrustIndicators } from "@/components/security/SecurityTrustIndicators";
import { BackgroundDecoration } from "@/components/security/BackgroundDecoration";

export const SecurityContent = () => {
    return (
        <section className="content-container">
            <BackgroundDecoration />

            <div className="content-inner">
                <SecurityHeader />
                <SecurityFeatures />
                <SecurityTrustIndicators />
            </div>
        </section>
    );
};