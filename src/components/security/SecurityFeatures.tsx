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
        <section className="relative">
            <div className="max-w-6xl mx-auto px-6">
                {/* Matrix grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y divide-x-0 md:divide-x md:divide-y-0 divide-zinc-800">
                    {data.features.map((feature, index) => {
                        const Icon =
                            iconMap[feature.title as keyof typeof iconMap] || Shield;

                        return (
                            <div
                                key={index}
                                className="group relative px-8 py-10"
                            >
                                {/* Header row */}
                                <div className="flex items-center justify-between mb-6">
                                    {/* Icon */}
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-zinc-900/60 border border-zinc-800">
                                        <Icon
                                            className="w-6 h-6 text-emerald-500"
                                            strokeWidth={2.5}
                                        />
                                    </div>

                                    {/* Stat */}
                                    <span className="text-sm font-bold tracking-wider text-emerald-500">
                                        {feature.stat}
                                    </span>
                                </div>

                                {/* Title */}
                                <div className="text-xl font-semibold text-white mb-3">
                                    {feature.title}
                                </div>

                                {/* Description */}
                                <div className="text-zinc-400 leading-relaxed">
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
