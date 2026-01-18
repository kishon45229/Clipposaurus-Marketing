"use client";

import React from "react";
import { useRedirects } from "@/hooks/useRedirect";
import type { PageFooterType } from "@/types";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

interface PageFooterProps {
    footer: PageFooterType;
}

export const PageFooter = React.memo(({ footer }: PageFooterProps): React.ReactNode => {
    const { handleContactUs } = useRedirects();
    const { text, buttonText } = footer;

    return (
        <footer className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <div className="flex flex-col items-center justify-between gap-4">
                {/* TEXT */}
                <div className="text-zinc-700 dark:text-zinc-400 text-[clamp(0.9rem,1.6vw,1rem)]">
                    {text}
                </div>

                {/* CONTACT US BUTTON */}
                <Button
                    onClick={handleContactUs}
                    size="lg"
                    className="group whitespace-nowrap cursor-target"
                >
                    {buttonText}
                    <Mail className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
            </div>
        </footer>
    );
});

PageFooter.displayName = "PageFooter";
