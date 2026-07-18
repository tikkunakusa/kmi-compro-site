"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/base/buttons/button";
import { ChevronLeft, ChevronRight } from "@untitledui/icons";
import { useTranslations } from 'next-intl';

export function HeroCarousel() {
    const t = useTranslations();

    const slides = [
        {
            title: t("HomePage.Header.1.Title"),
            description: t("HomePage.Header.1.Subtitle"),
        },
        {
            title: t("HomePage.Header.2.Title"),
            description: t("HomePage.Header.2.Subtitle"),
        },
        {
            title: t("HomePage.Header.3.Title"),
            description: t("HomePage.Header.3.Subtitle"),
        },
        {
            title: t("HomePage.Header.4.Title"),
            description: t("HomePage.Header.4.Subtitle"),
        },
    ];
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const nextSlide = () => {
        setIsPaused(true);
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setIsPaused(true);
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") nextSlide();
            if (e.key === "ArrowLeft") prevSlide();
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);

    // Autoplay
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused]);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[600px] overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-500" />

            {/* Content */}
            <div className="relative z-10 flex items-center h-full px-4 md:px-20">
                <div className="max-w-2xl text-white">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={(e, info) => {
                            if (info.offset.x < -100) nextSlide();
                            if (info.offset.x > 100) prevSlide();
                        }}
                        style={{
                            willChange: "transform, opacity",
                            transform: "translate3d(0,0,0)",
                            WebkitTransform: "translate3d(0,0,0)",
                            touchAction: "pan-y",
                        }}
                    >
                        <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
                            {slides[current].title}
                        </h1>
                        <p
                            className="text-base md:text-lg text-gray-200 mb-6"
                            dangerouslySetInnerHTML={{
                                __html: slides[current].description,
                            }}
                        />
                        <a href="/#contact-us">
                            <Button
                                onClick={() => {
                                    document
                                        .getElementById("contact-us")
                                        ?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="rounded-xl px-6 py-3"
                            >
                                {t("General.ContactUs")}
                            </Button>
                        </a>
                    </motion.div>

                    {/* Indicators */}
                    <div className="flex gap-2 mt-6">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`h-2 rounded-full transition-all ${current === index
                                    ? "w-8 bg-white"
                                    : "w-2 bg-white/50"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {/* Navigation Buttons - Desktop */}
            <div className="hidden md:block">
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 p-2 rounded-full cursor-pointer"
                >
                    <ChevronLeft />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 p-2 rounded-full cursor-pointer"
                >
                    <ChevronRight />
                </button>
            </div>

            {/* Navigation - Mobile (clean & safe) */}
            <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                <button
                    onClick={prevSlide}
                    className="bg-white/10 backdrop-blur-md p-2 rounded-full"
                >
                    <ChevronLeft />
                </button>
                <button
                    onClick={nextSlide}
                    className="bg-white/10 backdrop-blur-md p-2 rounded-full"
                >
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
}
