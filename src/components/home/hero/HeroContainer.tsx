"use client";

import { useHero } from "@/context/HeroContext";
import { HeroSkeleton } from "@/components/skeleton/HeroSkeleton";
import { HeroContent } from "@/components/home/hero/HeroContent";
import { ComponentError } from "@/components/common/ComponentError";

const COMPONENT_ID = "HeroComponent" as const;

/**
 * HeroContainer component
 * @returns HeroContainer component
 */
export const HeroContainer = () => {
  const { data, isLoading, error } = useHero();

  if (isLoading || !data) return <HeroSkeleton />;
  if (error) return <ComponentError componentId={COMPONENT_ID} />;

  return <HeroContent />;
};
