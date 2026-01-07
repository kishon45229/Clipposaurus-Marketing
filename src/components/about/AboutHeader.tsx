"use client";

import React from "react";

export const AboutHeader = (): React.ReactNode => {
    return (
        <div className="relative pt-12 pb-16">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 right-1/3 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl" />
                <div className="absolute top-32 left-1/4 w-80 h-80 bg-emerald-400/10 dark:bg-emerald-400/5 rounded-full blur-3xl" />
            </div>
            <div className="text-center space-y-8">
                <div className="inline-block">
                    <div className="flex items-center justify-center space-x-2 mb-6">
                        <div className="h-px w-8 bg-gradient-to-r from-transparent to-emerald-500" />
                        <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Open Source</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        </div>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-emerald-500" />
                    </div>
                </div>
                <div className="space-y-4">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                        <span className="block bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-600 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-400 bg-clip-text text-transparent">
                            About Clipposaurus
                        </span>
                    </h1>
                    <div className="relative inline-block">
                        <div className="absolute inset-0 bg-emerald-500/20 dark:bg-emerald-400/20 blur-xl" />
                        <p className="relative text-xl sm:text-2xl font-semibold text-emerald-600 dark:text-emerald-400">
                            Built for trust, not for money
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
