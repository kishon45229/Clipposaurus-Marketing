"use client";

import { useComparison } from "@/contexts/ComparisonContext";

export const ComparisonHeader = () => {
    const { data } = useComparison();
    const { title, titleHighlight, description, tagline } = data;

    return (
        <div className="space-y-4">
            <div className="space-y-3 text-center">
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight max-w-4xl">
                    <span className="text-zinc-900 dark:text-zinc-50">
                        {title}{" "}
                    </span>
                    <span className="text-emerald-600 dark:text-emerald-400">
                        {titleHighlight}
                    </span>
                </h1>
                <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
                    {description}
                </p>
            </div>
            <div className="hidden lg:flex items-center justify-center">
                <div className="rounded-full border border-emerald-200/70 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 shadow-[0_20px_80px_-60px_rgba(16,185,129,0.4)] dark:border-emerald-800/70 dark:bg-zinc-950 dark:text-emerald-200">
                    {tagline}
                </div>
            </div>
        </div>
    );
};
