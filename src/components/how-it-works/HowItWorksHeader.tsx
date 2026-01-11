"use client";

import { useHowItWorks } from "@/context/HowItWorksContext";

export const HowItWorksHeader = () => {
    const { data } = useHowItWorks();
    const { title, titleHighlight, description } = data;

    return (
        <div className="text-center mb-20 space-y-4">
            <div className="text-4xl lg:text-5xl font-black text-zinc-900 dark:text-zinc-50">
                {title}
                <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 dark:from-emerald-500 dark:to-emerald-600 bg-clip-text text-transparent">
                    {" "}{titleHighlight}
                </span>
            </div>
            <div className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                {description}
            </div>
        </div>
    );
};