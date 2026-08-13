import { ArrowLeft } from "lucide-react";
import { services } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="השירותים שלנו"
          title="כל מה שהבניין שלכם צריך"
          subtitle="תכנית ניקיון מסודרת המותאמת לסוג הבניין, לכמות הדיירים ולתדירות הנדרשת."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              as="article"
              delay={(index % 4) * 70}
              className="group relative flex h-full flex-col rounded-lg border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-lift"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-md bg-brand-soft text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-brand-foreground">
                <service.icon className="size-6" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-lg font-semibold">{service.title}</h3>
              <p className="mt-3 grow text-sm leading-relaxed text-muted-foreground">
                {service.text}
              </p>
              <a
                href="#quote"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
              >
                למידע נוסף
                <ArrowLeft
                  className="size-4 transition-transform duration-300 group-hover:-translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
