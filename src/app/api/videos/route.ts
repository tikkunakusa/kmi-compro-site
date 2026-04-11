import { appendSheetData, deleteSheetRow, getSheetData, updateSheetRow } from "@/lib/googleSheets";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
    try {
        const data = await getSheetData();

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch data" },
            { status: 500 }
        );
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const { title, description, tiktokUrl } = body;

        if (!title || !tiktokUrl) {
            return NextResponse.json(
                { error: "Title & URL required" },
                { status: 400 }
            );
        }

        await appendSheetData({ title, description, tiktokUrl });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to insert data" },
            { status: 500 }
        );
    }
}

export async function PUT(req: NextRequest) {
    try {
        const body = await req.json();
        const { rowIndex, ...data } = body;

        await updateSheetRow(rowIndex, data);
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to update data" },
            { status: 500 }
        );
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const rowIndex = Number(searchParams.get("rowIndex"));

        await deleteSheetRow(rowIndex);
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to delete data" },
            { status: 500 }
        );
    }
}