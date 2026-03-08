"use client";

import { Fragment, useEffect } from "react";;
import { CarouselHero } from "@/components/pages/home/1-carousel-hero";
import { CompanyServices } from "@/components/pages/home/2-company-services";
import { WhyChooseUs } from "@/components/pages/home/3-why-choose-us";
import { AboutUs } from "@/components/pages/home/4-about-us";
import { OurClients } from "@/components/pages/home/5-our-clients";
import { ContactUs } from "@/components/pages/home/6-contact-us";
import Footer from "@/components/pages/footer/footer";

const HomeScreen = () => {
    return (
        <Fragment>
            <CarouselHero />
            <CompanyServices />
            <WhyChooseUs />
            <AboutUs />
            <OurClients />
            <ContactUs />
            <Footer/>
        </Fragment>
    );
};

export default HomeScreen;
