"use client";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const AboutSkeleton = (): React.ReactNode => {
    return (
        <div className="space-y-8 px-4 sm:px-6 lg:px-8">
            {/* Header Skeleton */}
            <div className="relative pt-12 pb-16">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <Skeleton className="absolute top-0 right-1/3 w-96 h-96 rounded-full blur-3xl" />
                    <Skeleton className="absolute top-32 left-1/4 w-80 h-80 rounded-full blur-3xl" />
                </div>
                <div className="text-center space-y-8">
                    <Skeleton className="h-16 sm:h-20 lg:h-24 w-full max-w-lg mx-auto" />
                    <div className="relative inline-block">
                        <Skeleton className="absolute inset-0 blur-xl" />
                        <Skeleton className="relative h-8 w-48" />
                    </div>
                </div>
            </div>

            {/* Body Skeleton (Mission) */}
            <div className="relative">
                <Skeleton className="absolute -left-4 top-0 bottom-0 w-1" />
                <div className="pl-8 sm:pl-12 space-y-6">
                    <div className="flex items-center gap-3">
                        <Skeleton className="w-6 h-6" />
                        <Skeleton className="h-10 w-48" />
                    </div>
                    <div className="space-y-4">
                        <Skeleton className="h-6 w-full max-w-4xl" />
                        <Skeleton className="h-6 w-3/4 max-w-4xl" />
                        <Skeleton className="h-6 w-1/2 max-w-4xl" />
                    </div>
                </div>
            </div>

            {/* Footer Skeleton (Call to Action) */}
            <div className="relative overflow-hidden">
                <Skeleton className="absolute inset-0" />
                <div className="relative border-y-2 border-gray-200 dark:border-gray-700 py-12 sm:py-16">
                    <div className="text-center space-y-8">
                        <div className="space-y-4">
                            <Skeleton className="h-12 lg:h-16 w-80 mx-auto" />
                            <Skeleton className="h-6 w-96 mx-auto" />
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                            <Skeleton className="h-16 w-48" />
                            <Skeleton className="h-16 w-48" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};