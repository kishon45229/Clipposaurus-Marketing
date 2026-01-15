"use client";

import { useComparison } from "@/context/ComparisonContext";
import { Button } from "../ui/button";

export const ComparisonCTA = () => {
    const { data } = useComparison();
    const { ctaText, ctaHelper } = data;

    return (
        <div className="mt-6 flex flex-col items-center gap-2">
            <Button
                size="lg"
                className="h-12 px-8 text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors duration-200 cursor-target">
                {ctaText}
            </Button>
            <p className="text-sm text-zinc-500">{ctaHelper}</p>
        </div>
    );
};