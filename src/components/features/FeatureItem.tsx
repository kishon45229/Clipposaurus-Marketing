"use client";

import { Zap, Lock, Timer, Smartphone, Code, Globe, Eye, Database, Shield } from "lucide-react";
import { FeatureItem as FeatureItemType } from "@/types";

interface FeatureItemProps {
    feature: FeatureItemType;
}

const iconMap = {
    Lock,
    Timer,
    Smartphone,
    Zap,
    Code,
    Globe,
    Eye,
    Database,
    Shield,
};

export const FeatureItem = ({ feature }: FeatureItemProps) => {
    const Icon = iconMap[feature.icon as keyof typeof iconMap] || Globe;

    return (
        <div className="relative md:pl-[clamp(1rem,3vw,2.5rem)]">
            {/* vertical rail dot */}
            <span className="hidden lg:block absolute -left-2.25 top-[clamp(2.5rem,4vw,3rem)] w-[clamp(0.75rem,1.5vw,1rem)] h-[clamp(0.75rem,1.5vw,1rem)] rounded-full bg-emerald-500/80 shadow-[0_0_0_6px_rgba(16,185,129,0.15)] transition-all group-hover:scale-110" />

            {/* icon */}
            <div className="mb-[clamp(1rem,3vw,1.5rem)]">
                <Icon
                    className="w-[clamp(1.5rem,5vw,2rem)] h-[clamp(1.75rem,5vw,2.5rem)] text-emerald-600 dark:text-emerald-500"
                    strokeWidth={2.5}
                />
            </div>

            {/* content */}
            <div className="text-[clamp(1rem,3vw,1.25rem)] font-semibold text-zinc-900 dark:text-zinc-50 mb-[clamp(0.5rem,2vw,0.75rem)] leading-tight">
                {feature.title}
            </div>

            <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-sm text-[clamp(0.875rem,2.5vw,1rem)] mb-[clamp(0.5rem,2vw,0.75rem)]">
                {feature.description}
            </div>

            {/* Technical proof badge */}
            {feature.technicalDetail && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 dark:bg-emerald-500/10 border border-emerald-500/20 dark:border-emerald-500/20 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[clamp(0.75rem,2vw,0.875rem)] font-mono font-medium text-emerald-700 dark:text-emerald-400">
                        {feature.technicalDetail}
                    </span>
                </div>
            )}
        </div>
    );
};
