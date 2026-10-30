import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/content/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-navy/10">
      <div className="relative h-48">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-heading font-bold text-navy">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{service.summary}</p>
        <Link
          href={`/services/${service.slug}`}
          className="mt-4 inline-flex text-sm font-semibold text-red hover:text-orange"
        >
          Learn more
          <span className="sr-only"> about {service.title}</span>
        </Link>
      </div>
    </article>
  );
}
