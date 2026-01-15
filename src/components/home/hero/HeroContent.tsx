"use client";

import { HeroHeader } from "@/components/home/hero/HeroHeader";
import { HeroCTAs } from "@/components/home/hero/HeroCTAs";
import { HeroFooter } from "@/components/home/hero/HeroFooter";
import { HeroTrustBadges } from "@/components/home/hero/HeroTrustBadges";
import { BackgroundDecoration } from "@/components/common/BackgroundDecoration";

export const HeroContent = () => {
    return (
        <section className="relative flex flex-col items-center justify-around lg:h-[90dvh] w-full overflow-hidden px-4 py-6">
            { /* BACKGROUND */}
            <BackgroundDecoration />

            { /* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12),_transparent_45%)] dark:bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_45%)]" />

            <div className="relative max-w-6xl mx-auto h-full flex flex-col items-center lg:justify-around gap-6 lg:gap-8">
                { /* HEADING & DESCRIPTION */}
                <HeroHeader />

                { /* TRUST BADGES */}
                <HeroTrustBadges />

                { /* CTA */}
                <HeroCTAs />

                { /* CONSENT DESCRIPTI */}
                <HeroFooter />
            </div>
        </section>
    );
};