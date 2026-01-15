"use client";

import { useWhatCanShare } from "@/context/WhatCanShareContext";
import { Shield } from "lucide-react";

export const TrustReinforcement = () => {
    const { data } = useWhatCanShare();
    const { trustReinforcement } = data;

    return (
        <div className="flex items-start gap-[clamp(0.75rem,1vw,0.75rem)] p-[clamp(1rem,1.5vw,1rem)] bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200/50 dark:border-emerald-800/50 rounded-[clamp(0.5rem,1vw,0.75rem)] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            {/* ICON */}
            <Shield className="w-[clamp(1.25rem,1.5vw,1.25rem)] h-[clamp(1.25rem,1.5vw,1.25rem)] text-emerald-600 dark:text-emerald-400 shrink-0 mt-[clamp(0.125rem,0.2vw,0.125rem)]" strokeWidth={2} />
            
            {/* TRUST REINFORCEMENT TEXT */}
            <p className="text-[clamp(0.875rem,1vw,0.875rem)] text-emerald-800 dark:text-emerald-200 leading-relaxed">
                {trustReinforcement}
            </p>
        </div>
    )
}