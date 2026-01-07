"use client";

import React from "react";
import { useTermsOfService } from "@/context/TermsOfServiceContext";
import { ComponentError } from "@/components/common/ComponentError";
import { TermsOfServiceContent } from "@/components/terms-of-service/TermsOfServiceContent";
import { TermsOfServiceSkeleton } from "@/components/skeleton/TermsOfServiceSkeleton";

const COMPONENT_ID = "TermsOfServiceComponent" as const;

export const TermsOfServiceContainer = (): React.ReactNode => {
    const { data, isLoading, error } = useTermsOfService();

    if (isLoading || !data) return <TermsOfServiceSkeleton />;
    if (error) return <ComponentError componentId={COMPONENT_ID} />;

    return <TermsOfServiceContent />;
};