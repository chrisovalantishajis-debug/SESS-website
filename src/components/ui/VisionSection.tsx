"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function VisionSection() {
    const studentPoints = ["Build confidence", "Gain industry exposure", "Develop professional networks"];
    const industryPoints = ["Access multidisciplinary talent", "Build early recruitment pipelines", "Maintain semester-long visibility"];

    return (
        <Section className="py-24 md:py-32 relative overflow-hidden">
            {/* Soft Gradient Background Panel */}
            <div className="absolute inset-0 bg-gradient-to-b from-sess-bg via-sess-surface/30 to-sess-bg opacity-50 pointer-events-none" />

            <Container className="relative z-10">
                <div className="col-span-12 text-center mb-16 md:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="font-heading text-4xl md:text-5xl font-black text-sess-text-primary uppercase tracking-tight"
                    >
                        Our Vision for Engineering <br className="hidden md:block" /> at Swinburne
                    </motion.h2>
                </div>

                <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">
                    {/* Card 1 - For Students */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-sess-surface/50 backdrop-blur-md border border-sess-divider/50 p-10 md:p-12 rounded-[2.5rem] relative group overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 font-mono text-sess-primary/10 text-6xl font-black group-hover:text-sess-primary/20 transition-colors duration-500">
                            STUDENTS
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-sess-text-primary mb-10 uppercase tracking-wide">
                            For Students
                        </h3>
                        <ul className="space-y-6">
                            {studentPoints.map((point, idx) => (
                                <li key={idx} className="flex items-center gap-4 text-sess-muted font-bold text-lg">
                                    <CheckCircle2 size={24} className="text-sess-primary" />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Card 2 - For Industry */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-sess-surface/50 backdrop-blur-md border border-sess-divider/50 p-10 md:p-12 rounded-[2.5rem] relative group overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 font-mono text-sess-primary/10 text-6xl font-black group-hover:text-sess-primary/20 transition-colors duration-500">
                            INDUSTRY
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-sess-text-primary mb-10 uppercase tracking-wide">
                            For Industry
                        </h3>
                        <ul className="space-y-6">
                            {industryPoints.map((point, idx) => (
                                <li key={idx} className="flex items-center gap-4 text-sess-muted font-bold text-lg">
                                    <CheckCircle2 size={24} className="text-sess-primary" />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                <div className="col-span-12 text-center">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-xl md:text-2xl text-sess-text-primary font-bold italic opacity-80"
                    >
                        &ldquo;We want SESS to be the place where Swinburne engineers <br className="hidden md:block" /> grow into professionals — not just graduates.&rdquo;
                    </motion.p>
                </div>
            </Container>
        </Section>
    );
}
