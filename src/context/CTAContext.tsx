"use client";

import React from "react";
import { useCTAComponent } from "@/context/ComponentDataContext";
import { CTAComponent } from "@/types";

interface CTAContextType {
    data: CTAComponent;
    isLoading: boolean;
    error: Error | null;
}

const CTAContext = React.createContext<CTAContextType | undefined>(undefined);

interface CTAProviderProps {
    children: React.ReactNode;
}

export function CTAProvider({ children }: CTAProviderProps): React.ReactElement {
    const { data, isLoading, error } = useCTAComponent();

    const contextValue: CTAContextType = React.useMemo(() => ({
        data,
        isLoading,
        error,
    }), [data, isLoading, error]);

    return (
        <CTAContext.Provider value={contextValue}>
            {children}
        </CTAContext.Provider>
    );
}

export function useCTA(): CTAContextType {
    const context = React.useContext(CTAContext);
    if (context === undefined) {
        throw new Error("useCTA must be used within a CTAProvider");
    }
    return context;
}