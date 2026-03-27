"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

import { SponsorShowcase } from "@/components/ui/SponsorShowcase";
import { PageHero } from "@/components/ui/PageHero";


export default function SponsorsPage() {
    return (
        <>
            {/* ── HERO ── */}
            <PageHero
                label="Partners // 2026"
                heading={<>Industry<br />Partnerships.</>}
                subtext="Engage directly with multidisciplinary engineering talent and build long-term visibility within Swinburne's engineering community."
            />


            {/* ── SPONSOR SHOWCASE (INSERTED HERE) ── */}
            <SponsorShowcase />

            {/* ── ROI BENEFITS TABLE ── */}
            <Section className="bg-background py-32">
                <Container>
                    <div className="col-span-12 overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[900px]">
                            <thead>
                                <tr className="border-b border-sess-divider">
                                    <th className="py-10 px-8 font-serif text-2xl text-sess-text-primary">Engagement Benefit</th>
                                    <th className="py-10 px-8 font-mono text-[10px] text-sess-muted text-center tracking-widest uppercase">Bronze</th>
                                    <th className="py-10 px-8 font-mono text-[10px] text-sess-muted text-center tracking-widest uppercase">Silver</th>
                                    <th className="py-10 px-8 font-mono text-[10px] text-sess-highlight text-center tracking-widest uppercase font-black">Gold</th>
                                    <th className="py-10 px-8 font-mono text-[10px] text-sess-text-primary text-center tracking-widest uppercase font-black">Platinum</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-sess-divider">
                                {[
                                    ["Brand Visibility", "Logo", "Medium", "Prime", "Banner"],
                                    ["Talent Access", "Portal", "Portal", "Direct", "VIP"],
                                    ["Event Speaking", "—", "—", "Panel", "Keynote"],
                                    ["Custom ROI", "—", "—", "—", "Custom"],
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-sess-surface/30 transition-colors">
                                        <td className="py-8 px-8 text-sess-text-primary font-serif text-lg font-bold">{row[0]}</td>
                                        {row.slice(1).map((val, j) => (
                                            <td key={j} className="py-8 px-8 text-center text-sess-muted font-mono text-[10px] font-black">
                                                {val}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Container>
            </Section>
        </>
    );
}
