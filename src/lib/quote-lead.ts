import { company } from "@/data/site";

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
 * Lead delivery with no backend: opens a prefilled WhatsApp chat to the
 * business number, and triggers a prefilled mailto as a fallback channel.
 * Both require the visitor to hit "send" on their end — there is no
 * server here to deliver the lead silently. The caller navigates to the
 * thank-you page after this resolves.
 */
export async function submitQuoteLead(lead: QuoteLead): Promise<void> {
  const message = formatLead(lead);

  const whatsappUrl = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");

  const mailSubject = encodeURIComponent(`בקשת הצעת מחיר - ${lead.fullName}`);
  const mailBody = encodeURIComponent(message);
  window.location.href = `mailto:${company.email}?subject=${mailSubject}&body=${mailBody}`;
}
