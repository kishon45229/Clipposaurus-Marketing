"use client";

import { useWhatCanShare } from "@/contexts/WhatCanShareContext";
import { Button } from "@/components/ui/button";

export const WhatCanShareCTA = () => {
    const { data, handleRedirectToCreateDrop } = useWhatCanShare();
    const { ctaLabel } = data;

    return (
        <div className="flex flex-col sm:flex-row items-center gap-[clamp(1rem,1.5vw,1rem)] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            {/*CTA */}
            <Button
                onClick={handleRedirectToCreateDrop}
                disabled={false}
                size="lg"
                className="h-[clamp(3rem,3.5vw,3rem)] px-[clamp(2rem,2.5vw,2rem)] text-[clamp(1rem,1.25vw,1rem)] font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-[clamp(0.75rem,1vw,0.75rem)] transition-colors duration-200 cursor-target"
            >
                {ctaLabel}
            </Button>
        </div>
    );
};