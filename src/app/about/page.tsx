"use client";

import React from "react";
import { PageHero } from "@/components/ui/PageHero";
import { BeliefSection } from "@/components/ui/BeliefSection";
import { CommunitySection } from "@/components/ui/CommunitySection";
import { StatsSection } from "@/components/ui/StatsSection";
import { TimelineSection } from "@/components/ui/TimelineSection";
import { VisionSection } from "@/components/ui/VisionSection";

export default function AboutPage() {
    return (
        <main className="bg-sess-bg min-h-screen">
            <PageHero
                label="About // SESS"
                heading={<>About<br />SESS.</>}
                subtext="The central industry-facing engineering body connecting multidisciplinary student talent with structured professional opportunity."
            />
            <CommunitySection />
            <BeliefSection />
            <StatsSection />
            <TimelineSection />
            <VisionSection />
        </main>
    );
}
