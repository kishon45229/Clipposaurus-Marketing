"use client";

import React from "react";

export const AboutSkeleton = (): React.ReactNode => {
    return (
        <div className="space-y-8 px-4 sm:px-6 lg:px-8">
            {/* Header Skeleton */}
            <div className="relative pt-12 pb-16">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute top-0 right-1/3 w-96 h-96 bg-gray-200 dark:bg-gray-700 rounded-full blur-3xl" />
                    <div className="absolute top-32 left-1/4 w-80 h-80 bg-gray-200 dark:bg-gray-700 rounded-full blur-3xl" />
                </div>
                <div className="text-center space-y-8">
                    <div className="h-16 sm:h-20 lg:h-24 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
                    <div className="relative inline-block">
                        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 blur-xl" />
                        <div className="relative h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                    </div>
                </div>
            </div>

            {/* Body Skeleton (Mission) */}
            <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700" />
                <div className="pl-8 sm:pl-12 space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                        <div className="h-10 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                    </div>
                    <div className="space-y-4">
                        <div className="h-6 w-full max-w-4xl bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                        <div className="h-6 w-3/4 max-w-4xl bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                        <div className="h-6 w-1/2 max-w-4xl bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                    </div>
                </div>
            </div>

            {/* Footer Skeleton (Call to Action) */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700" />
                <div className="relative border-y-2 border-gray-200 dark:border-gray-700 py-12 sm:py-16">
                    <div className="text-center space-y-8">
                        <div className="space-y-4">
                            <div className="h-12 lg:h-16 w-80 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                            <div className="h-6 w-96 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                            <div className="h-16 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                            <div className="h-16 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};