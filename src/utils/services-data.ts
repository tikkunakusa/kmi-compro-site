import {
    BookmarkCheck,
    Bank,
    Database03,
    Briefcase01,
    ShieldTick,
    File06,
    LayersThree01,
    BarChart01,
    FileCode01,
    SearchMd,
    CheckCircle,
} from "@untitledui/icons";
import type { ComponentType, SVGProps } from "react";

export type ServiceItem = {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    detail: string;
    items: string[];
    image: string;
    icon: string;
    partnerTitle?: string;
    partnerDesc?: string;
    partnerLogo?: string;
    partnerUrl?: string;
    active?: boolean | string;
};

export const getServiceIcon = (iconName?: string): ComponentType<SVGProps<SVGSVGElement>> => {
    switch (iconName?.toLowerCase().trim()) {
        case "bookmarkcheck":
        case "bookmark":
        case "legal":
            return BookmarkCheck;
        case "briefcase01":
        case "briefcase":
        case "management":
            return Briefcase01;
        case "database03":
        case "database":
        case "tech":
        case "it":
            return Database03;
        case "bank":
        case "finance":
        case "financial":
            return Bank;
        case "shield":
        case "shieldtick":
            return ShieldTick;
        case "file":
        case "file06":
            return File06;
        case "layers":
        case "layersthree01":
            return LayersThree01;
        case "chart":
        case "barchart":
        case "barchart01":
            return BarChart01;
        case "code":
        case "filecode01":
            return FileCode01;
        case "search":
        case "searchmd":
            return SearchMd;
        default:
            return CheckCircle;
    }
};

export const defaultServices = (locale: string = "id"): ServiceItem[] => {
    const isEn = locale.toLowerCase() === "en";

    if (isEn) {
        return [
            {
                id: "1",
                slug: "legal",
                title: "Legal Consultant",
                subtitle: "Legal advisory services for corporations and individuals",
                detail: "We provide legal advisory services focused on contractual, regulatory, and risk-related matters, supporting businesses and individuals with practical and compliant legal solutions.",
                items: [
                    "Litigation and Non-Litigation Advisory",
                    "Corporate and Commercial Legal Consultation",
                    "Contract Review and Evaluation",
                    "Ongoing Legal Advisory Services",
                    "Legal Documentation and Regulatory Support",
                ],
                image: "/images/header-services-legal.png",
                icon: "BookmarkCheck",
                partnerTitle: "Our Partner",
                partnerDesc: "In collaboration with our trusted legal partner, Ichsan & Erlitha Law Firm.",
                partnerLogo: "/images/ichsan-erlitha-logo.png",
                partnerUrl: "https://www.ichsanerlitha.com",
                active: true,
            },
            {
                id: "2",
                slug: "management",
                title: "Management Consultant",
                subtitle: "Management advisory services to help organizations improvement",
                detail: "Our management consulting services support organizations in strengthening governance, risk management, and operational effectiveness through structured advisory and capacity-building programs.",
                items: [
                    "Quality & Operational Management Systems (ISO 9001, ISO 14001)",
                    "Health, Safety, and Environment (HSE) Management (ISO 45001, HSE Services / Safety Man, AMDAL / UKL-UPL)",
                    "Information Security & Risk Management (ISO 27001, ISO 31000)",
                    "Food Safety, Halal, and Supply Chain Compliance (ISO 22000, FSSC 22000, HACCP, HAS 23000)",
                    "Ethics, Compliance, and Sustainability Governance (ISO 37001, ISPO & RSPO)",
                    "Organizational Development & Capacity Building (Soft Skills Training)",
                    "Managed Services & Operational Support (Outsource - Managed Services)",
                ],
                image: "/images/header-services-management.png",
                icon: "Briefcase01",
                active: true,
            },
            {
                id: "3",
                slug: "tech",
                title: "IT Consultant",
                subtitle: "Support for organizations in managing technology-related risks",
                detail: "Our IT consulting services focus on identifying, assessing, and managing technology-related risks, supporting organizations in building secure, reliable, and compliant IT environments.",
                items: [
                    "Penetration Testing",
                    "Vulnerability and Risk Assessment",
                    "Performance and Stress Testing",
                    "IT Risk Management and Assessment",
                    "IT Governance based on COBIT Framework",
                    "Managed IT Services and Resource Support",
                ],
                image: "/images/header-services-tech.png",
                icon: "Database03",
                active: true,
            },
            {
                id: "4",
                slug: "finance",
                title: "Financial and Accounting Consultant",
                subtitle: "Support on comprehensive financial management and accounting services",
                detail: "Our Financial & Accounting Advisory services provide integrated solutions covering financial reporting, analysis, accounting systems implementation, governance frameworks, and capacity building.",
                items: [
                    "Financial Statement Preparation, preparation of compliant and reliable internal financial reports",
                    "Financial Analysis, cash flow, cost, and profitability analysis for decisions",
                    "Accounting & Bookkeeping Systems, design and implementation of standardized accounting systems",
                    "Compliance & Governance, development of policies, SOPs, and compliance frameworks",
                    "Training & Capacity Building, workshops and training to strengthen financial competencies",
                ],
                image: "/images/header-services-finance.png",
                icon: "Bank",
                active: true,
            },
        ];
    }

    return [
        {
            id: "1",
            slug: "legal",
            title: "Konsultan Hukum",
            subtitle: "Layanan konsultasi hukum untuk perusahaan maupun individu",
            detail: "Kami menyediakan layanan konsultasi hukum yang berfokus pada aspek kontraktual, regulasi, dan pengelolaan risiko, untuk mendukung bisnis maupun individu dengan solusi yang praktis dan sesuai ketentuan.",
            items: [
                "Pendampingan Litigasi dan Non-Litigasi",
                "Konsultasi Hukum Korporasi dan Komersial",
                "Review dan Evaluasi Kontrak",
                "Layanan Konsultasi Hukum Berkelanjutan",
                "Penyusunan Dokumen Hukum dan Dukungan Regulasi",
            ],
            image: "/images/header-services-legal.png",
            icon: "BookmarkCheck",
            partnerTitle: "Mitra Kami",
            partnerDesc: "Bekerja sama dengan mitra hukum terpercaya kami, Ichsan & Erlitha Law Firm.",
            partnerLogo: "/images/ichsan-erlitha-logo.png",
            partnerUrl: "https://www.ichsanerlithalawfirm.com",
            active: true,
        },
        {
            id: "2",
            slug: "management",
            title: "Konsultan Manajemen",
            subtitle: "Mendampingi organisasi dalam meningkatkan kinerja dan pengelolaan bisnis",
            detail: "Layanan konsultasi manajemen kami membantu organisasi memperkuat tata kelola, manajemen risiko, dan efektivitas operasional melalui pendekatan yang terstruktur serta program pengembangan kapasitas.",
            items: [
                "Sistem Manajemen Mutu & Operasional (ISO 9001, ISO 14001)",
                "Manajemen Kesehatan, Keselamatan Kerja, dan Lingkungan (HSE) (ISO 45001, HSE Services / Safety Man, AMDAL / UKL-UPL)",
                "Keamanan Informasi & Manajemen Risiko (ISO 27001, ISO 31000)",
                "Keamanan Pangan, Halal, dan Kepatuhan Rantai Pasok (ISO 22000, FSSC 22000, HACCP, HAS 23000)",
                "Tata Kelola Etika, Kepatuhan, dan Keberlanjutan (ISO 37001, ISPO & RSPO)",
                "Pengembangan Organisasi & Peningkatan Kapasitas (Pelatihan Soft Skills)",
                "Layanan Managed Services & Dukungan Operasional (Outsource - Managed Services)",
            ],
            image: "/images/header-services-management.png",
            icon: "Briefcase01",
            active: true,
        },
        {
            id: "3",
            slug: "tech",
            title: "Konsultan IT",
            subtitle: "Membantu organisasi dalam mengelola risiko dan kebutuhan teknologi",
            detail: "Layanan konsultasi IT kami berfokus pada identifikasi, evaluasi, dan pengelolaan risiko teknologi, untuk mendukung organisasi dalam membangun lingkungan IT yang aman, andal, dan sesuai dengan regulasi.",
            items: [
                "Penetration Testing (Uji Penetrasi)",
                "Penilaian Kerentanan dan Risiko (Vulnerability and Risk Assessment)",
                "Pengujian Kinerja dan Beban (Performance and Stress Testing)",
                "Manajemen dan Penilaian Risiko IT",
                "Tata Kelola IT Berdasarkan Kerangka COBIT",
                "Layanan IT Terkelola dan Dukungan Sumber Daya",
            ],
            image: "/images/header-services-tech.png",
            icon: "Database03",
            active: true,
        },
        {
            id: "4",
            slug: "finance",
            title: "Konsultan Keuangan dan Akuntansi",
            subtitle: "Mendukung pengelolaan keuangan dan akuntansi secara menyeluruh",
            detail: "Layanan konsultasi Keuangan & Akuntansi kami menghadirkan solusi terintegrasi yang mencakup pelaporan dan analisis keuangan, implementasi sistem akuntansi, kerangka tata kelola, serta pengembangan kapasitas tim.",
            items: [
                "Penyusunan Laporan Keuangan - laporan keuangan internal yang sesuai standar dan dapat diandalkan",
                "Analisis Keuangan — analisis arus kas, biaya, dan profitabilitas untuk mendukung pengambilan keputusan",
                "Sistem Akuntansi & Pembukuan — perancangan dan implementasi sistem akuntansi yang terstandarisasi",
                "Kepatuhan & Tata Kelola — penyusunan kebijakan, SOP, dan kerangka kepatuhan",
                "Pelatihan & Pengembangan Kapasitas — workshop dan pelatihan untuk meningkatkan kompetensi keuangan",
            ],
            image: "/images/header-services-finance.png",
            icon: "Bank",
            active: true,
        },
    ];
};
