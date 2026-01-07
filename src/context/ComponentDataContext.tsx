"use client";

import React from "react";
import { getComponentData } from "@/services/componentDataService";
import { TermsOfServiceComponent } from "@/types";
import { FAQComponent } from "@/types";
import { HeroComponent } from "@/components/hero/Hero.types";
import { FeaturesComponent } from "@/types";
import { HowItWorksComponent } from "@/types";
import { SecurityComponent } from "@/types";
import { CTAComponent } from "@/types";

export type ComponentDataType = HeroComponent | TermsOfServiceComponent | FAQComponent | FeaturesComponent | HowItWorksComponent | SecurityComponent | CTAComponent;

export type ComponentTypeMap = {
    HeroComponent: HeroComponent;
    TermsOfServiceComponent: TermsOfServiceComponent;
    FAQComponent: FAQComponent;
    FeaturesComponent: FeaturesComponent;
    HowItWorksComponent: HowItWorksComponent;
    SecurityComponent: SecurityComponent;
    CTAComponent: CTAComponent;
};

interface ComponentDataContextType {
    getComponentData: <T extends keyof ComponentTypeMap>(componentId: T) => Promise<ComponentTypeMap[T]>;
    cachedData: Partial<ComponentTypeMap>;
    loadingStates: Record<string, boolean>;
    errorStates: Record<string, Error | null>;
    clearComponentCache: (componentId: keyof ComponentTypeMap) => void;
    clearAllCache: () => void;
    preloadComponent: <T extends keyof ComponentTypeMap>(componentId: T) => Promise<void>;
}

const ComponentDataContext = React.createContext<ComponentDataContextType | undefined>(undefined);

interface ComponentDataProviderProps {
    children: React.ReactNode;
}

export function ComponentDataProvider({ children }: ComponentDataProviderProps): React.ReactElement {
    const [cachedData, setCachedData] = React.useState<Partial<ComponentTypeMap>>({});
    const [loadingStates, setLoadingStates] = React.useState<Record<string, boolean>>({});
    const [errorStates, setErrorStates] = React.useState<Record<string, Error | null>>({});

    const updateLoadingState = React.useCallback((componentId: string, isLoading: boolean) => {
        setLoadingStates(prev => ({ ...prev, [componentId]: isLoading }));
    }, []);

    const updateErrorState = React.useCallback((componentId: string, error: Error | null) => {
        setErrorStates(prev => ({ ...prev, [componentId]: error }));
    }, []);

    const fetchComponentData = React.useCallback(async <T extends keyof ComponentTypeMap>(
        componentId: T
    ): Promise<ComponentTypeMap[T]> => {
        if (cachedData[componentId]) {
            return cachedData[componentId] as ComponentTypeMap[T];
        }

        updateLoadingState(componentId, true);
        updateErrorState(componentId, null);

        try {
            const data = await getComponentData<ComponentTypeMap[T]>(componentId);
            setCachedData(prev => ({
                ...prev,
                [componentId]: data
            }));

            updateLoadingState(componentId, false);
            return data;
        } catch (error) {
            updateErrorState(componentId, error as Error);
            updateLoadingState(componentId, false);
            throw error;
        }
    }, [cachedData, updateLoadingState, updateErrorState]);

    const clearComponentCache = React.useCallback((componentId: keyof ComponentTypeMap) => {
        setCachedData(prev => {
            const newData = { ...prev };
            delete newData[componentId];
            return newData;
        });
        updateErrorState(componentId, null);
    }, [updateErrorState]);

    const clearAllCache = React.useCallback(() => {
        setCachedData({});
        setErrorStates({});
    }, []);

    const preloadComponent = React.useCallback(async <T extends keyof ComponentTypeMap>(componentId: T): Promise<void> => {
        try {
            await fetchComponentData(componentId);
        } catch {
            // ignored
        }
    }, [fetchComponentData]);

    const contextValue: ComponentDataContextType = React.useMemo(() => ({
        getComponentData: fetchComponentData,
        cachedData,
        loadingStates,
        errorStates,
        clearComponentCache,
        clearAllCache,
        preloadComponent,
    }), [cachedData, loadingStates, errorStates, fetchComponentData, clearComponentCache, clearAllCache, preloadComponent]);

    return (
        <ComponentDataContext.Provider value={contextValue}>
            {children}
        </ComponentDataContext.Provider>
    );
}

export function useComponentData(): ComponentDataContextType {
    const context = React.useContext(ComponentDataContext);
    if (!context) {
        throw new Error("useComponentData must be used within a ComponentDataProvider");
    }
    return context;
}

export function useHeroComponent() {
    const { getComponentData, cachedData, loadingStates, errorStates } = useComponentData();

    React.useEffect(() => {
        if (!cachedData.HeroComponent && !loadingStates.HeroComponent && !errorStates.HeroComponent) {
            getComponentData("HeroComponent").catch(console.error);
        }
    }, [cachedData.HeroComponent, loadingStates.HeroComponent, errorStates.HeroComponent, getComponentData]);

    return {
        data: cachedData.HeroComponent as HeroComponent,
        isLoading: loadingStates.HeroComponent || false,
        error: errorStates.HeroComponent,
    };
}

export function useTermsOfServiceComponent() {
    const { getComponentData, cachedData, loadingStates, errorStates } = useComponentData();

    React.useEffect(() => {
        if (!cachedData.TermsOfServiceComponent && !loadingStates.TermsOfServiceComponent && !errorStates.TermsOfServiceComponent) {
            getComponentData("TermsOfServiceComponent").catch(console.error);
        }
    }, [cachedData.TermsOfServiceComponent, loadingStates.TermsOfServiceComponent, errorStates.TermsOfServiceComponent, getComponentData]);

    return {
        data: cachedData.TermsOfServiceComponent as TermsOfServiceComponent,
        isLoading: loadingStates.TermsOfServiceComponent || false,
        error: errorStates.TermsOfServiceComponent,
    };
}

export function useFAQComponent() {
    const { getComponentData, cachedData, loadingStates, errorStates } = useComponentData();

    React.useEffect(() => {
        if (!cachedData.FAQComponent && !loadingStates.FAQComponent && !errorStates.FAQComponent) {
            getComponentData("FAQComponent").catch(console.error);
        }
    }, [cachedData.FAQComponent, loadingStates.FAQComponent, errorStates.FAQComponent, getComponentData]);

    return {
        data: cachedData.FAQComponent as FAQComponent,
        isLoading: loadingStates.FAQComponent || false,
        error: errorStates.FAQComponent,
    };
}

export function useFeaturesComponent() {
    const { getComponentData, cachedData, loadingStates, errorStates } = useComponentData();

    React.useEffect(() => {
        if (!cachedData.FeaturesComponent && !loadingStates.FeaturesComponent && !errorStates.FeaturesComponent) {
            getComponentData("FeaturesComponent").catch(console.error);
        }
    }, [cachedData.FeaturesComponent, loadingStates.FeaturesComponent, errorStates.FeaturesComponent, getComponentData]);

    return {
        data: cachedData.FeaturesComponent as FeaturesComponent,
        isLoading: loadingStates.FeaturesComponent || false,
        error: errorStates.FeaturesComponent,
    };
}

export function useHowItWorksComponent() {
    const { getComponentData, cachedData, loadingStates, errorStates } = useComponentData();

    React.useEffect(() => {
        if (!cachedData.HowItWorksComponent && !loadingStates.HowItWorksComponent && !errorStates.HowItWorksComponent) {
            getComponentData("HowItWorksComponent").catch(console.error);
        }
    }, [cachedData.HowItWorksComponent, loadingStates.HowItWorksComponent, errorStates.HowItWorksComponent, getComponentData]);

    return {
        data: cachedData.HowItWorksComponent as HowItWorksComponent,
        isLoading: loadingStates.HowItWorksComponent || false,
        error: errorStates.HowItWorksComponent,
    };
}

export function useSecurityComponent() {
    const { getComponentData, cachedData, loadingStates, errorStates } = useComponentData();

    React.useEffect(() => {
        if (!cachedData.SecurityComponent && !loadingStates.SecurityComponent && !errorStates.SecurityComponent) {
            getComponentData("SecurityComponent").catch(console.error);
        }
    }, [cachedData.SecurityComponent, loadingStates.SecurityComponent, errorStates.SecurityComponent, getComponentData]);

    return {
        data: cachedData.SecurityComponent as SecurityComponent,
        isLoading: loadingStates.SecurityComponent || false,
        error: errorStates.SecurityComponent,
    };
}

export function useCTAComponent() {
    const { getComponentData, cachedData, loadingStates, errorStates } = useComponentData();

    React.useEffect(() => {
        if (!cachedData.CTAComponent && !loadingStates.CTAComponent && !errorStates.CTAComponent) {
            getComponentData("CTAComponent").catch(console.error);
        }
    }, [cachedData.CTAComponent, loadingStates.CTAComponent, errorStates.CTAComponent, getComponentData]);

    return {
        data: cachedData.CTAComponent as CTAComponent,
        isLoading: loadingStates.CTAComponent || false,
        error: errorStates.CTAComponent,
    };
}