"use client";

import { useCTA } from "@/contexts/CTAContext";

export const CTAHeader = () => {
    const { data } = useCTA();
    const { eyebrow, title, titleHighlight, description } = data;

    return (
        <div className="space-y-3 text-left">
            <p className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/20 rounded-full border border-emerald-200/60 dark:border-emerald-800/50">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                {eyebrow}
            </p>
            <div className="space-y-2">
                <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight text-zinc-900 dark:text-zinc-50">
                    {title}{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">
                        {titleHighlight}
                    </span>
                </h2>
                <p className="text-[clamp(0.95rem,2.3vw,1.1rem)] text-zinc-600 dark:text-zinc-300 max-w-2xl">
                    {description}
                </p>
            </div>
        </div>
    );
};