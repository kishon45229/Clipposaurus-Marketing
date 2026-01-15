"use client";

import { FeatureHeader } from "@/components/features/FeatureHeader";
import { TechnicalProof } from "@/components/features/TechnicalProof";
import { FeatureGrid } from "@/components/features/FeatureGrid";

export const FeatureContent = () => {
    return (
        <section className="relative flex flex-col items-center justify-center w-full overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />

            <div className="relative max-w-7xl mx-auto w-full flex flex-col items-center justify-center gap-[clamp(2rem,6vw,3rem)]">
                <FeatureHeader />
                <TechnicalProof />
                <FeatureGrid />
            </div>
        </section>
    );
};