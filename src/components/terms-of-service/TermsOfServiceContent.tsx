"use client";

import React from "react";
import { useTermsOfService } from "@/contexts/TermsOfServiceContext";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { StickyTOC } from "@/components/common/StickyTOC";
import { PageHeader } from "@/components/common/PageHeader";
import { PageFooter } from "@/components/common/PageFooter";
import { PageSections } from "@/components/common/PageSections";

export const TermsOfServiceContent = (): React.ReactNode => {
    const { data } = useTermsOfService();
    const { header, sections, footer } = data;

    const sectionIds = React.useMemo(() =>
        sections.map(section => `section-${section.id}`),
        [sections]
    );

    const items = React.useMemo(() =>
        sections.map(section => ({ id: `section-${section.id}`, label: section.title })),
        [sections]
    );

    const activeSection = useScrollSpy(sectionIds, 120);

    return (
        <div className="mx-auto max-w-480px-4 py-2 grid grid-cols-1 lg:grid-cols-[240px_auto] gap-[clamp(2rem,5vw,2.5rem)]">
            {/* STICKY TOC */}
            <StickyTOC title="On this page" items={items} activeSection={activeSection} />

            {/* MAIN CONTENT */}
            <div className="max-w-7xl border-l border-zinc-200 dark:border-zinc-800 pl-6">
                {/* HEADER */}
                <PageHeader header={header} />

                {/* SECTIONS */}
                <PageSections sections={sections} />

                {/* FOOTER */}
                <PageFooter footer={footer} />
            </div>
        </div>
    );
};
