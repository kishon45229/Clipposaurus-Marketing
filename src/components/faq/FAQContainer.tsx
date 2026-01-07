"use client";

import React from "react";
import { useFAQ } from "@/context/FAQContext";
import { ComponentError } from "@/components/common/ComponentError";
import { FAQContent } from "@/components/faq/FAQContent";
import { FAQSkeleton } from "@/components/skeleton/FAQSkeleton";

const COMPONENT_ID = "FAQComponent" as const;

export const FAQContainer = (): React.ReactNode => {
    const { data, isLoading, error } = useFAQ();

    if (error) return <ComponentError componentId={COMPONENT_ID} />;
    if (isLoading || !data) return <FAQSkeleton />;

    return <FAQContent />;
};
