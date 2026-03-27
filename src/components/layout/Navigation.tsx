import React from "react";
import Link from "next/link";
import { Button } from "../ui/Button";

export function Navigation() {
    return (
        <header className="sticky top-0 z-50 w-full bg-sess-bg/95 backdrop-blur-md border-b border-sess-divider">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12">
                <div className="flex items-center gap-2">
                    {/* Brand Mark */}
                    <Link
                        href="/"
                        className="font-heading text-xl font-bold tracking-tight text-sess-text-primary uppercase"
                    >
                        SESS
                    </Link>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-sm font-medium text-sess-text-primary hover:text-sess-highlight transition-colors">
                        Home
                    </Link>
                    <Link href="/about" className="text-sm font-medium text-sess-muted hover:text-sess-highlight transition-colors">
                        About
                    </Link>
                    <Link href="/events" className="text-sm font-medium text-sess-muted hover:text-sess-highlight transition-colors">
                        Events
                    </Link>
                    <Link href="/alumni" className="text-sm font-medium text-sess-muted hover:text-sess-highlight transition-colors">
                        Alumni
                    </Link>
                    <Link href="/sponsors" className="text-sm font-medium text-sess-muted hover:text-sess-highlight transition-colors">
                        Sponsorship
                    </Link>
                    <Link href="/contact" className="text-sm font-medium text-sess-muted hover:text-sess-highlight transition-colors">
                        Contact
                    </Link>
                </nav>

                <div className="flex items-center">
                    <Link href="/sponsors">
                        <Button variant="primary" className="bg-sess-primary text-white hover:shadow-[0_0_20px_rgba(251,65,128,0.3)]">Partner With Us</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
