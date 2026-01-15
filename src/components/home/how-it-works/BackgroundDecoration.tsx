"use client";

export const BackgroundDecoration = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/3 left-1/4 w-[clamp(200px,40vw,400px)] h-[clamp(200px,40vw,400px)] bg-emerald-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-1/4 w-[clamp(200px,40vw,400px)] h-[clamp(200px,40vw,400px)] bg-zinc-500/5 rounded-full blur-3xl" />
        </div>
    );
};