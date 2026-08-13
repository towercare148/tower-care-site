import { Button } from "@/components/ui/button";
import ctaImage from "@/assets/cta-building.jpg";
import { Reveal } from "./Reveal";
import { WhatsAppIcon, WhatsAppLink } from "./WhatsApp";

export function CtaBand() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={ctaImage}
        alt="כניסה מוארת לבניין מודרני"
        loading="lazy"
        width={1920}
        height={900}
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_left,oklch(0.16_0.006_250/0.95),oklch(0.16_0.006_250/0.6))]"
      />
      <div className="container-page py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl leading-tight font-bold text-background sm:text-4xl">
            רוצים שהבניין שלכם תמיד ייראה כמו שצריך?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-background/75 sm:text-lg">
            ספרו לנו בקצרה על הבניין ונחזור אליכם עם הצעה שמתאימה בדיוק לצרכים שלכם.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="brand" size="xl">
              <a href="#quote">קבלו הצעת מחיר</a>
            </Button>
            <Button asChild variant="onDark" size="xl">
              <WhatsAppLink className="inline-flex items-center justify-center gap-2">
                <WhatsAppIcon className="size-5" />
                שלחו לנו WhatsApp
              </WhatsAppLink>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
