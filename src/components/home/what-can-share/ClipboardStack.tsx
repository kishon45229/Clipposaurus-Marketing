"use client";

import { useWhatCanShare } from "@/context/WhatCanShareContext";
import { StackItemCard, StackItem } from "./StackItemCard";
import { STACK_CARD_HEIGHT, STACK_OFFSET } from "@/hooks/useStackRotation";

export const ClipboardStack = () => {
    const { data, hoveredIndex, setHoveredIndex, activeIndex, setActiveIndex, isPaused, setIsPaused, handleMouseEnter, handleMouseLeave } = useWhatCanShare();
    const { stackItems } = data;

    const stackDepth = Math.max(stackItems.length, 1);
    const stackHeight = STACK_CARD_HEIGHT + STACK_OFFSET * (stackDepth - 1);

    return (
        <div
            className="grid grid-rows-[1fr_auto] gap-8 relative w-full max-w-xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-right-4 duration-700 delay-200"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* STACKED CARDS */}
            <div
                className="relative perspective-distance"
                style={{ height: `${stackHeight}px` }}
            >
                {stackItems.map((item: StackItem, index: number) => (
                    <div
                        key={index}
                        className="absolute inset-x-0 bottom-0"
                    >
                        <StackItemCard
                            item={item}
                            index={index}
                            isHovered={hoveredIndex === index}
                            isActive={activeIndex === index}
                            onHover={setHoveredIndex}
                        />
                    </div>
                ))}
            </div>

            {/* AUTO-ROTATION INDICATORS */}
            <div className="flex items-center justify-center gap-2 mt-0">
                {stackItems.map((stackItem: StackItem, index: number) => (
                    <button
                        key={index}
                        onClick={() => {
                            setActiveIndex(index);
                            setIsPaused(true);
                            setTimeout(() => setIsPaused(false), 5000);
                        }}
                        className={`h-2 rounded-full transition-all duration-500 ${activeIndex === index
                            ? 'w-8 bg-emerald-500'
                            : 'w-2 bg-zinc-300 dark:bg-zinc-700 hover:bg-emerald-400'
                            }`}
                        aria-label={`View ${stackItem.label} card`}
                    />
                ))}
            </div>
        </div>
    );
};
