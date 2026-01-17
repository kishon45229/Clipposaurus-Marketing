"use client";

import { useHowItWorks } from "@/contexts/HowItWorksContext";
import { HowItWorksSkeleton } from "@/components/skeleton/HowItWorksSkeleton";
import { HowItWorksContent } from "@/components/home/how-it-works/HowItWorksContent";
import { ComponentError } from "@/components/common/ComponentError";

const COMPONENT_ID = "HowItWorksComponent" as const;

/**
 * HowItWorksContainer component
 * @returns HowItWorksContainer component
 */
export const HowItWorksContainer = () => {
  const { data, isLoading, error } = useHowItWorks();

  if (isLoading || !data) return <HowItWorksSkeleton />;
  if (error) return <ComponentError componentId={COMPONENT_ID} />;

  return <HowItWorksContent />;
};