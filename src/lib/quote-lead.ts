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

/**
 * Lead delivery: the email is sent automatically and silently via a
 * server function (Resend) — no action needed from the visitor, and no
 * WhatsApp window is opened. The form shows an inline thank-you state
 * once this resolves.
 */
export async function submitQuoteLead(lead: QuoteLead): Promise<void> {
  await sendLeadEmail({ data: lead });
}
