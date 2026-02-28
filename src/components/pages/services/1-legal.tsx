import { Button } from "@/components/base/buttons/button"
import HeroTitleServices from "@/components/marketing/header-navigation/base-components/hero-title-services"
import Image from "next/image"

export const LegalConsultant = () => {
    const services = [
        "Litigation and Non-Litigation Advisory",
        "Corporate and Commercial Legal Consultation",
        "Contract Review and Evaluation",
        "Ongoing Legal Advisory Services",
        "Legal Documentation and Regulatory Support",
    ]
    return (
        <section id="legal" className="w-full max-w-container bg-primary items-center justify-center">
            <HeroTitleServices title="Legal Consultant" imageSrc="/images/header-services-legal.png" />
            <div className="py-16 px-8">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-fg-primary sm:text-xl">
                        Legal Consultant
                    </h2>
                    <p className="mt-4 text-md text-fg-secondary">
                        We provide legal advisory services focused on contractual, regulatory, and risk-related matters, supporting businesses and individuals with practical and compliant legal solutions.
                    </p>
                    <ul className="ml-4 list-disc mt-2 text-md text-fg-secondary">
                        {services.map((service, index) => (
                            <li key={index}>{service}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-fg-primary sm:text-xl mt-8">
                        Our Partner
                    </h2>
                    <p className="mt-4 text-md text-fg-secondary">
                        In collaboration with our trusted legal partner, Ichsan & Erlitha Attorneys at Law.
                        <Image src="/images/ichsan-erlitha-logo.png" alt="Ichsan & Erlitha Attorneys at Law Logo" width={300} height={200} className="mt-4" />
                    </p>
                    <Button
                        className="mt-4"
                        href="https://www.ichsanerlitha.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        More Info
                    </Button>
                </div>
            </div>
        </section>
    )
}