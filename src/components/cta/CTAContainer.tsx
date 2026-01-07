"use client";

import { useCTA } from "@/context/CTAContext";
import { CTASkeleton } from "@/components/skeleton/CTASkeleton";
import { CTAContent } from "@/components/cta/CTAContent";
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