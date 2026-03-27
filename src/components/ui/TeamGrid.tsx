"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { motion } from "framer-motion";

interface TeamMember {
    name: string;
    role: string;
    discipline: string;
}

const disciplineColors: Record<string, string> = {
    "Mechanical Engineering": "text-blue-400 border-blue-400/30 bg-blue-400/5",
    "Civil Engineering": "text-amber-400 border-amber-400/30 bg-amber-400/5",
    "Electrical Engineering": "text-sess-highlight border-sess-highlight/30 bg-sess-highlight/5",
    "Software Engineering": "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
    "Chemical Engineering": "text-purple-400 border-purple-400/30 bg-purple-400/5",
    "Mechatronics": "text-orange-400 border-orange-400/30 bg-orange-400/5",
};

export function TeamGrid({ members }: { members: TeamMember[] }) {
    return (
        <Section className="relative overflow-hidden bg-sess-bg">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

            <Container className="relative z-10">
                <div className="col-span-12 mb-20 text-center">
                    <h2 className="font-serif text-5xl md:text-6xl text-sess-text-primary tracking-tight">
                        Executive Leadership
                    </h2>
                    <div className="w-16 h-1 bg-sess-highlight mx-auto mt-6" />
                </div>
                <div className="col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {members.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05, duration: 0.5 }}
                            className="bg-sess-surface/40 backdrop-blur-md border border-sess-divider rounded-3xl p-10 flex flex-col items-center text-center transition-all duration-300 hover:border-sess-primary/40 group relative overflow-hidden"
                        >
                            {/* Profile Image Container */}
                            <div className="relative mb-10">
                                <div className="w-32 h-32 rounded-full border-2 border-sess-divider p-1 group-hover:border-sess-highlight transition-colors duration-500">
                                    <div className="w-full h-full rounded-full bg-sess-bg overflow-hidden relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-sess-primary/10 to-transparent" />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-20">
                                            <svg className="w-16 h-16 text-sess-text-primary" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-sess-bg border border-sess-divider px-3 py-1 rounded-full whitespace-nowrap">
                                    <span className="text-[9px] font-mono text-sess-highlight uppercase tracking-widest font-black">
                                        EXECUTIVE
                                    </span>
                                </div>
                            </div>

                            <h3 className="font-serif text-2xl font-bold text-sess-text-primary tracking-tight mb-2">
                                {member.name}
                            </h3>

                            <p className="text-sess-highlight font-mono text-xs uppercase tracking-[0.25em] font-black mb-6">
                                {member.role}
                            </p>

                            <div className={`mt-auto inline-flex items-center px-4 py-1.5 rounded-lg border ${disciplineColors[member.discipline] || "text-sess-muted border-sess-divider bg-sess-surface"}`}>
                                <span className="text-[10px] font-mono uppercase tracking-widest font-black">
                                    {member.discipline}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
