import React from "react";

export function DiagonalSection({
    children,
    className = "",
    direction = "right",
    bgClass = "bg-sess-surface",
}: {
    children: React.ReactNode;
    className?: string;
    direction?: "left" | "right";
    bgClass?: string;
}) {
    // We use a clean geometric clip-path. 4vw provides a slight but structural angle consistent across all screen sizes.
    const clipPathStyle =
        direction === "right"
            ? { clipPath: "polygon(0 0, 100% 4vw, 100% 100%, 0 calc(100% - 4vw))" }
            : { clipPath: "polygon(0 4vw, 100% 0, 100% calc(100% - 4vw), 0 100%)" };

    return (
        <div className={`relative w-full py-32 md:py-40 ${bgClass} ${className}`} style={clipPathStyle}>
            {children}
        </div>
    );
}
