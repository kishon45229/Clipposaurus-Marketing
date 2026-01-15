"use client";

import { ComparisonComponent } from "@/components/home/comparison/Comparison.types";
import { Check, Dot, Minus } from "lucide-react";
import React from "react";

interface ComparisonLaneProps {
    lane: ComparisonComponent["lanes"]["traditional"] | ComparisonComponent["lanes"]["clipposaurus"];
}

export const ComparisonLane = React.memo(({ lane }: ComparisonLaneProps) => {
    const isPreferred = lane.theme === "clipposaurus";

    return (
        <div
            className={`group relative h-full rounded-3xl border p-2 sm:p-4 lg:p-6 transition-all duration-300 
                ${isPreferred
                    ? "border-emerald-200/70 bg-emerald-50/80 text-emerald-900 shadow-[0_20px_80px_-40px_rgba(16,185,129,0.3)] dark:border-emerald-700/60 dark:bg-emerald-950/30 dark:text-emerald-50"
                    : "border-zinc-200 bg-white/90 text-zinc-900 shadow-[0_20px_80px_-50px_rgba(24,24,27,0.5)] dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-100"}
            hover:-translate-y-1 hover:shadow-[0_25px_100px_-60px_rgba(16,185,129,0.35)] dark:hover:shadow-[0_25px_100px_-60px_rgba(16,185,129,0.45)]`}
        >
            <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                    <p
                        className={`text-xs uppercase tracking-[0.18em] 
                            ${isPreferred
                                ? "text-emerald-700 dark:text-emerald-300"
                                : "text-zinc-600 dark:text-zinc-500"}
                        `}
                    >
                        {lane.subtitle}
                    </p>
                    <h3
                        className={`text-2xl sm:text-3xl font-semibold leading-tight 
                            ${isPreferred
                                ? "text-emerald-900 dark:text-emerald-100"
                                : "text-zinc-900 dark:text-zinc-100"}
                        `}
                    >
                        {lane.title}
                    </h3>
                </div>

                <span
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold 
                        ${isPreferred
                            ? "border-emerald-200 bg-emerald-100 text-emerald-800 dark:border-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-100"
                            : "border-zinc-200 bg-zinc-100 text-zinc-800 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"}
                    `}
                >
                    {isPreferred ? <Check className="h-3 w-3" /> : <Dot className="h-2 w-2" />} {lane.endState}
                </span>
            </div>

            <div className="mt-6 space-y-4">
                {lane.comparisonPoints.map((point, index) => (
                    <div key={index} className="flex gap-4">
                        <div
                            className={`mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border text-sm font-semibold transition-transform duration-300 
                                ${isPreferred
                                    ? "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-100"
                                    : "border-zinc-200 bg-zinc-100 text-zinc-800 dark:border-zinc-700 dark:bg-zinc-900 text-zinc-300"}
                                group-hover:-translate-y-0.5`}
                        >
                            {isPreferred ? <Check className="h-4 w-4" /> : <Minus className="h-4 w-4" />}
                        </div>
                        <div className="space-y-1">
                            <p className={`text-base font-semibold 
                                ${isPreferred
                                    ? "text-emerald-900 dark:text-emerald-50"
                                    : "text-zinc-900 dark:text-zinc-100"}`}>
                                {point.label}
                            </p>
                            <p className="text-sm text-zinc-600 dark:text-zinc-500">{point.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div
                className={`pointer-events-none absolute inset-x-0 bottom-0 h-24 rounded-b-3xl bg-gradient-to-t 
                    ${isPreferred
                        ? "from-emerald-200/40 via-transparent to-transparent dark:from-emerald-500/10"
                        : "from-zinc-200/60 via-transparent to-transparent dark:from-zinc-800/40"}
                `}
            />
        </div>
    );
});

ComparisonLane.displayName = "ComparisonLane";
