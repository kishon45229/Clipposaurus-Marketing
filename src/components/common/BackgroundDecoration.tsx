"use client";

export const BackgroundDecoration = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* PRIMARY EMERALD GLOW */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />

            {/* SECONDARY GLOW */}
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-zinc-500/10 dark:bg-zinc-500/5 rounded-full blur-3xl" />

            {/* ACCENT GLOW */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-400/5 dark:bg-emerald-400/3 rounded-full blur-3xl" />

            {/* SUBTLE GRID */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_40%,transparent_100%)]" />
        </div>
    );
};