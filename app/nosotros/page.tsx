import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HomeAlliancesSection } from "@/components/home-alliances-section";
import { HomeMetricsSection } from "@/components/home-metrics-section";
import { NosotrosDirectorySection } from "@/components/nosotros-directory-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { LOGO_IAM_URL } from "@/lib/site";

type SolutionCard = {
  id: string;
  badge: string;
  title: string;
  description: string;
  highlights: readonly string[];
  href: string;
  cta: string;
  tone: "navy" | "sky";
};

const SOLUTION_CARDS: readonly SolutionCard[] = [
  {
    id: "inversiones",
    badge: "Para inversionistas",
    title: "Inversiones",
    description:
      "Ofrecemos alternativas con portafolios diversificados, seguros y rentables.",
    highlights: ["Fondo Medicash/Soles", "Fondo Facturas Dólares"],
    href: "/inversiones",
    cta: "Ver inversiones",
    tone: "navy",
  },
  {
    id: "financiamiento",
    badge: "Para empresas",
    title: "Financiamiento",
    description:
      "Contamos con productos que se adecuan a tus necesidades financieras para ayudarte a crecer.",
    highlights: [
      "Factoring",
      "Confirming",
      "Adelanto de flujos",
      "Estructuración y financiamiento a mediano plazo",
    ],
    href: "/financiamiento",
    cta: "Ver financiamiento",
    tone: "navy",
  },
] as const;

const BOARD_MEMBERS = [
  {
    id: "eduardo-rosa",
    name: "Eduardo De La Rosa Cárdenas",
    role: "Presidente del Directorio",
    bio: "Empresario con solida trayectoria en sector salud e inmobiliario. Principal accionista de la clínica Providencia y Constructora SCI.",
    image:
      "https://iamgroup.pe/wp-content/uploads/2024/03/Formato-Resena-Directores-01.png",
    linkedin:
      "https://www.linkedin.com/search/results/people/?keywords=Eduardo%20De%20La%20Rosa%20Cardenas",
  },
  {
    id: "luis-castro",
    name: "Luis Castro Echecopar",
    role: "Director y Gerente General",
    bio: "Director y Gerente General. Experiencia de más de 28 años en el sector financiero a liderado estructuraciones y operaciones sindicadas en diferentes empresas.",
    image:
      "https://iamgroup.pe/wp-content/uploads/2024/03/Formato-Resena-Directores-03.png",
    linkedin:
      "https://www.linkedin.com/search/results/people/?keywords=Luis%20Castro%20Echecopar",
  },
  {
    id: "eduardo-morales",
    name: "Eduardo Morales",
    role: "Director Corporativo",
    bio: "Director y comité de riesgos en caja Huancayo, exdecano de la Facultad de Economia de la universidad de Lima.",
    image:
      "https://iamgroup.pe/wp-content/uploads/2024/03/Formato-Resena-Directores-02.png",
    linkedin:
      "https://www.linkedin.com/search/results/people/?keywords=Eduardo%20Morales%20director%20corporativo",
  },
] as const;

const CORE_DIAGRAM_ITEMS = [
  {
    id: "vision",
    title: "Visión",
    text: "Ser reconocidos como una empresa en soluciones financieras rentables, seguras y transparentes.",
  },
  {
    id: "transparencia",
    title: "Transparencia",
    text: "Actuamos con informacion clara, directa y criterios para construir confianza en cada decisión financiera.",
  },
  {
    id: "integridad",
    title: "Integridad",
    text: "Sostenemos relaciones responsables éticas y cercanas, cuidando los intereses de los inversionistas, clientes y aliados.",
  },
  {
    id: "pasion",
    title: "Pasión",
    text: "Nos involucramos con energía y compromiso, buscando experiencias y soluciones con nuestros inversionistas y clientes.",
  },
  {
    id: "enfoque-resultados",
    title: "Enfoque en resultados",
    text: "Trabajamos con objetivos concretos para generar valor medible y sostenible.",
  },
] as const;

function LongDashedBorder() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <rect
        x="0.5"
        y="0.5"
        width="99"
        height="99"
        rx="4"
        ry="4"
        fill="none"
        stroke="#0f2d4e"
        strokeDasharray="12 8"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Nosotros",
};

export default function NosotrosPage() {
  return (
    <main id="contenido-principal" className="bg-[#0f2d4e]">
      <section className="relative isolate overflow-hidden pb-24 pt-[calc(var(--header-h)+2.2rem)] sm:pb-28 sm:pt-[calc(var(--header-h)+2.8rem)] lg:pb-32">
        <Image
          src="https://images.unsplash.com/photo-1460472178825-e5240623afd5?auto=format&fit=crop&w=2200&q=80"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-[#0b1b2d]/90 via-[#0f2d4e]/72 to-[#0f2d4e]/45"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-[#0f2d4e]/80 via-transparent to-[#0f2d4e]/35"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c0deff]/60 to-transparent"
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <ScrollReveal direction="left" delayMs={0}>
              <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.07] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Impulsamos{" "}
                <span className="text-[#fbb03b]">crecimiento patrimonial</span>{" "}
                con asesoría financiera
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="left" delayMs={110}>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white sm:text-xl">
                Contamos con un equipo con más de 25 años de experiencia en el sistema financiero y empresarial.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delayMs={250}>
              <div className="mt-8 sm:mt-10">
                <Link
                  href="/contacto"
                  className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-6 py-2 text-sm font-semibold text-[#0f2d4e] transition-opacity hover:opacity-95 active:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c0deff] sm:min-h-12"
                >
                  Contacta a un asesor
                  <span aria-hidden className="text-base leading-none">
                    →
                  </span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="nosotros-soluciones-title"
        className="relative z-20 -mt-12 pb-14 sm:-mt-16 sm:pb-16 lg:-mt-20 lg:pb-20"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="grid gap-4 lg:grid-cols-2">
            {SOLUTION_CARDS.map((card, index) => {
              const isSky = card.tone === "sky";

              return (
                <ScrollReveal
                  key={card.id}
                  direction={index === 0 ? "left" : "right"}
                  delayMs={120 + index * 90}
                  threshold={0.16}
                  className="h-full"
                >
                  <li className="h-full">
                    <article
                      className={[
                        "flex h-full flex-col items-start rounded-2xl border p-5 shadow-[0_20px_45px_-30px_rgba(11,31,53,0.6)] sm:p-6",
                        isSky
                          ? "border-[#96bde6] bg-[#d1deed] text-[#0f2d4e]"
                          : "border-[#7e9ab8] bg-[#bbcadb] text-[#0f2d4e]",
                      ].join(" ")}
                    >
                      <p className="w-fit rounded-full bg-[#fbb03b] px-3 py-1 text-xs font-semibold tracking-wide text-[#0f2d4e]">
                        {card.badge}
                      </p>
                      <h3 className="mt-4 text-3xl font-semibold leading-tight">
                        {card.title}
                      </h3>
                      <p className="mt-3 max-w-[56ch] text-sm leading-relaxed text-[#1b3859] sm:text-base">
                        {card.description}
                      </p>

                      <ul className="mt-5 flex-1 space-y-2">
                        {card.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-sm font-semibold text-[#0f2d4e] sm:text-base"
                          >
                            <span aria-hidden className="text-[#0f2d4e]">
                              →
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6">
                        <Link
                          href={card.href}
                          className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0f2d4e] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#143c69] active:bg-[#1d3f62] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f2d4e] sm:min-h-12"
                        >
                          {card.cta}
                          <span aria-hidden className="text-base leading-none">
                            →
                          </span>
                        </Link>
                      </div>
                    </article>
                  </li>
                </ScrollReveal>
              );
            })}
          </ul>
        </div>
      </section>

      <NosotrosDirectorySection members={BOARD_MEMBERS} />

      <HomeMetricsSection showCta={false} />

      <section
        aria-labelledby="nosotros-core-title"
        className="bg-gradient-to-b from-[#f9fcff] via-[#f1f7fd] to-[#e2edf8] py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <ScrollReveal direction="left" delayMs={0}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1d3f62]">
                Esencia IAM Group
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" delayMs={90}>
              <h2
                id="nosotros-core-title"
                className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight text-[#0f2d4e] sm:text-4xl"
              >
                Visión / Valores
              </h2>
            </ScrollReveal>
          </div>

          <ul className="mt-8 grid gap-4 lg:hidden">
            {CORE_DIAGRAM_ITEMS.map((block, index) => (
              <ScrollReveal
                key={block.id}
                direction="up"
                delayMs={90 + index * 80}
                threshold={0.16}
                className="h-full"
              >
                <li
                  className={[
                    "relative h-full rounded-2xl bg-[#d1deed] p-5 shadow-[0_20px_42px_-32px_rgba(15,45,78,0.35)] sm:p-6",
                    index === 0 ? "border border-[#0f2d4e]" : "",
                  ].join(" ")}
                >
                  {index > 0 ? <LongDashedBorder /> : null}
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5a7ea2]">
                    {`0${index + 1}`.slice(-2)}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold leading-tight text-[#0f2d4e] sm:text-2xl">
                    {block.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#1d3f62] sm:text-base">
                    {block.text}
                  </p>
                </li>
              </ScrollReveal>
            ))}
          </ul>

          <div className="relative mt-10 hidden lg:block">
            <div className="relative mx-auto grid max-w-6xl grid-cols-3 grid-rows-3 gap-5">
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 h-[83.333%] w-px -translate-x-1/2 bg-gradient-to-b from-[#a8c4de] via-[#86a9cb] to-[#a8c4de]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-[#a8c4de] via-[#86a9cb] to-[#a8c4de]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute left-0 top-[83.333%] h-px w-full -translate-y-1/2 bg-gradient-to-r from-[#a8c4de] via-[#86a9cb] to-[#a8c4de]"
              />

              <ScrollReveal
                direction="down"
                delayMs={120}
                className="col-start-2 row-start-1"
              >
                <article className="rounded-2xl border border-[#0f2d4e] bg-[#d1deed] p-5 shadow-[0_20px_40px_-28px_rgba(15,45,78,0.38)]">
                  <h3 className="text-xl font-semibold leading-tight text-[#0f2d4e]">
                    {CORE_DIAGRAM_ITEMS[0].title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#1d3f62]">
                    {CORE_DIAGRAM_ITEMS[0].text}
                  </p>
                </article>
              </ScrollReveal>

              <ScrollReveal
                direction="right"
                delayMs={210}
                className="col-start-1 row-start-2"
              >
                <article className="relative rounded-2xl bg-[#d1deed] p-5 shadow-[0_20px_40px_-28px_rgba(15,45,78,0.38)]">
                  <LongDashedBorder />
                  <h3 className="text-xl font-semibold leading-tight text-[#0f2d4e]">
                    {CORE_DIAGRAM_ITEMS[1].title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#1d3f62]">
                    {CORE_DIAGRAM_ITEMS[1].text}
                  </p>
                </article>
              </ScrollReveal>

              <ScrollReveal
                direction="up"
                delayMs={150}
                className="col-start-2 row-start-2 flex items-center justify-center"
              >
                <div className="flex h-48 w-48 flex-col items-center justify-center rounded-full border-4 border-[#9fbddb] bg-[#0f2d4e] px-5 text-center shadow-[0_24px_48px_-32px_rgba(15,45,78,0.6)]">
                  <Image
                    src={LOGO_IAM_URL}
                    alt="IAM Group"
                    width={200}
                    height={56}
                    className="h-9 w-auto"
                    sizes="140px"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal
                direction="left"
                delayMs={300}
                className="col-start-3 row-start-2"
              >
                <article className="relative rounded-2xl bg-[#d1deed] p-5 shadow-[0_20px_40px_-28px_rgba(15,45,78,0.38)]">
                  <LongDashedBorder />
                  <h3 className="text-xl font-semibold leading-tight text-[#0f2d4e]">
                    {CORE_DIAGRAM_ITEMS[2].title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#1d3f62]">
                    {CORE_DIAGRAM_ITEMS[2].text}
                  </p>
                </article>
              </ScrollReveal>

              <ScrollReveal
                direction="up"
                delayMs={390}
                className="col-start-1 row-start-3"
              >
                <article className="relative rounded-2xl bg-[#d1deed] p-5 shadow-[0_20px_40px_-28px_rgba(15,45,78,0.38)]">
                  <LongDashedBorder />
                  <h3 className="text-xl font-semibold leading-tight text-[#0f2d4e]">
                    {CORE_DIAGRAM_ITEMS[3].title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#1d3f62]">
                    {CORE_DIAGRAM_ITEMS[3].text}
                  </p>
                </article>
              </ScrollReveal>

              <ScrollReveal
                direction="up"
                delayMs={470}
                className="col-start-3 row-start-3"
              >
                <article className="relative rounded-2xl bg-[#d1deed] p-5 shadow-[0_20px_40px_-28px_rgba(15,45,78,0.38)]">
                  <LongDashedBorder />
                  <h3 className="text-xl font-semibold leading-tight text-[#0f2d4e]">
                    {CORE_DIAGRAM_ITEMS[4].title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#1d3f62]">
                    {CORE_DIAGRAM_ITEMS[4].text}
                  </p>
                </article>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <HomeAlliancesSection />
    </main>
  );
}
