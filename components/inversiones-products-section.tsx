import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";

const INVESTMENT_PRODUCTS = [
  {
    id: "medicash-soles",
    title: "Fondo Medicash/Soles",
    summary:
      "Financia la emisión de facturas y recibos de médicos por servicios en clínicas privadas.",
    detail:
      "El repago proviene de facturas emitidas a aseguradoras como Pacífico, Rímac, Mapfre y La Positiva, con confirmación de pago por clínica privada y plazo promedio de 60 días.",
    points: ["Operación de corto plazo", "Plazo promedio: 60 días"],
    iconSrc: "/icons/inversiones/fondo-medicash-soles.svg",
    iconWidth: 176,
    iconHeight: 120,
  },
  {
    id: "facturas-dolares",
    title: "Fondo Facturas Dólares",
    summary:
      "Financia facturas emitidas y reconocidas por empresas con la más alta calificación crediticia (AAA).",
    detail:
      "Se valida el riesgo crediticio con Sentinel (SBS) y FINEXO de la Bolsa de Valores de Lima, complementado con evaluación de estados financieros para reforzar control y consistencia.",
    points: ["Obligados de primer nivel", "Plazo promedio: 60 días"],
    iconSrc: "/icons/inversiones/fondo-facturas-dolares.svg",
    iconWidth: 176,
    iconHeight: 120,
  },
] as const;

export function InversionesProductsSection() {
  return (
    <section
      aria-labelledby="inversiones-productos-title"
      className="relative z-20 -mt-16 bg-gradient-to-b from-transparent via-[#edf5fc] to-[#f8fbff] pb-14 pt-4 sm:-mt-20 sm:pb-16 sm:pt-6 lg:-mt-24 lg:pb-20 lg:pt-8"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delayMs={40}>
          <div className="rounded-3xl border border-[#c2d9ec] bg-white/95 p-5 shadow-[0_24px_52px_-34px_rgba(15,45,78,0.45)] sm:p-7 lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1d3f62]">
              Para inversionistas
            </p>
            <h2
              id="inversiones-productos-title"
              className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            >
              <span className="text-[#fbb03b]">
                Haz que tu capital avance con propósito.
              </span>{" "}
              <span className="text-[#0f2d4e]">
                Estrategias de inversión respaldadas por economía real.
              </span>
            </h2>
            <p className="mt-4 max-w-5xl text-sm leading-relaxed text-[#1d3f62] sm:text-base">
              Propuesta de inversión competitiva y diversificada para personas
              naturales y jurídicas, combinando operaciones de corto plazo con
              facturas de obligados de primer nivel y operaciones de mediano
              plazo con garantías hipotecarias de cobertura y calidad.
            </p>

            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-[#b8d0e5] bg-[#eaf3fb] px-4 py-4 sm:px-5">
              <Image
                src="/icons/inversiones/portfolio-diversified.svg"
                alt=""
                width={176}
                height={120}
                aria-hidden
                className="h-14 w-auto shrink-0 object-contain sm:h-16"
              />
              <p className="text-sm font-medium leading-relaxed text-[#0f2d4e] sm:text-base">
                Portafolio conservador, rentable y con mecanismos de evaluación
                de riesgo para una gestión patrimonial sostenible.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ul className="mt-5 grid gap-4 lg:grid-cols-2">
          {INVESTMENT_PRODUCTS.map((product, index) => (
            <ScrollReveal
              key={product.id}
              direction={index % 2 === 0 ? "left" : "right"}
              delayMs={120 + index * 90}
              threshold={0.16}
              className="h-full"
            >
              <li className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-[#c2d9ec] bg-white p-5 text-left shadow-[0_20px_42px_-30px_rgba(15,45,78,0.38)] sm:p-6">
                  <div className="flex items-start gap-4">
                    <Image
                      src={product.iconSrc}
                      alt=""
                      width={product.iconWidth}
                      height={product.iconHeight}
                      aria-hidden
                      className="h-16 w-auto shrink-0 object-contain sm:h-20"
                    />
                    <div>
                      <h3 className="text-2xl font-semibold leading-tight text-[#0f2d4e]">
                        {product.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#1d3f62] sm:text-base">
                        {product.summary}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2">
                    {product.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2 text-sm font-semibold text-[#0f2d4e] sm:text-base"
                      >
                        <span aria-hidden>→</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 rounded-xl border border-[#b8d0e5] bg-[#edf5fc] px-4 py-3 text-sm leading-relaxed text-[#1d3f62]">
                    {product.detail}
                  </div>
                </article>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
