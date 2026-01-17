"use client";

import { usePrivacy } from "@/contexts/PrivacyContext";
import { ArrowRight } from "lucide-react";

export const PrivacyInStages = () => {
  const { data } = usePrivacy();
  const { stages } = data;

  return (
    <section className="relative max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {stages.map((stage, index) => (
          <div
            key={stage.id}
            className="relative group"
          >
            <div className="flex flex-col h-full p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-300">
              {/* STEP NUMBER */}
              <div className="shrink-0 w-10 h-10 rounded-full border-2 border-emerald-500 bg-emerald-500/10 flex items-center justify-center mb-4">
                <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{index + 1}</span>
              </div>

              {/* CONTENT */}
              <div className="flex-1">
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  {stage.label}
                </h3>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
                  {stage.description}
                </p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  {stage.detail}
                </p>
              </div>
            </div>

            {/* ARROW CONNECTOR FOR LARGE SCREENS */}
            {index < stages.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                <ArrowRight className="w-5 h-5 text-zinc-400 dark:text-zinc-600" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
