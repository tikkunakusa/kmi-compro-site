import { useTranslations } from "next-intl"

export const AboutUs = () => {
    const t = useTranslations("HomePage.Deliverables")
    return (
        <section id="about-us" className="w-full max-w-container items-center justify-center text-center bg-[#F9FAFB] p-8">
            <div className="bg-primary rounded-xl p-4 md:p-8">
                <h3 className="text-xl font-bold tracking-tight text-fg-primary sm:text-2xl">
                    {t("Title")}
                </h3>
                <p className="mt-4 text-md text-fg-secondary">
                    {t("Subtitle")}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    <div className="bg-[#243447] rounded-xl p-4 md:p-8">
                        <h4 className="text-lg font-semibold tracking-tight text-[#ffffff] sm:text-xl">
                            {t("AboutUs.Title")}
                        </h4>
                        <p className="mt-4 text-justify text-md text-[#ffffff]">
                            {t("AboutUs.Description")}
                        </p>
                    </div>
                    <div className="grid grid-rows-2 md:grid-rows-1 gap-4">
                        <div className="bg-[#243447] rounded-xl p-4 md:p-8">
                            <h5 className="text-lg font-semibold tracking-tight text-[#ffffff] sm:text-xl">
                                {t("Vision.Title")}
                            </h5>
                            <p className="mt-4 text-justify text-md text-[#ffffff]">
                                {t("Vision.Description")}
                            </p>
                        </div>
                        <div className="bg-[#243447] rounded-xl p-4 md:p-8">
                            <h5 className="text-lg font-semibold tracking-tight text-[#ffffff] sm:text-xl">
                                {t("Mission.Title")}
                            </h5>
                            <p className="mt-4 text-justify text-md text-[#ffffff]">
                                {t("Mission.Description")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}   