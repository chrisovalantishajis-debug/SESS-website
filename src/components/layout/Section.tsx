import React from "react";

export function Section({
    children,
    className = "",
    hasDivider = true,
    id,
}: {
    children: React.ReactNode;
    className?: string;
    hasDivider?: boolean;
    id?: string;
}) {
    return (
        <section id={id} className={`relative w-full py-16 md:py-24 ${className}`}>
            {children}
            {hasDivider && (
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-sess-divider" />
            )}
        </section>
    );
}
