"use client";

import React from "react";
import { usePrivacyComponent } from "@/context/ComponentDataContext";
import { useRedirects } from "@/hooks/useRedirect";
import { PrivacyComponentType } from "@/components/home/privacy/Privacy.types";

interface PrivacyContextType {
    data: PrivacyComponentType;
    isLoading: boolean;
    error: Error | null;
    handleRedirectToDocsEncryptionAndDecryption: () => void;
    handleRedirectToDocsZeroKnowledgePolicy: () => void;
}

const PrivacyContext = React.createContext<PrivacyContextType | undefined>(undefined);

interface PrivacyProviderProps {
    children: React.ReactNode;
}

export function PrivacyProvider({ children }: PrivacyProviderProps): React.ReactElement {
    const { data, isLoading, error } = usePrivacyComponent();
    const { handleRedirectToDocsEncryptionAndDecryption, handleRedirectToDocsZeroKnowledgePolicy } = useRedirects();

    const contextValue: PrivacyContextType = React.useMemo(() => ({
        data,
        isLoading,
        error,
        handleRedirectToDocsEncryptionAndDecryption,
        handleRedirectToDocsZeroKnowledgePolicy
    }), [data, isLoading, error, handleRedirectToDocsEncryptionAndDecryption, handleRedirectToDocsZeroKnowledgePolicy]);

    return (
        <PrivacyContext.Provider value={contextValue}>
            {children}
        </PrivacyContext.Provider>
    );
}

export function usePrivacy(): PrivacyContextType {
    const context = React.useContext(PrivacyContext);
    if (!context) {
        throw new Error("usePrivacy must be used within a PrivacyProvider");
    }
    return context;
}
