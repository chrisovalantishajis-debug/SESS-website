"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { motion } from "framer-motion";

// ─── SPONSOR DATA ──────────────────────────────────────────────────────────────
// Replace the `logo` field with an image path once real assets are available.
// e.g.  { name: "AECOM", logo: "/logos/aecom.svg" }

const TIERS = [
    {
        id: "platinum",
        label: "Platinum Partners",
        eyebrow: "Strategic Talent Partners",
        accentColor: true,
        gridCols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        tileHeight: "h-32",
        nameSizeClass: "text-sm",
        sponsors: [
            { name: "AECOM" },
            { name: "Jacobs" },
            { name: "WSP" },
        ],
    },
    {
        id: "gold",
        label: "Gold Partners",
        eyebrow: "Industry Engagement Partners",
        accentColor: false,
        gridCols: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
        tileHeight: "h-24",
        nameSizeClass: "text-xs",
        sponsors: [
            { name: "Beca" },
            { name: "Arup" },
            { name: "GHD" },
            { name: "Mott MacDonald" },
        ],
    },
    {
        id: "silver",
        label: "Silver Partners",
        eyebrow: "Community Partners",
        accentColor: false,
        gridCols: "grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
        tileHeight: "h-20",
        nameSizeClass: "text-[11px]",
        sponsors: [
            { name: "Arcadis" },
            { name: "Aurecon" },
            { name: "SMEC" },
            { name: "Atlas Copco" },
            { name: "DXC Technology" },
        ],
    },
    {
        id: "bronze",
        label: "Bronze Partners",
        eyebrow: "Supporting Partners",
        accentColor: false,
        gridCols: "grid-cols-2 md:grid-cols-4 lg:grid-cols-6",
        tileHeight: "h-16",
        nameSizeClass: "text-[10px]",
        sponsors: [
            { name: "ENGIE" },
            { name: "Transurban" },
            { name: "APA Group" },
            { name: "BlueScope" },
            { name: "Bosch" },
            { name: "Hastings Deering" },
        ],
    },
] as const;

// ─── LOGO TILE ─────────────────────────────────────────────────────────────────

function LogoTile({
    name,
    logo,
    tileHeight,
    nameSizeClass,
    delay,
}: {
    name: string;
    logo?: string;
    tileHeight: string;
    nameSizeClass: string;
    delay: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay }}
            whileHover={{ y: -3, transition: { duration: 0.18 } }}
            className={`group flex items-center justify-center rounded-2xl border border-white/[0.07] bg-white/[0.025] ${tileHeight} px-4 cursor-default transition-colors duration-300 hover:border-white/[0.14] hover:bg-white/[0.05]`}
        >
            {logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src={logo}
                    alt={name}
                    className="h-8 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
            ) : (
                <span
                    className={`font-heading font-black text-white/70 group-hover:text-white/90 tracking-wide uppercase text-center leading-tight transition-colors duration-300 ${nameSizeClass}`}
                >
                    {name}
                </span>
            )}
        </motion.div>
    );
}

// ─── TIER BLOCK ────────────────────────────────────────────────────────────────

function TierBlock({
    tier,
    baseDelay,
}: {
    tier: (typeof TIERS)[number];
    baseDelay: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: baseDelay }}
            className="mb-16 last:mb-0"
        >
            {/* Eyebrow */}
            <p className="font-mono text-[10px] font-black tracking-[0.4em] text-sess-muted/40 uppercase mb-2">
                {tier.eyebrow}
            </p>

            {/* Tier Heading */}
            <h3
                className={`font-heading text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 ${tier.accentColor ? "text-sess-primary" : "text-sess-text-primary"
                    }`}
            >
                {tier.label}
            </h3>

            {/* Divider */}
            <div className="h-px w-full bg-white/[0.07] mb-8" />

            {/* Logo Grid */}
            <div className={`grid ${tier.gridCols} gap-3 md:gap-4`}>
                {tier.sponsors.map((s, idx) => (
                    <LogoTile
                        key={s.name}
                        name={s.name}
                        logo={undefined}
                        tileHeight={tier.tileHeight}
                        nameSizeClass={tier.nameSizeClass}
                        delay={idx * 0.05}
                    />
                ))}
            </div>
        </motion.div>
    );
}

// ─── MAIN EXPORT ───────────────────────────────────────────────────────────────

export function SponsorShowcase() {
    return (
        <Section className="py-24 md:py-32 bg-sess-bg relative overflow-hidden" hasDivider={false}>
            {/* Very faint pink haze */}
            <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-sess-primary/[0.04] blur-[140px] rounded-full pointer-events-none" />

            <Container className="relative z-10">
                {/* ── SECTION 1: Left-aligned intro ── */}
                <div className="col-span-12 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="max-w-3xl"
                    >
                        <span className="font-mono text-[10px] font-black tracking-[0.5em] text-sess-primary uppercase block mb-5">
                            CURRENT PLATFORM PARTNERS
                        </span>
                        <h2 className="font-heading text-4xl md:text-6xl font-black text-sess-text-primary uppercase tracking-tighter mb-6 leading-[1.05]">
                            Our Industry Partners
                        </h2>
                        <p className="text-sess-muted text-lg md:text-xl leading-relaxed font-medium max-w-2xl">
                            We are proud to partner with leading organisations who support engineering education, industry engagement, and student professional development at Swinburne.
                        </p>
                        <p className="text-sess-muted/50 text-sm font-mono mt-3 tracking-wide uppercase">
                            Supporting 500+ engineering students annually.
                        </p>
                    </motion.div>
                </div>

                {/* ── SECTION 2: Sponsor Tiers ── */}
                <div className="col-span-12">
                    {TIERS.map((tier, i) => (
                        <TierBlock key={tier.id} tier={tier} baseDelay={i * 0.1} />
                    ))}
                </div>

                {/* ── CTA Card ── */}
                <div className="col-span-12 mt-16">
                    <div className="bg-sess-surface/40 border border-sess-divider/60 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 relative overflow-hidden">
                        {/* Status badge */}
                        <div className="absolute top-6 right-8">
                            <span className="font-mono text-[10px] text-sess-primary font-black tracking-widest uppercase">
                                STATUS: OPEN FOR 2026
                            </span>
                        </div>

                        {/* Text */}
                        <div className="max-w-xl">
                            <h3 className="font-heading text-3xl md:text-4xl font-black text-sess-text-primary mb-4">
                                Partner With Us.
                            </h3>
                            <p className="text-sess-muted text-base md:text-lg leading-relaxed font-medium mb-6">
                                We are currently opening applications for our 2026 Annual Program. Take command of the largest engineering talent pipeline at Swinburne.
                            </p>
                            <div className="flex gap-8 font-mono text-[10px] font-black tracking-[0.3em] text-sess-muted/60 uppercase">
                                <span className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-sess-primary rounded-full" />
                                    1,200+ Members
                                </span>
                                <span className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-sess-primary rounded-full" />
                                    4 Flagship Events
                                </span>
                            </div>
                        </div>

                        {/* Button */}
                        <button className="shrink-0 bg-sess-primary text-white font-heading font-black text-xs uppercase tracking-widest px-12 py-6 hover:scale-[1.03] transition-transform duration-200 shadow-lg shadow-sess-primary/20">
                            ENQUIRE NOW
                        </button>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
