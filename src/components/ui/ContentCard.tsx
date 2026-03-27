import React from "react";

export function ContentCard({
    title,
    description,
    children,
    className = "",
}: {
    title?: string;
    description?: string;
    children?: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={`bg-sess-surface rounded-2xl border border-sess-divider p-8 flex flex-col gap-4 ${className}`}>
            {title && <h3 className="font-heading text-xl font-bold text-sess-text-primary">{title}</h3>}
            {description && <p className="text-sess-muted leading-relaxed">{description}</p>}
            {children}
        </div>
    );
}
