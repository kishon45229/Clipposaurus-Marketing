"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { BackgroundDecoration } from "@/components/cta/BackgroundDecoration";

export const CTASkeleton = () => {
    return (
        <section className="w-full h-[90dvh] flex flex-col justify-around bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-600">
            <BackgroundDecoration />

            {/* CTAHeader Skeleton */}
            <div className="space-y-8 text-center">
                <Skeleton className="h-16 w-3/4 mx-auto" />
                <Skeleton className="h-6 w-1/2 mx-auto" />
            </div>

            {/* CTAButtons Skeleton */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                <Skeleton className="h-16 w-64" />
            </div>

            {/* CTATrustBadges Skeleton */}
            <div className="pt-12 flex flex-wrap items-center justify-center gap-8">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-36" />
            </div>
        </section>
    );
};