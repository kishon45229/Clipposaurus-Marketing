"use client";

import { useHero } from "@/contexts/HeroContext";

export const HeroFooter = () => {
    const { data, handleRedirectToTermsOfService } = useHero();
    const { consentDescription, consentLink } = data;

    return (
        <div className="text-center text-[clamp(0.75rem,0.875vw,1rem)] text-zinc-500 dark:text-zinc-500 max-w-[clamp(20rem,28vw,32rem)] mx-auto">
            {consentDescription}{" "}
            <button
                onClick={handleRedirectToTermsOfService}
                aria-label="Read our Terms of Service"
                className="text-emerald-600 dark:text-emerald-500 hover:text-emerald-500 dark:hover:text-emerald-400 underline underline-offset-4 decoration-emerald-500/30 hover:decoration-emerald-500/60 transition-all duration-200 cursor-target font-medium"
            >
                {consentLink}
            </button>
            {"."}
        </div>
    );
};
