import { PrivacyHeader } from "@/components/privacy/PrivacyHeader";
import { PrivacyInStages } from "@/components/privacy/PrivacyInStages";
import { BackgroundDecoration } from "@/components/common/BackgroundDecoration";
import { PrivacyCTA } from "@/components/privacy/PrivacyCTA";

export const PrivacyContent = () => {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden px-4 py-16 lg:py-24">
            <BackgroundDecoration />

            <div className="relative max-w-7xl mx-auto w-full flex flex-col items-center gap-8 lg:gap-12">
                <PrivacyHeader />
                <PrivacyInStages />
                <PrivacyCTA />
            </div>
        </section>
    );
};
