"use client";

import React from "react";
import { PageHero } from "@/components/ui/PageHero";
import { DirectoryGrid } from "@/components/ui/DirectoryGrid";

export default function AlumniPage() {
    return (
        <>
            <PageHero
                label="Alumni // Legacy"
                heading={<>Alumni<br />Network.</>}
                subtext="Honouring the leaders who engineered SESS into Swinburne's central engineering authority."
            />
            <DirectoryGrid />
        </>
    );
}
