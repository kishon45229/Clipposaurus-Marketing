"use client";

import { useCTA } from "@/context/CTAContext";

export const CTAHeader = () => {
    const { data } = useCTA();
    const { title, titleHighlight, description } = data;

    return (
        <div className="space-y-8 text-center">
            <div className="text-5xl lg:text-6xl font-black text-white leading-tight">
                {title}{" "}
                <span className="text-emerald-400 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    {titleHighlight}
                </span>
            </div>

            <div className="text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                {description}
            </div>
        </div>
    );
};