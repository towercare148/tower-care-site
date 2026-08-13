import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { company } from "@/data/site";

const leadSchema = z.object({
  fullName: z.string(),
  phone: z.string(),
  organization: z.string(),
  city: z.string(),
  buildingType: z.string(),
  floors: z.string(),
  frequency: z.string(),
  services: z.array(z.string()),
  notes: z.string(),
});

function formatLeadHtml(lead: z.infer<typeof leadSchema>): string {
  const rows = [
    ["שם מלא", lead.fullName],
    ["טלפון", lead.phone],
    ["בניין / חברה", lead.organization],
    ["עיר", lead.city],
    ["סוג בניין", lead.buildingType],
    ["מספר קומות", lead.floors],
    ["תדירות רצויה", lead.frequency],
    ["שירותים", lead.services.join(", ")],
    ["הערות", lead.notes],
  ].filter(([, value]) => value);

  const rowsHtml = rows
    .map(([label, value]) => `<tr><td style="padding:4px 12px;color:#666">${label}</td><td style="padding:4px 12px">${value}</td></tr>`)
    .join("");

  return `<div dir="rtl" style="font-family:sans-serif"><h2>בקשת הצעת מחיר חדשה - ${company.name}</h2><table>${rowsHtml}</table></div>`;
}

/** Server-only: sends the lead to the business inbox via Resend. Never runs on the client. */
export const sendLeadEmail = createServerFn({ method: "POST" })
  .validator(leadSchema)
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return { ok: false };
    }

    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `${company.name} Website <onboarding@resend.dev>`,
          to: [company.email],
          subject: `בקשת הצעת מחיר חדשה - ${data.fullName}`,
          html: formatLeadHtml(data),
        }),
      });
      return { ok: response.ok };
    } catch (error) {
      console.error("Failed to send lead email", error);
      return { ok: false };
    }
  });
