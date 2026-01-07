"use client";

import React from "react";
import { useFeaturesComponent } from "@/context/ComponentDataContext";
import { FeaturesComponent } from "@/types";

interface FeatureContextType {
    data: FeaturesComponent;
    isLoading: boolean;
    error: Error | null;
}

const FeatureContext = React.createContext<FeatureContextType | undefined>(undefined);

interface FeatureProviderProps {
    children: React.ReactNode;
}

export function FeatureProvider({ children }: FeatureProviderProps): React.ReactElement {
    const { data, isLoading, error } = useFeaturesComponent();

    const contextValue: FeatureContextType = React.useMemo(() => ({
        data,
        isLoading,
        error,
    }), [data, isLoading, error]);

    return (
        <FeatureContext.Provider value={contextValue}>
            {children}
        </FeatureContext.Provider>
    );
}

export function useFeature(): FeatureContextType {
    const context = React.useContext(FeatureContext);
    if (!context) {
        throw new Error("useFeature must be used within a FeatureProvider");
    }
    return context;
}