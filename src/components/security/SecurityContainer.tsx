"use client";

import { useSecurity } from "@/context/SecurityContext";
import { SecuritySkeleton } from "@/components/skeleton/SecuritySkeleton";
import { SecurityContent } from "@/components/security/SecurityContent";
import { ComponentError } from "@/components/common/ComponentError";

const COMPONENT_ID = "SecurityComponent" as const;

/**
 * SecurityContainer component
 * @returns SecurityContainer component
 */
export const SecurityContainer = () => {
    const { data, isLoading, error } = useSecurity();

    if (isLoading || !data) return <SecuritySkeleton />;
    if (error) return <ComponentError componentId={COMPONENT_ID} />;

    return <SecurityContent />;
};