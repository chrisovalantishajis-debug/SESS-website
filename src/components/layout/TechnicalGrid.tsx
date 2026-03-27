"use client";

import React from "react";

export function TechnicalGrid() {
    return (
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
                    backgroundSize: "64px 64px",
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sess-bg/50 to-sess-bg" />
        </div>
    );
}
