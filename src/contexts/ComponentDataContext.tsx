"use client";

import React from "react";
import { getComponentData } from "@/services/componentDataService";
import type { HeroComponentType } from "@/components/home/hero/Hero.types";
import type { HowItWorksComponentType } from "@/components/home/how-it-works/HowItWorks.types";
import type { WhatCanShareComponentType } from "@/components/home/what-can-share/WhatCanShare.types";
import type { PrivacyComponentType } from "@/components/home/privacy/Privacy.types";
import type { TermsOfServiceComponent } from "@/types";
import type { PrivacyPolicyComponentType } from "@/components/privacy-policy/PrivacyPolicy.types";
import type { FAQComponent } from "@/types";
import type { FeaturesComponent } from "@/types";
import type { SecurityComponent } from "@/types";
import type { CTAComponent } from "@/types";
import type { FooterComponent } from "@/components/footer/footer.types";
import type { NavbarComponent } from "@/components/navbar/navbar.types";
import type { ComparisonComponent } from "@/components/home/comparison/Comparison.types";

export type ComponentDataType = HeroComponentType | HowItWorksComponentType | WhatCanShareComponentType | TermsOfServiceComponent | PrivacyPolicyComponentType | FAQComponent | FeaturesComponent | SecurityComponent | CTAComponent | NavbarComponent | FooterComponent | PrivacyComponentType | ComparisonComponent;

export type ComponentTypeMap = {
    HeroComponent: HeroComponentType;
    HowItWorksComponent: HowItWorksComponentType;
    WhatCanShareComponent: WhatCanShareComponentType;
    PrivacyComponent: PrivacyComponentType;
    TermsOfServiceComponent: TermsOfServiceComponent;
    PrivacyPolicyComponent: PrivacyPolicyComponentType;
    FAQComponent: FAQComponent;
    FeaturesComponent: FeaturesComponent;
    SecurityComponent: SecurityComponent;
    CTAComponent: CTAComponent;
    FooterComponent: FooterComponent;
    NavbarComponent: NavbarComponent;

    ComparisonComponent: ComparisonComponent;
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

{/* COMPONENT DATA PROVIDER */ }
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

{/* HERO HOOK  */ }
export function useHeroComponent() {
    const { getComponentData, cachedData, loadingStates, errorStates } = useComponentData();

    React.useEffect(() => {
        if (!cachedData.HeroComponent && !loadingStates.HeroComponent && !errorStates.HeroComponent) {
            getComponentData("HeroComponent").catch(console.error);
        }
    }, [cachedData.HeroComponent, loadingStates.HeroComponent, errorStates.HeroComponent, getComponentData]);

    return {
        data: cachedData.HeroComponent as HeroComponentType,
        isLoading: loadingStates.HeroComponent || false,
        error: errorStates.HeroComponent,
    };
}

{/* HOW IT WORKS HOOK */ }
export function useHowItWorksComponent() {
    const { getComponentData, cachedData, loadingStates, errorStates } = useComponentData();

    React.useEffect(() => {
        if (!cachedData.HowItWorksComponent && !loadingStates.HowItWorksComponent && !errorStates.HowItWorksComponent) {
            getComponentData("HowItWorksComponent").catch(console.error);
        }
    }, [cachedData.HowItWorksComponent, loadingStates.HowItWorksComponent, errorStates.HowItWorksComponent, getComponentData]);

    return {
        data: cachedData.HowItWorksComponent as HowItWorksComponentType,
        isLoading: loadingStates.HowItWorksComponent || false,
        error: errorStates.HowItWorksComponent,
    };
}

{/* WHAT CAN SHARE HOOK */ }
export function useWhatCanShareComponent() {
    const { getComponentData, cachedData, loadingStates, errorStates } = useComponentData();

    React.useEffect(() => {
        if (!cachedData.WhatCanShareComponent && !loadingStates.WhatCanShareComponent && !errorStates.WhatCanShareComponent) {
            getComponentData("WhatCanShareComponent").catch(console.error);
        }
    }, [cachedData.WhatCanShareComponent, loadingStates.WhatCanShareComponent, errorStates.WhatCanShareComponent, getComponentData]);

    return {
        data: cachedData.WhatCanShareComponent as WhatCanShareComponentType,
        isLoading: loadingStates.WhatCanShareComponent || false,
        error: errorStates.WhatCanShareComponent,
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

export function usePrivacyPolicyComponent() {
    const { getComponentData, cachedData, loadingStates, errorStates } = useComponentData();

    React.useEffect(() => {
        if (!cachedData.PrivacyPolicyComponent && !loadingStates.PrivacyPolicyComponent && !errorStates.PrivacyPolicyComponent) {
            getComponentData("PrivacyPolicyComponent").catch(console.error);
        }
    }, [cachedData.PrivacyPolicyComponent, loadingStates.PrivacyPolicyComponent, errorStates.PrivacyPolicyComponent, getComponentData]);

    return {
        data: cachedData.PrivacyPolicyComponent as PrivacyPolicyComponentType,
        isLoading: loadingStates.PrivacyPolicyComponent || false,
        error: errorStates.PrivacyPolicyComponent,
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

export function useNavbarComponent() {
    const { getComponentData, cachedData, loadingStates, errorStates } = useComponentData();

    React.useEffect(() => {
        if (!cachedData.NavbarComponent && !loadingStates.NavbarComponent && !errorStates.NavbarComponent) {
            getComponentData("NavbarComponent").catch(console.error);
        }
    }, [cachedData.NavbarComponent, loadingStates.NavbarComponent, errorStates.NavbarComponent, getComponentData]);

    return {
        data: cachedData.NavbarComponent as NavbarComponent,
        isLoading: loadingStates.NavbarComponent || false,
        error: errorStates.NavbarComponent,
    };
}

export function useFooterComponent() {
    const { getComponentData, cachedData, loadingStates, errorStates } = useComponentData();

    React.useEffect(() => {
        if (!cachedData.FooterComponent && !loadingStates.FooterComponent && !errorStates.FooterComponent) {
            getComponentData("FooterComponent").catch(console.error);
        }
    }, [cachedData.FooterComponent, loadingStates.FooterComponent, errorStates.FooterComponent, getComponentData]);

    return {
        data: cachedData.FooterComponent as FooterComponent,
        isLoading: loadingStates.FooterComponent || false,
        error: errorStates.FooterComponent,
    };
}

export function usePrivacyComponent() {
    const { getComponentData, cachedData, loadingStates, errorStates } = useComponentData();

    React.useEffect(() => {
        if (!cachedData.PrivacyComponent && !loadingStates.PrivacyComponent && !errorStates.PrivacyComponent) {
            getComponentData("PrivacyComponent").catch(console.error);
        }
    }, [cachedData.PrivacyComponent, loadingStates.PrivacyComponent, errorStates.PrivacyComponent, getComponentData]);

    return {
        data: cachedData.PrivacyComponent as PrivacyComponentType,
        isLoading: loadingStates.PrivacyComponent || false,
        error: errorStates.PrivacyComponent,
    };
}

export function useComparisonComponent() {
    const { getComponentData, cachedData, loadingStates, errorStates } = useComponentData();

    React.useEffect(() => {
        if (!cachedData.ComparisonComponent && !loadingStates.ComparisonComponent && !errorStates.ComparisonComponent) {
            getComponentData("ComparisonComponent").catch(console.error);
        }
    }, [cachedData.ComparisonComponent, loadingStates.ComparisonComponent, errorStates.ComparisonComponent, getComponentData]);

    return {
        data: cachedData.ComparisonComponent as ComparisonComponent,
        isLoading: loadingStates.ComparisonComponent || false,
        error: errorStates.ComparisonComponent,
    };
}