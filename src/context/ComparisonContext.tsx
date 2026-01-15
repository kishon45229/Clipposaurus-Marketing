"use client";

import React from "react";
import { useComparisonComponent } from "@/context/ComponentDataContext";
import { ComparisonComponent } from "@/components/home/comparison/Comparison.types";
import { useRedirects } from "@/hooks/useRedirect";

interface ComparisonContextType {
    data: ComparisonComponent;
    isLoading: boolean;
    error: Error | null;

    handleRedirectToCreateDrop: () => void;
}

const ComparisonContext = React.createContext<ComparisonContextType | undefined>(undefined);

interface ComparisonProviderProps {
    children: React.ReactNode;
}

export function ComparisonProvider({ children }: ComparisonProviderProps): React.ReactElement {
    const { data, isLoading, error } = useComparisonComponent();
    const { handleRedirectToCreateDrop } = useRedirects();

    const contextValue: ComparisonContextType = React.useMemo(() => ({
        data,
        isLoading,
        error,
        handleRedirectToCreateDrop
    }), [data, isLoading, error, handleRedirectToCreateDrop]);

    return (
        <ComparisonContext.Provider value={contextValue}>
            {children}
        </ComparisonContext.Provider>
    );
}

export function useComparison(): ComparisonContextType {
    const context = React.useContext(ComparisonContext);
    if (!context) {
        throw new Error("useComparison must be used within a ComparisonProvider");
    }
    return context;
}
