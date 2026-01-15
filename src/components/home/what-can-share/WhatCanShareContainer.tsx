"use client";

import { useWhatCanShare } from "@/context/WhatCanShareContext";
import { WhatCanShareSkeleton } from "@/components/skeleton/WhatCanShareSkeleton";
import { WhatCanShareContent } from "@/components/home/what-can-share/WhatCanShareContent";
import { ComponentError } from "@/components/common/ComponentError";

const COMPONENT_ID = "WhatCanShareComponent" as const;

/**
 * WhatCanShareContainer component
 * @returns WhatCanShareContainer component
 */
export const WhatCanShareContainer = () => {
    const { data, isLoading, error } = useWhatCanShare();

    if (isLoading || !data) return <WhatCanShareSkeleton />;
    if (error) return <ComponentError componentId={COMPONENT_ID} />;

    return <WhatCanShareContent />;
};
