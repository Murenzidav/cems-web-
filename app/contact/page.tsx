import { ContactForm } from "@/components/ContactForm";
import { Hero } from "@/components/Hero";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Contact",
  "Request a quote from CEMS LTD in Kigali. Call, WhatsApp or send a message about construction, rehabilitation, WWTP or materials.",
  "/contact",
);

export default function ContactPage() {
  return (
    <>
      <Hero
        image="/images/hero.jpg"
        imageAlt="Placeholder image for contacting CEMS LTD"
        title="Contact us"
        subtitle="Request a quote or ask about a service. We work with private and public sector clients."
        compact
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-heading font-bold">Send a message</h2>
          <p className="mt-2 text-muted">We typically reply on the same business day.</p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-heading font-bold">Visit or call</h2>
          <ul className="mt-6 space-y-3 text-muted">
            <li>
              <strong className="text-navy">Address:</strong> {site.address.full}
            </li>
            <li>
              <strong className="text-navy">Phone / WhatsApp:</strong>{" "}
              <a className="text-red hover:text-orange" href={`tel:${site.phoneTel}`}>
                {site.phone}
              </a>
            </li>
            <li>
              <strong className="text-navy">Email:</strong>{" "}
              <a className="text-red hover:text-orange" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
          </ul>
          <a
            href={site.whatsappUrl}
            className="btn-gradient mt-6 inline-flex rounded-full px-6 py-3 font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Message on WhatsApp
          </a>

          <div className="mt-8 overflow-hidden rounded-lg ring-1 ring-navy/10">
            <iframe
              title="Map showing CEMS LTD on KK 8 Avenue, Kicukiro, Kigali"
              src={site.mapEmbedUrl}
              className="h-80 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
