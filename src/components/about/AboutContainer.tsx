"use client";

import React from "react";
import { useAbout } from "@/contexts/AboutContext";
import { ComponentError } from "@/components/common/ComponentError";
import { AboutContent } from "@/components/about/AboutContent";
import { AboutSkeleton } from "@/components/about/AboutSkeleton";

const COMPONENT_ID = "AboutComponent" as const;

export const AboutContainer = (): React.ReactNode => {
    const { data, isLoading, error } = useAbout();

    if (isLoading || !data) return <AboutSkeleton />;
    if (error) return <ComponentError componentId={COMPONENT_ID} />;

    return <AboutContent />;
};
