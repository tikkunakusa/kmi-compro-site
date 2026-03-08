export const AboutUs = () => {
    return (
        <section id="about-us" className="w-full max-w-container items-center justify-center text-center bg-[#F9FAFB] p-8">
            <div className="bg-primary rounded-xl p-8">
                <h3 className="text-xl font-bold tracking-tight text-fg-primary sm:text-2xl">
                    Delivering Measurable Legal and Business Outcomes
                </h3>
                <p className="mt-4 text-md text-fg-secondary">
                    We provide independent advisory services that prioritize quality, professionalism, and accountability, supporting organizations in managing risk and achieving sustainable results.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    <div className="bg-[#243447] rounded-xl p-8">
                        <h4 className="text-lg font-semibold tracking-tight text-[#ffffff] sm:text-xl">
                            About Us
                        </h4>
                        <p className="mt-4 text-justify text-md text-[#ffffff]">
                            Konsultan Manajemen Indonesia (KMI) is an independent legal, technology, management, and finance consulting firm established in 2018.
                            We partner with organizations to deliver professional advisory services that help reduce risk, strengthen governance, and support sustainable business operations.
                            We are committed to becoming a trusted advisory partner by providing services that emphasize reliability, professionalism, responsiveness, and measurable value.
                        </p>
                    </div>
                    <div className="grid grid-rows-2 md:grid-rows-1 gap-4">
                        <div className="bg-[#243447] rounded-xl p-8">
                            <h5 className="text-md font-semibold tracking-tight text-[#ffffff] sm:text-lg">
                                Our Vision
                            </h5>
                            <p className="mt-4 text-justify text-sm text-[#ffffff]">
                                To become a trusted legal, technology, and management consulting firm that supports organizations in improving productivity, compliance, and overall performance.
                            </p>
                        </div>
                        <div className="bg-[#243447] rounded-xl p-8">
                            <h5 className="text-md font-semibold tracking-tight text-[#ffffff] sm:text-lg">
                                Our Mission
                            </h5>
                            <p className="mt-4 text-justify text-sm text-[#ffffff]">
                                To deliver advisory services that prioritize quality, professionalism, and practical integration, helping clients achieve their strategic objectives with confidence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}   