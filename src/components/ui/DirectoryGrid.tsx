"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/Container";


interface Member {
    id: string;
    name: string;
    role: string;
    discipline: string;
    year: string;
    bio: string;
    linkedin?: string;
    instagram?: string;
    image?: string;
}

const membersData: Member[] = [
    {
        id: "1",
        name: "Chrisovalantis Hajis",
        role: "Co-President",
        discipline: "Mechanical",
        year: "2025",
        bio: "Farhan is a penultimate-year Mechanical Engineering student with a focus on project management and industry relations. He is passionate about bridging the gap between student talent and global firms.",
        linkedin: "#",
        instagram: "#",
    },
    {
        id: "2",
        name: "William Keehne",
        role: "Co-President/Treasurer",
        discipline: "Civil",
        year: "2025",
        bio: "William is a final-year Civil Engineering student interested in structural integrity and risk management. He has extensive experience in student leadership and financial governance.",
        linkedin: "#",
        instagram: "#",
    },
    {
        id: "3",
        name: "Adrian Beck",
        role: "Co-President/Secretary",
        discipline: "Software",
        year: "2025",
        bio: "Taylor is a Software Engineering student pursuing excellence in technical documentation and club operations. She manages the society's central networking database.",
        linkedin: "#",
        instagram: "#",
    },
    {
        id: "4",
        name: "Matthew",
        role: "Web Developer",
        discipline: "Software",
        year: "2025",
        bio: "Jasmeet is a Masters student specializing in Cloud Engineering and Software development. He led the V3 overhaul of the SESS digital headquarters.",
        linkedin: "#",
        instagram: "#",
    },
    {
        id: "5",
        name: "ESHIN",
        role: "Marketing Director",
        discipline: "Electrical",
        year: "2025",
        bio: "Aman is the Marketing Director of SESS, creating high-impact visual campaigns and connecting student talent to industry opportunities through digital storytelling.",
        linkedin: "#",
        instagram: "#",
    },
    {
        id: "6",
        name: "JUILIA",
        role: "Events Director",
        discipline: "Mechanical",
        year: "2025",
        bio: "Aditya is a third-year Mechanical Engineering student with a strong interest in large-scale event coordination and industry networking logistics.",
        linkedin: "#",
        instagram: "#",
    },
];

export function DirectoryGrid() {
    const [selectedYear, setSelectedYear] = useState("2025");
    const [searchQuery, setSearchQuery] = useState("");

    const years = ["2026", "2025", "2024", "2023"];

    const filteredMembers = useMemo(() => {
        return membersData.filter(m =>
            m.year === selectedYear &&
            (m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                m.role.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    }, [selectedYear, searchQuery]);

    return (
        <section className="bg-[#0A0A0A] py-24 min-h-screen">
            <Container>
                {/* Search & Filter Bar */}
                <div className="col-span-12 mb-16 flex flex-col md:flex-row gap-6 items-center justify-between border-b border-white/10 pb-8">
                    <div className="relative group w-full md:w-48">
                        <select
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 text-sm font-black text-white appearance-none focus:outline-none focus:ring-2 focus:ring-sess-primary/20 transition-all cursor-pointer hover:bg-white/10"
                        >
                            {years.map(y => <option key={y} value={y} className="bg-[#121212]">{y}</option>)}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 text-white">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </div>
                    </div>

                    <div className="relative w-full md:w-96">
                        <input
                            type="text"
                            placeholder="Search Members..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 text-sm font-medium text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-sess-primary/20 transition-all shadow-sm"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30 text-white">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </div>
                    </div>
                </div>

                {/* Member Grid */}
                <div className="col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    <AnimatePresence mode="popLayout">
                        {filteredMembers.map((member) => (
                            <MemberCard key={member.id} member={member} />
                        ))}
                    </AnimatePresence>
                </div>
            </Container>
        </section>
    );
}

function MemberCard({ member }: { member: Member }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-[#121212] border border-white/5 rounded-2xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)] transition-all duration-500 flex flex-col group h-full"
        >
            <div className="aspect-[4/5] bg-white/5 relative overflow-hidden">
                {/* Standard Portrait Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-24 h-24 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                </div>

                {/* Social Overlays */}
                <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    {member.linkedin && (
                        <a href={member.linkedin} className="w-10 h-10 bg-white/10 backdrop-blur-md shadow-lg rounded-full flex items-center justify-center text-[#4da3ff] hover:bg-[#0A66C2] hover:text-white transition-all">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </a>
                    )}
                    {member.instagram && (
                        <a href={member.instagram} className="w-10 h-10 bg-white/10 backdrop-blur-md shadow-lg rounded-full flex items-center justify-center text-[#ff6b81] hover:bg-[#E4405F] hover:text-white transition-all">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                        </a>
                    )}
                </div>
            </div>

            <div className="p-8 flex flex-col items-center text-center">
                <h3 className="font-serif text-3xl font-bold text-white mb-1 group-hover:text-sess-primary transition-colors">
                    {member.name}
                </h3>
                <p className="text-white/40 font-mono text-[10px] tracking-[0.3em] font-black uppercase mb-6">
                    {member.role}
                </p>
                <div className="h-px w-12 bg-sess-primary/40 mb-6" />

                <p className={`text-white/70 text-sm leading-relaxed mb-4 transition-all duration-500 ${isExpanded ? "" : "line-clamp-3 text-transparent bg-clip-text bg-gradient-to-b from-white/70 to-transparent"}`}>
                    {member.bio}
                </p>

                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-[10px] font-black uppercase tracking-[0.2em] text-sess-primary border-b border-sess-primary/30 pb-0.5 hover:border-sess-primary transition-all"
                >
                    {isExpanded ? "Show Less" : "Show More"}
                </button>
            </div>
        </motion.div>
    );
}
