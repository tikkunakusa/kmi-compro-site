import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
    credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

export const runtime = "nodejs";

export const getSheetData = async () => {
    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: "Sheet1!A2:D",
    });

    const rows = response.data.values || [];

    return rows.map((row) => ({
        id: row[0],
        title: row[1],
        description: row[2],
        tiktokUrl: row[3],
    }));
}

export const appendSheetData = async (data: {
    title: string;
    description: string;
    tiktokUrl: string;
}) => {
    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: "Sheet1!A:D",
        valueInputOption: "USER_ENTERED",
        requestBody: {
            values: [
                [
                    Date.now().toString(), // id auto
                    data.title,
                    data.description,
                    data.tiktokUrl,
                ],
            ],
        },
    });
};

export const updateSheetRow = async (
    rowIndex: number,
    data: { title: string; description: string; tiktokUrl: string }
) => {
    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.update({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: `Sheet1!B${rowIndex}:D${rowIndex}`,
        valueInputOption: "USER_ENTERED",
        requestBody: {
            values: [[data.title, data.description, data.tiktokUrl]],
        },
    });
};

export const deleteSheetRow = async (rowIndex: number) => {
    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.batchUpdate({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        requestBody: {
            requests: [
                {
                    deleteDimension: {
                        range: {
                            sheetId: 0,
                            dimension: "ROWS",
                            startIndex: rowIndex - 1,
                            endIndex: rowIndex,
                        },
                    },
                },
            ],
        },
    });
};