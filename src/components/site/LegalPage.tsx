import type { ReactNode } from "react";
import { Header, MobileContactBar } from "./Header";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./FloatingWhatsApp";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container-page max-w-3xl pt-40 pb-24">
        <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
        <div className="mt-8 text-sm leading-relaxed text-muted-foreground sm:text-base [&>h2]:mt-8 [&>h2]:text-lg [&>h2]:font-semibold [&>h2]:text-foreground [&>p]:mt-3 [&>ul]:mt-3 [&>ul]:list-disc [&>ul]:ps-5">
          {children}
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileContactBar />
    </div>
  );
}
