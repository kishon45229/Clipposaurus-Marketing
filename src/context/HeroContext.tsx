"use client";

import React from "react";
import { useHeroComponent } from "@/context/ComponentDataContext";
import { HeroComponentType } from "@/components/home/hero/Hero.types";
import { useRedirects } from "@/hooks/useRedirect";

interface HeroContextType {
    data: HeroComponentType;
    isLoading: boolean;
    error: Error | null;

    isCreateDropChecking: boolean;
    isOpenDropChecking: boolean;

    handleRedirectToCreateDrop: () => void;
    handleRedirectToUnlockDrop: () => void;
    handleRedirectToTermsOfService: () => void;
}

const HeroContext = React.createContext<HeroContextType | undefined>(undefined);

interface HeroProviderProps {
    children: React.ReactNode;
}

export function HeroProvider({ children }: HeroProviderProps): React.ReactElement {
    const { data, isLoading, error } = useHeroComponent();
    const { isCreateDropChecking, isOpenDropChecking, handleRedirectToCreateDrop, handleRedirectToUnlockDrop, handleRedirectToTermsOfService } = useRedirects();

    const contextValue: HeroContextType = React.useMemo(() => ({
        data,
        isLoading,
        error,

        isCreateDropChecking,
        isOpenDropChecking,

        handleRedirectToCreateDrop,
        handleRedirectToUnlockDrop,
        handleRedirectToTermsOfService
    }), [data, isLoading, error, isCreateDropChecking, isOpenDropChecking, handleRedirectToCreateDrop, handleRedirectToUnlockDrop, handleRedirectToTermsOfService]);

    return (
        <HeroContext.Provider value={contextValue}>
            {children}
        </HeroContext.Provider>
    );
}

export function useHero(): HeroContextType {
    const context = React.useContext(HeroContext);
    if (!context) {
        throw new Error("useHero must be used within a HeroProvider");
    }
    return context;
}