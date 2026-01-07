"use client";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const SecuritySkeleton = () => {
    return (
        <section className="relative w-full py-24 px-4 bg-zinc-900 dark:bg-black overflow-hidden">
            <div className="text-center mb-16 space-y-4">
                <Skeleton className="h-10 w-64 mx-auto" />
                <Skeleton className="h-16 w-96 mx-auto" />
                <Skeleton className="h-6 w-80 mx-auto" />
            </div>

            {/* Security features Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="p-8 rounded-2xl border-2 bg-zinc-900/50">
                        <div className="flex items-start gap-6">
                            <Skeleton className="w-16 h-16 rounded-xl flex-shrink-0" />
                            <div className="flex-1 space-y-3">
                                <Skeleton className="h-4 w-20" />
                                <Skeleton className="h-6 w-48" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-3/4" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Trust indicators Skeleton */}
            <div className="flex flex-wrap items-center justify-center gap-12">
                {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="text-center space-y-2">
                        <Skeleton className="h-10 w-20 mx-auto" />
                        <Skeleton className="h-4 w-24 mx-auto" />
                    </div>
                ))}
            </div>
        </section>
    );
};