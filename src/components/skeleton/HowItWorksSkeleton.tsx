"use client";

import { Skeleton } from "@/components/ui/skeleton";

export const HowItWorksSkeleton = () => {
    return (
        <section className="w-full h-[90dvh]">
            {/* Header Skeleton */}
            <div className="text-center mb-20 space-y-4">
                <Skeleton className="h-12 w-1/2 mx-auto text-4xl lg:text-5xl font-black" />
                <Skeleton className="h-6 w-3/4 mx-auto max-w-2xl text-lg" />
            </div>

            {/* Steps Skeleton */}
            <section className="relative h-[90dvh] flex items-center">
                <div className="w-full max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-x-12">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div
                                key={index}
                                className="relative flex flex-col min-h-[70dvh] group"
                            >
                                {/* Column divider */}
                                <span className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-300/60 to-transparent dark:via-zinc-700/60" />

                                {/* Step header stack */}
                                <div className="pt-6">
                                    {/* Step number */}
                                    <Skeleton className="h-20 w-16 block text-7xl font-black leading-none" />

                                    {/* Icon */}
                                    <div className="mt-2 mb-4">
                                        <Skeleton className="w-14 h-14 rounded-full" />
                                    </div>

                                    {/* Title */}
                                    <Skeleton className="h-6 w-3/4 text-xl font-semibold" />
                                </div>

                                {/* Description */}
                                <Skeleton className="mt-3 h-16 w-full leading-relaxed" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* subtle depth */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
            </section>
        </section>
    );
};