"use client";

import { Skeleton } from "@/components/ui/skeleton";

export const HowItWorksSkeleton = () => {
    return (
        <section className="relative flex flex-col items-center justify-center w-full overflow-hidden px-[clamp(1rem,4vw,2rem)] py-[clamp(2rem,8vw,4rem)]">
            {/* BACKGROUND DECORATION PLACEHOLDER */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/20 to-transparent dark:from-emerald-950/20"></div>

            <div className="relative max-w-7xl mx-auto w-full flex flex-col items-center justify-center gap-[clamp(2rem,6vw,3rem)]">
                {/* HEADER SKELETON */}
                <div className="text-center space-y-4">
                    <Skeleton className="h-12 w-1/2 mx-auto" />
                    <Skeleton className="h-6 w-3/4 mx-auto max-w-2xl" />
                </div>

                {/* STEPS SKELETON */}
                <section className="relative w-full flex items-center justify-center">
                    <div className="w-full max-w-7xl mx-auto px-[clamp(1rem,4vw,2rem)]">
                        {/* MOBILE STEPS SKELETON */}
                        <div className="lg:hidden flex flex-col gap-0">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <div key={index} className="relative flex gap-[clamp(1rem,3vw,1.5rem)]">
                                    {/* LEFT SIDE: TIMELINE */}
                                    <div className="relative flex flex-col items-center">
                                        {/* ICON CIRCLE */}
                                        <Skeleton className="w-[clamp(3rem,6vw,4rem)] h-[clamp(3rem,6vw,4rem)] rounded-full" />
                                        {/* CONNECTING LINE */}
                                        {index < 3 && (
                                            <Skeleton className="absolute top-16 left-1/2 -translate-x-1/2 w-1 h-full" />
                                        )}
                                    </div>

                                    {/* RIGHT SIDE: CONTENT */}
                                    <div className="flex-1 pb-[clamp(2rem,6vw,3rem)]">
                                        <div className="pt-2">
                                            {/* STEP NUMBER */}
                                            <Skeleton className="h-[clamp(0.75rem,1.5vw,0.875rem)] w-[clamp(3rem,6vw,4rem)] rounded-full" />

                                            {/* TITLE */}
                                            <Skeleton className="h-[clamp(1.25rem,2.5vw,1.5rem)] w-3/4 mt-[clamp(0.5rem,1.5vw,0.75rem)]" />

                                            {/* DESCRIPTION */}
                                            <Skeleton className="h-[clamp(0.875rem,1.5vw,1rem)] w-full mt-[clamp(0.25rem,0.75vw,0.5rem)]" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* DESKTOP STEPS SKELETON */}
                        <div className="hidden lg:block relative">
                            {/* HORIZONTAL ROAD LINE */}
                            <Skeleton className="absolute top-16 left-0 right-0 h-1" />

                            {/* CONNECTION DOTS */}
                            <div className="absolute top-16 left-0 right-0 flex justify-between">
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <Skeleton key={index} className="w-[clamp(0.5rem,1vw,0.75rem)] h-[clamp(0.5rem,1vw,0.75rem)] rounded-full" />
                                ))}
                            </div>

                            {/* STEPS GRID */}
                            <div className="grid grid-cols-4 gap-[clamp(1rem,3vw,1.5rem)]">
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <div key={index} className="relative flex flex-col items-center">
                                        {/* TOP POSITION (ALTERNATING) */}
                                        {index % 2 === 0 && (
                                            <div className="flex flex-col items-center mb-[clamp(1.5rem,4vw,2rem)]">
                                                {/* CONTENT CARD */}
                                                <div className="relative bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl p-[clamp(1rem,3vw,1.5rem)] shadow-xl">
                                                    {/* STEP NUMBER BADGE */}
                                                    <Skeleton className="h-[clamp(0.75rem,1.5vw,0.875rem)] w-[clamp(3rem,6vw,4rem)] rounded-full mb-[clamp(0.5rem,1.5vw,0.75rem)]" />

                                                    {/* TITLE */}
                                                    <Skeleton className="h-[clamp(1rem,2vw,1.125rem)] w-3/4 mb-[clamp(0.25rem,0.75vw,0.5rem)]" />

                                                    {/* DESCRIPTION */}
                                                    <Skeleton className="h-[clamp(0.875rem,1.5vw,1rem)] w-full" />

                                                    {/* ARROW POINTING DOWN */}
                                                    <div className="absolute -bottom-[clamp(1rem,3vw,1.5rem)] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[clamp(0.5rem,1.5vw,0.75rem)] border-r-[clamp(0.5rem,1.5vw,0.75rem)] border-t-[clamp(0.5rem,1.5vw,0.75rem)] border-transparent border-t-zinc-200 dark:border-t-zinc-800" />
                                                </div>
                                            </div>
                                        )}

                                        {/* ICON CIRCLE (CENTER OF ROADMAP) */}
                                        <Skeleton className="w-[clamp(4rem,8vw,5rem)] h-[clamp(4rem,8vw,5rem)] rounded-full" />

                                        {/* BOTTOM POSITION (ALTERNATING) */}
                                        {index % 2 !== 0 && (
                                            <div className="flex flex-col items-center mt-[clamp(1.5rem,4vw,2rem)]">
                                                {/* CONTENT CARD */}
                                                <div className="relative bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl p-[clamp(1rem,3vw,1.5rem)] shadow-xl">
                                                    {/* ARROW POINTING UP */}
                                                    <div className="absolute -top-[clamp(1rem,3vw,1.5rem)] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[clamp(0.5rem,1.5vw,0.75rem)] border-r-[clamp(0.5rem,1.5vw,0.75rem)] border-b-[clamp(0.5rem,1.5vw,0.75rem)] border-transparent border-b-zinc-200 dark:border-b-zinc-800" />

                                                    {/* STEP NUMBER BADGE */}
                                                    <Skeleton className="h-[clamp(0.75rem,1.5vw,0.875rem)] w-[clamp(3rem,6vw,4rem)] rounded-full mb-[clamp(0.5rem,1.5vw,0.75rem)]" />

                                                    {/* TITLE */}
                                                    <Skeleton className="h-[clamp(1rem,2vw,1.125rem)] w-3/4 mb-[clamp(0.25rem,0.75vw,0.5rem)]" />

                                                    {/* DESCRIPTION */}
                                                    <Skeleton className="h-[clamp(0.875rem,1.5vw,1rem)] w-full" />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA SKELETON */}
                <div className="flex flex-col sm:flex-row items-center gap-[clamp(1rem,3vw,1rem)]">
                    <Skeleton className="h-[clamp(3rem,6vw,3rem)] w-[clamp(8rem,16vw,8rem)] rounded-xl" />
                    <Skeleton className="h-[clamp(3rem,6vw,3rem)] w-[clamp(8rem,16vw,8rem)] rounded-xl" />
                </div>
            </div>
        </section>
    );
};