"use client";

import { ComparisonHeader } from "@/components/home/comparison/ComparisonHeader";
import { BackgroundDecoration } from "@/components/common/BackgroundDecoration";
import { ComparisonTable } from "@/components/home/comparison/ComparisonTable";
import { ComparisonCTA } from "@/components/home/comparison/ComparisonCTA";

export const ComparisonContent = () => {
    return (
        <section className="relative overflow-hidden">
            <BackgroundDecoration />

            <div className="relative flex flex-col items-center max-w-7xl mx-auto px-4 lg:px-6 z-10 rounded-3xl bg-white/90 dark:bg-zinc-950/70 shadow-[0_30px_120px_-80px_rgba(16,185,129,0.5)]">
                <ComparisonHeader />
                <ComparisonTable />
                <ComparisonCTA />
            </div>
        </section>
    );
};
