"use client";

import React from "react";
import { usePrivacyPolicy } from "@/contexts/PrivacyPolicyContext";
import { ComponentError } from "@/components/common/ComponentError";
import { PrivacyPolicyContent } from "@/components/privacy-policy/PrivacyPolicyContent";
import { PrivacyPolicySkeleton } from "@/components/skeleton/PrivacyPolicySkeleton";

const COMPONENT_ID = "PrivacyPolicyComponent" as const;

export const PrivacyPolicyContainer = (): React.ReactNode => {
    const { data, isLoading, error } = usePrivacyPolicy();

    if (isLoading || !data) return <PrivacyPolicySkeleton />;
    if (error) return <ComponentError componentId={COMPONENT_ID} />;

    return <PrivacyPolicyContent />;
};