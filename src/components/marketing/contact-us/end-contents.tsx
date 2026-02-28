import { Button } from "@/components/base/buttons/button";

export default function EndContentsContactUs() {
    return (
        <section className="w-full max-w-container bg-primary items-center justify-center text-center">
            <div className="py-16 px-8 text-center">
                <h1 className="text-3xl font-bold tracking-tight text-fg-primary sm:text-4xl">Interested in a deeper discussion?</h1>
                <p className="mt-4 text-lg text-fg-secondary">
                    Our team is ready to support your organization with practical insights and reliable advisory services.
                </p>
                <Button variant="primary" size="lg" className="mt-6" href="/#contact-us">
                    Request a Consultation
                </Button>
            </div>
        </section>
    );
}