"use client";

import { Fragment } from "react";;
import HeroTitleServices from "@/components/marketing/header-navigation/base-components/hero-title-services";
import EndContentsContactUs from "@/components/marketing/contact-us/end-contents";

const HomeScreen = () => {
    return (
        <Fragment>
            <HeroTitleServices
                title="Legal, Technology, and Governance Insights"
                subtitle="Curated educational content sharing practical perspectives on legal compliance, technology risk, and organizational governance."
            />
            <div className="py-16 px-8">
                <h2 className="text-3xl font-bold tracking-tight text-fg-primary sm:text-2xl">
                    Featured Videos (7)
                </h2>
                <p className="mt-4 text-sm text-fg-secondary italic">
                    The content provided is for general educational purposes and does not constitute legal advice.
                </p>
            </div>
            <div className="py-16 px-8">
                {/* Placeholder for video content */}
                <h1>VIDEO EMBED</h1>
            </div>
            <EndContentsContactUs />
        </Fragment>
    );
};

export default HomeScreen;
