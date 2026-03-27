"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const sections = [
    { id: "hero", label: "01 IDENTITY" },
    { id: "about", label: "02 MISSION" },
    { id: "events", label: "03 PROGRAM" },
    { id: "alumni", label: "04 LEGACY" },
    { id: "sponsors", label: "05 PARTNERS" },
    { id: "contact", label: "06 TRANSMIT" },
];

export function DiagonalSpine() {
    const [activeSection, setActiveSection] = useState(sections[0].id);
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="fixed left-6 md:left-12 top-0 h-full w-px bg-sess-divider z-40 hidden lg:block">
            {/* Progress Indicator */}
            <motion.div
                className="absolute top-0 left-0 w-full bg-sess-highlight origin-top"
                style={{ scaleY, height: "100%" }}
            />

            {/* Section Markers */}
            <div className="absolute top-0 left-0 h-full flex flex-col justify-between py-32">
                {sections.map((section) => (
                    <div key={section.id} className="relative flex items-center">
                        <div
                            className={`w-2 h-2 rounded-full -translate-x-1/2 transition-colors duration-300 ${activeSection === section.id ? "bg-sess-highlight scale-125" : "bg-sess-divider"
                                }`}
                        />
                        <motion.span
                            className={`absolute left-6 font-mono text-[10px] tracking-[0.3em] whitespace-nowrap transition-colors duration-300 ${activeSection === section.id ? "text-sess-highlight" : "text-sess-muted"
                                }`}
                        >
                            {section.label}
                        </motion.span>
                    </div>
                ))}
            </div>
        </div>
    );
}
