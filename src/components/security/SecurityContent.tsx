"use client";

import { SecurityHeader } from "@/components/security/SecurityHeader";
import { SecurityFeatures } from "@/components/security/SecurityFeatures";
import { SecurityTrustIndicators } from "@/components/security/SecurityTrustIndicators";
import { BackgroundDecoration } from "@/components/security/BackgroundDecoration";

export const SecurityContent = () => {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-[clamp(700px,90dvh,1200px)] w-full overflow-hidden px-[clamp(1rem,4vw,2rem)] py-[clamp(2rem,8vw,4rem)]">
            <BackgroundDecoration />

            <div className="relative max-w-7xl mx-auto w-full flex flex-col items-center justify-center gap-[clamp(2rem,6vw,4rem)]">
                <SecurityHeader />
                <SecurityFeatures />
                <SecurityTrustIndicators />
            </div>
        </section>
    );
};