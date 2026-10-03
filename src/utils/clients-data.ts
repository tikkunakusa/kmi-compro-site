export type Client = {
    id?: string;
    name: string;
    logo: string;
    active?: boolean | string;
};

/**
 * Formats image URLs, converting Google Drive sharing links to direct image source URLs.
 */
export const formatImageUrl = (url: string): string => {
    if (!url) return "";
    const trimmed = url.trim();
    
    // Convert Google Drive view/share URL
    const driveFileMatch = trimmed.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (driveFileMatch && driveFileMatch[1]) {
        return `https://lh3.googleusercontent.com/d/${driveFileMatch[1]}`;
    }

    const driveIdMatch = trimmed.match(/drive\.google\.com\/(?:open|uc)\?(?:[^&]+&)*id=([a-zA-Z0-9_-]+)/);
    if (driveIdMatch && driveIdMatch[1]) {
        return `https://lh3.googleusercontent.com/d/${driveIdMatch[1]}`;
    }

    return trimmed;
};

export const clients: Client[] = [
    { name: "BNI", logo: "/clients/bni.png" },
    { name: "AirAsia", logo: "/clients/airasia.png" },
    { name: "WIKA", logo: "/clients/wika.png" },
    { name: "Kemenhub", logo: "/clients/kemenhub.png" },
    { name: "Salt", logo: "/clients/salt.png" },
    { name: "Constellar", logo: "/clients/constellar.png" },
    { name: "PYI", logo: "/clients/pyi.png" },
    { name: "BIMA", logo: "/clients/bima.png" },
    { name: "SiCepat", logo: "/clients/sicepat.png" },
    { name: "Lakuemas", logo: "/clients/lakuemas.png" },
    { name: "Lesaffre", logo: "/clients/lesaffre.png" },
    { name: "CKB", logo: "/clients/ckb.png" },
    { name: "Traktor Nusantara", logo: "/clients/traktor.png" },
    { name: "Eranya Cloud", logo: "/clients/eranya.png" },
    { name: "Samafitro", logo: "/clients/samafitro.png" },
    { name: "Ayuberga", logo: "/clients/ayuberga.png" },
    { name: "PGNCom", logo: "/clients/pgncom.png" },
    { name: "Kalakaru", logo: "/clients/kalakaru.png" },
];