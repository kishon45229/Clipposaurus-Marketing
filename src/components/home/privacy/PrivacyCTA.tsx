"use client";

import { usePrivacy } from "@/contexts/PrivacyContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ShineEffect } from "@/components/common/ShineEffect";

export const PrivacyCTA = () => {
    const { data, handleRedirectToDocsEncryptionAndDecryption, handleRedirectToDocsZeroKnowledgePolicy } = usePrivacy();
    const { cta } = data;
    const { primary, secondary } = cta;

    return (
        <div className="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            {/* PRIMARY CTA */}
            <Button
                onClick={handleRedirectToDocsEncryptionAndDecryption}
                disabled={false}
                size="lg"
                className="home-primary-button cursor-target"
            >
                <span className="group flex items-center gap-[clamp(0.75rem,2vw,0.75rem)]">
                    <span>{primary}</span>
                    <ArrowRight className="w-[clamp(1.5rem,3vw,1.5rem)] h-[clamp(1.5rem,3vw,1.5rem)] transition-transform duration-200 group-hover:translate-x-1" />
                </span>

                {/* SHINE EFFECT */}
                <ShineEffect />
            </Button>

            {/* SECONDARY CTA */}
            <Button
                onClick={handleRedirectToDocsZeroKnowledgePolicy}
                variant="outline"
                size="lg"
                className="home-secondary-button cursor-target"
            >
                {secondary}
            </Button>
        </div>
    );
};