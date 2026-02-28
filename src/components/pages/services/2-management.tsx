import HeroTitleServices from "@/components/marketing/header-navigation/base-components/hero-title-services"

export const ManagementConsultant = () => {
    const services = [
        "Quality & Operational Management Systems (ISO 9001, ISO 14001)",
        "Occupational Health, Safety, and Environmental (HSE) Management (ISO 45001, HSE Services / Safety Man, AMDAL / UKL – UPL)",
        "Information Security & Risk Management (ISO 27001, ISO 31000)",
        "Food Safety, Halal, and Supply Chain Compliance (ISO 22000, FSSC 22000, HACCP, HAS 23000)",
        "Ethics, Compliance, and Sustainability Governance (ISO 37001, ISPO & RSPO)",
        "Organizational Development & Capacity Building (Soft Skills Training)",
        "Managed Services & Operational Support (Outsource – Managed Services)",
    ]
    return (
        <section id="management" className="w-full max-w-container bg-primary items-center justify-center">
            <HeroTitleServices title="Management Consultant" imageSrc="/images/header-services-management.png" />
            <div className="py-16 px-8">
                <h2 className="text-2xl font-bold tracking-tight text-fg-primary sm:text-xl">
                    Management Consultant
                </h2>
                <p className="mt-4 text-md text-fg-secondary">
                    Our management consulting services support organizations in strengthening governance, risk management, and operational effectiveness through structured advisory and capacity-building programs.
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