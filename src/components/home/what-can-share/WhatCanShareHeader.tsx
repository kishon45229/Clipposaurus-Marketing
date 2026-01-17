"use client";

import { useWhatCanShare } from "@/contexts/WhatCanShareContext";

export const WhatCanShareHeader = () => {
    const { data } = useWhatCanShare();
    const { headline, headlineHighlight, subtext } = data;

    return (
        <div className="text-center lg:text-left space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* HEADLINE */}
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-tight">
                <span className="text-zinc-900 dark:text-zinc-50">
                    {headline}{" "}
                </span>
                {headlineHighlight && (
                    <span className="inline-block bg-linear-to-br from-emerald-600 via-emerald-500 to-emerald-400 dark:from-emerald-400 dark:via-emerald-500 dark:to-emerald-600 bg-clip-text text-transparent">
                        {headlineHighlight}
                    </span>
                )}
            </h2>

            {/* SUBTEXT */}
            <p className="text-[clamp(1rem,2vw,1.25rem)] text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl lg:max-w-none">
                {subtext}
            </p>
        </div>
    );
};
