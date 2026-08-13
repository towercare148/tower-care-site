import { buildingTypes } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function BuildingTypes() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="סוגי בניינים"
          title="מתאימים את השירות לבניין"
          subtitle="לכל נכס יש שטחים משותפים, תדירות וצרכים אחרים – התכנית נבנית בהתאם."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {buildingTypes.map((type, index) => (
            <Reveal
              key={type.title}
              as="article"
              delay={index * 80}
              className="group relative overflow-hidden rounded-lg bg-foreground"
            >
              <img
                src={type.image}
                alt={type.title}
                loading="lazy"
                width={1024}
                height={1280}
                className="h-80 w-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105 lg:h-96"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.16_0.006_250/0.92),oklch(0.16_0.006_250/0.35)_55%,transparent)]"
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-lg font-semibold text-background">{type.title}</h3>
                <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-background/80 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100 max-lg:max-h-32 max-lg:opacity-100">
                  {type.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
