import { Client, clients as defaultClients, formatImageUrl } from "@/utils/clients-data";
import { ServiceItem, defaultServices } from "@/utils/services-data";
import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
    credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

export const runtime = "nodejs";

// ==================== VIDEOS ====================

export const getSheetData = async () => {
    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: "KontenEdukasi!A2:D",
    });

    const rows = response.data.values || [];

    return rows.map((row) => ({
        id: row[0],
        title: row[1],
        description: row[2],
        tiktokUrl: row[3],
    }));
};

// ==================== CLIENTS ====================

export const getClientsSheetData = async (): Promise<Client[]> => {
    try {
        const sheets = google.sheets({ version: "v4", auth });

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: "Clients!A2:D",
        });

        const rows = response.data.values || [];

        if (!rows.length) {
            return defaultClients;
        }

        const validClients: Client[] = [];

        for (const row of rows) {
            const id = row[0]?.toString() || "";
            const name = row[1]?.toString()?.trim() || "";
            const rawLogo = row[2]?.toString()?.trim() || "";
            const activeRaw = row[3]?.toString()?.trim()?.toLowerCase();

            // Skip if inactive
            if (activeRaw === "false" || activeRaw === "0" || activeRaw === "no" || activeRaw === "inactive") {
                continue;
            }

            // Skip if missing name or logo
            if (!name || !rawLogo) {
                continue;
            }

            validClients.push({
                id,
                name,
                logo: formatImageUrl(rawLogo),
                active: true,
            });
        }

        return validClients.length > 0 ? validClients : defaultClients;
    } catch (error) {
        console.error("Error fetching clients from Google Sheets, using fallback:", error);
        return defaultClients;
    }
};

// ==================== SERVICES ====================

export const getServicesSheetData = async (locale: string = "id"): Promise<ServiceItem[]> => {
    try {
        const sheets = google.sheets({ version: "v4", auth });

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: "Services!A2:Q",
        });

        const rows = response.data.values || [];

        if (!rows.length) {
            return defaultServices(locale);
        }

        const isEn = locale.toLowerCase() === "en";
        const validServices: ServiceItem[] = [];

        for (const row of rows) {
            const id = row[0]?.toString() || "";
            const slug = row[1]?.toString()?.trim() || id;
            const title_id = row[2]?.toString()?.trim() || "";
            const title_en = row[3]?.toString()?.trim() || "";
            const subtitle_id = row[4]?.toString()?.trim() || "";
            const subtitle_en = row[5]?.toString()?.trim() || "";
            const detail_id = row[6]?.toString()?.trim() || "";
            const detail_en = row[7]?.toString()?.trim() || "";
            const items_id_raw = row[8]?.toString() || "";
            const items_en_raw = row[9]?.toString() || "";
            const rawImage = row[10]?.toString()?.trim() || "";
            const image = rawImage ? formatImageUrl(rawImage) : "";
            const icon = row[11]?.toString()?.trim() || "Bank";
            const partnerTitle = row[12]?.toString()?.trim() || undefined;
            const partnerDesc = row[13]?.toString()?.trim() || undefined;
            const partnerLogo = row[14]?.toString()?.trim() ? formatImageUrl(row[14]?.toString()?.trim()) : undefined;
            const partnerUrl = row[15]?.toString()?.trim() || undefined;
            const activeRaw = row[16]?.toString()?.trim()?.toLowerCase();

            // Skip if inactive
            if (activeRaw === "false" || activeRaw === "0" || activeRaw === "no" || activeRaw === "inactive") {
                continue;
            }

            const title = isEn ? (title_en || title_id) : (title_id || title_en);
            const subtitle = isEn ? (subtitle_en || subtitle_id) : (subtitle_id || subtitle_en);
            const detail = isEn ? (detail_en || detail_id) : (detail_id || detail_en);
            const itemsRaw = isEn ? (items_en_raw || items_id_raw) : (items_id_raw || items_en_raw);

            const items = itemsRaw
                ? itemsRaw.split(/\r?\n|;/).map((s) => s.trim()).filter(Boolean)
                : [];

            if (!title) {
                continue;
            }

            validServices.push({
                id,
                slug,
                title,
                subtitle,
                detail,
                items,
                image,
                icon,
                partnerTitle,
                partnerDesc,
                partnerLogo,
                partnerUrl,
                active: true,
            });
        }

        return validServices.length > 0 ? validServices : defaultServices(locale);
    } catch (error) {
        console.error("Error fetching services from Google Sheets, using fallback:", error);
        return defaultServices(locale);
    }
};