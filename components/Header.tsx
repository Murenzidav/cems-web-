"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/content/site";
import { MobileNav } from "@/components/MobileNav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors ${
        scrolled || open ? "bg-white shadow-sm" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src="/images/logo.jpg"
            alt={`${site.name} logo`}
            width={180}
            height={56}
            className="h-12 w-auto max-w-[180px] object-contain"
            priority
          />
          <span className="sr-only">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold tracking-wide text-navy uppercase hover:text-red"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="btn-gradient hidden rounded-full px-5 py-2.5 text-sm font-semibold md:inline-flex"
        >
          Contact us
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-navy md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span className="block h-0.5 w-6 bg-navy" />
            <span className="block h-0.5 w-6 bg-navy" />
            <span className="block h-0.5 w-6 bg-navy" />
          </span>
        </button>
      </div>
      <MobileNav open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
