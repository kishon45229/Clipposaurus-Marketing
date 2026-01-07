"use client";

import React from "react";
import { useSecurityComponent } from "@/context/ComponentDataContext";
import { SecurityComponent } from "@/types";

interface SecurityContextType {
    data: SecurityComponent;
    isLoading: boolean;
    error: Error | null;
}

const SecurityContext = React.createContext<SecurityContextType | undefined>(undefined);

interface SecurityProviderProps {
    children: React.ReactNode;
}

export function SecurityProvider({ children }: SecurityProviderProps): React.ReactElement {
    const { data, isLoading, error } = useSecurityComponent();

    const contextValue: SecurityContextType = React.useMemo(() => ({
        data,
        isLoading,
        error,
    }), [data, isLoading, error]);

    return (
        <SecurityContext.Provider value={contextValue}>
            {children}
        </SecurityContext.Provider>
    );
}

export function useSecurity(): SecurityContextType {
    const context = React.useContext(SecurityContext);
    if (!context) {
        throw new Error("useSecurity must be used within a SecurityProvider");
    }
    return context;
}