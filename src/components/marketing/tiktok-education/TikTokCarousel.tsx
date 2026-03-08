"use client";

import { useEffect, useRef, useState } from "react";

type TikTokCarouselProps = {
  videos: string[];
};

export default function TikTokCarousel({ videos }: TikTokCarouselProps) {
  const limitedVideos = videos.slice(0, 7);
  const containerRef = useRef<HTMLDivElement>(null);

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => Math.min(prev + 1, limitedVideos.length - 1));
  };

  const prev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    if ((window as any).tiktokEmbed) {
      (window as any).tiktokEmbed.reload();
    }
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto">

      {/* Slides */}
      <div
        className="
          flex transition-transform duration-300
          md:overflow-hidden
          overflow-x-auto snap-x snap-mandatory
        "
        ref={containerRef}
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {limitedVideos.map((url, i) => {
          const videoId = url.split("/video/")[1];

          return (
            <div
              key={i}
              className="
                w-full shrink-0 flex justify-center
                snap-center
              "
            >
              <blockquote
                className="tiktok-embed"
                cite={url}
                data-video-id={videoId}
                style={{ maxWidth: "325px", minWidth: "325px" }}
              >
                <section></section>
              </blockquote>
            </div>
          );
        })}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-between absolute inset-0 items-center px-2 pointer-events-none">
        <button
          onClick={prev}
          className="pointer-events-auto bg-black/70 text-white px-3 py-2 rounded-full"
        >
          ‹
        </button>

        <button
          onClick={next}
          className="pointer-events-auto bg-black/70 text-white px-3 py-2 rounded-full"
        >
          ›
        </button>
      </div>
    </div>
  );
}