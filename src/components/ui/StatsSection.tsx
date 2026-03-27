"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { motion } from "framer-motion";

export function StatsSection() {
    const stats = [
        { label: "Students at Industry Nights", value: "500+" },
        { label: "Industry Partners", value: "20+" },
        { label: "Disciplines Represented", value: "6" },
        { label: "$0 Cost to Students", value: "FREE" }
    ];

    return (
        <Section className="py-24 bg-sess-bg">
            <Container>
                <div className="col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="bg-sess-surface/30 backdrop-blur-sm border border-sess-divider/50 rounded-2xl p-8 text-center group hover:border-sess-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-sess-primary/5"
                        >
                            <div className="text-4xl md:text-5xl font-black text-sess-primary mb-3 tracking-tighter group-hover:scale-110 transition-transform duration-500">
                                {stat.value}
                            </div>
                            <div className="text-sess-muted font-bold text-sm uppercase tracking-widest leading-tight">
                                {stat.label}
                            </div>

                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-sess-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
