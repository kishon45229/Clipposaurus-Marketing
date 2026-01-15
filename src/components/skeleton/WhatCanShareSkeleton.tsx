"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { BackgroundDecoration } from "@/components/common/BackgroundDecoration";

export const WhatCanShareSkeleton = () => {
    const stackItems = [1, 2, 3, 4];
    const STACK_CARD_HEIGHT = 320;
    const STACK_OFFSET = 14;
    const stackDepth = Math.max(stackItems.length, 1);
    const stackHeight = STACK_CARD_HEIGHT + STACK_OFFSET * (stackDepth - 1);

    return (
        <section className="relative flex flex-col items-center w-full lg:h-[90dvh] overflow-hidden px-4 sm:px-6">
            <BackgroundDecoration />

            <div className="relative max-w-7xl w-full h-full mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 h-full items-center p-8 sm:p-10 lg:p-14 rounded-3xl dark:border-zinc-800/70 bg-white/90 dark:bg-zinc-950/70 shadow-[0_30px_120px_-80px_rgba(16,185,129,0.5)]">
                    <div className="space-y-8 order-2 lg:order-1">
                        {/* WhatCanShareHeader skeleton */}
                        <div className="text-center lg:text-left space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <Skeleton className="h-[clamp(2rem,5vw,3.5rem)] w-full max-w-2xl" />
                            <Skeleton className="h-[clamp(1rem,2vw,1.25rem)] w-3/4 max-w-xl" />
                        </div>

                        {/* TrustReinforcement skeleton */}
                        <div className="flex items-start gap-3 p-4 bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200/50 dark:border-emerald-800/50 rounded-xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                            <Skeleton className="w-5 h-5 rounded shrink-0 mt-0.5" />
                            <Skeleton className="h-4 w-full" />
                        </div>

                        {/* WhatCanShareCTA skeleton */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                            <Skeleton className="h-12 w-32" />
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        {/* ClipboardStack skeleton */}
                        <div
                            className="grid grid-rows-[1fr_auto] gap-8 relative w-full max-w-xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-right-4 duration-700 delay-200"
                        >
                            {/* Stacked cards with consistent height */}
                            <div
                                className="relative perspective-distance"
                                style={{ height: `${stackHeight}px` }}
                            >
                                {stackItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className="absolute inset-x-0 bottom-0"
                                    >
                                        <Skeleton className="h-80 w-full rounded-2xl" />
                                    </div>
                                ))}
                            </div>

                            {/* Auto-rotation indicators */}
                            <div className="flex items-center justify-center gap-2 mt-0">
                                {stackItems.map((_, index) => (
                                    <Skeleton key={index} className="h-2 w-2 rounded-full" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
