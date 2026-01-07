"use client";

import React from "react";
import { useHowItWorksComponent } from "@/context/ComponentDataContext";
import { HowItWorksComponent } from "@/types";

interface HowItWorksContextType {
    data: HowItWorksComponent;
    isLoading: boolean;
    error: Error | null;
}

const HowItWorksContext = React.createContext<HowItWorksContextType | undefined>(undefined);

interface HowItWorksProviderProps {
    children: React.ReactNode;
}

export function HowItWorksProvider({ children }: HowItWorksProviderProps): React.ReactElement {
    const { data, isLoading, error } = useHowItWorksComponent();

    const contextValue: HowItWorksContextType = React.useMemo(() => ({
        data,
        isLoading,
        error,
    }), [data, isLoading, error]);

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