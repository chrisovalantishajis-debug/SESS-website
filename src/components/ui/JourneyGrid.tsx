"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { motion } from "framer-motion";

interface JourneyItem {
    number: string;
    title: string;
    description: string;
}

export function JourneyGrid({ items }: { items: JourneyItem[] }) {
    return (
        <Section>
            <Container>
                <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="bg-sess-surface/40 backdrop-blur-sm border border-sess-divider rounded-2xl p-10 flex flex-col h-full group relative overflow-hidden transition-all duration-500 hover:border-sess-primary/30"
                        >
                            {/* Bottom edge glow */}
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-sess-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <span className="font-mono text-5xl md:text-6xl font-bold text-sess-primary/10 mb-8 block group-hover:text-sess-primary/20 transition-colors duration-500">
                                {item.number}
                            </span>
                            <h3 className="font-heading text-2xl font-bold text-sess-text-primary mb-4 tracking-tight">
                                {item.title}
                            </h3>
                            <p className="text-sess-muted leading-relaxed flex-grow font-medium">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
