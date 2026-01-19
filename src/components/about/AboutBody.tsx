"use client";

import React from "react";
import { useAbout } from "@/contexts/AboutContext";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export const AboutBody = (): React.ReactNode => {
    const { data, handleRedirectToGitHubSponsor } = useAbout();

    const { body } = data;
    const { title, story, donation } = body;
    const { title: donationTitle, description: donationDescription, ctaText } = donation;

    return (
        <div className="max-w-6xl mx-auto space-y-6 py-4">
            <div className="space-y-4">
                <div className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 text-center">
                    {title}
                </div>
                <div className="text-sm sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed text-center">
                    {Object.values(story).map((paragraph, index) => (
                        <p key={index} className="mb-4">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>

            <div className="border-t-2 border-zinc-200 dark:border-zinc-800 pt-12 space-y-6">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400 text-center">
                    {donationTitle}
                </div>
                <div className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed text-center">
                    {donationDescription}
                </div>
                <div className="flex justify-center pt-4">
                    <Button
                        onClick={handleRedirectToGitHubSponsor}
                        size="lg"
                        className="group home-primary-button cursor-target"
                    >
                        <Heart className="mr-1 w-4 h-4 transition-transform group-hover:scale-110" />
                        {ctaText}
                    </Button>
                </div>
            </div>
        </div>
    );
};