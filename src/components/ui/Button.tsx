import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    className?: string;
    children: React.ReactNode;
}

export function Button({
    variant = "primary",
    size = "md",
    className = "",
    children,
    ...props
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center font-heading font-black transition-all duration-200 ease-out shadow-sm uppercase tracking-tight";

    const sizes = {
        sm: "h-10 px-6 text-xs",
        md: "h-12 px-8 text-sm",
        lg: "h-16 px-10 text-lg",
    };

    const variants = {
        primary:
            "bg-sess-primary text-sess-text-primary hover:scale-[1.03] hover:shadow-lg hover:shadow-sess-primary/20 border border-transparent",
        secondary:
            "bg-sess-surface text-sess-text-primary border border-sess-divider hover:scale-[1.03] hover:border-sess-muted",
        outline:
            "bg-transparent text-sess-text-primary border-2 border-sess-divider hover:scale-[1.03] hover:border-sess-primary/50",
    };

    return (
        <button className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
}
