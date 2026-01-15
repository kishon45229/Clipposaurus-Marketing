import { WhatCanShareHeader } from "@/components/home/what-can-share/WhatCanShareHeader"
import { ClipboardStack } from "@/components/home/what-can-share/ClipboardStack";
import { TrustReinforcement } from "@/components/home/what-can-share/TrustReinforcement";
import { WhatCanShareCTA } from "@/components/home/what-can-share/WhatCanShareCTA";
import { BackgroundDecoration } from "@/components/common/BackgroundDecoration";

export const WhatCanShareContent = () => {
    return (
        <section className="relative flex flex-col items-center w-full h-full overflow-hidden px-[clamp(1rem,1.5vw,1.5rem)]">
            <BackgroundDecoration />

            <div className="relative max-w-7xl w-full h-full mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(3rem,4vw,4rem)] h-full items-center p-[clamp(2rem,3vw,3.5rem)] rounded-3xl dark:border-zinc-800/70 bg-white/90 dark:bg-zinc-950/70 shadow-[0_30px_120px_-80px_rgba(16,185,129,0.5)]">
                    <div className="space-y-8 order-2 lg:order-1">
                        <WhatCanShareHeader />
                        <TrustReinforcement />
                        <WhatCanShareCTA />
                    </div>

                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <ClipboardStack />
                    </div>
                </div>
            </div>
        </section>
    );
};
