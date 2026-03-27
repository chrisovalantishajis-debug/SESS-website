"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { motion } from "framer-motion";
import Image from "next/image";

export function CommunitySection() {
    return (
        <Section className="py-24 md:py-32 bg-sess-bg">
            <Container>
                {/* Text Column */}
                <div className="col-span-12 lg:col-span-6 flex flex-col justify-center order-2 lg:order-1 mt-12 lg:mt-0">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-heading text-6xl font-black text-sess-text-primary mb-12 uppercase tracking-tighter">
                            About Us
                        </h2>

                        <div className="space-y-8 text-lg md:text-xl text-sess-muted leading-relaxed font-medium">
                            <p>
                                The Swinburne Engineering Student Society, better known as &apos;SESS&apos;, is a student run, not-for-profit organisation that seeks to enrich the educational experience of students at Swinburne University of Technology through providing a variety of social, industry and academic events and opportunities.
                            </p>
                            <p>
                                While we focus our energy on Engineering, we aim to serve the best interests of all students, the University and our partners. SESS has four event portfolios: Academic, Industry, Social, and Wellbeing & Equity (W&E), which run a range of different events and activities for engineering students.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Photo Column */}
                <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-sess-divider/50 shadow-2xl shadow-sess-primary/5"
                    >
                        <Image
                            src="/sess_community_event_1772013988226.png"
                            alt="SESS Community Event"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-sess-bg/40 via-transparent to-transparent pointer-events-none" />
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}
