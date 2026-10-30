import { Resend } from "resend";

export async function sendContactEmail(input: {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    throw new Error(
      "Email is not configured. Set RESEND_API_KEY, CONTACT_TO_EMAIL and RESEND_FROM_EMAIL.",
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: input.email || undefined,
    subject: `Website enquiry: ${input.service} — ${input.name}`,
    text: [
      `Name: ${input.name}`,
      `Phone: ${input.phone || "—"}`,
      `Email: ${input.email || "—"}`,
      `Service: ${input.service}`,
      "",
      input.message,
    ].join("\n"),
  });

  if (error) {
    throw new Error(error.message);
  }
}
