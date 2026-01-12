"use client";

import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

const BETA_NOTICE_KEY = "clipposaurus_beta_notice_acknowledged";

export const BetaNotice = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    React.useEffect(() => {
        const hasAcknowledged = localStorage.getItem(BETA_NOTICE_KEY);
        if (!hasAcknowledged) {
            setTimeout(() => setIsOpen(true), 500);
        }
    }, []);

    const handleAcknowledge = () => {
        localStorage.setItem(BETA_NOTICE_KEY, "true");
        setIsOpen(false);
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <div className="flex items-center mb-2 gap-[clamp(0.5rem,2vw,0.75rem)]">
                        <div className="flex-shrink-0 rounded-full bg-amber-500/10 flex items-center justify-center w-[clamp(2.25rem,6vw,2.5rem)] h-[clamp(2.25rem,6vw,2.5rem)]">
                            <AlertTriangle className="text-amber-500 w-[clamp(1rem,3vw,1.25rem)] h-[clamp(1rem,3vw,1.25rem)]" />
                        </div>

                        <DialogTitle className="tracking-tight text-[clamp(1.1rem,3vw,1.25rem)] text-gray-900">
                            Beta Testing Notice
                        </DialogTitle>
                    </div>

                    <DialogDescription className="text-left pt-2 text-[clamp(0.85rem,2vw,0.95rem)] text-gray-900">
                        <div className="flex flex-col gap-[clamp(0.75rem,2vw,1rem)]">
                            <div className="text-gray-900">
                                Clipposaurus is currently in{" "}
                                <strong className="text-foreground">beta testing</strong>.
                                While we strive to provide a stable experience, please be aware that:
                            </div>

                            <ul className="list-disc list-inside ml-2 text-[clamp(0.8rem,1.8vw,0.9rem)] space-y-[clamp(0.4rem,1.2vw,0.5rem)] text-gray-900">
                                <li>You may encounter occasional errors or bugs</li>
                                <li>Service may be temporarily unavailable during updates</li>
                                <li>Features are subject to change as we improve the platform</li>
                            </ul>

                            <div className="text-[clamp(0.8rem,1.8vw,0.9rem)] text-gray-900">
                                We appreciate your patience and welcome any feedback to help us improve Clipposaurus.
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter className="sm:justify-center">
                    <Button
                        onClick={handleAcknowledge}
                        className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-[clamp(0.85rem,2vw,1rem)] px-[clamp(1rem,4vw,1.5rem)] py-[clamp(0.5rem,2vw,0.65rem)] cursor-target"
                    >
                        I Understand
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};