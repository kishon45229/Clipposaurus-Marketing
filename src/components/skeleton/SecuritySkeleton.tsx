"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { BackgroundDecoration } from "@/components/security/BackgroundDecoration";

export const SecuritySkeleton = () => {
    return (
        <section className="w-full h-[90dvh] relative">
            <BackgroundDecoration />

            {/* SecurityHeader Skeleton */}
            <div className="text-center space-y-4">
                <Skeleton className="h-10 w-64 mx-auto" />
                <Skeleton className="h-6 w-80 mx-auto" />
            </div>

            {/* SecurityFeatures Skeleton */}
            <section className="relative">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Matrix grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 divide-y divide-x-0 md:divide-x md:divide-y-0 divide-zinc-800">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div
                                key={index}
                                className="group relative px-8 py-10"
                            >
                                {/* Header row */}
                                <div className="flex items-center justify-between mb-6">
                                    {/* Icon */}
                                    <Skeleton className="w-12 h-12 rounded-lg bg-zinc-900/60 border border-zinc-800" />

                                    {/* Stat */}
                                    <Skeleton className="h-4 w-20" />
                                </div>

                                {/* Title */}
                                <Skeleton className="h-6 w-48 mb-3" />

                                {/* Description */}
                                <Skeleton className="h-4 w-full mb-2" />
                                <Skeleton className="h-4 w-3/4" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* background grid hint */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
            </section>

            {/* SecurityTrustIndicators Skeleton */}
            <div className="pt-6 border-t border-zinc-800 flex flex-wrap items-center justify-center gap-12">
                {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="text-center">
                        <Skeleton className="h-10 w-20 mx-auto mb-2" />
                        <Skeleton className="h-4 w-24 mx-auto" />
                    </div>
                ))}
            </div>
        </section>
    );
};