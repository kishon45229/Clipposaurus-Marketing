"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCTA } from "@/context/CTAContext";

export const CTAButtons = () => {
    const { data, handleRedirectToCreateDrop, handleRedirectToDocsQuickstart } = useCTA();
    const { primaryAction, secondaryAction } = data;

    return (
        <div className="flex flex-col sm:flex-row gap-2">
            <Button
                onClick={handleRedirectToCreateDrop}
                size="lg"
                className="group h-[clamp(3rem,4vw,3.5rem)] w-full sm:w-1/2 px-[clamp(1.5rem,3vw,1.75rem)] text-[clamp(1rem,2vw,1.125rem)] font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl border border-emerald-500/60 shadow-[0_12px_40px_-18px_rgba(16,185,129,1)] transition-all duration-200 cursor-target"
            >
                <span className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5" />
                    {primaryAction}
                    <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
            </Button>
            <Button
                onClick={handleRedirectToDocsQuickstart}
                size="lg"
                variant="outline"
                className="h-[clamp(3rem,4vw,3.5rem)] w-full sm:w-1/2  px-[clamp(1.5rem,3vw,1.75rem)] text-[clamp(1rem,2vw,1.125rem)] font-semibold border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-100 hover:border-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 bg-white/60 dark:bg-zinc-900/60 cursor-target"
            >
                {secondaryAction}
            </Button>
        </div>
    );
};