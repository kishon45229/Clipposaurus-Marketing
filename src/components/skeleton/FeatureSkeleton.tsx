"use client";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const FeatureSkeleton = () => {
    return (
        <section className="w-full py-24 px-4 bg-white dark:bg-zinc-950">
            <div className="max-w-7xl mx-auto">
                {/* Header Skeleton */}
                <div className="text-center mb-16 space-y-4">
                    <Skeleton className="h-12 w-3/4 max-w-2xl mx-auto" />
                    <Skeleton className="h-6 w-1/2 max-w-xl mx-auto" />
                </div>

                {/* Features Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="p-8 rounded-2xl border-2 bg-gradient-to-br from-white to-zinc-50/50 dark:from-zinc-900 dark:to-zinc-900/50">
                            <Skeleton className="h-14 w-14 rounded-xl mb-6" />
                            <Skeleton className="h-6 w-3/4 mb-3" />
                            <Skeleton className="h-4 w-full mb-2" />
                            <Skeleton className="h-4 w-5/6" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};