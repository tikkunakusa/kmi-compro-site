"use client";

import { Fragment } from "react";;
import { LegalConsultant } from "@/components/pages/services/1-legal";
import { ManagementConsultant } from "@/components/pages/services/2-management";
import { TechConsultant } from "@/components/pages/services/3-tech";
import { FinanceConsultant } from "@/components/pages/services/4-finance";
import EndContentsContactUs from "@/components/marketing/contact-us/end-contents";

const HomeScreen = () => {
    return (
        <Fragment>
            <LegalConsultant />
            <ManagementConsultant />
            <TechConsultant />
            <FinanceConsultant />
            <EndContentsContactUs />
        </Fragment>
    );
};

export default HomeScreen;
