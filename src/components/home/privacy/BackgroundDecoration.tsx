"use client";

import React from "react";

export const BackgroundDecoration = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Subtle emerald accent */}
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

            {/* Zinc base layer */}
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-zinc-500/5 rounded-full blur-3xl" />
        </div>
    );
};
