"use client";

import { FileText, Code, Lock, LucideIcon } from "lucide-react";
import { useWhatCanShare } from "@/context/WhatCanShareContext";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from 'next-themes';

export const STACK_CARD_HEIGHT = 320;
export const STACK_OFFSET = 14;

const iconMap: Record<string, LucideIcon> = {
    filetext: FileText,
    code: Code,
};

export interface StackItem {
    type: string;
    label: string;
    language?: string;
    preview?: string;
    icon: string;
}

export const StackItemCard = ({ item, index, isHovered, isActive, onHover }: {
    item: StackItem;
    index: number;
    isHovered: boolean;
    isActive: boolean;
    onHover: (index: number | null) => void;
}) => {
    const { lockAnimated, triggerLockAnimation, getTransform, getZIndex, getOpacity } = useWhatCanShare();
    const { theme } = useTheme();
    const IconComponent = iconMap[item.icon.toLowerCase()] || FileText;

    const handleMouseEnter = () => {
        onHover(index);
        triggerLockAnimation(index);
    };

    const transform = getTransform(index, isActive, isHovered);
    const zIndex = getZIndex(index, isActive, isHovered);
    const opacity = getOpacity(index, isActive);

    return (
        <div
            className="group relative bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer overflow-hidden flex flex-col"
            style={{
                transform,
                zIndex,
                opacity,
                height: `${STACK_CARD_HEIGHT}px`,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => onHover(null)}
        >
            {/* Encrypted badge with animation */}
            <div className={`
                absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 
                bg-emerald-500/10 dark:bg-emerald-500/20 rounded-lg border border-emerald-500/20
                transition-all duration-300
                ${lockAnimated[index] ? 'scale-110 bg-emerald-500/20' : ''}
            `}>
                <Lock className={`w-3 h-3 text-emerald-600 dark:text-emerald-400 transition-transform duration-300 ${lockAnimated[index] ? 'rotate-12' : ''}`} />
                <span className="text-xs font-medium text-emerald-700 dark:text-emerald-300">Encrypted</span>
            </div>

            {/* Content based on type */}
            <div className="p-6 flex-1 flex flex-col gap-4 overflow-hidden">
                {/* Header with icon and label */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center shrink-0">
                        <IconComponent className="w-5 h-5 text-emerald-600 dark:text-emerald-400" strokeWidth={2} />
                    </div>
                    <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {item.label}
                    </span>
                </div>

                {/* Type-specific content */}
                <div className="flex-1 space-y-4 overflow-hidden">
                    {item.type === "text" && (
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-5">
                            {item.preview}
                        </p>
                    )}

                    {item.type === "code" && (
                        <SyntaxHighlighter
                            language={item.language || 'javascript'}
                            style={theme === 'dark' ? oneDark : vs}
                            customStyle={{
                                margin: 0,
                                padding: '12px',
                                borderRadius: '8px',
                                fontSize: '12px',
                                lineHeight: '1.5',
                                maxHeight: '192px',
                                overflow: 'auto',
                                backgroundColor: theme === 'dark' ? 'rgb(39 39 42 / 0.5)' : 'rgb(244 244 245)',
                            }}
                        >
                            {item.preview || ''}
                        </SyntaxHighlighter>
                    )}
                </div>
            </div>

            {/* Bottom gradient line on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-emerald-500 via-blue-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
    );
};