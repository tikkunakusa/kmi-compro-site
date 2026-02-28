import HeroTitleServices from "@/components/marketing/header-navigation/base-components/hero-title-services"

export const FinanceConsultant = () => {
    const services = [
        "Financial Statement Preparation, preparation of compliant and reliable internal financial reports",
        "Financial Analysis, cash flow, cost, and profitability analysis for decisions",
        "Accounting & Bookkeeping Systems, design and implementation of standardized accounting systems",
        "Compliance & Governance, development of policies, SOPs, and compliance frameworks",
        "Training & Capacity Building, workshops and training to strengthen financial competencies",
    ]
    return (
        <section id="finance" className="w-full max-w-container bg-primary items-center justify-center">
            <HeroTitleServices title="Finance and Accounting Consultant" imageSrc="/images/header-services-finance.png" />
            <div className="py-16 px-8">
                <h2 className="text-2xl font-bold tracking-tight text-fg-primary sm:text-xl">
                    Financial and Accounting Consultant
                </h2>
                <p className="mt-4 text-md text-fg-secondary">
                    Our Financial & Accounting Advisory services provide integrated solutions covering financial reporting, analysis, accounting systems implementation, governance frameworks, and capacity building. Through a standards-driven and strategic approach, we enhance transparency, compliance, and informed decision-making to help organizations build sustainable financial structures and achieve long-term growth.
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