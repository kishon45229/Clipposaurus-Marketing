"use client";

import { useComparison } from "@/context/ComparisonContext";
import { ComponentError } from "@/components/common/ComponentError";
import { ComparisonContent } from "@/components/home/comparison/ComparisonContent";
import { ComparisonSkeleton } from "@/components/skeleton/ComparisonSkeleton";

const COMPONENT_ID = "ComparisonComponent" as const;

/**
 * ComparisonContainer component
 * @returns ComparisonContainer component
 */
export const ComparisonContainer = () => {
    const { data, isLoading, error } = useComparison();

    if (isLoading || !data) return <ComparisonSkeleton />;
    if (error) return <ComponentError componentId={COMPONENT_ID} />;

    return <ComparisonContent />;
};
