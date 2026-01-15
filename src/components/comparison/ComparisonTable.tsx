"use client";

import { useComparison } from "@/context/ComparisonContext";
import { ComparisonLane } from "@/components/comparison/ComparisonLane";

export const ComparisonTable = () => {
    const { data } = useComparison();
    const { lanes } = data;
    const { traditional, clipposaurus } = lanes;

    return (
        <div className="relative mt-4">
            <div className="hidden lg:block pointer-events-none absolute inset-y-6 left-1/2 w-px bg-gradient-to-b from-zinc-200 via-emerald-300/30 to-zinc-200 dark:from-zinc-800 dark:via-emerald-700/30 dark:to-zinc-800" />
            <div className="grid gap-6 lg:grid-cols-2">
                <ComparisonLane lane={traditional} />
                <ComparisonLane lane={clipposaurus} />
            </div>
        </div>
    )
};