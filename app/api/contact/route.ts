import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { sendWhatsAppConfirmation } from "@/lib/whatsapp";

type ContactPayload = {
  name?: string;
  phone?: string;
  city?: string;
  property?: string;
  timeline?: string;
  message?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = clean(body.name);
    const phone = clean(body.phone);
    const city = clean(body.city);
    const property = clean(body.property);
    const timeline = clean(body.timeline);
    const message = clean(body.message);

    if (!name || !phone || !city) {
      return NextResponse.json(
        { error: "Name, phone, and city are required." },
        { status: 400 },
      );
    }

    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_APP_PASSWORD;
    const to = process.env.CONTACT_TO || user;

    if (!user || !pass || !to) {
      console.error("Missing GMAIL_USER, GMAIL_APP_PASSWORD, or CONTACT_TO");
      return NextResponse.json(
        { error: "Email is not configured on the server." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass: pass.replace(/\s+/g, ""),
      },
    });

    const lines = [
      "New solar inquiry from the GVT website",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `City: ${city}`,
      `Property: ${property || "—"}`,
      `Timeline: ${timeline || "—"}`,
      `Message: ${message || "—"}`,
    ].join("\n");

    await transporter.sendMail({
      from: `"GVT Website" <${user}>`,
      to,
      replyTo: undefined,
      subject: `New inquiry — ${name} (${city})`,
      text: lines,
      html: `<pre style="font-family:ui-sans-serif,system-ui,sans-serif;font-size:14px;line-height:1.5;white-space:pre-wrap">${lines
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")}</pre>`,
    });

    await sendWhatsAppConfirmation({ name, phone, city });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form email failed:", error);
    return NextResponse.json(
      { error: "Could not send your inquiry. Please try again or call us." },
      { status: 500 },
    );
  }
}
