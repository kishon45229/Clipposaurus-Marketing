"use client";

import React from "react";
import { AboutHeader } from "@/components/about/AboutHeader";
import { AboutBody } from "@/components/about/AboutBody";
import { AboutFooter } from "@/components/about/AboutFooter";

export const AboutContent = (): React.ReactNode => {
    return (
        <div className="mx-auto space-y-16 px-4">
            <AboutHeader />
            <AboutBody />
            <AboutFooter />
        </div>
    );
};
