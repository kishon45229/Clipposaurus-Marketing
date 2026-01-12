"use client";

import { Upload, Key, Download, CheckCircle } from "lucide-react";
import { useHowItWorks } from "@/context/HowItWorksContext";

const getIcon = (iconName: string) => {
    switch (iconName) {
        case "Upload":
            return Upload;
        case "Key":
            return Key;
        case "Download":
            return Download;
        case "CheckCircle":
            return CheckCircle;
        default:
            return Upload;
    }
};

export const HowItWorksSteps = () => {
    const { data } = useHowItWorks();

    return (
        <section className="relative h-[90dvh] flex items-center">
            <div className="w-full max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-x-12">
                    {data.steps.map((step, index) => {
                        const Icon = getIcon(step.iconName);

                        return (
                            <div
                                key={index}
                                className="relative flex flex-col min-h-[70dvh] group"
                            >
                                {/* Column divider */}
                                <span className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-300/60 to-transparent dark:via-zinc-700/60" />

                                {/* Step header stack */}
                                <div className="pt-6">
                                    {/* Step number */}
                                    <span className="block text-7xl font-black text-zinc-300 dark:text-zinc-900 leading-none select-none">
                                        {step.stepNumber}
                                    </span>

                                    {/* Icon */}
                                    <div className="mt-2 mb-4">
                                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/30 transition-transform duration-300 group-hover:-translate-y-1">
                                            <Icon
                                                className="w-7 h-7 text-white"
                                                strokeWidth={2.5}
                                            />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                                        {step.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* subtle depth */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
        </section>
    );
};
