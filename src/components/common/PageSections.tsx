import React from "react";
import type { PageSectionsType } from "@/types";
import { renderDescriptionWithLinks } from "@/components/common/RenderWithLink";

interface PageSectionsProps {
    sections: PageSectionsType;
}

export const PageSections = React.memo(({ sections }: PageSectionsProps): React.ReactNode => {
    return (
        <section className="flex flex-col gap-[clamp(2rem,5vw,3rem)]">
            {sections.map((section) => (
                <div
                    key={section.id}
                    id={`section-${section.id}`}
                    className="scroll-mt-28"
                >
                    <div className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2 text-[clamp(1.05rem,2.2vw,1.25rem)]">
                        {section.id}. {section.title}
                    </div>

                    <div className="text-zinc-700 dark:text-zinc-400 leading-relaxed text-[clamp(0.9rem,1.6vw,1rem)]">
                        {renderDescriptionWithLinks(section.description, section.links)}
                    </div>
                </div>
            ))}
        </section>
    );
});

PageSections.displayName = "PageSections";