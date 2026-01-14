import React from "react";
import LoadingFallback from "@/app/loading";
import { HeroProvider } from "@/context/HeroContext";
import { FeatureProvider } from "@/context/FeatureContext";
import { HowItWorksProvider } from "@/context/HowItWorksContext";
import { SecurityProvider } from "@/context/SecurityContext";
import { CTAProvider } from "@/context/CTAContext";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { Security } from "@/components/security";
import { CTA } from "@/components/cta";

export default async function Home(): Promise<React.ReactElement> {
  return (
    <React.Suspense fallback={<LoadingFallback />}>
      <section className="flex flex-col gap-12">
        {/* Hero Section */}
        <HeroProvider>
          <Hero />
        </HeroProvider>

        {/* Features Section */}
        <FeatureProvider>
          <Features />
        </FeatureProvider>

        {/* How It Works Section */}
        <HowItWorksProvider>
          <HowItWorks />
        </HowItWorksProvider>

        {/* Security Section */}
        <SecurityProvider>
          <Security />
        </SecurityProvider>

        {/* CTA Section */}
        <CTAProvider>
          <CTA />
        </CTAProvider>
      </section>
    </React.Suspense>
  );
}
