"use client";

import { usePrivacy } from "@/context/PrivacyContext";
import { PrivacySkeleton } from "@/components/skeleton/PrivacySkeleton";
import { PrivacyContent } from "@/components/home/privacy/PrivacyContent";
import { ComponentError } from "@/components/common/ComponentError";

const COMPONENT_ID = "PrivacyComponent" as const;

/**
 * PrivacyContainer component
 * @returns PrivacyContainer component
 */
export const PrivacyContainer = () => {
    const { data, isLoading, error } = usePrivacy();

    if (isLoading || !data) return <PrivacySkeleton />;
    if (error) return <ComponentError componentId={COMPONENT_ID} />;

    return <PrivacyContent />;
};
