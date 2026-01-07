"use client";

import { useFeature } from "@/context/FeatureContext";
import { FeatureSkeleton } from "@/components/skeleton/FeatureSkeleton";
import { FeatureContent } from "@/components/features/FeatureContent";
import { ComponentError } from "@/components/common/ComponentError";

const COMPONENT_ID = "FeaturesComponent" as const;

/**
 * FeatureContainer component
 * @returns FeatureContainer component
 */
export const FeatureContainer = () => {
    const { data, isLoading, error } = useFeature();

    if (isLoading || !data) return <FeatureSkeleton />;
    if (error) return <ComponentError componentId={COMPONENT_ID} />;

    return <FeatureContent />;
};