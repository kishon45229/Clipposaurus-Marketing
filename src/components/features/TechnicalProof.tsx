"use client";

import { Check } from "lucide-react";
import { useFeature } from "@/context/FeatureContext";

interface TechnicalProofItem {
    metric: string;
    label: string;
    detail: string;
}

export const TechnicalProof = () => {
    const { data } = useFeature();
    const technicalProof = data.technicalProof || [];

    if (!technicalProof.length) return null;

    return (
        <div className="w-full max-w-5xl mx-auto px-4">
            <div className="relative bg-gradient-to-br from-emerald-50/80 to-white/80 dark:from-zinc-900/80 dark:to-zinc-950/80 backdrop-blur-sm border-2 border-emerald-500/20 dark:border-emerald-500/20 rounded-3xl p-8 lg:p-10 shadow-[0_8px_30px_rgb(16,185,129,0.12)]">
                {/* Background pattern */}
                <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-40" />

                {/* Content */}
                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {technicalProof.map((item: TechnicalProofItem, index: number) => (
                        <div key={index} className="flex flex-col items-center text-center space-y-2">
                            {/* Checkmark badge */}
                            <div className="w-12 h-12 flex items-center justify-center bg-emerald-500/10 dark:bg-emerald-500/20 border-2 border-emerald-500/30 rounded-full mb-2">
                                <Check className="w-6 h-6 text-emerald-600 dark:text-emerald-500" strokeWidth={3} />
                            </div>

                            {/* Metric */}
                            <div className="text-2xl lg:text-3xl font-black text-emerald-600 dark:text-emerald-500 font-mono tracking-tight">
                                {item.metric}
                            </div>

                            {/* Label */}
                            <div className="text-sm lg:text-base font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
                                {item.label}
                            </div>

                            {/* Detail */}
                            <div className="text-xs lg:text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                                {item.detail}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust footer */}
                <div className="relative mt-8 pt-6 border-t border-zinc-200/50 dark:border-zinc-800/50 text-center">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        <span className="font-semibold text-zinc-900 dark:text-zinc-100">Don&apos;t take our word for it.</span>
                        {" "}Review our open-source code or run your own security audit.
                    </p>
                </div>
            </div>
        </div>
    );
};
