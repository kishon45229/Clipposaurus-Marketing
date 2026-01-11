"use client";

import { CTAHeader } from "@/components/cta/CTAHeader";
import { CTAButtons } from "@/components/cta/CTAButtons";
import { CTATrustBadges } from "@/components/cta/CTATrustBadges";
import { BackgroundDecoration } from "@/components/cta/BackgroundDecoration";

export const CTAContent = () => {
    return (
        <section className="h-fit py-12 px-4 overflow-hiddenrelative">
            <BackgroundDecoration />

            <div className="content-inner">
                <CTAHeader />
                <CTAButtons />
                <CTATrustBadges />
            </div>
        </section>
    );
};