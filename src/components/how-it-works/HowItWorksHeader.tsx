"use client";

import { useHowItWorks } from "@/context/HowItWorksContext";

export const HowItWorksHeader = () => {
    const { data } = useHowItWorks();

    return (
        <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-black text-zinc-900 dark:text-zinc-50">
                {data.title}
                <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 dark:from-emerald-500 dark:to-emerald-600 bg-clip-text text-transparent">
                    {" "}{data.titleHighlight}
                </span>
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                {data.description}
            </p>
        </div>
    );
};