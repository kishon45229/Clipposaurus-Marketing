"use client";

import { useSecurity } from "@/context/SecurityContext";

export const SecurityHeader = () => {
    const { data } = useSecurity();

    return (
        <div className="text-center space-y-[clamp(0.75rem,3vw,1.5rem)] px-[clamp(1rem,4vw,2rem)]">
            <div className="text-[clamp(1.75rem,5vw,3rem)] font-black text-zinc-900 dark:text-zinc-50 leading-tight">
                {data.title}
                <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                    {" "}{data.titleHighlight}
                </span>
            </div>
            <div className="text-[clamp(0.875rem,2.5vw,1.125rem)] text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto px-[clamp(0.5rem,2vw,1rem)]">
                {data.description}
            </div>
        </div>
    );
};