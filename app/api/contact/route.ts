import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/resend";
import { isHoneypotFilled, validateContact, type ContactPayload } from "@/lib/validation";

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (isHoneypotFilled(body.company ?? "")) {
    return NextResponse.json({ ok: true });
  }

  const payload: ContactPayload = {
    name: String(body.name ?? ""),
    phone: String(body.phone ?? ""),
    email: String(body.email ?? ""),
    service: String(body.service ?? ""),
    message: String(body.message ?? ""),
    company: String(body.company ?? ""),
  };

  const errors = validateContact(payload);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, error: "Please check the form and try again.", errors }, { status: 400 });
  }

  try {
    await sendContactEmail(payload);
    return NextResponse.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Could not send the message. Please call or WhatsApp us.";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
