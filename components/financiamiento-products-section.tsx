import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";

const FINANCING_PRODUCTS = [
  {
    id: "factoring",
    title: "Factoring",
    summary:
      "Impulsa la liquidez de tu empresa financiando facturas y letras negociadas en CAVALI.",
    points: ["Facturas y letras negociadas", "Liquidez inmediata de corto plazo"],
    iconSrc: "/icons/financiamiento/factoring.svg",
    iconWidth: 176,
    iconHeight: 120,
  },
  {
    id: "confirming",
    title: "Confirming",
    summary:
      "Financia tus compras mediante cesión de facturas, optimizando el ciclo de pago de proveedores.",
    points: ["Cesión de facturas", "En Cavali optimizando el ciclo de pago de proveedores"],
    iconSrc: "/icons/financiamiento/confirming.svg",
    iconWidth: 176,
    iconHeight: 120,
  },
  {
    id: "adelanto-flujos",
    title: "Adelanto de flujos",
    summary:
      "Accede a capital de trabajo para atender órdenes de compra o contratos con pagos direccionados.",
    points: ["Capital de trabajo oportuno", "Soporte para contratos y órdenes de compra a corto plazo"],
    iconSrc: "/icons/financiamiento/adelanto-flujos.svg",
    iconWidth: 176,
    iconHeight: 120,
  },
  {
    id: "mediano-plazo",
    title: "Estructuración y financiamiento a mediano plazo",
    summary:
      "Construimos financiamiento a medida en operaciones con medios de pago identificados.",
    points: ["Diseño financiero a medida", "Medios de pago identificados"],
    iconSrc: "/icons/financiamiento/mediano-plazo.svg",
    iconWidth: 176,
    iconHeight: 120,
  },
] as const;

export function FinanciamientoProductsSection() {
  return (
    <section
      aria-labelledby="financiamiento-productos-title"
      className="relative z-20 -mt-16 bg-gradient-to-b from-transparent via-[#edf5fc] to-[#f8fbff] pb-14 pt-4 sm:-mt-20 sm:pb-16 sm:pt-6 lg:-mt-24 lg:pb-20 lg:pt-8"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="grid gap-4 lg:grid-cols-2">
          {FINANCING_PRODUCTS.map((product, index) => (
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
                </article>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
