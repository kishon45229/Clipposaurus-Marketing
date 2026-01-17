"use client";

import { usePrivacy } from "@/contexts/PrivacyContext";

export const PrivacyHeader = () => {
    const { data } = usePrivacy();
    const { title, titleHighlight, description } = data;

    return (
        <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            { /* TITLE */}
            <div className="text-[clamp(1.75rem,5vw,3rem)] font-black text-zinc-900 dark:text-zinc-50 leading-tight">
                {title}
                <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 dark:from-emerald-500 dark:to-emerald-600 bg-clip-text text-transparent">
                    {" "}{titleHighlight}
                </span>
            </div>

            { /* DESCRIPTION */}
            <div className="text-[clamp(0.875rem,2.5vw,1.125rem)] text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto px-[clamp(0.5rem,2vw,1rem)]">
                {description}
            </div>
        </div>
    );
};
