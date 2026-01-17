"use client";

import { useCTA } from "@/contexts/CTAContext";
import { CTASkeleton } from "@/components/skeleton/CTASkeleton";
import { CTAContent } from "@/components/home/cta/CTAContent";
import { ComponentError } from "@/components/common/ComponentError";

const COMPONENT_ID = "CTAComponent" as const;

/**
 * CTAContainer component
 * @returns CTAContainer component
 */
export const CTAContainer = () => {
  const { data, isLoading, error } = useCTA();

  if (isLoading || !data) return <CTASkeleton />;
  if (error) return <ComponentError componentId={COMPONENT_ID} />;

  return <CTAContent />;
};