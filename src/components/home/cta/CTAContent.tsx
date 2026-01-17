"use client";

import { CTAHeader } from "@/components/home/cta/CTAHeader";
import { CTAButtons } from "@/components/home/cta/CTAButtons";
import { CTATrustBadges } from "@/components/home/cta/CTATrustBadges";
import { BackgroundDecoration } from "@/components/home/cta/BackgroundDecoration";
import { CTAStats } from "@/components/home/cta/CTAStats";

export const CTAContent = () => {
    return (
        <section className="relative py-[clamp(2.5rem,6vw,3rem)] px-4 overflow-hidden">
            <BackgroundDecoration />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(16,185,129,0.12),_transparent_45%)] dark:bg-[radial-gradient(circle_at_bottom,_rgba(16,185,129,0.18),_transparent_45%)]" />

            <div className="relative max-w-7xl mx-auto">
                <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-start">
                    <div className="space-y-12 lg:pr-8">
                        <CTAHeader />
                        <CTAStats />
                        <CTATrustBadges />
                    </div>

                    <div className="space-y-4  my-auto rounded-2xl border border-emerald-900/30 bg-gradient-to-br from:zinc-50 via-zinc-100 to-emerald-50/40 dark:from-zinc-950 dark:via-zinc-900 dark:to-emerald-950/40 p-[clamp(1.25rem,3vw,1.75rem)] shadow-[0_30px_80px_-70px_rgba(16,185,129,0.85)]">
                        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-500 dark:text-emerald-600">Launch now</p>
                        <CTAButtons />
                    </div>
                </div>
            </div>
        </section>
    );
};