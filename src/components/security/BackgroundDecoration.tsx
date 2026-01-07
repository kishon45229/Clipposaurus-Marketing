"use client";

import React from "react";

export const BackgroundDecoration = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]" />
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)]" />
        </div>
    );
};