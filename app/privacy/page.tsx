import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Privacy Policy",
  "How CEMS LTD collects and uses information submitted through cemsltd.com.",
  "/privacy",
);

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-28 sm:px-6">
      <h1 className="text-4xl font-heading font-extrabold">Privacy Policy</h1>
      <p className="mt-4 text-sm text-muted">Last updated: 28 September 2026</p>
      <div className="mt-8 space-y-5 leading-relaxed text-muted">
        <p>
          {site.name} (“we”) operates {site.url}. This page explains what we collect when you use the
          website or contact form.
        </p>
        <h2 className="text-2xl font-heading font-bold text-navy">Information we collect</h2>
        <p>
          If you send the contact form, we receive your name, phone and/or email, the service you
          selected, and your message. We use this only to respond to your enquiry.
        </p>
        <h2 className="text-2xl font-heading font-bold text-navy">Analytics</h2>
        <p>
          If Google Analytics is enabled on this site, it may collect standard usage data such as
          pages visited. Analytics is only loaded when a measurement ID is configured.
        </p>
        <h2 className="text-2xl font-heading font-bold text-navy">Sharing</h2>
        <p>
          We do not sell your information. Messages may be processed by our email provider (Resend)
          in order to deliver them to {site.email}.
        </p>
        <h2 className="text-2xl font-heading font-bold text-navy">Contact</h2>
        <p>
          Questions about this policy: {site.email} or {site.phone}. {site.address.full}.
        </p>
      </div>
    </article>
  );
}
