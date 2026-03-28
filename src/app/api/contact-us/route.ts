import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";
import {
    userConfirmationTemplate,
    adminNotificationTemplate,
} from "@/lib/emailTemplates";
import { rateLimit } from "@/lib/rateLimiter";

export async function POST(req: NextRequest) {
    try {
        const ip =
            req.headers.get("x-forwarded-for") ||
            req.headers.get("x-real-ip") ||
            "unknown";

        // 🚫 Rate limit
        const allowed = rateLimit(ip);
        if (!allowed) {
            return NextResponse.json(
                { error: "Too many requests" },
                { status: 429 }
            );
        }

        const body = await req.json();
        const { name, email, message, website } = body;

        // 🕳️ Honeypot (anti bot)
        if (website) {
            return NextResponse.json({ success: true });
        }

        // ⏱️ Basic anti-bot timing check
        const timeDiff = Date.now() - body._formTime;

        // terlalu cepat → bot
        if (timeDiff < 3000) {
            return NextResponse.json(
                { error: "Suspicious request" },
                { status: 400 }
            );
        }

        // terlalu lama (optional, misal > 1 jam)
        if (timeDiff > 1000 * 60 * 60) {
            return NextResponse.json(
                { error: "Form expired, please refresh the page and fill out the form again" },
                { status: 400 }
            );
        }

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing fields" },
                { status: 400 }
            );
        }

        // Send emails
        await sendMail({
            to: email,
            subject: "Pesan kamu sudah kami terima",
            html: userConfirmationTemplate(name, message),
        });

        await sendMail({
            to: process.env.EMAIL_TO_ADMIN as string,
            subject: "New Contact Inquiry",
            html: adminNotificationTemplate(name, email, message),
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}