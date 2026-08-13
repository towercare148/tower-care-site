import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroTrust } from "@/data/site";
import heroImage from "@/assets/hero-lobby.jpg";
import { GoogleBadge } from "./GoogleBadge";
import { WhatsAppIcon, WhatsAppLink } from "./WhatsApp";

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[92svh] overflow-hidden">
      <img
        src={heroImage}
        alt="לובי מודרני ומטופח בבניין מגורים"
        width={1920}
        height={1200}
        fetchPriority="high"
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,oklch(0.16_0.006_250/0.94),oklch(0.16_0.006_250/0.72)_45%,oklch(0.16_0.006_250/0.55))]"
      />

      <div className="container-page flex min-h-[92svh] flex-col justify-end pt-36 pb-16 md:justify-center md:pb-24">
        <div className="max-w-3xl">
          <p className="animate-in fade-in slide-in-from-bottom-4 mb-6 text-xs font-semibold tracking-[0.24em] text-background/70 duration-700">
            ניקיון ותחזוקה לבניינים
          </p>
          <h1 className="animate-in fade-in slide-in-from-bottom-6 text-4xl leading-[1.1] font-bold text-background duration-700 sm:text-5xl lg:text-6xl">
            הבניין שלכם. הסטנדרט שלנו.
          </h1>
          <p className="animate-in fade-in slide-in-from-bottom-6 mt-6 max-w-2xl text-base leading-relaxed text-background/80 duration-1000 sm:text-lg">
            שירותי ניקיון ותחזוקה קבועים לבנייני מגורים, משרדים וחללים משותפים – עם צוות מקצועי,
            פיקוח ושירות שאפשר לסמוך עליו.
          </p>

          <div className="animate-in fade-in slide-in-from-bottom-4 mt-9 flex flex-col gap-3 duration-1000 sm:flex-row">
            <Button asChild variant="brand" size="xl">
              <a href="#quote">קבלו הצעת מחיר</a>
            </Button>
            <Button asChild variant="onDark" size="xl">
              <WhatsAppLink className="inline-flex items-center justify-center gap-2">
                <WhatsAppIcon className="size-5" />
                דברו איתנו ב-WhatsApp
              </WhatsAppLink>
            </Button>
          </div>

          <ul className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
            {heroTrust.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-background/85">
                <Check className="mt-0.5 size-4 shrink-0 text-brand-soft" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="animate-in fade-in mt-8 duration-1000">
            <GoogleBadge tone="dark" />
          </div>
        </div>
      </div>
    </section>
  );
}
