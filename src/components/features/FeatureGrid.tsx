"use client";

import { useFeature } from "@/context/FeatureContext";
import { FeatureItem } from "@/components/features/FeatureItem";

export const FeatureGrid = () => {
    const { data } = useFeature();

    return (
        <div className="w-full max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12">
                {data.features.map((feature, index) => (
                    <div
                        key={index}
                        className="relative group py-5 md:py-8 border-l border-zinc-300 dark:border-zinc-800/60"
                    >
                        <FeatureItem feature={feature} />
                    </div>
                ))}
            </div>
        </div>
    );
};
