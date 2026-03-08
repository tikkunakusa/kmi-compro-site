"use client";

import { ChevronLeft, ChevronRight } from "@untitledui/icons";
import { Carousel } from "@/components/application/carousel/carousel-base"

export const CarouselHero = () => {
    return (
        <section className="relative bg-primary">
            <Carousel.Root className="relative aspect-[1.6] max-h-140 w-screen">
                <Carousel.PrevTrigger className="absolute top-1/2 left-4 z-10 flex size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-alpha-white/90 p-2 text-fg-secondary outline-focus-ring backdrop-blur-xs focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:bg-disabled_subtle disabled:text-fg-disabled">
                    <ChevronLeft className="size-5" />
                </Carousel.PrevTrigger>
                <Carousel.NextTrigger className="absolute top-1/2 right-4 z-10 flex size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-alpha-white/90 p-2 text-fg-secondary outline-focus-ring backdrop-blur-xs focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:bg-disabled_subtle disabled:text-fg-disabled">
                    <ChevronRight className="size-5" />
                </Carousel.NextTrigger>

                <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2">
                    <Carousel.Indicator index={100}/>
                </div>

                <Carousel.Content className="gap-2">
                    <Carousel.Item className="overflow-hidden">
                        <img alt="Image by Unsplash" src="https://www.untitledui.com/application/plants.webp" className="size-full object-cover" />
                    </Carousel.Item>
                    <Carousel.Item className="overflow-hidden">
                        <img
                            alt="Image by Unsplash"
                            src="https://images.unsplash.com/photo-1484506097116-1bcba4fa7568?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="size-full object-cover"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="overflow-hidden">
                        <img
                            alt="Image by Unsplash"
                            src="https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="size-full object-cover"
                        />
                    </Carousel.Item>
                </Carousel.Content>
            </Carousel.Root>
        </section>
    )
}
