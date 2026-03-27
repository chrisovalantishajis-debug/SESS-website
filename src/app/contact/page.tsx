"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

import { PageHero } from "@/components/ui/PageHero";
import {
    Mail,
    Linkedin,
    Instagram,
    MapPin,
    Briefcase,
    Users,
    GraduationCap,

    Send,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Animation variants
───────────────────────────────────────────── */
const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay },
    }),
} as const;

const fadeIn = {
    hidden: { opacity: 0 },
    visible: (delay = 0) => ({
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" as const, delay },
    }),
} as const;


/* ─────────────────────────────────────────────
   Reusable input / textarea className helper
───────────────────────────────────────────── */
const inputCls =
    "w-full bg-[#0F0F11] border border-white/[0.07] rounded-lg px-4 py-3 text-sess-text-primary placeholder-sess-muted/50 text-sm font-sans " +
    "focus:outline-none focus:ring-1 focus:ring-sess-primary/50 focus:border-sess-primary/40 " +
    "transition-all duration-200";

/* ─────────────────────────────────────────────
   Section Divider
───────────────────────────────────────────── */
function SectionDivider() {
    return (
        <div className="mt-16 w-full h-[1px] bg-white/[0.06]" />
    );
}

/* ─────────────────────────────────────────────
   1️⃣  HERO SECTION
───────────────────────────────────────────── */
function ContactHero() {
    return (
        <PageHero
            label="Contact // Partnership"
            heading={<>Let&apos;s Work<br />Together.</>}
            subtext="Connect with the Swinburne Engineering Student Society for partnerships, alumni collaboration, or general enquiries."
        />
    );
}

/* ─────────────────────────────────────────────
   2️⃣  CONTACT STRUCTURE SECTION
───────────────────────────────────────────── */

interface InfoCardProps {
    icon: React.ReactNode;
    label: string;
    value: React.ReactNode;
    sub?: string;
    delay?: number;
}

function InfoCard({ icon, label, value, sub, delay = 0 }: InfoCardProps) {
    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={delay}
            className="group flex items-start gap-4 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300"
        >
            <div className="mt-0.5 text-sess-primary/70 group-hover:text-sess-primary transition-colors duration-200 shrink-0">
                {icon}
            </div>
            <div>
                <p className="text-xs font-mono text-white/30 uppercase tracking-[0.15em] mb-1">
                    {label}
                </p>
                <div className="text-sm text-sess-text-primary font-medium leading-relaxed">
                    {value}
                </div>
                {sub && (
                    <p className="text-xs text-sess-muted/60 mt-1">{sub}</p>
                )}
            </div>
        </motion.div>
    );
}

function ContactStructure() {
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        organisation: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder — wire to backend/email service as needed
        setSubmitted(true);
    };

    return (
        <Section id="contact-form" hasDivider={false} className="py-24 bg-sess-bg relative">
            <Container>
                {/* ── LEFT: Info Cards (40%) ── */}
                <div className="col-span-12 lg:col-span-5 flex flex-col gap-5">
                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0}
                        className="font-heading text-2xl font-bold text-sess-text-primary tracking-tight mb-2"
                    >
                        Other Ways To Reach Us
                    </motion.h2>

                    <InfoCard
                        icon={<Mail size={18} strokeWidth={1.5} />}
                        label="Email"
                        value={
                            <a
                                href="mailto:hello@sess.org.au"
                                className="hover:text-sess-primary transition-colors"
                            >
                                hello@sess.org.au
                            </a>
                        }
                        delay={0.05}
                    />

                    <InfoCard
                        icon={<Linkedin size={18} strokeWidth={1.5} />}
                        label="LinkedIn"
                        value={
                            <a href="#" className="hover:text-sess-primary transition-colors">
                                Swinburne SESS
                            </a>
                        }
                        sub="For industry & alumni engagement"
                        delay={0.1}
                    />

                    <InfoCard
                        icon={<Instagram size={18} strokeWidth={1.5} />}
                        label="Instagram"
                        value={
                            <a href="#" className="hover:text-sess-primary transition-colors">
                                @swinburne_sess
                            </a>
                        }
                        sub="For student updates & events"
                        delay={0.15}
                    />

                    <InfoCard
                        icon={<MapPin size={18} strokeWidth={1.5} />}
                        label="Location"
                        value={
                            <>
                                Swinburne University of Technology
                                <br />
                                Hawthorn VIC 3122
                            </>
                        }
                        delay={0.2}
                    />

                    <motion.p
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.3}
                        className="text-xs font-mono text-white/25 tracking-widest uppercase mt-2"
                    >
                        Average response time: 24–48 hours
                    </motion.p>
                </div>

                {/* ── RIGHT: Form Panel (60%) ── */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.1}
                    className="col-span-12 lg:col-span-7"
                >
                    <div className="rounded-3xl border border-white/[0.07] bg-[#111113] p-8 md:p-10 shadow-2xl shadow-black/40">
                        <h2 className="font-heading text-2xl font-bold text-sess-text-primary tracking-tight mb-1">
                            Partnership &amp; General Enquiries
                        </h2>
                        <p className="text-sm text-sess-muted mb-8">
                            Fill in the form below and our team will be in touch.
                        </p>

                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.97 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center gap-4 py-16 text-center"
                            >
                                <div className="w-12 h-12 rounded-full border border-sess-primary/30 flex items-center justify-center mb-2">
                                    <Send size={20} className="text-sess-primary" />
                                </div>
                                <p className="font-heading text-xl font-bold text-sess-text-primary">
                                    Enquiry Received
                                </p>
                                <p className="text-sm text-sess-muted max-w-xs">
                                    Thank you for reaching out. We&apos;ll respond within 24–48 hours.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                {/* First / Last name */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-mono text-white/30 uppercase tracking-[0.15em]">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Jane"
                                            className={inputCls}
                                            value={formState.firstName}
                                            onChange={(e) =>
                                                setFormState({ ...formState, firstName: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-mono text-white/30 uppercase tracking-[0.15em]">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Smith"
                                            className={inputCls}
                                            value={formState.lastName}
                                            onChange={(e) =>
                                                setFormState({ ...formState, lastName: e.target.value })
                                            }
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-mono text-white/30 uppercase tracking-[0.15em]">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="jane@company.com"
                                        className={inputCls}
                                        value={formState.email}
                                        onChange={(e) =>
                                            setFormState({ ...formState, email: e.target.value })
                                        }
                                    />
                                </div>

                                {/* Organisation */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-mono text-white/30 uppercase tracking-[0.15em]">
                                        Organisation
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Acme Engineering Pty Ltd"
                                        className={inputCls}
                                        value={formState.organisation}
                                        onChange={(e) =>
                                            setFormState({
                                                ...formState,
                                                organisation: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                {/* Subject */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-mono text-white/30 uppercase tracking-[0.15em]">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Partnership Enquiry / General"
                                        className={inputCls}
                                        value={formState.subject}
                                        onChange={(e) =>
                                            setFormState({ ...formState, subject: e.target.value })
                                        }
                                    />
                                </div>

                                {/* Message */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-mono text-white/30 uppercase tracking-[0.15em]">
                                        Message
                                    </label>
                                    <textarea
                                        required
                                        rows={5}
                                        placeholder="Tell us about your enquiry or partnership goals..."
                                        className={`${inputCls} resize-none`}
                                        value={formState.message}
                                        onChange={(e) =>
                                            setFormState({ ...formState, message: e.target.value })
                                        }
                                    />
                                </div>

                                {/* Submit */}
                                <div className="flex justify-end pt-2">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-sess-primary text-white font-heading font-bold text-sm uppercase tracking-wide
                                        hover:brightness-110 hover:shadow-lg hover:shadow-sess-primary/25
                                        active:scale-[0.98] transition-all duration-200"
                                    >
                                        Submit Enquiry
                                        <Send size={14} />
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </motion.div>
            </Container>

            <SectionDivider />
        </Section>
    );
}

/* ─────────────────────────────────────────────
   3️⃣  WHO SHOULD CONTACT US (Authority Section)
───────────────────────────────────────────── */

interface AuthorityCardProps {
    icon: React.ReactNode;
    title: string;
    body: string;
    delay?: number;
}

function AuthorityCard({ icon, title, body, delay = 0 }: AuthorityCardProps) {
    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={delay}
            className="group flex flex-col gap-4 p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]
            hover:bg-white/[0.04] hover:border-sess-primary/20 hover:-translate-y-1
            transition-all duration-300"
        >
            <div className="w-10 h-10 rounded-xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-sess-primary/70 group-hover:text-sess-primary group-hover:border-sess-primary/20 transition-all duration-200">
                {icon}
            </div>
            <div>
                <h3 className="font-heading text-base font-bold text-sess-text-primary tracking-tight mb-2">
                    {title}
                </h3>
                <p className="text-sm text-sess-muted leading-relaxed">{body}</p>
            </div>
        </motion.div>
    );
}

function AuthoritySection() {
    const cards = [
        {
            icon: <Briefcase size={18} strokeWidth={1.5} />,
            title: "Industry Partners",
            body: "Engage directly with multidisciplinary engineering talent across all year levels and disciplines.",
        },
        {
            icon: <GraduationCap size={18} strokeWidth={1.5} />,
            title: "Alumni",
            body: "Reconnect with the next generation of Swinburne engineers and give back to the community that shaped you.",
        },
        {
            icon: <Users size={18} strokeWidth={1.5} />,
            title: "Students",
            body: "Reach out for events, opportunities, or general enquiries about getting involved with SESS.",
        },
    ];

    return (
        <Section hasDivider={false} className="py-24 bg-sess-bg">
            <Container>
                {/* Section header */}
                <div className="col-span-12 mb-12">
                    <motion.p
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0}
                        className="text-xs font-mono text-sess-primary tracking-[0.2em] uppercase mb-3"
                    >
                        Who We Work With
                    </motion.p>
                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.05}
                        className="font-heading text-3xl md:text-4xl font-black tracking-tight text-sess-text-primary"
                    >
                        Who Should Contact Us
                    </motion.h2>
                </div>

                {/* Cards */}
                {cards.map((card, i) => (
                    <div key={card.title} className="col-span-12 sm:col-span-6 lg:col-span-4">
                        <AuthorityCard
                            icon={card.icon}
                            title={card.title}
                            body={card.body}
                            delay={i * 0.08}
                        />
                    </div>
                ))}
            </Container>

            <SectionDivider />
        </Section>
    );
}

/* ─────────────────────────────────────────────
   4️⃣  INSTITUTIONAL CLOSING
───────────────────────────────────────────── */
function InstitutionalClosing() {
    return (
        <Section hasDivider={false} className="py-24 bg-sess-bg">
            <Container>
                <div className="col-span-12 flex flex-col items-center text-center gap-6">
                    {/* Thin horizontal rule above */}
                    <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="origin-center w-16 h-[1px] bg-sess-primary/40"
                    />

                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.1}
                        className="font-heading text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-sess-text-primary max-w-3xl leading-tight"
                    >
                        Empowering the Engineers of Tomorrow
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.2}
                        className="text-base text-sess-muted max-w-2xl leading-relaxed"
                    >
                        SESS builds meaningful bridges between students and industry through
                        structured engagement, professional development, and large-scale networking
                        initiatives.
                    </motion.p>

                    {/* Bottom divider */}
                    <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                        className="origin-center w-full max-w-6xl h-[1px] bg-white/[0.06] mt-8"
                    />
                </div>
            </Container>
        </Section>
    );
}

/* ─────────────────────────────────────────────
   PAGE EXPORT
───────────────────────────────────────────── */
export default function ContactPage() {
    return (
        <>
            <ContactHero />
            <ContactStructure />
            <AuthoritySection />
            <InstitutionalClosing />
        </>
    );
}
