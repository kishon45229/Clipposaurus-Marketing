"use client";

import { useHero } from "@/context/HeroContext";
import { Plus, KeyRound, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShineEffect } from "@/components/common/ShineEffect";

export const HeroCTAs = () => {
    const { data, isCreateDropChecking, isOpenDropChecking, handleRedirectToCreateDrop, handleRedirectToUnlockDrop } = useHero();

    const { cta } = data;
    const { primary, secondary, divider } = cta;

    return (
        <div className="flex flex-col items-center gap-4 lg:gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            {/* PRIMARY CTA */}
            <Button
                onClick={handleRedirectToCreateDrop}
                disabled={isCreateDropChecking}
                size="lg"
                className="group relative h-[clamp(3rem,4vw,5rem)] px-[clamp(2rem,3vw,3rem)] text-[clamp(1rem,1.5vw,1.5rem)] font-bold text-white bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:via-emerald-400 hover:to-emerald-500 rounded-2xl shadow-[0_8px_30px_rgb(16,185,129,0.3)] hover:shadow-[0_12px_40px_rgb(16,185,129,0.4)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed border border-emerald-400/20 cursor-target"
            >
                {isCreateDropChecking ? (
                    <span className="flex items-center gap-3">
                        <Loader2 className="w-6 h-6 animate-spin" />
                        <span>Loading</span>
                    </span>
                ) : (
                    <>
                        <span className="flex items-center gap-3">
                            <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                            <span>{primary}</span>
                        </span>

                        {/* SHINE EFFECT */}
                        <ShineEffect />
                    </>
                )}

            </Button>

            {/* DIVIDER */}
            <div className="flex items-center gap-4 w-full max-w-xs">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent" />
                <span className="text-sm font-medium text-zinc-400 dark:text-zinc-600 uppercase tracking-wider">
                    {divider}
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent" />
            </div>

            {/* SECONDARY CTA */}
            <Button
                onClick={handleRedirectToUnlockDrop}
                variant="outline"
                size="lg"
                disabled={isOpenDropChecking}
                className="group h-[clamp(3rem,4vw,5rem)] px-[clamp(2rem,3vw,3rem)] text-[clamp(1rem,1.5vw,1.5rem)] font-semibold text-zinc-700 dark:text-zinc-300 border-2 border-zinc-300 dark:border-zinc-700 bg-white/50 dark:bg-zinc-900/50 hover:bg-white dark:hover:bg-zinc-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 rounded-2xl backdrop-blur-sm hover:shadow-lg transition-all duration-300 cursor-target"
            >
                {isOpenDropChecking ? (
                    <span className="flex items-center gap-3">
                        <Loader2 className="w-6 h-6 animate-spin" />
                        <span>Loading</span>
                    </span>
                ) : (
                    <span className="flex items-center gap-3">
                        <KeyRound className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                        <span>{secondary}</span>
                    </span>
                )}
            </Button>
        </div>
    );
};
