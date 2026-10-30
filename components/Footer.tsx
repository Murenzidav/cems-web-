import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "@/content/site";

function SocialIcon({ label }: { label: string }) {
  return (
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-xs font-semibold tracking-wide text-white/80">
      {label}
    </span>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <Image
            src="/images/logo.jpg"
            alt={`${site.name} logo`}
            width={200}
            height={64}
            className="mb-4 h-14 w-auto bg-white object-contain p-1"
          />
          <p className="max-w-xs text-sm text-white/75">
            {site.legalName}. {site.tagline}. Civil engineering and multi-services in Kigali, Rwanda.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-heading font-bold tracking-widest uppercase">Quick links</h2>
          <ul className="space-y-2 text-sm text-white/80">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-heading font-bold tracking-widest uppercase">Contact</h2>
          <ul className="space-y-2 text-sm text-white/80">
            <li>{site.address.full}</li>
            <li>
              <a href={`tel:${site.phoneTel}`} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-2" aria-label="Social media placeholders">
            <a href={site.social.facebook} aria-label="Facebook (placeholder)">
              <SocialIcon label="f" />
            </a>
            <a href={site.social.linkedin} aria-label="LinkedIn (placeholder)">
              <SocialIcon label="in" />
            </a>
            <a href={site.social.instagram} aria-label="Instagram (placeholder)">
              <SocialIcon label="ig" />
            </a>
            <a href={site.social.x} aria-label="X (placeholder)">
              <SocialIcon label="x" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
