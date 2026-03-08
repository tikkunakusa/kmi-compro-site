"use client";

import HeroTitleServices from "@/components/marketing/header-navigation/base-components/hero-title-services";
import EndContentsContactUs from "@/components/marketing/contact-us/end-contents";
import TikTokCarousel from "@/components/marketing/tiktok-education/TikTokCarousel";
import Footer from "@/components/pages/footer/footer";

const HomeScreen = () => {
    const videos = [
        "https://www.tiktok.com/@mrcomfort22/video/7611157897527004429",
        "https://www.tiktok.com/@mrcomfort22/video/7611157897527004429",
        "https://www.tiktok.com/@mrcomfort22/video/7611157897527004429",
        "https://www.tiktok.com/@mrcomfort22/video/7611157897527004429",
        "https://www.tiktok.com/@mrcomfort22/video/7611157897527004429",
        "https://www.tiktok.com/@mrcomfort22/video/7611157897527004429",
        "https://www.tiktok.com/@mrcomfort22/video/7611157897527004429",
    ];
    return (
        <>
            <HeroTitleServices
                title="Legal, Technology, and Governance Insights"
                subtitle="Curated educational content sharing practical perspectives on legal compliance, technology risk, and organizational governance."
            />
            <main className="max-w-6xl mx-auto py-10">
                <h2 className="text-3xl font-bold tracking-tight text-fg-primary sm:text-2xl">
                    Featured Videos (7)
                </h2>
                <p className="mt-4 text-sm text-fg-secondary italic">
                    The content provided is for general educational purposes and does not constitute legal advice.
                </p>
                <TikTokCarousel
                    videos={videos}
                />
            </main>
            <EndContentsContactUs />
            <Footer/>
        </>
    );
};

export default HomeScreen;
