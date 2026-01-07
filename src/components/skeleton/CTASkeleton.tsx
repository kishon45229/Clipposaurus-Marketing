"use client";

import { Skeleton } from "@/components/ui/skeleton";

export const CTASkeleton = () => {
    return (
        <section className="relative w-full py-32 px-4 overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-600">
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                {/* CTAHeader Skeleton */}
                <div className="space-y-8">
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
            </div>
        </section>
    );
};