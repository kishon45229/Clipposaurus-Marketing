"use client";

import React from "react";
import { useWhatCanShareComponent } from "@/context/ComponentDataContext";
import { WhatCanShareComponentType } from "@/components/home/what-can-share/WhatCanShare.types";
import { useStackRotation } from "@/hooks/useStackRotation";
import { useRedirects } from "@/hooks/useRedirect";

interface WhatCanShareContextType {
    data: WhatCanShareComponentType;
    isLoading: boolean;
    error: Error | null;
    hoveredIndex: number | null;
    setHoveredIndex: (index: number | null) => void;
    activeIndex: number;
    setActiveIndex: (index: number) => void;
    isPaused: boolean;
    setIsPaused: (paused: boolean) => void;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    lockAnimated: boolean[];
    triggerLockAnimation: (index: number) => void;
    getTransform: (index: number, isActive: boolean, isHovered: boolean) => string;
    getZIndex: (index: number, isActive: boolean, isHovered: boolean) => number;
    getOpacity: (index: number, isActive: boolean) => number;
    handleRedirectToCreateDrop: () => void;
}

const WhatCanShareContext = React.createContext<WhatCanShareContextType | undefined>(undefined);

interface WhatCanShareProviderProps {
    children: React.ReactNode;
}

export function WhatCanShareProvider({ children }: WhatCanShareProviderProps): React.ReactElement {
    const { data, isLoading, error } = useWhatCanShareComponent();
    const stackRotation = useStackRotation(data?.stackItems);
    const { handleRedirectToCreateDrop } = useRedirects();

    const contextValue: WhatCanShareContextType = React.useMemo(() => ({
        data,
        isLoading,
        error,
        ...stackRotation,
        handleRedirectToCreateDrop
    }), [data, isLoading, error, stackRotation, handleRedirectToCreateDrop]);

    return (
        <WhatCanShareContext.Provider value={contextValue}>
            {children}
        </WhatCanShareContext.Provider>
    );
}

export function useWhatCanShare(): WhatCanShareContextType {
    const context = React.useContext(WhatCanShareContext);
    if (!context) {
        throw new Error("useWhatCanShare must be used within a WhatCanShareProvider");
    }
    return context;
}
