"use client";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const HowItWorksSkeleton = () => {
    return (
        <section className="relative w-full py-24 px-4 overflow-hidden bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950">
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header Skeleton */}
                <div className="text-center mb-20 space-y-4">
                    <Skeleton className="h-12 w-1/2 mx-auto" />
                    <Skeleton className="h-6 w-3/4 mx-auto max-w-2xl" />
                </div>

                {/* Steps Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <Skeleton className="w-20 h-20 rounded-2xl mb-6" />
                            <Skeleton className="h-6 w-3/4 mb-3" />
                            <Skeleton className="h-16 w-full" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};