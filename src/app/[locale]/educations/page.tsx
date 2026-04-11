import HeroTitleServices from "@/components/marketing/header-navigation/base-components/hero-title-services";
import EndContentsContactUs from "@/components/marketing/contact-us/end-contents";
import Footer from "@/components/pages/footer/footer";
import TikTokCarousel from "@/components/application/tiktok-carousel/tiktok-carousel";
import { getSheetData } from "@/lib/googleSheets";

export const revalidate = 60;

const EducationPage = async () => {
    const videos = await getSheetData();
    return (
        <>
            <HeroTitleServices
                title="Legal, Technology, and Governance Insights"
                subtitle="Curated educational content sharing practical perspectives on legal compliance, technology risk, and organizational governance."
            />
            <TikTokCarousel fetchedVideos={videos.slice(0, 7)} />
            <EndContentsContactUs />
            <Footer />
        </>
    );
};

export default EducationPage;
