import { Quote, Star } from "lucide-react";
import { googleRating, testimonials } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-surface py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="לקוחות ממליצים"
          title="מה הלקוחות שלנו אומרים"
          subtitle="ביקורות אמיתיות מהפרופיל שלנו ב-Google."
        />

        <Reveal className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-2 text-center">
          <div className="flex items-center gap-1" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-5 fill-brand text-brand" strokeWidth={1.5} />
            ))}
          </div>
          <a
            href={googleRating.profileUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-brand underline-offset-4 hover:underline"
          >
            {googleRating.score.toFixed(1)} מתוך 5 בפרופיל שלנו ב-Google
          </a>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal
              key={item.name}
              as="figure"
              delay={index * 90}
              className="flex h-full flex-col rounded-lg border border-border bg-card p-8 shadow-soft"
            >
              <Quote className="size-6 text-brand" strokeWidth={1.5} aria-hidden="true" />
              <blockquote className="mt-5 grow text-sm leading-relaxed text-muted-foreground">
                "{item.quote}"
              </blockquote>
              <figcaption className="mt-7 border-t border-border pt-5">
                <p className="text-sm font-semibold text-foreground">{item.name}</p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
