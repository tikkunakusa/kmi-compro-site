import { Button } from "@/components/base/buttons/button"

export const CompanyServices = () => {
    const services = [
        {
            title: "Legal Consultant",
            description: "We provide comprehensive legal advisory services for corporations and individuals, focusing on compliance, contractual matters, and regulatory risk management tailored to your specific business context.",
        },
        {
            title: "Management Consultant",
            description: "Our management advisory services help organizations improve performance, strengthen governance, and address complex operational challenges with strategic and measurable solutions.",
        },
        {
            title: "IT Consultant",
            description: "We support organizations in managing technology-related risks, from digital transformation and system governance to cybersecurity and data protection advisory.",
        },
        {
            title: "Financial Management and Accounting Consultant",
            description: "We provide comprehensive financial management and accounting services, including budgeting, reporting, compliance, cash flow optimization, and strategic financial planning to support sustainable business growth.",
        },
    ]
    return (
        <section className="w-full max-w-container bg-primary items-center justify-center text-center">
            <div className="py-16 px-8 text-center">
                <h1 className="text-3xl font-bold tracking-tight text-fg-primary sm:text-4xl">One Stop Solution</h1>
                <p className="mt-4 text-lg text-fg-secondary">Specialized advisory services designed to help organizations manage risk, ensure compliance, and achieve sustainable business growth.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 px-8 pb-8">
                {services.map((service, index) => (
                    <div key={`services-${index}`} className="p-4 text-left grid gap-4">
                        <div className="grid gap-2">
                            <h4 className="font-semibold text-2xl tracking-tight text-fg-primary sm:text-xl">{service.title}</h4>
                            <p className="text-fg-secondary text-sm text-justify">{service.description}</p>
                        </div>
                        <Button variant="primary" size="md" className="self-start">
                            Learn More
                        </Button>
                    </div>
                ))}
            </div>
        </section>
    )
}   