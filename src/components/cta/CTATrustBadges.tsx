"use client";

import { useCTA } from "@/context/CTAContext";
import { UserX, Gift, Lock } from "lucide-react";

const badgeIcons = {
    "No Account Required": UserX,
    "Free Forever": Gift,
    "End-to-End Encrypted": Lock,
};

export const CTATrustBadges = () => {
    const { data } = useCTA();
    const { trustBadges } = data;

    return (
        <div className="pt-12 flex flex-wrap items-center justify-center gap-8 text-white/80">
            {trustBadges.map((badge, index) => {
                const IconComponent = badgeIcons[badge as keyof typeof badgeIcons];
                return (
                    <div key={index} className="flex items-center gap-3 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                        {IconComponent && <IconComponent className="w-4 h-4" />}
                        <span className="text-sm font-medium">{badge}</span>
                    </div>
                );
            })}
        </div>
    );
};