"use client";

import React from "react";
import type { PageHeaderType } from "@/types";

interface PageHeaderProps {
    header: PageHeaderType;
}

export const PageHeader = React.memo(({ header }: PageHeaderProps): React.ReactNode => {
    const { headline, description, lastUpdated } = header;
    const { text, date } = lastUpdated;

    return (
        <header className="mb-12 gap-[clamp(0.75rem,2vw,1rem)]">
            {/*HEADLINE */}
            <div className="font-bold tracking-tight text-emerald-600 dark:text-emerald-500 text-[clamp(1.8rem,4vw,2.4rem)]">
                {headline}
            </div>

            {/* LAST UPDATED */}
            <div className="text-zinc-500 dark:text-zinc-400 text-[clamp(0.75rem,1.2vw,0.9rem)]">
                {text}{" "}
                <span className="font-medium text-zinc-700 dark:text-zinc-300">
                    {date}
                </span>
            </div>

            {/* DESCRIPTION */}
            <div className="mt-4 text-zinc-700 dark:text-zinc-400 leading-relaxed text-[clamp(0.9rem,1.6vw,1rem)]">
                {description}
            </div>

            {/* DIVIDER */}
            <div className="h-px w-full mt-4 bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />
        </header>
    );
});

PageHeader.displayName = "PageHeader";