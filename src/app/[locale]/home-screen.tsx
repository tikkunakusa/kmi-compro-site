"use client";

import { Fragment } from "react";;
import { Header } from "@/components/marketing/header-navigation/header";
import { CarouselHero } from "@/components/pages/home/1-carousel-hero";
import { CompanyServices } from "@/components/pages/home/2-company-services";
import { WhyChooseUs } from "@/components/pages/home/3-why-choose-us";
import { AboutUs } from "@/components/pages/home/4-about-us";
import { OurClients } from "@/components/pages/home/5-our-clients";
import { ContactUs } from "@/components/pages/home/6-contact-us";

export const HomeScreen = () => {

    return (
        <Fragment>
            <Header className="bg-primary" />

            <CarouselHero />

            <CompanyServices />

            <WhyChooseUs />

            <AboutUs />

            <OurClients />

            <ContactUs />
        </Fragment>
    );
};
