"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { BackgroundDecoration } from "@/components/home/cta/BackgroundDecoration";

export const CTASkeleton = () => {
    return (
        <section className="relative py-[clamp(2.5rem,6vw,3rem)] px-4 overflow-hidden">
            <BackgroundDecoration />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(16,185,129,0.12),_transparent_45%)] dark:bg-[radial-gradient(circle_at_bottom,_rgba(16,185,129,0.18),_transparent_45%)]" />

            <div className="relative max-w-7xl mx-auto">
                <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-start">
                    <div className="space-y-12 lg:pr-8">
                        {/* CTAHeader Skeleton */}
                        <div className="space-y-3 text-left">
                            <Skeleton className="h-6 w-32" />
                            <Skeleton className="h-12 w-full" />
                            <Skeleton className="h-6 w-3/4" />
                        </div>
                        {/* CTAStats Skeleton */}
                        <div className="grid grid-cols-3 gap-[clamp(0.75rem,1.5vw,1rem)]">
                            <Skeleton className="h-16 w-full" />
                            <Skeleton className="h-16 w-full" />
                            <Skeleton className="h-16 w-full" />
                        </div>
                        {/* CTATrustBadges Skeleton */}
                        <div className="flex flex-wrap items-center gap-2">
                            <Skeleton className="h-8 w-32" />
                            <Skeleton className="h-8 w-24" />
                            <Skeleton className="h-8 w-36" />
                        </div>
                    </div>

                    <div className="space-y-4 my-auto rounded-2xl border border-emerald-900/30 bg-gradient-to-br from:zinc-50 via-zinc-100 to-emerald-50/40 dark:from-zinc-950 dark:via-zinc-900 dark:to-emerald-950/40 p-[clamp(1.25rem,3vw,1.75rem)] shadow-[0_30px_80px_-70px_rgba(16,185,129,0.85)]">
                        <Skeleton className="h-4 w-24" />
                        {/* CTAButtons Skeleton */}
                        <div className="flex flex-col sm:flex-row gap-2">
                            <Skeleton className="h-12 w-full sm:w-1/2" />
                            <Skeleton className="h-12 w-full sm:w-1/2" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};