import React from "react";
import { ContactContainer } from "@/components/contact/ContactContainer";

/**
 * CONTACT US PAGE COMPONENT
 * @returns SERVER COMPONENT
 */
export default function ContactPage(): React.ReactElement {
    return (
        <section className="xl:min-h-screen max-w-4xl mx-auto py-2 sm:py-4">
            <ContactContainer />
        </section>
    );
}
