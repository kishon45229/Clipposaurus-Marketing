"use client";

import React from "react";
import { useSecurity } from "@/context/SecurityContext";

export const SecurityHeader = () => {
    const { data } = useSecurity();

    return (
        <div className="text-center space-y-4">
            <div className="text-4xl lg:text-5xl font-black text-white">
                {data.title}
                <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                    {" "}{data.titleHighlight}
                </span>
            </div>
            <div className="text-lg text-zinc-400 max-w-2xl mx-auto">
                {data.description}
            </div>
        </div>
    );
};