"use client";

import { Fragment } from "react";;
import { LegalConsultant } from "@/components/pages/services/1-legal";
import { ManagementConsultant } from "@/components/pages/services/2-management";
import { TechConsultant } from "@/components/pages/services/3-tech";
import { FinanceConsultant } from "@/components/pages/services/4-finance";
import EndContentsContactUs from "@/components/marketing/contact-us/end-contents";
import Footer from "@/components/pages/footer/footer";

const HomeScreen = () => {
    return (
        <Fragment>
            <LegalConsultant />
            <ManagementConsultant />
            <TechConsultant />
            <FinanceConsultant />
            <EndContentsContactUs />
            <Footer/>
        </Fragment>
    );
};

export default HomeScreen;
