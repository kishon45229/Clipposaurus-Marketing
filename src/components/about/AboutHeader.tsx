"use client";

import React from "react";
import Image from "next/image";
import { useAbout } from "@/contexts/AboutContext";

export const AboutHeader = (): React.ReactNode => {
    const { data } = useAbout();
    const { header } = data;
    const { title, subtitle } = header;

    return (
        <div className="text-center space-y-6 py-8">
            <div className="flex justify-center">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                    <Image
                        src="/icon0.svg"
                        alt="Clipposaurus Logo"
                        width={128}
                        height={128}
                        className="w-full h-full"
                    />
                </div>
            </div>
            <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                    {title}
                </h1>
                <p className="text-xl sm:text-2xl text-emerald-600 dark:text-emerald-400 font-medium">
                    {subtitle}
                </p>
            </div>
        </div>
    );
};
