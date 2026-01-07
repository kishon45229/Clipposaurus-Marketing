"use client";

import React from "react";
import { Github, Heart, Users, Shield, ArrowRight, Sparkles } from "lucide-react";

const coreValues = [
    {
        icon: Shield,
        title: "Trust First",
        description: "Open-source code means you can verify everything we do. No hidden agendas, no secrets—just transparent, trustworthy software.",
    },
    {
        icon: Users,
        title: "Community Driven",
        description: "Built by developers, for developers. We listen to our community and evolve based on real needs, not profit margins.",
    },
    {
        icon: Github,
        title: "Open Source",
        description: "Every line of code is available for inspection. Contribute, learn, and help us make Clipposaurus even better.",
    },
    {
        icon: Heart,
        title: "Passion Project",
        description: "Created with love and maintained by people who care about making great tools accessible to everyone.",
    },
];

export const AboutContent = (): React.ReactNode => {
    return (
        <div className="space-y-20 pb-16">
            {/* Main Mission Statement */}
            <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-emerald-400 to-transparent dark:from-emerald-400 dark:via-emerald-500 dark:to-transparent" />
                <div className="pl-8 sm:pl-12 space-y-6">
                    <div className="flex items-center gap-3">
                        <Sparkles className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100">
                            Our Mission
                        </h2>
                    </div>
                    <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-4xl">
                        Clipposaurus is an <span className="font-bold text-emerald-600 dark:text-emerald-400">open-source project built for trust, not for money</span>.
                        We believe in creating tools that serve the community, prioritize user privacy, and remain transparent
                        in every aspect of development. Our commitment is to build software that earns your trust through
                        openness, security, and a genuine dedication to solving real problems.
                    </p>
                </div>
            </div>

            {/* Core Values */}
            <div className="space-y-8">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                        What Drives Us
                    </h2>
                    <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                    {coreValues.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <div
                                key={value.title}
                                className="group relative"
                            >
                                {/* Connecting line for desktop */}
                                {index < 2 && (
                                    <div className="hidden md:block absolute top-8 -right-6 w-12 h-px bg-gradient-to-r from-zinc-300 to-transparent dark:from-zinc-700 dark:to-transparent" />
                                )}

                                <div className="flex gap-6 items-start">
                                    {/* Icon */}
                                    <div className="relative flex-shrink-0">
                                        <div className="absolute inset-0 bg-emerald-500/20 dark:bg-emerald-400/20 blur-xl group-hover:bg-emerald-500/30 dark:group-hover:bg-emerald-400/30 transition-all duration-300" />
                                        <div className="relative w-16 h-16 flex items-center justify-center">
                                            <div className="absolute inset-0 border-2 border-zinc-300 dark:border-zinc-700 group-hover:border-emerald-500/50 dark:group-hover:border-emerald-400/50 transition-all duration-300" />
                                            <Icon className="relative w-8 h-8 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 space-y-3 pt-2">
                                        <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                                            {value.title}
                                        </h3>
                                        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom border */}
                                <div className="mt-8 h-px bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-200 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800" />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Call to Action */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-400/5" />
                <div className="relative border-y-2 border-zinc-200 dark:border-zinc-800 py-12 sm:py-16">
                    <div className="text-center space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-100">
                                Join Our Community
                            </h2>
                            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                                Whether you want to contribute code, report issues, or simply use our tools,
                                we welcome you to be part of our growing community.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                            <a
                                href="https://github.com/clipposaurus/clipposaurus"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white font-semibold text-lg transition-all duration-300 hover:gap-4"
                            >
                                <Github className="w-5 h-5" />
                                View on GitHub
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </a>

                            <a
                                href="/contact"
                                className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-zinc-300 dark:border-zinc-700 hover:border-emerald-500 dark:hover:border-emerald-400 text-zinc-900 dark:text-zinc-100 font-semibold text-lg transition-all duration-300 hover:gap-4"
                            >
                                Get in Touch
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
