"use client";

import { Plus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCTA } from "@/context/CTAContext";

export const CTAButtons = () => {
    const { data } = useCTA();
    const { buttonText } = data;

    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Button
                onClick={() => alert("Get Started clicked!")}
                size="lg"
                className="group h-16 px-12 text-lg font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 rounded-2xl shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-300"
            >
                <span className="flex items-center gap-3">
                    <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                    <span>{buttonText}</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
            </Button>
        </div>
    );
};