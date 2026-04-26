import { Button } from "@/components/base/buttons/button"
import HeroTitleServices from "@/components/marketing/header-navigation/base-components/hero-title-services"
import { useTranslations } from "next-intl"
import Image from "next/image"

export const LegalConsultant = () => {
    const t = useTranslations("Services.Legal")
    const tGeneral = useTranslations("General")
    const services = [
        t("1"),
        t("2"),
        t("3"),
        t("4"),
        t("5"),
    ]
    return (
        <section id="legal" className="w-full max-w-container bg-primary items-center justify-center">
            <HeroTitleServices title={t("Title")} imageSrc="/images/header-services-legal.png" />
            <div className="py-16 px-8">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-fg-primary sm:text-xl">
                        {t("Title")}
                    </h2>
                    <p className="mt-4 text-md text-fg-secondary">
                        {t("Subtitle")}
                    </p>
                    <ul className="ml-4 list-disc mt-2 text-md text-fg-secondary">
                        {services.map((service, index) => (
                            <li key={index}>{service}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-fg-primary sm:text-xl mt-8">
                        {t("OurPartnerTitle")}
                    </h2>
                    <p className="mt-4 text-md text-fg-secondary">
                        {t("OurPartnerDescription")}
                        <Image src="/images/ichsan-erlitha-logo.png" alt="Ichsan & Erlitha Attorneys at Law Logo" width={300} height={200} className="mt-4" />
                    </p>
                    <Button
                        className="mt-4"
                        href="https://www.ichsanerlitha.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {tGeneral("MoreInfo")}
                    </Button>
                </div>
            </div>
        </section>
    )
}