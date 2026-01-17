"use client";

import React from "react";
import { useHowItWorksComponent } from "@/contexts/ComponentDataContext";
import type { HowItWorksComponentType } from "@/components/home/how-it-works/HowItWorks.types";
import { useRedirects } from "@/hooks/useRedirect";

interface HowItWorksContextType {
    data: HowItWorksComponentType;
    isLoading: boolean;
    error: Error | null;

    handleRedirectToCreateDrop: () => void;
    handleRedirectToDocsHowItWorks: () => void;
}

const HowItWorksContext = React.createContext<HowItWorksContextType | undefined>(undefined);

interface HowItWorksProviderProps {
    children: React.ReactNode;
}

export function HowItWorksProvider({ children }: HowItWorksProviderProps): React.ReactElement {
    const { data, isLoading, error } = useHowItWorksComponent();
    const { handleRedirectToCreateDrop, handleRedirectToDocsHowItWorks } = useRedirects();

    const contextValue: HowItWorksContextType = React.useMemo(() => ({
        data,
        isLoading,
        error,
        handleRedirectToCreateDrop,
        handleRedirectToDocsHowItWorks
    }), [data, isLoading, error, handleRedirectToCreateDrop, handleRedirectToDocsHowItWorks]);

    return (
        <HowItWorksContext.Provider value={contextValue}>
            {children}
        </HowItWorksContext.Provider>
    );
}

export function useHowItWorks(): HowItWorksContextType {
    const context = React.useContext(HowItWorksContext);
    if (!context) {
        throw new Error("useHowItWorks must be used within a HowItWorksProvider");
    }
    return context;
}