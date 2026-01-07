import React from "react";
import { AboutContainer } from "@/components/about/AboutContainer";

/**
 * ABOUT PAGE COMPONENT
 * @returns SERVER COMPONENT
 */
export default function AboutPage(): React.ReactElement {
    return (
        <section className="xl:min-h-screen max-w-4xl mx-auto py-2 sm:py-4">
            <AboutContainer />
        </section>
    );
}
