"use client";

import React from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { DiagonalSpine } from "@/components/layout/DiagonalSpine";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <DiagonalSpine />

      {/* 1. HERO SECTION */}
      <Section className="min-h-screen flex items-center pt-32 bg-background relative overflow-hidden" hasDivider={false} id="hero">
        {/* V3 Atmospheric Layers */}
        <div className="absolute inset-0 bg-background z-0" />

        {/* Primary Radial Glow (Maroon Depth) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[80vh] bg-sess-primary/10 rounded-full blur-[160px] opacity-60 z-0" />
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vh] bg-sess-highlight/5 rounded-full blur-[120px] opacity-40 z-0" />

        {/* Technical Textures */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] z-0" />
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] z-0 pointer-events-none mix-blend-overlay" />

        {/* Navigation Indicator / Label (Top Centered) */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 z-10 hidden md:block">
          <span className="font-mono text-[10px] tracking-[0.8em] text-sess-muted opacity-30 uppercase font-black">
            System_Identity // 01.IDENTITY
          </span>
        </div>

        <Container className="text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 flex flex-col items-center"
          >
            {/* The Master Pair Headline Stacking */}
            <div className="mb-12 cursor-default">
              <motion.h1
                initial={{ letterSpacing: "0.2em", opacity: 0 }}
                animate={{ letterSpacing: "-0.04em", opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.2 }}
                className="font-heading text-8xl md:text-[14rem] font-black leading-none mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20"
              >
                SESS
              </motion.h1>

              <div className="flex items-center justify-center gap-4 text-sess-highlight">
                <span className="h-[1px] w-8 md:w-20 bg-sess-divider opacity-40" />
                <h2 className="font-serif text-xl md:text-3xl italic tracking-wide">
                  <span className="font-sans font-light opacity-30 not-italic mr-2"></span>
                  Swinburne Engineering Student Society
                  <span className="font-sans font-light opacity-30 not-italic ml-2"></span>
                </h2>
                <span className="h-[1px] w-8 md:w-20 bg-sess-divider opacity-40" />
              </div>
            </div>

            {/* Subtext with Staggered Typography */}
            <div className="max-w-4xl mb-20 space-y-6">
              <p className="text-3xl md:text-5xl text-sess-text-primary font-serif font-bold tracking-tight leading-tight">
                Empowering the Engineers of Tomorrow <span className="text-sess-highlight italic underline decoration-1 underline-offset-8 decoration-sess-divider"></span>
              </p>

            </div>

            {/* Centered Glassmorphic Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button variant="primary" className="h-20 px-20 text-xl uppercase tracking-[0.4em] font-black bg-sess-primary border border-sess-highlight/30 shadow-[0_0_40px_rgba(251,65,128,0.3)] hover:shadow-[0_0_60px_rgba(251,65,128,0.5)] transition-all duration-500 rounded-none relative overflow-hidden group">
                  <span className="relative z-10 flex items-center">
                    Join Now
                    <span className="ml-4 opacity-40 group-hover:translate-x-2 group-hover:opacity-100 transition-all">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button variant="secondary" className="h-20 px-20 text-xl uppercase tracking-[0.4em] font-black border-sess-divider bg-sess-surface/20 backdrop-blur-md hover:bg-sess-surface/40 transition-all rounded-none">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </Container>

        <div
          className="absolute bottom-0 left-0 w-full h-[10vw] bg-sess-surface z-10"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
        />
      </Section>

      {/* 2. ABOUT SESS */}
      <Section className="bg-sess-surface py-32 border-b border-sess-divider" id="about">
        <Container>
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center pr-0 lg:pr-16 mb-16 lg:mb-0">
            <span className="text-sess-highlight font-mono text-sm tracking-[0.4em] mb-4 font-black">02 MISSION</span>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-sess-text-primary mb-10 tracking-tight leading-tight">
              More than <br /> a Student Club.
            </h2>
            <p className="text-xl text-sess-muted leading-relaxed font-medium border-l-2 border-sess-divider pl-8 mb-12">
              SESS operates at the intersection of <span className="text-sess-text-primary font-bold">education, industry, and professional readiness.</span> We are the bridge between academic theory and career reality.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Professional development", "Industry networking", "Technical innovation"].map(item => (
                <div key={item} className="flex items-center gap-3 text-sess-muted font-mono text-[10px] uppercase tracking-widest font-black">
                  <div className="w-1.5 h-1.5 bg-sess-highlight rounded-full" /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { label: "ESTABLISHED", value: "2019" },
              { label: "MEMBER BASE", value: "1,200+" },
              { label: "PARTNERSHIPS", value: "45+" },
              { label: "SCALE", value: "Flagship" },
            ].map((stat, i) => (
              <div key={i} className="bg-sess-bg border-t-2 border-sess-highlight p-10 flex flex-col justify-between hover:bg-sess-primary/5 transition-colors group shadow-2xl">
                <span className="text-xs font-mono text-sess-muted uppercase tracking-[0.3em] font-black group-hover:text-sess-highlight transition-colors">
                  {stat.label}
                </span>
                <span className="text-5xl font-heading font-black text-sess-text-primary mt-8">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. ANNUAL PROGRAM */}
      <Section className="py-32 bg-background relative overflow-hidden" id="events">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <Container>
          <div className="col-span-12 flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-sess-highlight font-mono text-sm tracking-[0.4em] mb-4 font-black">03 PROGRAM</span>
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-sess-text-primary tracking-tight">The Value Path.</h2>
              <p className="text-lg text-sess-muted mt-6 font-medium leading-relaxed">High-fidelity networking events and technical workshops designed for career acceleration.</p>
            </div>
            <Button variant="secondary" className="uppercase tracking-widest font-black h-16 px-10">All Events</Button>
          </div>
          <div className="col-span-12 flex flex-col gap-6">
            {[
              { date: "MAR 15", title: "Networking 101", cat: "Development" },
              { date: "APR 22", title: "Industry Night 1", cat: "Flagship" },
            ].map((evt, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 20 }}
                className="flex items-center justify-between p-12 bg-sess-surface/50 border-l-4 border-sess-divider rounded-r-2xl group hover:border-sess-highlight transition-all duration-300 shadow-xl backdrop-blur-sm"
              >
                <div className="flex items-center gap-16">
                  <span className="font-mono text-sess-highlight font-black text-3xl w-32">{evt.date}</span>
                  <div>
                    <h3 className="font-serif text-4xl font-bold text-sess-text-primary mb-2">{evt.title}</h3>
                    <span className="text-[10px] uppercase tracking-[0.4em] text-sess-muted font-mono font-black opacity-60">{evt.cat}</span>
                  </div>
                </div>
                <Button variant="secondary" className="hover:bg-sess-highlight hover:text-white transition-all h-14 px-8 text-[10px] font-black tracking-widest uppercase">Reserve</Button>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>


      {/* 4. LEGACY (ALUMNI) */}
      <Section className="py-32 bg-sess-surface border-b border-sess-divider" id="alumni">
        <Container>
          <div className="col-span-12 lg:col-span-12 mb-20">
            <span className="text-sess-highlight font-mono text-sm tracking-[0.4em] mb-4 font-black">04 LEGACY</span>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-sess-text-primary tracking-tight">The SESS Hierarchy.</h2>
          </div>
          <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { year: "2026", name: "Executive Committee", desc: "Leading the society's strategic expansion into global industry networks." },
              { year: "2019-2025", name: "Past Presidents", desc: "Honouring the foundational architects who engineered the SESS framework." },
              { year: "Platform", name: "Alumni Network", desc: "A lifetime connection point for Swinburne's most ambitious engineering talent." }
            ].map((item, i) => (
              <div key={i} className="bg-sess-bg border border-sess-divider p-10 rounded-2xl hover:border-sess-highlight/30 transition-all group">
                <span className="text-sess-highlight font-mono text-[10px] tracking-[0.3em] font-black uppercase mb-4 block">{item.year}</span>
                <h3 className="font-serif text-2xl font-bold text-sess-text-primary mb-4">{item.name}</h3>
                <p className="text-sess-muted text-sm leading-relaxed mb-8">{item.desc}</p>
                <Button variant="secondary" className="w-full text-[10px] tracking-widest font-black uppercase">View Directory</Button>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. STRATEGIC PARTNERS (SPONSORSHIP) */}
      <Section className="py-32 bg-background relative" id="sponsors">
        <Container>
          <div className="col-span-12 text-center mb-24">
            <span className="text-sess-highlight font-mono text-sm tracking-[0.4em] mb-4 font-black">05 PARTNERS</span>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-sess-text-primary mb-6">Strategic ROI.</h2>
            <p className="text-sess-muted max-w-2xl mx-auto text-lg font-medium italic">High-fidelity engagement models for industry leaders.</p>
          </div>
          <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { tier: "PLATINUM", value: "Keynote Authority" },
              { tier: "GOLD", value: "Premium Branding" },
              { tier: "SILVER", value: "Flagship Access" },
              { tier: "BRONZE", value: "Digital Equity" },
            ].map((tier, i) => (
              <div key={i} className="bg-sess-surface border border-sess-divider p-8 rounded-xl text-center hover:border-sess-highlight/40 transition-all">
                <span className="text-sess-highlight font-mono text-[10px] tracking-[0.4em] font-black uppercase mb-2 block">{tier.tier}</span>
                <span className="text-sess-text-primary font-serif font-bold text-xl">{tier.value}</span>
              </div>
            ))}
          </div>
          <div className="col-span-12 text-center">
            <Button variant="primary" className="h-16 px-12 bg-sess-primary text-white hover:shadow-[0_0_30px_rgba(251,65,128,0.2)]">Open 2026 Prospectus</Button>
          </div>
        </Container>
      </Section>

      {/* 6. CONTACT SECTION (TRANSMIT) */}
      <Section className="py-40 bg-sess-surface border-t border-sess-divider" id="contact">
        <Container className="text-center">
          <div className="col-span-12">
            <span className="text-sess-highlight font-mono text-sm tracking-[0.4em] mb-4 font-black">06 TRANSMIT</span>
            <h2 className="font-serif text-6xl md:text-8xl font-bold text-sess-text-primary mb-16 tracking-tight uppercase">
              Build The <br /> future.
            </h2>
            <div className="flex flex-wrap justify-center gap-12 mb-24">
              {["Inquiry", "Instagram", "LinkedIn", "Discord"].map((link) => (
                <motion.a
                  whileHover={{ y: -5 }}
                  key={link}
                  href="#"
                  className="font-mono text-sess-muted hover:text-sess-highlight transition-colors tracking-[0.5em] uppercase text-xs font-black"
                >
                  {link}
                </motion.a>
              ))}
            </div>
            <Button variant="primary" className="h-20 px-20 text-xl uppercase tracking-[0.3em] font-black bg-sess-bg border border-sess-divider hover:bg-sess-primary hover:text-white transition-all">Transmit Inquiry</Button>
          </div>
        </Container>
      </Section>

    </>
  );
}
