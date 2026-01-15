"use client";

import { useCTA } from "@/context/CTAContext";
import { UserX, Gift, Lock } from "lucide-react";

const badgeIcons = {
    "no account required": UserX,
    "free forever": Gift,
    "end-to-end encrypted": Lock,
};

export const CTATrustBadges = () => {
    const { data } = useCTA();
    const { trustBadges } = data;

    return (
        <div className="flex flex-wrap items-center gap-2">
            {trustBadges.map((badge, index) => {
                const normalized = badge.toLowerCase();
                const IconComponent = badgeIcons[normalized as keyof typeof badgeIcons];
                return (
                    <div
                        key={index}
                        className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/70 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-700 text-sm text-zinc-700 dark:text-zinc-200 shadow-sm"
                    >
                        {IconComponent && <IconComponent className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />}
                        <span className="font-medium whitespace-nowrap">{badge}</span>
                    </div>
                );
            })}
        </div>
    );
};