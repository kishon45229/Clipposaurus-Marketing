"use client";

import { useCTA } from "@/context/CTAContext";

export const CTAStats = () => {
    const { data } = useCTA();
    const { stats } = data;

    if (!stats?.length) return null;

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {stats.map((stat, index) => (
                <div
                    key={`${stat.label}-${index}`}
                    className="rounded-2xl border border-emerald-100 dark:border-emerald-900/50 bg-white/70 dark:bg-zinc-900/60 px-4 py-3 shadow-[0_10px_30px_-24px_rgba(16,185,129,1)]"
                >
                    <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                        {stat.value}
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-[0.08em] text-zinc-500 dark:text-zinc-400">
                        {stat.label}
                    </div>
                </div>
            ))}
        </div>
    );
};
