import { ImageIcon } from "lucide-react";
import { beforeAfterItems } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/**
 * Before/after comparison. Each item renders real images when
 * `beforeImage` / `afterImage` are supplied in the data source,
 * otherwise an elegant placeholder frame.
 */
function ComparisonFrame({
  label,
  image,
  alt,
}: {
  label: string;
  image?: string | undefined;
  alt: string;
}) {
  return (
    <div className="relative aspect-4/3 overflow-hidden rounded-md border border-border bg-secondary">
      {image ? (
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 hover:scale-105"
        />
      ) : (
        <div className="flex size-full flex-col items-center justify-center gap-2 text-muted-foreground">
          <ImageIcon className="size-6" strokeWidth={1.5} aria-hidden="true" />
          <span className="px-4 text-center text-xs leading-relaxed">תמונה תופיע כאן</span>
        </div>
      )}
      <span className="absolute top-3 start-3 rounded-sm bg-foreground/85 px-2.5 py-1 text-[0.7rem] font-semibold text-background">
        {label}
      </span>
    </div>
  );
}

export function BeforeAfter() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="לפני ואחרי"
          title="ההבדל נמצא בפרטים"
          subtitle="תמונות מהשטח יתווספו כאן בהמשך – לפי אזורי הבניין."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {beforeAfterItems.map((item, index) => (
            <Reveal
              key={item.category}
              as="article"
              delay={(index % 2) * 90}
              className="rounded-lg border border-border bg-card p-5 shadow-soft"
            >
              <div className="grid grid-cols-2 gap-3">
                <ComparisonFrame
                  label="לפני"
                  image={item.beforeImage}
                  alt={`${item.category} – לפני`}
                />
                <ComparisonFrame
                  label="אחרי"
                  image={item.afterImage}
                  alt={`${item.category} – אחרי`}
                />
              </div>
              <h3 className="mt-5 text-base font-semibold">{item.category}</h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
