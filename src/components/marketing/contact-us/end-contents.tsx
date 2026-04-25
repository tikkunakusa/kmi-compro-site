import { Button } from "@/components/base/buttons/button";
import { useTranslations } from "next-intl";

export default function EndContentsContactUs() {
    const t = useTranslations("General")
    return (
        <section className="w-full max-w-container bg-primary items-center justify-center text-center">
            <div className="py-16 px-8 text-center">
                <h1 className="text-3xl font-bold tracking-tight text-fg-primary sm:text-4xl">{t("InterestedInOurServicesTitle")}</h1>
                <p className="mt-4 text-lg text-fg-secondary">
                    {t("IntersestedInOurServicesSubtitle")}
                </p>
                <Button size="lg" className="mt-6" href="/#contact-us">
                    {t("RequestConsultation")}
                </Button>
            </div>
        </section>
    );
}