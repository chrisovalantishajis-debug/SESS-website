import React from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ContentCard } from "@/components/ui/ContentCard";
import { Button } from "@/components/ui/Button";

export default function JoinPage() {
    return (
        <>
            <Section className="pt-32 pb-20 bg-sess-bg border-b border-sess-divider" hasDivider={false}>
                <Container className="text-center">
                    <div className="col-span-12 md:col-span-8 md:col-start-3">
                        <h1 className="font-heading text-5xl font-extrabold text-sess-text-primary mb-6">
                            Engineer Your Future.
                        </h1>
                        <p className="text-xl text-sess-muted max-w-2xl mx-auto mb-8">
                            Exclusive access to premier engineering firms. Unmatched professional development. Expand your technical horizon.
                        </p>
                        <Button variant="primary" className="h-14 px-12">Register Membership</Button>
                    </div>
                </Container>
            </Section>

            <Section hasDivider={false}>
                <Container>
                    <div className="col-span-12 mb-12 border-b border-sess-divider pb-4">
                        <h2 className="font-heading text-3xl font-bold text-sess-text-primary">Member Benefits</h2>
                    </div>
                    <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ContentCard title="Professional Growth">
                            Develop soft skills that compliment your rigorous technical education via dedicated workshops.
                        </ContentCard>
                        <ContentCard title="Networking Confidence">
                            Gain direct interface time with recruiters and senior engineers in structured, pressure-free environments.
                        </ContentCard>
                        <ContentCard title="Community Access">
                            Unlock access to the largest multidisciplinary engineering Discord and private networking groups at Swinburne.
                        </ContentCard>
                    </div>
                </Container>
            </Section>
        </>
    );
}
