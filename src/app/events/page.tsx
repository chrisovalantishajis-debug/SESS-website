"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { motion } from "framer-motion";

export default function EventsPage() {
    const currentEvents = [
        { title: "Networking 101", date: "MAR 15", type: "Professional Development", desc: "Foundational networking workshop." },
        { title: "Industry Night 1", date: "APR 22", type: "Flagship Event", desc: "Our premier semester 1 event connecting students and firms." },
    ];

    const pastEvents = [
        { title: "Networking Refresher", date: "AUG 10", type: "Development", desc: "Briefing before semester 2." },
        { title: "Industry Night 2", date: "SEP 18", type: "Flagship", desc: "The mega second-semester networking hub." },
        { title: "Alumni Speaking Day", date: "OCT 05", type: "Community", desc: "Graduates return to share industry insight." },
    ];

    return (
        <>
            <PageHero
                label="Program // 2026"
                heading={<>Annual<br />Program.</>}
                subtext="High-fidelity events designed for technical acceleration and industry integration."
            />

            <Section className="bg-sess-surface py-20" hasDivider={false}>
                <Container>
                    <div className="col-span-12 mb-16">
                        <h2 className="font-heading text-3xl font-black text-sess-text-primary tracking-tight uppercase">Current Opportunities</h2>
                        <div className="w-16 h-1 bg-sess-highlight mt-4" />
                    </div>
                    <div className="col-span-12 flex flex-col gap-6">
                        {currentEvents.map((evt, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ x: 10 }}
                                className="flex flex-col md:flex-row bg-background border border-sess-divider rounded-2xl p-10 gap-8 items-start md:items-center hover:border-sess-highlight/30 transition-all duration-300"
                            >
                                <div className="shrink-0 w-32">
                                    <span className="font-mono text-sess-highlight font-black text-2xl block mb-1">
                                        {evt.date}
                                    </span>
                                    <span className="text-sess-muted font-mono text-[10px] uppercase tracking-widest font-black opacity-60">{evt.type}</span>
                                </div>
                                <div className="flex-grow">
                                    <h3 className="font-serif text-3xl font-bold text-sess-text-primary mb-2">{evt.title}</h3>
                                    <p className="text-sess-muted leading-relaxed font-medium">{evt.desc}</p>
                                </div>
                                <Button variant="primary" className="h-16 px-10 text-xs font-black tracking-widest uppercase">Register</Button>
                            </motion.div>
                        ))}
                    </div>

                    <div className="col-span-12 mt-32 mb-16">
                        <h2 className="font-heading text-3xl font-black text-sess-muted tracking-tight uppercase opacity-40">Past Events Library</h2>
                        <div className="w-16 h-1 bg-sess-divider mt-4 opacity-40" />
                    </div>
                    <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8 opacity-60">
                        {pastEvents.map((evt, i) => (
                            <div key={i} className="bg-background/40 border border-sess-divider rounded-2xl p-10 grayscale hover:grayscale-0 transition-all">
                                <span className="font-mono text-sess-muted font-black text-sm mb-4 block">
                                    {evt.date} &mdash; {evt.type}
                                </span>
                                <h3 className="font-serif text-2xl font-bold text-sess-text-primary mb-4">{evt.title}</h3>
                                <p className="text-sess-muted text-sm leading-relaxed font-medium">{evt.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>
        </>
    );
}
