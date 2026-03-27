"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { motion } from "framer-motion";

export function BeliefSection() {
    return (
        <Section className="py-24 md:py-32 bg-sess-surface/10">
            <Container className="flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="col-span-12 max-w-5xl"
                >
                    <h2 className="font-heading text-5xl md:text-7xl font-black text-sess-text-primary mb-12 uppercase tracking-tighter text-balance">
                        Our Mission Statement
                    </h2>

                    <div className="relative">
                        {/* Quote Marks decor */}
                        <div className="absolute -top-12 -left-8 text-[12rem] font-serif text-sess-primary/5 select-none leading-none">&ldquo;</div>

                        <p className="text-xl md:text-4xl font-medium text-sess-muted leading-relaxed italic text-balance relative z-10">
                            &ldquo;To foster an inclusive community that enriches the experience of all Engineering students and supports their personal and professional growth throughout their university journeys, enabling them to graduate as passionate, adaptable, and respectful Engineers.&rdquo;
                        </p>
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
}
