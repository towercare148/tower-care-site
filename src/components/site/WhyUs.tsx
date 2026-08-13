import { Button } from "@/components/ui/button";
import { benefits } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function WhyUs() {
  return (
    <section id="why" className="bg-foreground py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          tone="dark"
          eyebrow="למה אנחנו"
          title="כשיש על מי לסמוך, רואים את זה בבניין"
          subtitle="עבודה מסודרת, צוותים קבועים ופיקוח – כדי שוועד הבית או מנהל הנכס לא יצטרכו לעסוק בזה."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg bg-background/10 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Reveal
              key={benefit.title}
              delay={(index % 3) * 80}
              className="bg-foreground p-8 transition-colors duration-300 hover:bg-background/[0.04]"
            >
              <benefit.icon
                className="size-6 text-brand-soft"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="mt-5 text-lg font-semibold text-background">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-background/65">{benefit.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Button asChild variant="brand" size="xl">
            <a href="#quote">קבלו הצעת מחיר לבניין שלכם</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
