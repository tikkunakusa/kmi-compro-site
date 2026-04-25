import { useTranslations } from "next-intl"

export const WhyChooseUs = () => {
    const t = useTranslations("HomePage.Reasons")
    const reasons = [
        {
            title: t("1.Title"),
            description: t("1.Description"),
        },
        {
            title: t("2.Title"),
            description: t("2.Description"),
        },
        {
            title: t("3.Title"),
            description: t("3.Description"),
        }
    ]
    return (
        <section className="w-full max-w-container items-center justify-center text-center bg-[#F9FAFB]">
            <div className="py-16 px-8 text-center">
                <h1 className="text-3xl font-bold tracking-tight text-fg-primary sm:text-4xl">{t("Title")}</h1>
                <p className="mt-4 text-lg text-fg-secondary">{t("Subtitle")}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 px-8 pb-8">
                {reasons.map((reason, index) => (
                    <div key={`reasons-${index}`} className="p-4 text-left grid gap-4 bg-[#243447] rounded-lg">
                        <div className="grid gap-2">
                            <h4 className="font-bold text-2xl tracking-tight text-[#ffffff] sm:text-xl">{reason.title}</h4>
                            <p className="text-[#ffffff] text-sm text-justify">{reason.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
} 