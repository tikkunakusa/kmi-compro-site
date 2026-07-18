import { Fragment } from "react";;
import { LegalConsultant } from "@/components/pages/services/1-legal";
import { ManagementConsultant } from "@/components/pages/services/2-management";
import { TechConsultant } from "@/components/pages/services/3-tech";
import { FinanceConsultant } from "@/components/pages/services/4-finance";
import EndContentsContactUs from "@/components/marketing/contact-us/end-contents";
import Footer from "@/components/pages/footer/footer";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Header.List' });
    return {
        title: t('Services'),
        description: "Layanan Konsultan KMI meliputi Legal, Manajemen, IT, dan Keuangan.",
    };
}

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
