"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { motion } from "framer-motion";

export function TimelineSection() {
    const milestones = [
        { year: "2019", title: "Foundation", desc: "SESS established as a multidisciplinary hub." },
        { year: "2021", title: "Scale", desc: "Launched Industry Night series with 20+ partners." },
        { year: "2023", title: "Authority", desc: "Recognised as the peak representative body for engineers." },
        { year: "2026", title: "V3 Launch", desc: "Digital headquarters overhauled for global scale.", highlighted: true }
    ];

    return (
        <Section className="py-24 md:py-32 bg-sess-bg border-t border-sess-divider/50">
            <Container>
                <div className="col-span-12 lg:col-span-10 lg:col-start-2">
                    <h2 className="font-heading text-4xl mb-20 text-sess-text-primary uppercase font-black tracking-tight text-center">
                        Institutional Growth
                    </h2>

                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-sess-divider md:-translate-x-1/2" />

                        <div className="space-y-16 md:space-y-24">
                            {milestones.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                                    className={`relative flex flex-col md:flex-row items-start ${idx % 2 === 0 ? "md:flex-row-reverse" : ""
                                        }`}
                                >
                                    {/* Year Pin */}
                                    <div className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-sess-bg z-10 ${item.highlighted ? "bg-sess-primary shadow-[0_0_15px_rgba(251,65,128,0.8)]" : "bg-sess-muted"
                                        }`} />

                                    {/* Content Card */}
                                    <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${idx % 2 === 0 ? "md:text-left" : "md:text-right"
                                        }`}>
                                        <div className={`inline-block mb-2 font-mono text-2xl font-black ${item.highlighted ? "text-sess-primary" : "text-sess-muted"
                                            }`}>
                                            {item.year}
                                        </div>
                                        <div className={`bg-sess-surface/40 backdrop-blur-sm border p-8 rounded-2xl transition-all duration-500 hover:scale-[1.02] ${item.highlighted ? "border-sess-primary/50 shadow-2xl shadow-sess-primary/10" : "border-sess-divider/50"
                                            }`}>
                                            <h3 className="font-heading text-xl font-bold text-sess-text-primary mb-2 uppercase">
                                                {item.title}
                                            </h3>
                                            <p className="text-sess-muted font-medium leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
