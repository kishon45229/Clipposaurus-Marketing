"use client";

import { useFeature } from "@/context/FeatureContext";
import { FeatureItem } from "@/components/features/FeatureItem";

export const FeatureGrid = () => {
    const { data } = useFeature();

    return (
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-[clamp(0.25rem,4vw,3rem)] px-4">
                {data.features.map((feature, index) => (
                    <div
                        key={index}
                        className="relative group py-[clamp(1rem,3vw,1.5rem)] md:border-l border-zinc-300 dark:border-zinc-800/60 md:pl-0"
                    >
                        <FeatureItem feature={feature} />
                    </div>
                ))}
            </div>
        </div>
    );
};
