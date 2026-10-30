import Image from "next/image";
import { CTABanner } from "@/components/CTABanner";
import { Hero } from "@/components/Hero";
import { about } from "@/content/about";
import { team } from "@/content/team";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "About",
  "CEMS LTD develops, builds and services civil engineering needs in Rwanda — professional standards, clients first, long-term relationships.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <Hero
        image="/images/about.jpg"
        imageAlt="Placeholder image for the CEMS LTD about page"
        title="About CEMS LTD"
        subtitle="Civil Engineering & Multi-services. High Commitment."
        compact
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/about.jpg"
              alt="Placeholder photo representing CEMS LTD work in Kigali"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-orange uppercase">Mission</p>
            <h2 className="mt-2 text-3xl font-heading font-extrabold">{about.headline}</h2>
            <p className="mt-4 leading-relaxed text-muted">{about.mission}</p>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-heading font-extrabold">Values</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {about.values.map((value) => (
              <article key={value.title} className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-xl font-heading font-bold text-navy">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {team.length > 0 ? (
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-heading font-extrabold">Team</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {team.map((member) => (
              <article key={member.name} className="text-center">
                <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-full bg-cream">
                  <Image
                    src={member.photo}
                    alt={`${member.name}, ${member.role}`}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
                <h3 className="mt-4 font-heading font-bold">{member.name}</h3>
                <p className="text-sm text-muted">{member.role}</p>
                {member.bio ? <p className="mt-2 text-sm text-muted">{member.bio}</p> : null}
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <CTABanner />
    </>
  );
}
