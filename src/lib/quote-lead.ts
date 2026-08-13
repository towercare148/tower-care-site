import { company } from "@/data/site";
import { sendLeadEmail } from "./send-lead-email";

export type QuoteLead = {
  fullName: string;
  phone: string;
  organization: string;
  city: string;
  buildingType: string;
  floors: string;
  frequency: string;
  services: string[];
  notes: string;
};

function formatLead(lead: QuoteLead): string {
  const lines = [
    `בקשה חדשה מהאתר - ${company.name}`,
    `שם מלא: ${lead.fullName}`,
    `טלפון: ${lead.phone}`,
    lead.organization && `בניין / חברה: ${lead.organization}`,
    `עיר: ${lead.city}`,
    `סוג בניין: ${lead.buildingType}`,
    lead.floors && `מספר קומות: ${lead.floors}`,
    lead.frequency && `תדירות רצויה: ${lead.frequency}`,
    lead.services.length > 0 && `שירותים: ${lead.services.join(", ")}`,
    lead.notes && `הערות: ${lead.notes}`,
  ].filter(Boolean);
  return lines.join("\n");
}

/**
 * Lead delivery: the email is sent automatically and silently via a
 * server function (Resend) — no action needed from the visitor. The
 * WhatsApp chat still opens so the visitor can message the business
 * directly if they want to; that part still requires them to hit send.
 * The caller navigates to the thank-you page after this resolves.
 */
export async function submitQuoteLead(lead: QuoteLead): Promise<void> {
  const message = formatLead(lead);

  const whatsappUrl = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");

  await sendLeadEmail({ data: lead });
}
