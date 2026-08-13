import { WhatsAppIcon, WhatsAppLink } from "./WhatsApp";

export function FloatingWhatsApp() {
  return (
    <WhatsAppLink
      ariaLabel="שליחת הודעה בוואטסאפ"
      className="fixed bottom-24 left-4 z-40 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_-16px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none md:bottom-8"
    >
      <WhatsAppIcon className="size-7" />
    </WhatsAppLink>
  );
}
