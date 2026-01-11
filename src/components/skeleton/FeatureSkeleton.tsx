"use client";

import { Skeleton } from "@/components/ui/skeleton";

export const FeatureSkeleton = () => {
    return (
        <section className="w-full h-[90dvh]">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />

            {/* Header Skeleton */}
            <div className="text-center mb-16 space-y-4">
                <Skeleton className="h-12 w-3/4 max-w-2xl mx-auto" />
                <Skeleton className="h-6 w-1/2 max-w-xl mx-auto" />
            </div>

            {/* FeatureGrid Skeleton */}
            <div className="w-full max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="relative group py-5 md:py-8 border-l border-zinc-200/60 dark:border-zinc-800/60">
                            <div className="relative pl-10">
                                <span className="absolute left-[-9px] top-12 w-4 h-4 rounded-full bg-emerald-500/80 shadow-[0_0_0_6px_rgba(16,185,129,0.15)] transition-all group-hover:scale-110" />

                                <div className="mb-6">
                                    <Skeleton className="w-8 h-8 rounded" />
                                </div>

                                <Skeleton className="h-8 w-3/4 mb-3" />
                                <Skeleton className="h-4 w-full mb-2" />
                                <Skeleton className="h-4 w-5/6" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};