import React from "react";

export function Container({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={`mx-auto w-full max-w-7xl px-6 md:px-12 grid grid-cols-12 gap-6 ${className}`}
        >
            {children}
        </div>
    );
}
