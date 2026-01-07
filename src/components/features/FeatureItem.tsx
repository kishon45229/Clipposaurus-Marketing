"use client";

import { Zap, Lock, Timer, Smartphone, Code, Globe } from "lucide-react";
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
};

export const FeatureItem = ({ feature }: FeatureItemProps) => {
    const Icon = iconMap[feature.icon as keyof typeof iconMap] || Globe;

    return (
        <div className="relative pl-10">
            {/* vertical rail dot */}
            <span className="absolute left-[-9px] top-12 w-4 h-4 rounded-full bg-emerald-500/80 shadow-[0_0_0_6px_rgba(16,185,129,0.15)] transition-all group-hover:scale-110" />

            {/* icon */}
            <div className="mb-6">
                <Icon
                    className="w-8 h-8 text-emerald-600 dark:text-emerald-500"
                    strokeWidth={2.5}
                />
            </div>

            {/* content */}
            <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
                {feature.title}
            </h3>

            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-sm">
                {feature.description}
            </p>
        </div>
    );
};
