"use client";

import React from "react";
import { usePrivacyPolicyComponent } from "@/contexts/ComponentDataContext";
import { PrivacyPolicyComponentType } from "@/components/privacy-policy/PrivacyPolicy.types";

interface PrivacyPolicyContextType {
    data: PrivacyPolicyComponentType;
    isLoading: boolean;
    error: Error | null;
}

const PrivacyPolicyContext = React.createContext<PrivacyPolicyContextType | undefined>(undefined);

interface PrivacyPolicyProviderProps {
    children: React.ReactNode;
}

export function PrivacyPolicyProvider({ children }: PrivacyPolicyProviderProps): React.ReactElement {
    const { data, isLoading, error } = usePrivacyPolicyComponent();

    const contextValue: PrivacyPolicyContextType = React.useMemo(() => ({
        data,
        isLoading,
        error,
    }), [data, isLoading, error]);

    return (
        <PrivacyPolicyContext.Provider value={contextValue}>
            {children}
        </PrivacyPolicyContext.Provider>
    );
}

export function usePrivacyPolicy(): PrivacyPolicyContextType {
    const context = React.useContext(PrivacyPolicyContext);
    if (!context) {
        throw new Error("usePrivacyPolicy must be used within a PrivacyPolicyProvider");
    }
    return context;
}