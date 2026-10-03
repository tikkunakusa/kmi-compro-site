import { Fragment } from "react";
import { DynamicServiceSection } from "@/components/pages/services/dynamic-service-section";
import EndContentsContactUs from "@/components/marketing/contact-us/end-contents";
import Footer from "@/components/pages/footer/footer";
import { getServicesSheetData } from "@/lib/googleSheets";
import { getTranslations } from "next-intl/server";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Header.List' });
    return {
        title: t('Services'),
        description: "Layanan Konsultan KMI meliputi Legal, Manajemen, IT, dan Keuangan.",
    };
}

const ServicesPage = async ({ params }: { params: Promise<{ locale: string }> }) => {
    const { locale } = await params;
    const services = await getServicesSheetData(locale);

    return (
        <Fragment>
            {services.map((service) => (
                <DynamicServiceSection key={service.id || service.slug} service={service} />
            ))}
            <EndContentsContactUs />
            <Footer />
        </Fragment>
    );
};

export default ServicesPage;
