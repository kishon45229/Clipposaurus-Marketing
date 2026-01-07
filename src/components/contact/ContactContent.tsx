"use client";

import React from "react";
import { ArrowUpRight, Bug, Lightbulb, Mail, Heart } from "lucide-react";

const contactOptions = [
    {
        title: "Report an Issue",
        description: "Found a bug or something not working as expected? Let us know!",
        icon: Bug,
        href: "https://github.com/clipposaurus/clipposaurus/issues/new?template=bug_report.md",
        accentColor: "emerald",
    },
    {
        title: "Request a Feature",
        description: "Have an idea for a new feature? We'd love to hear it!",
        icon: Lightbulb,
        href: "https://github.com/clipposaurus/clipposaurus/issues/new?template=feature_request.md",
        accentColor: "emerald",
    },
    {
        title: "Send Us an Email",
        description: "Need to talk with us directly? Send us an email and we'll get back to you.",
        icon: Mail,
        href: "mailto:support@clipposaurus.com",
        accentColor: "emerald",
    },
    {
        title: "Donate",
        description: "Support our open-source project and help us keep building for the community.",
        icon: Heart,
        href: "https://github.com/sponsors/clipposaurus",
        accentColor: "emerald",
    },
];

export const ContactContent = (): React.ReactNode => {
    return (
        <div className="pb-12 space-y-6">
            {contactOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                    <a
                        key={option.title}
                        href={option.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block relative"
                    >
                        <div className="relative overflow-hidden">
                            {/* Animated background gradient on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 dark:from-emerald-400/0 dark:via-emerald-400/5 dark:to-emerald-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />

                            {/* Border lines */}
                            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />
                            {index === contactOptions.length - 1 && (
                                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />
                            )}

                            {/* Content */}
                            <div className="relative py-8 px-4 sm:px-8 flex items-start justify-between gap-6">
                                <div className="flex items-start gap-6 flex-1">
                                    {/* Icon */}
                                    <div className="relative mt-1">
                                        <div className="absolute inset-0 bg-emerald-500/20 dark:bg-emerald-400/20 blur-xl group-hover:bg-emerald-500/30 dark:group-hover:bg-emerald-400/30 transition-all duration-300" />
                                        <div className="relative flex items-center justify-center w-14 h-14 rounded-full border-2 border-zinc-200 dark:border-zinc-800 group-hover:border-emerald-500/50 dark:group-hover:border-emerald-400/50 transition-all duration-300">
                                            <Icon className="w-6 h-6 text-zinc-700 dark:text-zinc-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300" />
                                        </div>
                                    </div>

                                    {/* Text content */}
                                    <div className="flex-1 space-y-2">
                                        <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                                            {option.title}
                                        </h3>
                                        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                            {option.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Arrow */}
                                <div className="flex-shrink-0 mt-2">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-emerald-500/30 dark:bg-emerald-400/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <ArrowUpRight className="relative w-6 h-6 text-zinc-400 dark:text-zinc-600 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                );
            })}
        </div>
    );
};
