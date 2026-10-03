import { Button } from "@/components/base/buttons/button"
import { ServiceItem, defaultServices } from "@/utils/services-data";
import { useTranslations, useLocale } from 'next-intl';

interface CompanyServicesProps {
    services?: ServiceItem[];
}

export const CompanyServices = ({ services }: CompanyServicesProps) => {
    const t = useTranslations();
    const locale = useLocale();
    const serviceList = services && services.length > 0 ? services : defaultServices(locale);

    return (
        <section className="w-full max-w-container bg-primary items-center justify-center text-center">
            <div className="py-8 md:py-16 px-4 md:px-8 text-center">
                <h1 className="text-3xl font-bold tracking-tight text-fg-primary sm:text-4xl">{t("HomePage.Solutions.Title")}</h1>
                <p className="mt-4 text-lg text-fg-secondary">{t("HomePage.Solutions.Subtitle")}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-8 px-4 md:px-8 pb-8">
                {serviceList.map((service, index) => (
                    <div key={`services-${service.id || service.slug || index}`} className="p-4 text-left grid gap-4">
                        <div className="grid gap-2">
                            <h4 className="font-semibold text-2xl tracking-tight text-fg-primary sm:text-xl">{service.title}</h4>
                            <p className="text-fg-secondary text-sm text-justify">{service.detail || service.subtitle}</p>
                        </div>
                        <Button size="md" className="self-start" href={`/services#${service.slug}`}>
                            {t("General.LearnMore")}
                        </Button>
                    </div>
                ))}
            </div>
        </section>
    );
};   