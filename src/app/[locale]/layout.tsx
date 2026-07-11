import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Inter } from "next/font/google";
import { RouteProvider } from "@/providers/router-provider";
import { Theme } from "@/providers/theme";
import { cx } from "@/utils/cx";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import "@/styles/globals.css";
import { notFound } from 'next/navigation';
import { routing } from "@/i18n/routing";
import type { ReactNode } from "react";
import { Header } from "@/components/marketing/header-navigation/header";

type Props = {
    children: ReactNode;
    params: Promise<{ locale: string }>;
};

const headingFont = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-heading",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "KMI - Konsultan Manajemen Indonesia",
    description: "Mitra Strategis Anda di Bidang Hukum, Teknologi, Keuangan, dan Manajemen Perusahaan",
};

export const viewport: Viewport = {
    themeColor: "#FFFFFF",
    colorScheme: "light",
};

export default async function LocaleLayout({ children, params }: Props) {
    // Ensure that the incoming `locale` is valid
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }
    return (
        <html lang="en" suppressHydrationWarning className={headingFont.variable}>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <body className={cx(inter.variable, "bg-primary antialiased")}>
                <NextIntlClientProvider>
                    <RouteProvider>
                        <Theme>
                            <Header className="bg-primary" />
                            {children}
                        </Theme>
                    </RouteProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
