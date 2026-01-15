"use client";

import { useHowItWorks } from "@/context/HowItWorksContext";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ShineEffect } from "@/components/common/ShineEffect";

export const HowItWorksCTA = () => {
    const { data, handleRedirectToCreateDrop, handleRedirectToDocsHowItWorks } = useHowItWorks();
    const { cta } = data;
    const { primary, secondary } = cta;

    return (
        <div className="flex flex-col sm:flex-row items-center gap-[clamp(1rem,3vw,1rem)] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            { /* PRIMARY CTA BUTTON */}
            <Button
                onClick={handleRedirectToCreateDrop}
                disabled={false}
                size="lg"
                className="home-primary-button cursor-target"
            >
                <span className="flex items-center gap-[clamp(0.75rem,2vw,0.75rem)]">
                    <Plus className="w-[clamp(1.5rem,3vw,1.5rem)] h-[clamp(1.5rem,3vw,1.5rem)] group-hover:rotate-90 transition-transform duration-300" />
                    <span>{primary}</span>
                </span>

                {/* SHINE EFFECT */}
                <ShineEffect />
            </Button>

            { /* SECONDARY CTA BUTTON */}
            <Button
                onClick={handleRedirectToDocsHowItWorks}
                variant="outline"
                size="lg"
                className="home-secondary-button cursor-target"
            >
                {secondary}
            </Button>
        </div>
    );
};