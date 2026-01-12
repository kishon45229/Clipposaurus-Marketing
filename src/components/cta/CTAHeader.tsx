"use client";

import { useCTA } from "@/context/CTAContext";

export const CTAHeader = () => {
    const { data } = useCTA();
    const { title, titleHighlight, description } = data;

    return (
        <div className="space-y-8 text-center">
            <div className="text-4xl lg:text-5xl font-black text-zinc-900 dark:text-zinc-50">
                {title}{" "}
                <span className="text-emerald-400 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    {titleHighlight}
                </span>
            </div>
            <div className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                {description}
            </div>
        </div>
    );
};