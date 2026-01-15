"use client";

import { Skeleton } from "@/components/ui/skeleton";

export const HeroSkeleton = () => {
    return (
        <section className="relative flex flex-col items-center justify-around lg:h-[90dvh] w-full overflow-hidden px-4 py-6">
            <div className="relative max-w-6xl mx-auto h-full flex flex-col items-center lg:justify-around gap-6 lg:gap-8">
                {/* HeroHeader Skeleton */}
                <div className="text-center space-y-6">
                    <Skeleton className="h-24 sm:h-20 w-3/4 max-w-3xl mx-auto" />
                    <Skeleton className="h-16 w-1/2 max-w-2xl mx-auto" />
                    <Skeleton className="h-12 w-full max-w-2xl mx-auto" />
                </div>

                {/* HeroTrustBadges Skeleton */}
                <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
                    <Skeleton className="h-16 w-48 rounded-2xl" />
                    <Skeleton className="h-16 w-48 rounded-2xl" />
                    <Skeleton className="h-16 w-48 rounded-2xl" />
                </div>

                {/* HeroCTAs Skeleton */}
                <div className="flex flex-col items-center gap-8">
                    <Skeleton className="h-16 w-full sm:w-auto min-w-[220px] rounded-2xl" />

                    <div className="flex items-center gap-4 w-full max-w-xs">
                        <Skeleton className="flex-1 h-px" />
                        <Skeleton className="h-4 w-8" />
                        <Skeleton className="flex-1 h-px" />
                    </div>

                    <Skeleton className="h-16 w-full sm:w-auto min-w-[220px] rounded-2xl" />
                </div>

                {/* HeroFooter Skeleton */}
                <div className="text-center text-sm max-w-md mx-auto">
                    <Skeleton className="h-4 w-full" />
                </div>
            </div>
        </section>
    );
};