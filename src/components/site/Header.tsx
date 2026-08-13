import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { company, navLinks } from "@/data/site";
import logo from "@/assets/logo-cropped.png";
import { WhatsAppIcon, WhatsAppLink } from "./WhatsApp";

export function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-border/70 bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 bg-brand px-4 py-1.5 text-center text-[11px] font-medium text-background sm:text-xs">
        <span>הצעת מחיר פיזית בחינם</span>
        <span aria-hidden="true" className="opacity-60">
          ·
        </span>
        <span>למצטרפים חדשים: ניקיון חדר זבל בחינם בביקור הראשון</span>
      </div>

      <div className="container-page flex h-18 items-center justify-between gap-4">
        <a
          href="#top"
          className={cn(
            "shrink-0 rounded-md bg-background/95 px-2.5 py-1.5 shadow-sm transition-shadow",
            !solid && "shadow-md",
          )}
        >
          <img src={logo} alt={company.name} className="h-9 w-auto md:h-10" />
        </a>

        <nav aria-label="ניווט ראשי" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:inline-end-0 after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full",
                solid
                  ? "text-muted-foreground hover:text-brand"
                  : "text-background/80 hover:text-background",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <WhatsAppLink
            className={cn(
              "hidden size-10 items-center justify-center rounded-md border transition-colors sm:inline-flex",
              solid
                ? "border-border text-brand hover:bg-brand-soft"
                : "border-background/35 text-background hover:bg-background/15",
            )}
          >
            <WhatsAppIcon />
          </WhatsAppLink>
          <Button
            asChild
            variant="brand"
            size="lg"
            className="hidden h-11 sm:inline-flex"
          >
            <a href="#quote">קבלו הצעת מחיר</a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="פתיחת תפריט"
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-md border transition-colors lg:hidden",
              solid ? "border-border text-foreground" : "border-background/35 text-background",
            )}
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>
    </header>

    {/* Mobile menu — rendered outside <header> so its backdrop-blur doesn't
        turn this fixed overlay's containing block into the header's own box. */}
    <div
      className={cn(
        "fixed inset-0 z-50 bg-foreground/45 transition-opacity duration-300 lg:hidden",
        open ? "opacity-100" : "pointer-events-none opacity-0",
      )}
      onClick={() => setOpen(false)}
      aria-hidden={!open}
    >
      <div
        className={cn(
          "absolute inset-y-0 end-0 flex w-[86%] max-w-sm flex-col bg-background p-6 shadow-lift transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full rtl:-translate-x-full",
        )}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <img src={logo} alt={company.name} className="h-8 w-auto" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="סגירת תפריט"
            className="inline-flex size-10 items-center justify-center rounded-md border border-border"
          >
            <X className="size-5" />
          </button>
        </div>
        <nav aria-label="ניווט מובייל" className="mt-8 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-3 pt-8">
          <Button asChild variant="brand" size="xl">
            <a href="#quote" onClick={() => setOpen(false)}>
              קבלו הצעת מחיר
            </a>
          </Button>
          <Button asChild variant="quiet" size="xl">
            <a href={`tel:${company.phone}`}>
              <Phone className="size-4" />
              {company.phone}
            </a>
          </Button>
        </div>
      </div>
    </div>
    </>
  );
}

/** Persistent mobile contact bar. */
export function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-border bg-background/95 p-3 backdrop-blur-md md:hidden">
      <Button asChild variant="brand" size="lg" className="h-11">
        <a href="#quote">קבלו הצעת מחיר</a>
      </Button>
      <Button asChild variant="quiet" size="lg" className="h-11">
        <WhatsAppLink className="inline-flex items-center justify-center gap-2">
          <WhatsAppIcon className="size-4" />
          WhatsApp
        </WhatsAppLink>
      </Button>
    </div>
  );
}
