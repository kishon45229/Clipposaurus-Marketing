import React from "react";
import LoadingFallback from "@/app/loading";
import { HeroProvider } from "@/context/HeroContext";
import { HowItWorksProvider } from "@/context/HowItWorksContext";
import { CTAProvider } from "@/context/CTAContext";
import { WhatCanShare } from "@/components/home/what-can-share";
import { WhatCanShareProvider } from "@/context/WhatCanShareContext";
import { ComparisonProvider } from "@/context/ComparisonContext";
import { Comparison } from "@/components/comparison";

import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { CTA } from "@/components/cta";
import { PrivacyProvider } from "@/context/PrivacyContext";
import { Privacy } from "@/components/privacy";

export default async function Home(): Promise<React.ReactElement> {
  return (
    <React.Suspense fallback={<LoadingFallback />}>
      <section className="flex flex-col gap-2 sm:gap-4 md:gap-6">
        {/* HERO SECTION */}
        <HeroProvider>
          <Hero />
        </HeroProvider>

        {/* HOW IT WORKS SECTION */}
        <HowItWorksProvider>
          <HowItWorks />
        </HowItWorksProvider>

        {/* WHAT CAN SHARE SECTION */}
        <WhatCanShareProvider>
          <WhatCanShare />
        </WhatCanShareProvider>

        <PrivacyProvider>
          <Privacy />
        </PrivacyProvider>

        <ComparisonProvider>
          <Comparison />
        </ComparisonProvider>

        {/* CTA Section */}
        <CTAProvider>
          <CTA />
        </CTAProvider>
      </section>
    </React.Suspense>
  );
}
