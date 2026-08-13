import { introMetrics } from "@/data/site";
import { Reveal } from "./Reveal";

export function TrustStrip() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-page grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <Reveal>
          <h2 className="text-3xl leading-tight font-bold sm:text-4xl">
            ניקיון של בניין הוא
            <br />
            לא רק איך שהוא נראה
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            הכניסה לבניין, הלובי, המעלית וחדר המדרגות הם הדבר הראשון שדיירים, אורחים ולקוחות פוגשים.
            אנחנו דואגים שהם תמיד ייראו כמו שצריך.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {introMetrics.map((metric, index) => (
            <Reveal
              key={metric.title}
              delay={index * 80}
              className="rounded-lg border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <metric.icon className="size-6 text-brand" aria-hidden="true" strokeWidth={1.5} />
              <h3 className="mt-5 text-lg font-semibold">{metric.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{metric.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
