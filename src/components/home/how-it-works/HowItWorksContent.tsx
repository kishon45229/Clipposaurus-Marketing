"use client";

import { HowItWorksHeader } from "@/components/home/how-it-works/HowItWorksHeader";
import { HowItWorksSteps } from "@/components/home/how-it-works/HowItWorksSteps";
import { HowItWorksCTA } from "@/components/home/how-it-works/HowItWorksCTA";
import { BackgroundDecoration } from "@/components/common/BackgroundDecoration";

export const HowItWorksContent = () => {
    return (
        <section className="relative flex flex-col items-center justify-center w-full overflow-hidden px-[clamp(1rem,4vw,2rem)] py-[clamp(2rem,8vw,4rem)]">
            <BackgroundDecoration />

            <div className="relative max-w-7xl mx-auto w-full flex flex-col items-center justify-center gap-[clamp(2rem,6vw,3rem)]">
                <HowItWorksHeader />
                <HowItWorksSteps />
                <HowItWorksCTA />
            </div>
        </section>
    );
};