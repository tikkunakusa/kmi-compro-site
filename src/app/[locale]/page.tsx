import { Fragment } from "react";;
import { HeroCarousel } from "@/components/pages/home/1-carousel-hero";
import { CompanyServices } from "@/components/pages/home/2-company-services";
import { WhyChooseUs } from "@/components/pages/home/3-why-choose-us";
import { AboutUs } from "@/components/pages/home/4-about-us";
import { OurClients } from "@/components/pages/home/5-our-clients";
import { ContactUs } from "@/components/pages/home/6-contact-us";
import Footer from "@/components/pages/footer/footer";

import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'HomePage.Header.1' });
    return {
        title: "Home",
        description: t('Subtitle'),
    };
}

const HomeScreen = () => {
    return (
        <Fragment>
            <HeroCarousel />
            <CompanyServices />
            <WhyChooseUs />
            <AboutUs />
            <OurClients />
            <ContactUs />
            <Footer />
        </Fragment>
    );
};

export default HomeScreen;
