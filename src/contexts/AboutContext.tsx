"use client";

import React from "react";
import { useAboutComponent } from "@/contexts/ComponentDataContext";
import { AboutComponentType } from "@/components/about/about.types";
import { useRedirects } from "@/hooks/useRedirect";

interface AboutContextType {
    data: AboutComponentType;
    isLoading: boolean;
    error: Error | null;

    handleRedirectToGitHubSponsor: () => void;
    handleRedirectToGitHub: () => void;
    handleContactUs: () => void;
}

const AboutContext = React.createContext<AboutContextType | undefined>(undefined);

interface AboutProviderProps {
    children: React.ReactNode;
}

export function AboutProvider({ children }: AboutProviderProps): React.ReactElement {
    const { data, isLoading, error } = useAboutComponent();
    const { handleRedirectToGitHubSponsor, handleRedirectToGitHub, handleContactUs } = useRedirects();

    const contextValue: AboutContextType = React.useMemo(() => ({
        data,
        isLoading,
        error,
        handleRedirectToGitHubSponsor,
        handleRedirectToGitHub,
        handleContactUs,
    }), [data, isLoading, error, handleRedirectToGitHubSponsor, handleRedirectToGitHub, handleContactUs]);

    return (
        <AboutContext.Provider value={contextValue}>
            {children}
        </AboutContext.Provider>
    );
}

export function useAbout(): AboutContextType {
    const context = React.useContext(AboutContext);
    if (!context) {
        throw new Error("useAbout must be used within an AboutProvider");
    }
    return context;
}