import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { Header, MobileContactBar } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon, WhatsAppLink } from "@/components/site/WhatsApp";
import { company } from "@/data/site";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [{ title: `תודה שהשארתם פרטים | ${company.name}` }],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container-page flex min-h-[80svh] max-w-2xl flex-col items-center justify-center pt-40 pb-24 text-center">
        <CheckCircle2 className="size-14 text-brand" strokeWidth={1.5} aria-hidden="true" />
        <h1 className="mt-6 text-3xl font-bold sm:text-4xl">תודה שהשארתם פרטים!</h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
          קיבלנו את הפנייה שלכם ונחזור אליכם בהקדם עם תכנית שירות מותאמת לבניין. אם פתחנו עבורכם
          חלון WhatsApp – מומלץ לשלוח אותו כדי שנוכל לחזור אליכם מהר יותר.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="brand" size="xl">
            <WhatsAppLink className="inline-flex items-center justify-center gap-2">
              <WhatsAppIcon className="size-5" />
              דברו איתנו ב-WhatsApp
            </WhatsAppLink>
          </Button>
          <Button asChild variant="quiet" size="xl">
            <Link to="/">חזרה לדף הבית</Link>
          </Button>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileContactBar />
    </div>
  );
}
