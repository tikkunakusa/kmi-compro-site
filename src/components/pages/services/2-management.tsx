import HeroTitleServices from "@/components/marketing/header-navigation/base-components/hero-title-services"
import { useTranslations } from "next-intl"

export const ManagementConsultant = () => {
    const t = useTranslations("Services.Management")
    const services = [
        t("1"),
        t("2"),
        t("3"),
        t("4"),
        t("5"),
        t("6"),
        t("7")
    ]
    return (
        <section id="management" className="w-full max-w-container bg-primary items-center justify-center">
            <HeroTitleServices title={t("Title")} imageSrc="/images/header-services-management.png" />
            <div className="py-16 px-8">
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
        </section>
    )
}