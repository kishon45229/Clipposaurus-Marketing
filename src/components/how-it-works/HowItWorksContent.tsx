"use client";

import { HowItWorksHeader } from "@/components/how-it-works/HowItWorksHeader";
import { HowItWorksSteps } from "@/components/how-it-works/HowItWorksSteps";
import { BackgroundDecoration } from "@/components/how-it-works/BackgroundDecoration";

export const HowItWorksContent = () => {
    return (
        <section className="content-container">
            <BackgroundDecoration />

            <div className="content-inner">
                <HowItWorksHeader />
                <HowItWorksSteps />
            </div>
        </section>
    );
};