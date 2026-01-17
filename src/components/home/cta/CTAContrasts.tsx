"use client";

import { useCTA } from "@/contexts/CTAContext";

export const CTAContrasts = () => {
    const { data } = useCTA();
    const { contrasts } = data;

    if (!contrasts?.length) return null;

    return (
        <div className="space-y-3">
            {contrasts.map((contrast, index) => (
                <div
                    key={`${contrast.left}-${index}`}
                    className="rounded-2xl border border-emerald-600/40 bg-gradient-to-br from-emerald-900/70 via-zinc-900 to-zinc-900/90 p-4 text-zinc-100"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="space-y-1">
                            <p className="text-[11px] uppercase tracking-[0.12em] text-zinc-400">Old way</p>
                            <p className="text-sm text-zinc-300 leading-relaxed">
                                {contrast.left}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[11px] uppercase tracking-[0.12em] text-emerald-300">With Clipposaurus</p>
                            <p className="text-base font-semibold text-white leading-relaxed">
                                {contrast.right}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
