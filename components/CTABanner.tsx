import Link from "next/link";

type CTABannerProps = {
  title?: string;
  body?: string;
  href?: string;
  label?: string;
};

export function CTABanner({
  title = "Let's work together",
  body = "Tell us about your building, road, WWTP or materials requirement. We will respond with a clear next step.",
  href = "/contact",
  label = "Request a quote",
}: CTABannerProps) {
  return (
    <section className="bg-navy">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-heading font-extrabold text-white sm:text-4xl">{title}</h2>
          <p className="mt-3 max-w-xl text-white/80">{body}</p>
        </div>
        <Link href={href} className="btn-gradient shrink-0 rounded-full px-7 py-3 font-semibold">
          {label}
        </Link>
      </div>
    </section>
  );
}
