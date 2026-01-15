"use client";

import { useSecurity } from "@/context/SecurityContext";

export const SecurityTrustIndicators = () => {
    const { data } = useSecurity();

    return (
        <div className="pt-[clamp(1.5rem,4vw,3rem)] border-t border-zinc-300 dark:border-zinc-800 flex flex-wrap items-center justify-center gap-[clamp(2rem,6vw,3rem)] px-[clamp(1rem,4vw,2rem)]">
            {data.trustIndicators.map((indicator, index) => (
                <div key={index} className="text-center">
                    <div className="text-[clamp(2rem,6vw,2.5rem)] font-black text-zinc-900 dark:text-white mb-[clamp(0.25rem,1vw,0.5rem)]">{indicator.value}</div>
                    <div className="text-[clamp(0.75rem,2vw,0.875rem)] font-semibold uppercase tracking-wider text-zinc-500">
                        {indicator.label}
                    </div>
                </div>
            ))}
        </div>
    );
};