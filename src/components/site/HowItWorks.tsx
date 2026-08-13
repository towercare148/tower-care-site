import { processSteps } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function HowItWorks() {
  return (
    <section id="process" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="איך זה עובד"
          title="פשוט מתחילים. אנחנו דואגים לשאר."
          subtitle="תהליך קצר וברור מהשיחה הראשונה ועד שירות קבוע שעובד מעצמו."
        />

        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[11px] hidden h-px bg-border md:block"
          />
          {processSteps.map((step, index) => (
            <Reveal key={step.step} as="li" delay={index * 100} className="relative md:pt-0">
              <div className="flex items-center gap-4 md:block">
                <span
                  aria-hidden="true"
                  className="relative z-10 block size-6 shrink-0 rounded-full border-4 border-background bg-brand"
                />
                <span className="font-display text-3xl font-bold text-foreground/15 md:mt-6 md:block md:text-4xl">
                  {step.step}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:max-w-[15rem]">
                {step.text}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
