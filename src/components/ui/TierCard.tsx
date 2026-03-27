import React from "react";
import { Button } from "./Button";

export function TierCard({
    tier,
    price,
    features,
    isHighlighted = false,
}: {
    tier: string;
    price: string;
    features: string[];
    isHighlighted?: boolean;
}) {
    return (
        <div
            className={`relative flex flex-col p-8 rounded-2xl border ${isHighlighted
                    ? "bg-sess-surface border-sess-highlight shadow-lg shadow-sess-primary/10"
                    : "bg-sess-surface border-sess-divider"
                }`}
        >
            {isHighlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sess-primary text-sess-text-primary text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                    Recommended
                </span>
            )}
            <h3 className="font-heading text-2xl font-bold text-sess-text-primary mb-2">
                {tier}
            </h3>
            <div className="flex items-baseline gap-1 mb-6">
                <span className="font-mono text-3xl font-bold text-sess-text-primary">{price}</span>
            </div>
            <div className="w-full h-[1px] bg-sess-divider mb-6" />
            <ul className="flex flex-col gap-4 flex-grow mb-8">
                {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sess-muted text-sm leading-snug">
                        <svg className="w-5 h-5 text-sess-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <Button variant={isHighlighted ? "primary" : "secondary"} className="w-full mt-auto">
                Select Package
            </Button>
        </div>
    );
}
