"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

interface PageHeroProps {
    /** Pink monospace label, e.g. "ABOUT // SESS" */
    label: string;
    /** Main heading — can include <br /> for line breaks */
    heading: React.ReactNode;
    /** Italic subtext displayed below with left border */
    subtext: string;
}

export function PageHero({ label, heading, subtext }: PageHeroProps) {
    return (
        <Section
            hasDivider={false}
            className="pt-36 pb-16 md:pb-20 bg-sess-bg relative overflow-hidden"
        >
            {/* Subtle radial backdrop */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(circle at 10% 50%, rgba(251,65,128,0.05), transparent 50%)",
                }}
            />

            <Container className="relative z-10">
                <div className="col-span-12">
                    {/* Label */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="font-mono text-xs text-sess-primary tracking-[0.25em] uppercase font-black mb-4"
                    >
                        {label}
                    </motion.p>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
                        className="font-heading text-6xl md:text-8xl lg:text-9xl font-black text-sess-text-primary tracking-tighter leading-[0.9] mb-8"
                    >
                        {heading}
                    </motion.h1>

                    {/* Subtext with left border */}
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                        className="text-lg md:text-xl text-sess-muted font-serif italic border-l-2 border-sess-divider pl-6 max-w-2xl leading-relaxed"
                    >
                        {subtext}
                    </motion.p>
                </div>
            </Container>
        </Section>
    );
}
