"use client";

import { useSecurity } from "@/context/SecurityContext";

export const SecurityTrustIndicators = () => {
    const { data } = useSecurity();

    return (
        <div className="pt-12 border-t border-zinc-800 flex flex-wrap items-center justify-center gap-12">
            {data.trustIndicators.map((indicator, index) => (
                <div key={index} className="text-center">
                    <div className="text-4xl font-black text-white mb-2">{indicator.value}</div>
                    <div className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                        {indicator.label}
                    </div>
                </div>
            ))}
        </div>
    );
};