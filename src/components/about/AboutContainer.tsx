"use client";

import React from "react";
import { AboutHeader } from "./AboutHeader";
import { AboutContent } from "./AboutContent";

export const AboutContainer = (): React.ReactNode => {
    return (
        <div className="space-y-8 px-4 sm:px-6 lg:px-8">
            <AboutHeader />
            <AboutContent />
        </div>
    );
};
