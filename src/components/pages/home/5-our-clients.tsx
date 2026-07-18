import { clients } from "@/utils/clients-data"
import { useTranslations } from "next-intl"
import Image from "next/image"

export const OurClients = () => {
    const t = useTranslations("HomePage.OurClients")
    return (
        <section id="our-clients" className="w-full max-w-container items-center justify-center text-center bg-[#F9FAFB]">
            <div className="py-8 md:py-16 px-4 md:px-8 text-center">
                <h1 className="text-3xl font-bold tracking-tight text-fg-primary sm:text-4xl">{t("Title")}</h1>
                <p className="mt-4 text-lg text-fg-secondary">{t("Subtitle")}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-y-6">

                {clients.map((client, index) => (
                    <div
                        key={index}
                        className="flex p-4 justify-center items-center group w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6"
                    >
                        <div className="flex items-center justify-center">
                            <Image
                                src={client.logo}
                                alt={client.name}
                                width={90}
                                height={45}
                                className="object-contain grayscale opacity-60 transition duration-300 ease-in-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                            />
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}  