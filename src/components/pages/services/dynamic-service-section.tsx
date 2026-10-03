import { Button } from "@/components/base/buttons/button";
import HeroTitleServices from "@/components/marketing/header-navigation/base-components/hero-title-services";
import { ServiceItem } from "@/utils/services-data";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface DynamicServiceSectionProps {
    service: ServiceItem;
}

export const DynamicServiceSection = ({ service }: DynamicServiceSectionProps) => {
    const tGeneral = useTranslations("General");

    return (
        <section id={service.slug} className="w-full max-w-container bg-primary items-center justify-center">
            <HeroTitleServices title={service.title} imageSrc={service.image} />
            <div className="py-8 md:py-16 px-4 md:px-8">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-fg-primary sm:text-xl">
                        {service.title}
                    </h2>
                    <p className="mt-4 text-md text-fg-secondary">
                        {service.detail || service.subtitle}
                    </p>
                    {service.items && service.items.length > 0 && (
                        <ul className="ml-4 list-disc mt-2 text-md text-fg-secondary">
                            {service.items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}
                </div>

                {service.partnerTitle && (
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight text-fg-primary sm:text-xl mt-8">
                            {service.partnerTitle}
                        </h2>
                        <div className="mt-4 text-md text-fg-secondary">
                            {service.partnerDesc && <p>{service.partnerDesc}</p>}
                            {service.partnerLogo && (
                                <div className="mt-4">
                                    <Image
                                        src={service.partnerLogo}
                                        alt={`${service.partnerTitle} Logo`}
                                        width={300}
                                        height={200}
                                        className="max-h-24 w-auto object-contain"
                                        unoptimized={service.partnerLogo.startsWith("http")}
                                    />
                                </div>
                            )}
                        </div>
                        {service.partnerUrl && (
                            <Button
                                className="mt-4"
                                href={service.partnerUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {tGeneral("MoreInfo")}
                            </Button>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};
