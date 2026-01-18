import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const escapeRegExp = (value: string): string => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export const renderDescriptionWithLinks = (
    description: string,
    links?: { text: string; href: string }[],
): React.ReactNode => {
    if (!links || links.length === 0) return description;

    const pattern = new RegExp(`(${links.map(link => escapeRegExp(link.text)).join("|")})`, "gi");
    const parts = description.split(pattern);

    return (
        <>
            {parts.map((part, index) => {
                const matchedLink = links.find(link => link.text.toLowerCase() === part.toLowerCase());

                if (matchedLink) {
                    return (
                        <Link
                            key={`${matchedLink.text}-${index}`}
                            href={matchedLink.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-emerald-600 dark:text-emerald-400 underline underline-offset-4 cursor-target inline-flex items-center gap-1"
                        >
                            {matchedLink.text}
                            <ExternalLink className="w-4 h-4" />
                        </Link>
                    );
                }

                return <React.Fragment key={`text-${index}`}>{part}</React.Fragment>;
            })}
        </>
    );
};