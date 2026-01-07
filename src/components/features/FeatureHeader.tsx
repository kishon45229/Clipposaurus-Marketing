"use client";

import { useFeature } from "@/context/FeatureContext";

export const FeatureHeader = () => {
    const { data } = useFeature();

    return (
        <div className="text-center space-y-4">
            <div className="text-4xl lg:text-5xl font-black text-zinc-900 dark:text-zinc-50">
                Built for
                <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 dark:from-emerald-500 dark:to-emerald-600 bg-clip-text text-transparent">
                    {" "}Privacy{" "}
                </span>
                & Speed
            </div>
            <div className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                {data.description}
            </div>
        </div>
    );
};