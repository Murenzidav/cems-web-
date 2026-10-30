import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  image: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  compact?: boolean;
};

export function Hero({
  image,
  imageAlt,
  title,
  subtitle,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  compact = false,
}: HeroProps) {
  return (
    <section className={`relative isolate flex items-end ${compact ? "min-h-[52vh]" : "min-h-screen"}`}>
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy/65" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-20 pt-32 sm:px-6 sm:pb-28">
        <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-orange uppercase">
          High Commitment
        </p>
        <h1 className="max-w-3xl text-4xl font-heading font-extrabold leading-tight text-white sm:text-6xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-5 max-w-xl text-lg text-white/85">{subtitle}</p>
        ) : null}
        {(primaryHref || secondaryHref) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {primaryHref && primaryLabel ? (
              <Link href={primaryHref} className="btn-gradient rounded-full px-6 py-3 font-semibold">
                {primaryLabel}
              </Link>
            ) : null}
            {secondaryHref && secondaryLabel ? (
              <Link
                href={secondaryHref}
                className="rounded-full border border-white/70 px-6 py-3 font-semibold text-white hover:bg-white/10"
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
