import { Button } from "@/components/base/buttons/button"
import { useTranslations } from 'next-intl';

export const CompanyServices = () => {
    const t = useTranslations();
    const services = [
        {
            title: t("Header.Services.Legal.Title"),
            description: t("Header.Services.Legal.Detail"),
            href: "/services#legal",
        },
        {
            title: t("Header.Services.Management.Title"),
            description: t("Header.Services.Management.Detail"),
            href: "/services#management",
        },
        {
            title: t("Header.Services.IT.Title"),
            description: t("Header.Services.IT.Detail"),
            href: "/services#tech",
        },
        {
            title: t("Header.Services.Financial.Title"),
            description: t("Header.Services.Financial.Detail"),
            href: "/services#finance",
        },
    ]
    return (
        <section className="w-full max-w-container bg-primary items-center justify-center text-center">
            <div className="py-16 px-8 text-center">
                <h1 className="text-3xl font-bold tracking-tight text-fg-primary sm:text-4xl">{t("HomePage.Solutions.Title")}</h1>
                <p className="mt-4 text-lg text-fg-secondary">{t("HomePage.Solutions.Subtitle")}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 px-8 pb-8">
                {services.map((service, index) => (
                    <div key={`services-${index}`} className="p-4 text-left grid gap-4">
                        <div className="grid gap-2">
                            <h4 className="font-semibold text-2xl tracking-tight text-fg-primary sm:text-xl">{service.title}</h4>
                            <p className="text-fg-secondary text-sm text-justify">{service.description}</p>
                        </div>
                        <Button size="md" className="self-start" href={service.href}>
                            {t("General.LearnMore")}
                        </Button>
                    </div>
                ))}
            </div>
        </section>
    )
}   