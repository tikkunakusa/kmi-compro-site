"use client"

import { useState } from "react"
import { Button } from "@/components/base/buttons/button"
import { Input } from "@/components/base/input/input"
import { Label } from "@/components/base/input/label"
import { RadioButton, RadioGroup } from "@/components/base/radio-buttons/radio-buttons"
import { TextArea } from "@/components/base/textarea/textarea"

export const ContactUs = () => {
    const [formValue, setFormValue] = useState({
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        services: "legal",
        message: "",
    })
    // const formTime = Date.now();
    const submitForm = async () => {
        try {
            const name = `Hi, my name is ${formValue.first_name} ${formValue.last_name}.`;
            const service = `I need ${formValue.services === "legal" ? "a Legal Consultation" : formValue.services === "tech" ? "an IT Consultation" : formValue.services === "management" ? "a Management Consultation" : "a Financial & Accounting Consultation"}.`;
            const message = `I have a question about ${formValue.message}.`;
            const contactInfo = `Please contact me through phone at ${formValue.phone_number} or email ${formValue.email}.`;
            const fullMessage = `${name} ${service} ${message}`;
            const fullMailtoLink = `mailto:tiko.aqsa@gmail.com?body=${encodeURIComponent(fullMessage)}%0D%0A%0D%0A${encodeURIComponent(contactInfo)}`;
            window.open(fullMailtoLink, '_blank');

            // const response = await fetch("/api/contact-us", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify({
            //         ...formValue,
            //         name: `${formValue.first_name} ${formValue.last_name}`,
            //         website: "",
            //         _formTime: formTime,
            //     }),
            // });
            // if (response.ok) {
            //     alert("Inquiry sent successfully!");
            //     setFormValue({
            //         first_name: "",
            //         last_name: "",
            //         phone_number: "",
            //         email: "",
            //         services: "legal",
            //         message: "",
            //     });
            // } else {
            //     alert("Failed to send inquiry. Please try again.");
            // }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred while sending your inquiry. Please try again.");
        }
    }
    return (
        <section id="contact-us" className="w-full max-w-container items-center justify-center text-center bg-[#F9FAFB]">
            <div className="py-8 md:py-16 px-2 md:px-8 text-center">
                <h1 className="text-3xl font-bold tracking-tight text-fg-primary sm:text-4xl">Contact Us</h1>
                <p className="mt-4 text-lg text-fg-secondary">Let's discuss your legal and business challenges.</p>
                <div className="text-left bg-white rounded-lg p-4 md:p-6 m-8">
                    <h2 className="underline text-fg-primary">Send us a message</h2>
                    <form className="mt-4 space-y-4" onSubmit={submitForm}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
                            <Input
                                isRequired
                                key="first_name"
                                hint="Enter your first name"
                                label="First Name"
                                placeholder="e.g. John"
                                value={formValue.first_name}
                                onChange={(value) => setFormValue({ ...formValue, first_name: value })}
                            />
                            <Input
                                isRequired
                                key="last_name"
                                hint="Enter your last name"
                                label="Last Name"
                                value={formValue.last_name}
                                onChange={(value) => setFormValue({ ...formValue, last_name: value })}
                                placeholder="e.g. Doe"
                            />
                            <Input
                                isRequired
                                key="phone_number"
                                hint="Enter your phone number"
                                label="Phone Number"
                                tooltip="We'll reach you through this email/phone number"
                                placeholder="e.g. 081234567890"
                                value={formValue.phone_number}
                                onChange={(value) => setFormValue({ ...formValue, phone_number: value })}
                                validate={(value) => value.match(/^[0-9]+$/) ? true : "Must contain only numbers"}
                            />
                            <Input
                                isRequired
                                key="email"
                                hint="Enter your email address"
                                label="Email"
                                tooltip="We'll reach you through this email/phone number"
                                placeholder="e.g. john.doe@example.com"
                                value={formValue.email}
                                onChange={(value) => setFormValue({ ...formValue, email: value })}
                                validate={(value) => {
                                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                    return emailRegex.test(value) ? true : "Invalid email format";
                                }}
                            />
                            <input type="text" name="website" className="hidden" />
                            <RadioGroup
                                aria-label="Choose Service"
                                name="Product or service"
                                key="services"
                                defaultValue={formValue.services}
                                isRequired
                            >
                                <Label isRequired>
                                    Product or service
                                </Label>
                                <RadioButton
                                    label="Legal Consultation"
                                    value="legal"
                                    onClick={() => setFormValue({ ...formValue, services: "legal" })}
                                />
                                <RadioButton
                                    label="IT Consultation"
                                    value="tech"
                                    onClick={() => setFormValue({ ...formValue, services: "tech" })}
                                />
                                <RadioButton
                                    label="Management Consultation"
                                    value="management"
                                    onClick={() => setFormValue({ ...formValue, services: "management" })}
                                />
                                <RadioButton
                                    label="Financial & Accounting Consultation"
                                    value="finance-account"
                                    onClick={() => setFormValue({ ...formValue, services: "finance-account" })}
                                />
                            </RadioGroup>
                            <TextArea
                                isRequired
                                key="message"
                                hint="Enter your message"
                                label="Message"
                                rows={5}
                                tooltip="Tell us about your challenges or maybe related to the other service you want to ask about"
                                value={formValue.message}
                                onChange={(value) => setFormValue({ ...formValue, message: value })}
                                placeholder="e.g. I have a question about..."
                            />
                        </div>
                        <Button type="submit" className="w-full" size="lg" >
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    )
}   