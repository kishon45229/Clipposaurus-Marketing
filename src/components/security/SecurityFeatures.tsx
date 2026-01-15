"use client";

import { Shield, Eye, Server, Clock } from "lucide-react";
import { useSecurity } from "@/context/SecurityContext";

const iconMap = {
    "Zero-Knowledge Encryption": Shield,
    "No Tracking": Eye,
    "No Data Retention": Server,
    "Time-Limited Access": Clock,
};

export const SecurityFeatures = () => {
    const { data } = useSecurity();

    return (
        <section className="relative w-full">
            <div className="max-w-6xl mx-auto px-[clamp(1rem,4vw,1.5rem)]">
                {/* Matrix grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y divide-x-0 md:divide-x md:divide-y-0 divide-zinc-300 dark:divide-zinc-800 gap-y-[clamp(1rem,3vw,0rem)]">
                    {data.features.map((feature, index) => {
                        const Icon =
                            iconMap[feature.title as keyof typeof iconMap] || Shield;

                        return (
                            <div
                                key={index}
                                className="group relative px-[clamp(1rem,4vw,2rem)] py-[clamp(1.5rem,5vw,2.5rem)]"
                            >
                                {/* Header row */}
                                <div className="flex items-center justify-between mb-[clamp(1rem,3vw,1.5rem)]">
                                    {/* Icon */}
                                    <div className="inline-flex items-center justify-center w-[clamp(2.5rem,8vw,3rem)] h-[clamp(2.5rem,8vw,3rem)] rounded-lg bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-400 dark:border-zinc-800">
                                        <Icon
                                            className="w-[clamp(1.25rem,4vw,1.5rem)] h-[clamp(1.25rem,4vw,1.5rem)] text-emerald-500"
                                            strokeWidth={2.5}
                                        />
                                    </div>

                                    {/* Stat */}
                                    <span className="text-[clamp(0.75rem,2vw,0.875rem)] font-bold tracking-wider text-zinc-600 dark:text-emerald-500">
                                        {feature.stat}
                                    </span>
                                </div>

                                {/* Title */}
                                <div className="text-[clamp(1rem,3vw,1.25rem)] font-semibold text-emerald-500 dark:text-zinc-50 mb-[clamp(0.5rem,2vw,0.75rem)] leading-tight">
                                    {feature.title}
                                </div>

                                {/* Description */}
                                <div className="text-[clamp(0.875rem,2.5vw,1rem)] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    {feature.description}
                                </div>

                                {/* Subtle scan line */}
                                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* background grid hint */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </section>
    );
};
