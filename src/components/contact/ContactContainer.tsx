"use client";

import React from "react";
import { ContactHeader } from "./ContactHeader";
import { ContactContent } from "./ContactContent";

export const ContactContainer = (): React.ReactNode => {
    return (
        <div className="space-y-8 px-4 sm:px-6 lg:px-8">
            <ContactHeader />
            <ContactContent />
        </div>
    );
};
