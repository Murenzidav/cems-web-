import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-start justify-center px-4 py-28 sm:px-6">
      <p className="text-sm font-semibold tracking-[0.2em] text-orange uppercase">404</p>
      <h1 className="mt-3 text-4xl font-heading font-extrabold text-navy sm:text-5xl">
        This page is not here
      </h1>
      <p className="mt-4 max-w-lg text-muted">
        The link may be outdated. Head home, browse services, or send us a message.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn-gradient rounded-full px-6 py-3 font-semibold">
          Home
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-navy/20 px-6 py-3 font-semibold text-navy"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
}
