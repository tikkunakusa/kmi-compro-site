"use client"

import { useState } from "react"
import { Button } from "@/components/base/buttons/button"
import { Input } from "@/components/base/input/input"
import { Label } from "@/components/base/input/label"
import { RadioButton, RadioGroup } from "@/components/base/radio-buttons/radio-buttons"
import { TextArea } from "@/components/base/textarea/textarea"
import { useTranslations } from "next-intl"

export const ContactUs = () => {
    const t = useTranslations("HomePage.ContactUs")
    const [formValue, setFormValue] = useState({
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        services: "legal",
        message: "",
    })

    const submitForm = async () => {
        try {
            const name = t("HiMyNameIs", { firstName: formValue.first_name, lastName: formValue.last_name });
            const service = t("MyServiceIs", { service: formValue.services === "legal" ? "Legal Consultation" : formValue.services === "tech" ? "IT Consultation" : formValue.services === "management" ? "Management Consultation" : "Financial & Accounting Consultation" });
            const message = t("IWantToDiscuss", { message: formValue.message });
            const contactInfo = t("ContactMe", { phone_number: formValue.phone_number, email: formValue.email });
            const fullMessage = `${name} ${service} ${message}`;
            const fullMailtoLink = `mailto:admin@konsultanmanajemenindonesia.com?body=${encodeURIComponent(fullMessage)}%0D%0A%0D%0A${encodeURIComponent(contactInfo)}`;
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
            <div className="py-8 md:py-16 px-4 md:px-8 text-center">
                <h1 className="text-3xl font-bold tracking-tight text-fg-primary sm:text-4xl">{t("Title")}</h1>
                <p className="mt-4 text-lg text-fg-secondary">{t("Subtitle")}</p>
                <div className="text-left bg-white rounded-lg p-4 md:p-6 mx-2 mt-4 md:mx-auto md:mt-8 max-w-4xl shadow-sm">
                    <h2 className="underline text-fg-primary">{t("SendUsAMessage")}</h2>
                    <form className="mt-4 space-y-4" onSubmit={submitForm}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
                            <Input
                                isRequired
                                key="first_name"
                                hint={t("FirstNameSubtitle")}
                                label={t("FirstName")}
                                placeholder="e.g. John"
                                value={formValue.first_name}
                                onChange={(value) => setFormValue({ ...formValue, first_name: value })}
                            />
                            <Input
                                isRequired
                                key="last_name"
                                hint={t("LastNameSubtitle")}
                                label={t("LastName")}
                                value={formValue.last_name}
                                onChange={(value) => setFormValue({ ...formValue, last_name: value })}
                                placeholder="e.g. Doe"
                            />
                            <Input
                                isRequired
                                key="phone_number"
                                hint={t("PhoneNumberSubtitle")}
                                label={t("PhoneNumber")}
                                tooltip={t("ReachingYouOut")}
                                placeholder="e.g. 081234567890"
                                value={formValue.phone_number}
                                onChange={(value) => setFormValue({ ...formValue, phone_number: value })}
                                validate={(value) => value.match(/^[0-9]+$/) ? true : "Must contain only numbers"}
                            />
                            <Input
                                isRequired
                                key="email"
                                hint={t("EmailSubtitle")}
                                label={t("Email")}
                                tooltip={t("ReachingYouOut")}
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
                                aria-label={t("ChooseService")}
                                name={t("ChooseService")}
                                key="services"
                                defaultValue={formValue.services}
                                isRequired
                            >
                                <Label isRequired>
                                    {t("ChooseService")}
                                </Label>
                                <RadioButton
                                    label={t("LegalConsultation")}
                                    value="legal"
                                    onClick={() => setFormValue({ ...formValue, services: "legal" })}
                                />
                                <RadioButton
                                    label={t("ITConsultation")}
                                    value="tech"
                                    onClick={() => setFormValue({ ...formValue, services: "tech" })}
                                />
                                <RadioButton
                                    label={t("ManagementConsultation")}
                                    value="management"
                                    onClick={() => setFormValue({ ...formValue, services: "management" })}
                                />
                                <RadioButton
                                    label={t("FinancialAccountingConsultation")}
                                    value="finance-account"
                                    onClick={() => setFormValue({ ...formValue, services: "finance-account" })}
                                />
                            </RadioGroup>
                            <TextArea
                                isRequired
                                key="message"
                                hint={t("MessageSubtitle")}
                                label={t("Message")}
                                rows={5}
                                tooltip={t("MessageTooltip")}
                                value={formValue.message}
                                onChange={(value) => setFormValue({ ...formValue, message: value })}
                                placeholder={t("MessagePlaceholder")}
                            />
                        </div>
                        <Button type="submit" className="w-full" size="lg" >
                            {t("SendMessage")}
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    )
}   