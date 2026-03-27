"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { motion } from "framer-motion";

export function AuthorityHero({
    headingPrimary,
    headingAccent,
    subheading,
}: {
    headingPrimary: string;
    headingAccent: string;
    subheading: string;
}) {
    return (
        <Section
            hasDivider={false}
            className="pt-32 pb-24 md:pt-48 md:pb-40 bg-sess-bg/50 relative overflow-hidden"
        >
            <Container className="relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 flex flex-col items-center"
                >
                    <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-[-0.03em] text-sess-text-primary mb-10 leading-[0.95] uppercase">
                        {headingPrimary}{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-sess-text-primary">{headingAccent}</span>
                            <motion.span
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute left-0 bottom-1 w-full h-3 md:h-6 bg-sess-primary/60 z-0 origin-left"
                            />
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-sess-muted max-w-2xl leading-relaxed font-medium">
                        {subheading}
                    </p>
                </motion.div>
            </Container>
        </Section>
    );
}
