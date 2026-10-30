"use client";

import Link from "next/link";
import { useEffect } from "react";
import { navLinks } from "@/content/site";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" aria-label="Mobile menu">
      <button
        type="button"
        className="absolute inset-0 bg-navy/70"
        aria-label="Close menu"
        onClick={onClose}
      />
      <nav
        id="mobile-menu"
        className="absolute top-0 right-0 flex h-full w-[min(100%,20rem)] flex-col gap-2 bg-white px-6 py-8 shadow-xl"
      >
        <button
          type="button"
          className="mb-4 self-end rounded px-2 py-1 text-sm font-medium text-navy"
          onClick={onClose}
        >
          Close
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded py-3 text-lg font-heading font-semibold text-navy"
            onClick={onClose}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="btn-gradient mt-4 rounded-full px-5 py-3 text-center font-semibold"
          onClick={onClose}
        >
          Contact us
        </Link>
      </nav>
    </div>
  );
}
