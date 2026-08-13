import { Mail, MapPin, Phone } from "lucide-react";
import { company, legalLinks, navLinks, whatsappHref } from "@/data/site";
import { WhatsAppIcon } from "./WhatsApp";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground pt-16 pb-28 text-background/70 md:pb-16">
      <div className="container-page grid gap-12 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold text-background">{company.name}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            שירותי ניקיון ותחזוקה לבנייני מגורים, משרדים וחללים משותפים.
          </p>
        </div>

        <nav aria-label="קישורים מהירים">
          <h2 className="text-sm font-semibold text-background">קישורים מהירים</h2>
          <ul className="mt-4 grid gap-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-background">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold text-background">צור קשר</h2>
          <ul className="mt-4 grid gap-3 text-sm">
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 shrink-0" aria-hidden="true" />
              <a href={`tel:${company.phone}`} className="hover:text-background">
                טלפון: {company.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <WhatsAppIcon className="size-4 shrink-0" />
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-background"
              >
                WhatsApp: {company.whatsapp}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="size-4 shrink-0" aria-hidden="true" />
              <a href={`mailto:${company.email}`} className="hover:text-background">
                Email: {company.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="size-4 shrink-0" aria-hidden="true" />
              <span>אזורי שירות: {company.serviceArea}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-page mt-14 flex flex-col gap-4 border-t border-background/12 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {company.name}. כל הזכויות שמורות.
        </p>
        <ul className="flex flex-wrap gap-5">
          {legalLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="transition-colors hover:text-background">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
