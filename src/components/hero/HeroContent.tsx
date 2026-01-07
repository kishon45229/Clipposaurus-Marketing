"use client";

import { HeroHeader } from "@/components/hero/HeroHeader";
import { HeroCTAs } from "@/components/hero/HeroCTAs";
import { HeroFooter } from "@/components/hero/HeroFooter";
import { BackgroundDecoration } from "@/components/hero/BackgroundDecoration";

export const HeroContent = () => {
    return (
        <section className="content-container">
            <BackgroundDecoration />

            <div className="content-inner">
                <HeroHeader />
                <HeroCTAs />
                <HeroFooter />
            </div>
        </section>
    );
};