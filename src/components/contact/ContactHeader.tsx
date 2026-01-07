"use client";

import React from "react";

export const ContactHeader = (): React.ReactNode => {
    return (
        <div className="relative pt-12 pb-8">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl" />
                <div className="absolute top-20 right-1/4 w-80 h-80 bg-emerald-400/10 dark:bg-emerald-400/5 rounded-full blur-3xl" />
            </div>
            <div className="text-center space-y-6">
                <div className="inline-block">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent via-emerald-500 to-emerald-500" />
                        <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Get in Touch</span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent via-emerald-500 to-emerald-500" />
                    </div>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                    <span className="bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-600 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-400 bg-clip-text text-transparent">
                        Contact Us
                    </span>
                </h1>
                <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                    Choose the best way to reach us and we'll respond as soon as possible
                </p>
            </div>
        </div>
    );
};
