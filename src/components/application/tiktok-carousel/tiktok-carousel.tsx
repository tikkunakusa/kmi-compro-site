"use client";

import clsx from "clsx";
import { useTranslations } from "next-intl";
import { useRef, useState, useEffect } from "react";
import { TikTokEmbed } from 'react-social-media-embed';

type VideoItem = {
    id: string;
    title: string;
    description: string;
    tiktokUrl: string;
};

const TikTokCarousel = ({ fetchedVideos }: { fetchedVideos: VideoItem[] }) => {
    const t = useTranslations("Education");
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const [videos] = useState<VideoItem[]>(fetchedVideos);

    useEffect(() => {
        setIsMounted(true);

        const container = scrollRef.current;
        if (!container) return;

        const handleScroll = () => {
            const children = Array.from(container.children) as HTMLElement[];
            const scrollLeft = container.scrollLeft;

            let closestIndex = 0;
            let minDiff = Infinity;

            children.forEach((child, index) => {
                const diff = Math.abs(child.offsetLeft - scrollLeft);
                if (diff < minDiff) {
                    minDiff = diff;
                    closestIndex = index;
                }
            });

            setActiveIndex(closestIndex);
        };

        container.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollTo = (index: number) => {
        if (!scrollRef.current) return;

        const container = scrollRef.current;
        const child = container.children[index] as HTMLElement;

        container.scrollTo({
            left: child.offsetLeft,
            behavior: "smooth",
        });

        setActiveIndex(index);
    };

    const handleNext = () => {
        const next = Math.min(activeIndex + 1, videos.length - 1);
        scrollTo(next);
    };

    const handlePrev = () => {
        const prev = Math.max(activeIndex - 1, 0);
        scrollTo(prev);
    };

    return (
        <main className="max-w-6xl mx-auto py-10">
            <h1 className="text-3xl font-bold tracking-tight text-fg-primary sm:text-4xl">
                {t("VideoTitle")} ({videos.length})
            </h1>
            <p className="mt-4 text-lg text-fg-secondary">
                {t("VideoSubtitle")}
            </p>

            {/* Carousel */}
            <div className="relative py-4">
                {/* Track */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar touch-pan-x"
                >
                    {videos.length > 0 && videos.map((video, index) => (
                        <div
                            key={video.id}
                            className="snap-start shrink-0 w-[90%] bg-gray-50 rounded-2xl flex overflow-hidden"
                        >
                            {/* LEFT: TikTok Embed */}
                            <div className="w-1/2 bg-gray-300 flex items-center justify-center">
                                <div className="w-full h-full">
                                    {isMounted && activeIndex === index && (
                                        <TikTokEmbed url={video.tiktokUrl} width="100%" />
                                    )}
                                </div>
                            </div>

                            {/* RIGHT: Content */}
                            <div className="w-1/2 p-6 flex flex-col justify-center">
                                <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                                    {video.title}
                                </h3>
                                <p className="text-sm text-gray-600 mt-2">
                                    {video.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={handlePrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2"
                >
                    ←
                </button>

                <button
                    onClick={handleNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2"
                >
                    →
                </button>
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-4 justify-center">
                {videos.length > 0 && videos.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => scrollTo(i)}
                        className={clsx(
                            "h-2 w-2 rounded-full transition-all",
                            activeIndex === i ? "bg-gray-900 w-4" : "bg-gray-300"
                        )}
                    />
                ))}
            </div>
        </main>
    )
}

export default TikTokCarousel;