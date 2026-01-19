"use client";

import React from "react";
import { useAbout } from "@/contexts/AboutContext";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ExternalLink, Mail } from "lucide-react";

export const AboutFooter = (): React.ReactNode => {
    const { data, handleRedirectToGitHub, handleContactUs } = useAbout();

    const { footer } = data;
    const { title, description, githubText, contactText } = footer;

    return (
        <div className="max-w-4xl mx-auto py-6 sm:py-12">
            <div className="bg-gradient-to-br from-emerald-500/5 to-emerald-400/10 dark:from-emerald-500/10 dark:to-emerald-400/5 border-2 border-emerald-500/20 dark:border-emerald-500/30 rounded-3xl p-8 sm:p-12">
                <div className="text-center space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100">
                            {title}
                        </h2>
                        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            {description}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <Button
                            onClick={handleRedirectToGitHub}
                            size="lg"
                            className="group home-primary-button cursor-target"
                        >
                            <FontAwesomeIcon icon={faGithub} className="w-4 h-4 mr-1 transition-transform group-hover:scale-110" />
                            {githubText}
                            <ExternalLink className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-1" />
                        </Button>

                        <Button
                            onClick={handleContactUs}
                            size="lg"
                            variant="outline"
                            className="group home-secondary-button cursor-target"
                        >
                            {contactText}
                            <Mail className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};