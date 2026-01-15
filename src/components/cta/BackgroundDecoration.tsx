"use client";

export const BackgroundDecoration = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-[clamp(2rem,8vw,8rem)] w-[clamp(200px,40vw,400px)] h-[clamp(200px,40vw,400px)] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-[clamp(2rem,8vw,8rem)] w-[clamp(200px,40vw,400px)] h-[clamp(200px,40vw,400px)] bg-zinc-500/10 dark:bg-zinc-500/5 rounded-full blur-3xl" />
        </div>
    );
};