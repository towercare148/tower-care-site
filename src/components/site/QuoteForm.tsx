import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { buildingTypeOptions, frequencyOptions, serviceOptions } from "@/data/site";
import { submitQuoteLead, type QuoteLead } from "@/lib/quote-lead";
import { GoogleBadge } from "./GoogleBadge";
import { Reveal } from "./Reveal";

const emptyLead: QuoteLead = {
  fullName: "",
  phone: "",
  organization: "",
  city: "",
  buildingType: "",
  floors: "",
  frequency: "",
  services: [],
  notes: "",
};

const selectClass =
  "h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none";

export function QuoteForm() {
  const [lead, setLead] = useState<QuoteLead>(emptyLead);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const update = <K extends keyof QuoteLead>(key: K, value: QuoteLead[K]) =>
    setLead((prev) => ({ ...prev, [key]: value }));

  const toggleService = (service: string, checked: boolean) =>
    update(
      "services",
      checked ? [...lead.services, service] : lead.services.filter((s) => s !== service),
    );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!lead.fullName.trim()) nextErrors['fullName'] = "נא למלא שם מלא";
    if (!/^[\d\-+\s()]{7,}$/.test(lead.phone.trim())) nextErrors['phone'] = "נא למלא מספר טלפון תקין";
    if (!lead.city.trim()) nextErrors['city'] = "נא למלא עיר";
    if (!lead.buildingType) nextErrors['buildingType'] = "נא לבחור סוג בניין";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    await submitQuoteLead(lead);
    setStatus("sent");
  };

  return (
    <section id="quote" className="bg-surface py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16">
        <Reveal>
          <p className="mb-4 text-xs font-semibold tracking-[0.22em] text-brand">צור קשר</p>
          <h2 className="text-3xl leading-tight font-bold sm:text-4xl">בואו נכיר את הבניין</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            מלאו את הפרטים ונחזור אליכם עם תכנית שירות מותאמת אישית – תדירות, משימות והיקף עבודה
            שמתאימים לבניין שלכם.
          </p>
          <div className="mt-6">
            <GoogleBadge />
          </div>
        </Reveal>

        <Reveal className="rounded-lg border border-border bg-card p-6 shadow-soft sm:p-9">
          {status === "sent" ? (
            <div className="flex min-h-80 flex-col items-center justify-center text-center">
              <CheckCircle2 className="size-12 text-brand" strokeWidth={1.5} aria-hidden="true" />
              <p
                role="status"
                className="mt-6 max-w-md text-lg leading-relaxed font-semibold text-foreground"
              >
                תודה! קיבלנו את הפרטים וניצור איתכם קשר בהקדם.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
              <Field label="שם מלא" required error={errors['fullName']} htmlFor="fullName">
                <Input
                  id="fullName"
                  value={lead.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                  className="h-11"
                  autoComplete="name"
                />
              </Field>

              <Field label="טלפון" required error={errors['phone']} htmlFor="phone">
                <Input
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  value={lead.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="h-11"
                  autoComplete="tel"
                />
              </Field>

              <Field label="שם הבניין / החברה" htmlFor="organization">
                <Input
                  id="organization"
                  value={lead.organization}
                  onChange={(e) => update("organization", e.target.value)}
                  className="h-11"
                />
              </Field>

              <Field label="עיר" required error={errors['city']} htmlFor="city">
                <Input
                  id="city"
                  value={lead.city}
                  onChange={(e) => update("city", e.target.value)}
                  className="h-11"
                  autoComplete="address-level2"
                />
              </Field>

              <Field label="סוג הבניין" required error={errors['buildingType']} htmlFor="buildingType">
                <select
                  id="buildingType"
                  value={lead.buildingType}
                  onChange={(e) => update("buildingType", e.target.value)}
                  className={selectClass}
                >
                  <option value="">בחרו סוג בניין</option>
                  {buildingTypeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="מספר קומות" htmlFor="floors">
                <Input
                  id="floors"
                  inputMode="numeric"
                  value={lead.floors}
                  onChange={(e) => update("floors", e.target.value)}
                  className="h-11"
                />
              </Field>

              <Field label="תדירות רצויה" htmlFor="frequency" className="sm:col-span-2">
                <select
                  id="frequency"
                  value={lead.frequency}
                  onChange={(e) => update("frequency", e.target.value)}
                  className={selectClass}
                >
                  <option value="">בחרו תדירות</option>
                  {frequencyOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>

              <fieldset className="sm:col-span-2">
                <legend className="mb-3 text-sm font-medium">בחרו שירותים רלוונטיים</legend>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {serviceOptions.map((service) => (
                    <label
                      key={service}
                      className="flex cursor-pointer items-center gap-2.5 rounded-md border border-border px-3 py-2.5 text-sm transition-colors hover:border-brand/50 has-[[data-state=checked]]:border-brand has-[[data-state=checked]]:bg-brand-soft"
                    >
                      <Checkbox
                        checked={lead.services.includes(service)}
                        onCheckedChange={(checked) => toggleService(service, checked === true)}
                      />
                      {service}
                    </label>
                  ))}
                </div>
              </fieldset>

              <Field label="ספרו לנו בקצרה מה אתם צריכים" htmlFor="notes" className="sm:col-span-2">
                <Textarea
                  id="notes"
                  rows={4}
                  value={lead.notes}
                  onChange={(e) => update("notes", e.target.value)}
                />
              </Field>

              <div className="sm:col-span-2">
                <Button
                  type="submit"
                  variant="brand"
                  size="xl"
                  className="w-full"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      שולח...
                    </>
                  ) : (
                    "שלחו וקבלו הצעה"
                  )}
                </Button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  required,
  error,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string | undefined;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <Label htmlFor={htmlFor} className="mb-2 block text-sm font-medium">
        {label}
        {required ? (
          <span className="text-brand" aria-hidden="true">
            {" *"}
          </span>
        ) : null}
      </Label>
      {children}
      {error ? <p className="mt-1.5 text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
