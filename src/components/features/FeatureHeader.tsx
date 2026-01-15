"use client";

import { useFeature } from "@/context/FeatureContext";

export const FeatureHeader = () => {
    const { data } = useFeature();

    return (
        <div className="text-center space-y-[clamp(1rem,3vw,1.5rem)] px-[clamp(1rem,4vw,2rem)]">
            {/* Main headline with emphasis on trust */}
            <div className="space-y-2">
                <div className="text-[clamp(1.75rem,5vw,3rem)] font-black text-zinc-900 dark:text-zinc-50 leading-tight">
                    {data.headline}
                </div>
                {data.subheadline && (
                    <div className="text-[clamp(1rem,2.5vw,1.5rem)] font-semibold text-emerald-600 dark:text-emerald-500">
                        {data.subheadline}
                    </div>
                )}
            </div>

            {/* Description */}
            <div className="text-[clamp(0.875rem,2.5vw,1.125rem)] text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto px-[clamp(0.5rem,2vw,1rem)] leading-relaxed">
                {data.description}
            </div>
        </div>
    );
};