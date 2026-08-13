import { cn } from "@/lib/utils";
import { whatsappHref } from "@/data/site";

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
      className={cn("size-5", className)}
    >
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.67-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.45s1.06 2.84 1.21 3.04c.15.2 2.09 3.2 5.07 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35ZM12.05 22h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.37A9.86 9.86 0 0 1 2.15 11.9C2.15 6.48 6.6 2.05 12.06 2.05c2.64 0 5.12 1.03 6.98 2.89a9.79 9.79 0 0 1 2.9 6.97c0 5.42-4.45 9.85-9.89 9.85Zm8.42-18.3A11.8 11.8 0 0 0 12.05.05C5.5.05.16 5.37.16 11.9c0 2.09.55 4.13 1.6 5.93L0 24l6.35-1.66a11.9 11.9 0 0 0 5.69 1.44h.01c6.55 0 11.89-5.32 11.89-11.85 0-3.17-1.24-6.14-3.47-8.37Z" />
    </svg>
  );
}

export function WhatsAppLink({
  className,
  children,
  ariaLabel,
}: {
  className?: string;
  children?: React.ReactNode;
  ariaLabel?: string;
}) {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel ?? "פנייה בוואטסאפ"}
      className={className}
    >
      {children}
    </a>
  );
}
