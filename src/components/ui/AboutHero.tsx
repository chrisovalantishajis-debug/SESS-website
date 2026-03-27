"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "./Button";

export function AboutHero() {
    return (
        <Section
            hasDivider={false}
            className="pt-32 pb-24 md:pt-48 md:pb-40 bg-sess-bg relative overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sess-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <Container className="relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 flex flex-col items-center"
                >
                    <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-sess-text-primary mb-8 leading-[1.1] uppercase text-balance">
                        ABOUT SWINBURNE <br />
                        <span className="text-sess-primary underline decoration-sess-primary/30 decoration-4 underline-offset-8">
                            ENGINEERING STUDENT SOCIETY
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl font-bold text-sess-text-primary mb-6 tracking-tight">
                        Swinburne’s central hub for engineers who want more than a degree.
                    </p>

                    <p className="text-lg md:text-xl text-sess-muted max-w-3xl leading-relaxed font-medium mb-12 text-balance">
                        Engineering the next generation. SESS is the central industry-facing engineering body at Swinburne University of Technology. We connect multidisciplinary student talent with structured professional opportunity — turning academic potential into career momentum. We don’t simply host events. We build engineering pathways.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-20">
                        <Button size="lg" className="px-10 py-7 text-lg uppercase tracking-wider font-black">
                            Join SESS
                        </Button>
                        <Button size="lg" variant="outline" className="px-10 py-7 text-lg uppercase tracking-wider font-black">
                            Partner With Us
                        </Button>
                    </div>

                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="text-sess-muted/40"
                    >
                        <ChevronDown size={32} strokeWidth={1.5} />
                    </motion.div>
                </motion.div>
            </Container>
        </Section>
    );
}
