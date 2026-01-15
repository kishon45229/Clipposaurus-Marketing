"use client";

import { FileText, Code, Image as ImageIcon, Package, Lock, LucideIcon } from "lucide-react";
import { useWhatCanShare } from "@/context/WhatCanShareContext";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from 'next-themes';

export const STACK_CARD_HEIGHT = 320;
export const STACK_OFFSET = 14;

const iconMap: Record<string, LucideIcon> = {
    filetext: FileText,
    code: Code,
    image: ImageIcon,
    package: Package,
};

export interface StackItem {
    type: string;
    label: string;
    preview?: string;
    language?: string;
    filename?: string;
    size?: string;
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
                            {item.preview}
                        </SyntaxHighlighter>
                    )}

                    {item.type === "image" && (
                        <div className="space-y-3">
                            <div className="w-full h-40 bg-linear-to-br from-emerald-100 via-blue-100 to-violet-100 dark:from-emerald-900/30 dark:via-blue-900/30 dark:to-violet-900/30 rounded-lg flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.3),transparent_50%)]" />
                                <ImageIcon className="w-16 h-16 text-zinc-400 dark:text-zinc-600 relative z-10" strokeWidth={1.5} />
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-zinc-600 dark:text-zinc-400 truncate">{item.preview}</span>
                                <span className="text-xs text-zinc-500 dark:text-zinc-500 ml-2 shrink-0">{item.size}</span>
                            </div>
                        </div>
                    )}

                    {item.type === "file" && (
                        <div className="flex items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg">
                            <div className="flex items-center gap-3 min-w-0">
                                <div className="w-10 h-10 bg-blue-500/10 dark:bg-blue-500/20 rounded-lg flex items-center justify-center shrink-0">
                                    <Package className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate">
                                        {item.filename}
                                    </p>
                                    <p className="text-xs text-zinc-500 dark:text-zinc-500">{item.size}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom gradient line on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-emerald-500 via-blue-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
    );
};