"use client";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const PrivacySkeleton = () => {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden px-4 py-16 lg:py-24">
            <div className="relative max-w-7xl mx-auto w-full flex flex-col items-center gap-8 lg:gap-12">
                {/* PrivacyHeader Skeleton */}
                <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <Skeleton className="h-12 lg:h-14 w-3/4 max-w-4xl mx-auto" />
                    <Skeleton className="h-6 w-1/2 max-w-2xl mx-auto" />
                </div>

                {/* PrivacyInStages Skeleton */}
                <section className="relative max-w-7xl mx-auto w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <div
                                key={index}
                                className="relative group"
                            >
                                <div className="flex flex-col h-full p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
                                    {/* Step number */}
                                    <div className="shrink-0 w-10 h-10 rounded-full border-2 border-emerald-500 bg-emerald-500/10 flex items-center justify-center mb-4">
                                        <Skeleton className="w-6 h-6 rounded-full" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <Skeleton className="h-5 w-3/4 mb-2" />
                                        <Skeleton className="h-4 w-full mb-1" />
                                        <Skeleton className="h-4 w-5/6 mb-3" />
                                        <Skeleton className="h-3 w-1/2" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* PrivacyCTA Skeleton */}
                <div className="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                    <Skeleton className="h-12 w-32" />
                    <Skeleton className="h-12 w-40" />
                </div>
            </div>
        </section>
    );
};
