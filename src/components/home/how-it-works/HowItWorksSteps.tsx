"use client";

import { Upload, Key, Download, CheckCircle } from "lucide-react";
import { useHowItWorks } from "@/contexts/HowItWorksContext";
import type { HowItWorksComponentType } from "@/components/home/how-it-works/HowItWorks.types";

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

const MobileSteps = ({ data }: { data: HowItWorksComponentType }) => {
    return (
        <div className="lg:hidden flex flex-col gap-0">
            {data.steps.map((step, index) => {
                const Icon = getIcon(step.iconName);
                const isLast = index === data.steps.length - 1;

                return (
                    <div key={index} className="relative flex gap-[clamp(1rem,3vw,1.5rem)]">
                        {/* LEFT SIDE: TIMELINE */}
                        <div className="relative flex flex-col items-center">
                            {/* ICON CIRCLE */}
                            <div className="relative z-10 flex items-center justify-center w-[clamp(3rem,6vw,4rem)] h-[clamp(3rem,6vw,4rem)] rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/30 border-4 border-zinc-100 dark:border-zinc-900">
                                <Icon className="w-[clamp(1.5rem,3vw,1.75rem)] h-[clamp(1.5rem,3vw,1.75rem)] text-white" strokeWidth={2.5} />
                            </div>

                            {/* CONNECTING LINE */}
                            {!isLast && (
                                <div className="absolute top-16 left-1/2 -translate-x-1/2 w-1 h-full bg-linear-to-b from-emerald-500 via-emerald-400/50 to-transparent" />
                            )}
                        </div>

                        {/* RIGHT SIDE: CONTENT */}
                        <div className="flex-1 pb-[clamp(2rem,6vw,3rem)]">
                            <div className="pt-2">
                                {/* STEP NUMBER */}
                                <span className="inline-block px-[clamp(0.5rem,1.5vw,0.75rem)] py-[clamp(0.25rem,0.75vw,0.25rem)] text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 rounded-full border border-emerald-200 dark:border-emerald-800">
                                    STEP {step.stepNumber}
                                </span>

                                {/* TITLE */}
                                <h3 className="mt-[clamp(0.5rem,1.5vw,0.75rem)] text-[clamp(1rem,2.5vw,1.25rem)] font-bold text-zinc-900 dark:text-zinc-50">
                                    {step.title}
                                </h3>

                                {/* DESCRIPTION */}
                                <p className="mt-[clamp(0.25rem,0.75vw,0.5rem)] text-[clamp(0.75rem,1.5vw,0.875rem)] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const DesktopSteps = ({ data }: { data: HowItWorksComponentType }) => {
    return (
        <div className="hidden lg:block relative">
            {/* HORIZONTAL ROAD LINE */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-linear-to-r from-emerald-500 via-emerald-400 to-emerald-500" />

            {/* CONNECTION DOTS */}
            <div className="absolute top-16 left-0 right-0 flex justify-between">
                {data.steps.map((_, index) => (
                    <div key={index} className="w-[clamp(0.5rem,1vw,0.75rem)] h-[clamp(0.5rem,1vw,0.75rem)] rounded-full bg-emerald-500 -translate-y-1" />
                ))}
            </div>

            {/* STEPS */}
            <div className="grid grid-cols-4 gap-[clamp(1rem,3vw,1.5rem)]">
                {data.steps.map((step, index) => {
                    const Icon = getIcon(step.iconName);
                    const isEven = index % 2 === 0;

                    return (
                        <div key={index} className="relative flex flex-col items-center">
                            {/* TOP POSITION (ALTERNATING) */}
                            {isEven && (
                                <div className="flex flex-col items-center mb-[clamp(1.5rem,4vw,2rem)]">
                                    {/* CONTENT CARD */}
                                    <div className="relative bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl p-[clamp(1rem,3vw,1.5rem)] shadow-xl group hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 hover:-translate-y-1">
                                        {/* STEP NUMBER BADGE */}
                                        <span className="inline-block px-[clamp(0.5rem,1.5vw,0.75rem)] py-[clamp(0.25rem,0.75vw,0.25rem)] text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 rounded-full border border-emerald-200 dark:border-emerald-800 mb-[clamp(0.5rem,1.5vw,0.75rem)]">
                                            STEP {step.stepNumber}
                                        </span>

                                        {/* TITLE */}
                                        <h3 className="text-[clamp(0.875rem,2vw,1rem)] font-bold text-zinc-900 dark:text-zinc-50 mb-[clamp(0.25rem,0.75vw,0.5rem)]">
                                            {step.title}
                                        </h3>

                                        {/* DESCRIPTION */}
                                        <p className="text-[clamp(0.75rem,1.5vw,0.875rem)] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                            {step.description}
                                        </p>

                                        {/* ARROW POINTING DOWN */}
                                        <div className="absolute -bottom-[clamp(1rem,3vw,1.5rem)] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[clamp(0.5rem,1.5vw,0.75rem)] border-r-[clamp(0.5rem,1.5vw,0.75rem)] border-t-[clamp(0.5rem,1.5vw,0.75rem)] border-transparent border-t-zinc-200 dark:border-t-zinc-800 group-hover:border-t-emerald-500 transition-colors duration-300" />
                                    </div>
                                </div>
                            )}

                            {/* ICON CIRCLE (CENTER OF ROADMAP) */}
                            <div className="relative z-10 flex items-center justify-center w-[clamp(4rem,8vw,5rem)] h-[clamp(4rem,8vw,5rem)] rounded-full bg-emerald-500 shadow-2xl shadow-emerald-500/40 border-4 border-zinc-100 dark:border-zinc-900 group hover:scale-110 transition-transform duration-300">
                                <Icon className="w-[clamp(2rem,4vw,2.25rem)] h-[clamp(2rem,4vw,2.25rem)] text-white" strokeWidth={2.5} />
                            </div>

                            {/* BOTTOM POSITION (ALTERNATING) */}
                            {!isEven && (
                                <div className="flex flex-col items-center mt-[clamp(1.5rem,4vw,2rem)]">
                                    {/* CONTENT CARD */}
                                    <div className="relative bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl p-[clamp(1rem,3vw,1.5rem)] shadow-xl group hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 hover:translate-y-1">
                                        {/* ARROW POINTING UP */}
                                        <div className="absolute -top-[clamp(1rem,3vw,1.5rem)] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[clamp(0.5rem,1.5vw,0.75rem)] border-r-[clamp(0.5rem,1.5vw,0.75rem)] border-b-[clamp(0.5rem,1.5vw,0.75rem)] border-transparent border-b-zinc-200 dark:border-b-zinc-800 group-hover:border-b-emerald-500 transition-colors duration-300" />

                                        {/* STEP NUMBER BADGE */}
                                        <span className="inline-block px-[clamp(0.5rem,1.5vw,0.75rem)] py-[clamp(0.25rem,0.75vw,0.25rem)] text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 rounded-full border border-emerald-200 dark:border-emerald-800 mb-[clamp(0.5rem,1.5vw,0.75rem)]">
                                            STEP {step.stepNumber}
                                        </span>

                                        {/* TITLE */}
                                        <h3 className="text-[clamp(0.875rem,2vw,1rem)] font-bold text-zinc-900 dark:text-zinc-50 mb-[clamp(0.25rem,0.75vw,0.5rem)]">
                                            {step.title}
                                        </h3>

                                        {/* DESCRIPTION */}
                                        <p className="text-[clamp(0.75rem,1.5vw,0.875rem)] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export const HowItWorksSteps = () => {
    const { data } = useHowItWorks();

    return (
        <section className="relative w-full flex items-center justify-center">
            <div className="w-full max-w-7xl mx-auto px-[clamp(1rem,4vw,2rem)]">
                <MobileSteps data={data} />
                <DesktopSteps data={data} />
            </div>
        </section>
    );
};
