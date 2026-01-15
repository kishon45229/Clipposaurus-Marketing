"use client";

import { useComparison } from "@/context/ComparisonContext";
import { ComponentError } from "@/components/common/ComponentError";
import { ComparisonContent } from "@/components/comparison/ComparisonContent";

const COMPONENT_ID = "ComparisonComponent" as const;

/**
 * ComparisonContainer component
 * @returns ComparisonContainer component
 */
export const ComparisonContainer = () => {
    const { data, isLoading, error } = useComparison();

    if (isLoading || !data) {
        return (
            <div className="py-24 bg-zinc-950 flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-emerald-500"></div>
            </div>
        );
    }

    if (error) return <ComponentError componentId={COMPONENT_ID} />;

    return <ComparisonContent />;
};
