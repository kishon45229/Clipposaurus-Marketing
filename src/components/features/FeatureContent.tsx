"use client";

import { FeatureHeader } from "@/components/features/FeatureHeader";
import { FeatureGrid } from "@/components/features/FeatureGrid";

export const FeatureContent = () => {
    return (
        <section className="content-container">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />

            <div className="content-inner">
                <FeatureHeader />
                <FeatureGrid />
            </div>
        </section>
    );
};