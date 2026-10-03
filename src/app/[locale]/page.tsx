import { Fragment } from "react";
import { HeroCarousel } from "@/components/pages/home/1-carousel-hero";
import { CompanyServices } from "@/components/pages/home/2-company-services";
import { WhyChooseUs } from "@/components/pages/home/3-why-choose-us";
import { AboutUs } from "@/components/pages/home/4-about-us";
import { OurClients } from "@/components/pages/home/5-our-clients";
import { ContactUs } from "@/components/pages/home/6-contact-us";
import Footer from "@/components/pages/footer/footer";
import { getClientsSheetData, getServicesSheetData } from "@/lib/googleSheets";

import { getTranslations } from "next-intl/server";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'HomePage.Header.1' });
    return {
        title: "Home",
        description: t('Subtitle'),
    };
}

const HomeScreen = async ({ params }: { params: Promise<{ locale: string }> }) => {
    const { locale } = await params;
    const [clients, services] = await Promise.all([
        getClientsSheetData(),
        getServicesSheetData(locale),
    ]);

    return (
        <Fragment>
            <HeroCarousel />
            <CompanyServices services={services} />
            <WhyChooseUs />
            <AboutUs />
            <OurClients clients={clients} />
            <ContactUs />
            <Footer />
        </Fragment>
    );
};

export default HomeScreen;
