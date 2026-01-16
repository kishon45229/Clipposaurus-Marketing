"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { BackgroundDecoration } from "@/components/common/BackgroundDecoration";

export const ComparisonSkeleton = () => {
    return (
        <section className="relative overflow-hidden">
            <BackgroundDecoration />

            <div className="relative max-w-7xl mx-auto p-2 sm:p-4 lg:p-6 z-10 rounded-3xl bg-white/90 dark:bg-zinc-950/70 shadow-[0_30px_120px_-80px_rgba(16,185,129,0.5)]">
                {/* ComparisonHeader Skeleton */}
                <div className="space-y-4">
                    <div className="space-y-3">
                        <Skeleton className="h-12 lg:h-14 w-3/4 max-w-4xl" />
                        <Skeleton className="h-5 w-1/2 max-w-2xl" />
                    </div>
                    <div className="hidden lg:flex items-center justify-center">
                        <Skeleton className="h-8 w-32 rounded-full" />
                    </div>
                </div>

                {/* ComparisonTable Skeleton */}
                <div className="relative mt-4">
                    <div className="hidden lg:block pointer-events-none absolute inset-y-6 left-1/2 w-px bg-gradient-to-b from-zinc-200 via-emerald-300/30 to-zinc-200 dark:from-zinc-800 dark:via-emerald-700/30 dark:to-zinc-800" />
                    <div className="grid gap-6 lg:grid-cols-2">
                        {/* Traditional Lane Skeleton */}
                        <div className="group relative h-full rounded-3xl border p-2 sm:p-4 lg:p-6 border-zinc-200 bg-white/90 shadow-[0_20px_80px_-50px_rgba(24,24,27,0.5)] dark:border-zinc-800 dark:bg-zinc-900/60">
                            <div className="flex items-start justify-between gap-4">
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-20" />
                                    <Skeleton className="h-8 w-32" />
                                </div>
                                <Skeleton className="h-8 w-24 rounded-full" />
                            </div>
                            <div className="mt-6 space-y-4">
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <div key={index} className="flex gap-4">
                                        <Skeleton className="h-10 w-10 rounded-xl" />
                                        <div className="space-y-1 flex-1">
                                            <Skeleton className="h-5 w-3/4" />
                                            <Skeleton className="h-4 w-full" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Clipposaurus Lane Skeleton */}
                        <div className="group relative h-full rounded-3xl border p-2 sm:p-4 lg:p-6 border-emerald-200/70 bg-emerald-50/80 shadow-[0_20px_80px_-40px_rgba(16,185,129,0.3)] dark:border-emerald-700/60 dark:bg-emerald-950/30">
                            <div className="flex items-start justify-between gap-4">
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-20" />
                                    <Skeleton className="h-8 w-32" />
                                </div>
                                <Skeleton className="h-8 w-24 rounded-full" />
                            </div>
                            <div className="mt-6 space-y-4">
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <div key={index} className="flex gap-4">
                                        <Skeleton className="h-10 w-10 rounded-xl" />
                                        <div className="space-y-1 flex-1">
                                            <Skeleton className="h-5 w-3/4" />
                                            <Skeleton className="h-4 w-full" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ComparisonCTA Skeleton */}
                <div className="mt-6 flex flex-col items-center gap-2">
                    <Skeleton className="h-12 w-48 rounded-xl" />
                    <Skeleton className="h-4 w-32" />
                </div>
            </div>
        </section>
    );
};