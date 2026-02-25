export const WhyChooseUs = () => {
    const reasons = [
        {
            title: "Experienced Advisory Team",
            description: "Supported by experienced and trusted consultants and trainers with cross-disciplinary expertise in legal, technology, management, and financial advisory.",
        },
        {
            title: "Proven Experience",
            description: "Our team has demonstrated proven experience across various industries, delivering solutions grounded in practice, not assumptions."
        },
        {
            title: "Adaptive & Practical Solutions",
            description: "We adapt to existing systems, regulations, and business environments to provide practical and relevant solutions aligned with your organization\u2019s needs.",
        },
    ]
    return (
        <section className="w-full max-w-container items-center justify-center text-center bg-[#F9FAFB]">
            <div className="py-16 px-8 text-center">
                <h1 className="text-3xl font-bold tracking-tight text-fg-primary sm:text-4xl">Why Choose Us</h1>
                <p className="mt-4 text-lg text-fg-secondary">We deliver independent advisory services to help organizations reduce risk and make informed decisions in a professional and responsible manner.</p>
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