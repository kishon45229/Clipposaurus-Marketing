"use client";

import { Shield, Zap, Clock } from "lucide-react";
import { useHero } from "@/contexts/HeroContext";

const iconMap = {
    0: Shield,
    1: Zap,
    2: Clock,
};

export const HeroTrustBadges = () => {
    const { data } = useHero();
    const trustBadges = data.trustBadges;

    if (!trustBadges.length) return null;

    return (
        <div className="flex flex-wrap items-center justify-center gap-[clamp(1rem,4vw,1.5rem)] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            {trustBadges.map((badge, index) => {
                const Icon = iconMap[index as keyof typeof iconMap] || Shield;

                return (
                    <div
                        key={index}
                        className="group flex items-center gap-3 px-[clamp(1rem,3vw,1.5rem)] py-[clamp(0.75rem,2vw,1rem)] bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl shadow-sm hover:shadow-md hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300"
                    >
                        { /* ICON */}
                        <div className="flex-shrink-0 w-[clamp(2.5rem,5vw,3rem)] h-[clamp(2.5rem,5vw,3rem)] flex items-center justify-center bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 dark:from-emerald-400/10 dark:to-emerald-500/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-[clamp(1.25rem,2.5vw,1.5rem)] h-[clamp(1.25rem,2.5vw,1.5rem)] text-emerald-600 dark:text-emerald-500" strokeWidth={2.5} />
                        </div>

                        { /* TEXT */}
                        <div className="flex flex-col">
                            <span className="text-[clamp(0.875rem,2vw,1rem)] font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
                                {badge.label}
                            </span>
                            <span className="text-[clamp(0.75rem,1.5vw,0.875rem)] text-zinc-500 dark:text-zinc-500 leading-tight">
                                {badge.subtext}
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
