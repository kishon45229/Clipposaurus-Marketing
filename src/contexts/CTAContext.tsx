"use client";

import React from "react";
import { useCTAComponent } from "@/contexts/ComponentDataContext";
import { CTAComponent } from "@/types";
import { useRedirects } from "@/hooks/useRedirect";

interface CTAContextType {
    data: CTAComponent;
    isLoading: boolean;
    error: Error | null;

    handleRedirectToCreateDrop: () => void;
    handleRedirectToDocsQuickstart: () => void;
}

const CTAContext = React.createContext<CTAContextType | undefined>(undefined);

interface CTAProviderProps {
    children: React.ReactNode;
}

export function CTAProvider({ children }: CTAProviderProps): React.ReactElement {
    const { data, isLoading, error } = useCTAComponent();
    const { handleRedirectToCreateDrop, handleRedirectToDocsQuickstart } = useRedirects();

    const contextValue: CTAContextType = React.useMemo(() => ({
        data,
        isLoading,
        error,
        handleRedirectToCreateDrop,
        handleRedirectToDocsQuickstart
    }), [data, isLoading, error, handleRedirectToCreateDrop, handleRedirectToDocsQuickstart]);

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