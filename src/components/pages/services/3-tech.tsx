import HeroTitleServices from "@/components/marketing/header-navigation/base-components/hero-title-services"

export const TechConsultant = () => {
    const services = [
        "Penetration Testing",
        "Vulnerability and Risk Assessment",
        "Performance and Stress Testing",
        "IT Risk Management and Assessment",
        "IT Governance based on COBIT Framework",
        "Managed IT Services and Resource Support",
    ]
    return (
        <section id="tech" className="w-full max-w-container bg-primary items-center justify-center">
            <HeroTitleServices title="IT Consultant" imageSrc="/images/header-services-tech.png" />
            <div className="py-16 px-8">
                <h2 className="text-2xl font-bold tracking-tight text-fg-primary sm:text-xl">
                    IT Consultant
                </h2>
                <p className="mt-4 text-md text-fg-secondary">
                    Our IT consulting services focus on identifying, assessing, and managing technology-related risks, supporting organizations in building secure, reliable, and compliant IT environments.
                </p>
                <ul className="ml-4 list-disc mt-2 text-md text-fg-secondary">
                    {services.map((service, index) => (
                        <li key={index}>{service}</li>
                    ))}
                </ul>
            </div>
        </section>
    )
}