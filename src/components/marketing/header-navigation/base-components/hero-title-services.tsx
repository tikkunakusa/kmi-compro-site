import Image from "next/image";

interface HeroProps {
    readonly title: string;
    imageSrc?: string;
    subtitle?: string;
}

export default function HeroTitleServices({ title, imageSrc, subtitle }: HeroProps) {
    const hasImage = Boolean(imageSrc && imageSrc.trim() !== "");
    const isExternal = hasImage && (imageSrc!.startsWith("http://") || imageSrc!.startsWith("https://"));

    return (
        <section className="relative w-full h-[220px] overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
            {/* Background Image (Only if provided) */}
            {hasImage && (
                <>
                    <Image
                        src={imageSrc!}
                        alt={title ? `${title} background` : "Hero background"}
                        fill
                        priority
                        unoptimized={isExternal}
                        className="object-cover object-center"
                    />
                    {/* Dark Overlay for Image Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-slate-900/30" />
                </>
            )}

            {/* Content */}
            <div className="relative z-10 flex items-center h-full px-6 md:px-16">
                <div className="max-w-4xl">
                    <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="mt-2 text-slate-200 leading-relaxed">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}