import { createFileRoute } from "@tanstack/react-router";

import { Header, MobileContactBar } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Services } from "@/components/site/Services";
import { BuildingTypes } from "@/components/site/BuildingTypes";
import { HowItWorks } from "@/components/site/HowItWorks";
import { WhyUs } from "@/components/site/WhyUs";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Testimonials } from "@/components/site/Testimonials";
import { CtaBand } from "@/components/site/CtaBand";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { company, faqs, googleRating, serviceCities } from "@/data/site";
import heroImage from "@/assets/hero-lobby.jpg";

const siteUrl = "https://towercare.netlify.app";
const title = `${company.name} | ניקיון בניינים וחדרי מדרגות`;
const description =
  "שירותי ניקיון מקצועיים לבנייני מגורים, לובי, חדרי מדרגות, מעליות, קומות ושטחים משותפים. תכנית שירות מותאמת לבניין ומענה מקצועי.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "he_IL" },
      { property: "og:url", content: siteUrl },
      { property: "og:image", content: `${siteUrl}${heroImage}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${siteUrl}${heroImage}` },
    ],
    links: [{ rel: "canonical", href: siteUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: company.name,
          alternateName: "ניקיון חדרי מדרגות במודיעין והסביבה",
          url: siteUrl,
          telephone: company.phone,
          areaServed: serviceCities.map((city) => ({
            "@type": "City",
            name: city,
          })),
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: googleRating.score,
            reviewCount: googleRating.reviewCount,
          },
          sameAs: [googleRating.profileUrl],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: company.name,
          url: siteUrl,
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <BeforeAfter />
        <Services />
        <BuildingTypes />
        <HowItWorks />
        <WhyUs />
        <Testimonials />
        <CtaBand />
        <QuoteForm />
        <Faq />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileContactBar />
    </div>
  );
}
