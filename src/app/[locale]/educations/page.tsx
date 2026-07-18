import HeroTitleServices from "@/components/marketing/header-navigation/base-components/hero-title-services";
import EndContentsContactUs from "@/components/marketing/contact-us/end-contents";
import Footer from "@/components/pages/footer/footer";
import TikTokCarousel from "@/components/application/tiktok-carousel/tiktok-carousel";
import { getSheetData } from "@/lib/googleSheets";
import { getTranslations } from "next-intl/server";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Education' });
    return {
        title: t('Title'),
        description: t('Subtitle'),
    };
}

const EducationPage = async () => {
    const t = await getTranslations("Education")
    const videos = await getSheetData();
    return (
        <>
            <HeroTitleServices
                title={t("Title")}
                subtitle={t("Subtitle")}
            />
            <TikTokCarousel fetchedVideos={videos.slice(0, 7)} />
            <EndContentsContactUs />
            <Footer />
        </>
    );
};

export default EducationPage;
