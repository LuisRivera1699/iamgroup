import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";

const CAPITAL_FLOW_STEPS = [
  {
    id: "inversionista-capital",
    number: "01",
    actor: "Inversionista",
    title: "Capital del inversionista",
    icon: "capital",
  },
  {
    id: "iam-fondos",
    number: "02",
    actor: "IAM / Fondos",
    title: "Análisis de las inversiones",
    icon: "analisis",
  },
  {
    id: "cavali",
    number: "03",
    actor: "CAVALI",
    title: "Inversión en facturas de empresa AAA",
    icon: "documentos",
  },
  {
    id: "empresa-aaa",
    number: "04",
    actor: "Empresa AAA",
    title: "Pago de la factura por parte de la empresa AAA",
    icon: "pago",
  },
  {
    id: "retorno",
    number: "05",
    actor: "Inversionista",
    title: "Retorna beneficios y capital al inversionista",
    icon: "retorno",
  },
] as const;

const EVALUATION_TOOLS = [
  {
    id: "sentinel",
    label: "SENTINEL",
    description: "Calificación y acceso crediticio en la SBS.",
  },
  {
    id: "finexo",
    label: "FINEXO",
    description: "Efectividad y rating de pago en la plataforma CAVALI (BVL).",
  },
  {
    id: "cavali",
    label: "CAVALI",
    description: "Validación y confirmación de pago por parte de la empresa AAA.",
  },
  {
    id: "eeff",
    label: "EEFF",
    description: "Evaluación económica y financiera del cliente.",
  },
] as const;

function FlowStepIcon({
  icon,
}: {
  icon: (typeof CAPITAL_FLOW_STEPS)[number]["icon"];
}) {
  if (icon === "capital") {
    return (
      <svg aria-hidden viewBox="0 0 48 48" className="h-8 w-8" fill="none">
        <circle cx="24" cy="17" r="6" stroke="#0F4A78" strokeWidth="2.5" />
        <path
          d="M10 40C10 32.8 16.3 27 24 27C31.7 27 38 32.8 38 40"
          stroke="#0F4A78"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 30L24 34L28 30"
          stroke="#5FA6D8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="30" cy="33" r="1.8" fill="#fbb03b" />
      </svg>
    );
  }

  if (icon === "analisis") {
    return (
      <svg aria-hidden viewBox="0 0 48 48" className="h-8 w-8" fill="none">
        <rect x="8" y="10" width="20" height="28" rx="2" stroke="#0F4A78" strokeWidth="2.5" />
        <path
          d="M12 18H24M12 24H22M12 30H20"
          stroke="#5FA6D8"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="32" cy="30" r="8" stroke="#0F4A78" strokeWidth="2.5" />
        <path
          d="M37.5 35.5L42 40"
          stroke="#0F4A78"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="32" cy="30" r="3" fill="#fbb03b" />
      </svg>
    );
  }

  if (icon === "documentos") {
    return (
      <svg aria-hidden viewBox="0 0 48 48" className="h-8 w-8" fill="none">
        <rect x="10" y="8" width="22" height="30" rx="2" stroke="#0F4A78" strokeWidth="2.5" />
        <path
          d="M14 16H28M14 22H26M14 28H22"
          stroke="#5FA6D8"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="35" cy="34" r="6.5" fill="#fbb03b" stroke="#0F4A78" strokeWidth="1.8" />
        <path
          d="M31.8 34L34.2 36.4L38.2 31.2"
          stroke="#0F4A78"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (icon === "pago") {
    return (
      <svg aria-hidden viewBox="0 0 48 48" className="h-8 w-8" fill="none">
        <path
          d="M10 40V14L24 8L38 14V40"
          stroke="#0F4A78"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M6 40H42"
          stroke="#0F4A78"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <rect x="14" y="18" width="4" height="4" stroke="#5FA6D8" strokeWidth="1.8" />
        <rect x="22" y="18" width="4" height="4" stroke="#5FA6D8" strokeWidth="1.8" />
        <rect x="30" y="18" width="4" height="4" stroke="#5FA6D8" strokeWidth="1.8" />
        <rect x="14" y="26" width="4" height="4" stroke="#5FA6D8" strokeWidth="1.8" />
        <rect x="22" y="26" width="4" height="4" stroke="#5FA6D8" strokeWidth="1.8" />
        <rect x="30" y="26" width="4" height="4" stroke="#5FA6D8" strokeWidth="1.8" />
        <circle cx="38" cy="10" r="4" fill="#fbb03b" stroke="#0F4A78" strokeWidth="1.5" />
      </svg>
    );
  }

  return (
    <svg aria-hidden viewBox="0 0 48 48" className="h-8 w-8" fill="none">
      <circle cx="24" cy="24" r="18" stroke="#0F4A78" strokeWidth="2.5" />
      <path
        d="M16 30L22 24L28 26L34 16"
        stroke="#5FA6D8"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29 16L34 16L34 21"
        stroke="#5FA6D8"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="34" cy="16" r="2.8" fill="#fbb03b" />
    </svg>
  );
}

export function InversionesCapitalFlowSection() {
  return (
    <section
      aria-labelledby="inversiones-capital-flow-title"
      className="relative overflow-hidden bg-[#071a2f] py-14 sm:py-16 lg:py-20"
    >
      <Image
        src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=2200&q=80"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-[#071a2f]/92 via-[#0b2743]/85 to-[#071a2f]/95"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c0deff]/55 to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <ScrollReveal direction="left" delayMs={0}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c0deff]">
              Cómo movemos tu capital
            </p>
          </ScrollReveal>
          <ScrollReveal direction="left" delayMs={90}>
            <h2
              id="inversiones-capital-flow-title"
              className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Flujo de capital con{" "}
              <span className="text-[#fbb03b]">control de riesgo</span> y
              ejecución verificable.
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="left" delayMs={170}>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#d1deed] sm:text-base">
              Convertimos el proceso de inversión en una secuencia clara:
              originación, validación, ejecución, pago y retorno para el
              inversionista.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="up" delayMs={120}>
          <div className="mt-8 rounded-3xl border border-[#88aaca]/45 bg-[#0b2743]/72 p-4 shadow-[0_24px_58px_-34px_rgba(3,12,22,0.9)] backdrop-blur-sm sm:p-6">
            <h3 className="text-center text-xl font-semibold uppercase tracking-[0.08em] text-[#c0deff] sm:text-2xl">
              Flujo del capital
            </h3>

            <div className="mt-6 hidden items-center gap-2 lg:flex">
              {CAPITAL_FLOW_STEPS.map((step, index) => (
                <div key={step.id} className="flex min-w-0 flex-1 items-center gap-2">
                  <article className="min-h-[14rem] flex-1 rounded-2xl border border-[#8fb2d5]/45 bg-white/95 p-4 text-center shadow-[0_14px_32px_-24px_rgba(11,31,53,0.55)]">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#1d5fa4]/80 bg-[#f4f9ff]">
                      <FlowStepIcon icon={step.icon} />
                    </div>
                    <p className="mt-3 text-3xl font-semibold leading-none text-[#1d5fa4]">
                      {step.number}
                    </p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#1d3f62]">
                      {step.actor}
                    </p>
                    <p className="mt-2 text-sm font-medium leading-snug text-[#0f2d4e]">
                      {step.title}
                    </p>
                  </article>
                  {index < CAPITAL_FLOW_STEPS.length - 1 ? (
                    <span
                      aria-hidden
                      className="shrink-0 text-2xl font-bold text-[#fbb03b]"
                    >
                      →
                    </span>
                  ) : null}
                </div>
              ))}
            </div>

            <ul className="mt-6 space-y-3 lg:hidden">
              {CAPITAL_FLOW_STEPS.map((step, index) => (
                <li key={step.id}>
                  <article className="rounded-2xl border border-[#8fb2d5]/45 bg-white/95 p-4 shadow-[0_14px_32px_-24px_rgba(11,31,53,0.55)]">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#1d5fa4]/80 bg-[#f4f9ff]">
                        <FlowStepIcon icon={step.icon} />
                      </div>
                      <div>
                        <p className="text-xl font-semibold leading-none text-[#1d5fa4]">
                          {step.number}
                        </p>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#1d3f62]">
                          {step.actor}
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm font-medium leading-snug text-[#0f2d4e]">
                      {step.title}
                    </p>
                  </article>
                  {index < CAPITAL_FLOW_STEPS.length - 1 ? (
                    <div className="my-2 flex justify-center text-xl font-bold text-[#fbb03b]">
                      ↓
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delayMs={170}>
          <div className="mt-6 rounded-2xl border border-[#b8d0e5]/65 bg-white p-5 shadow-[0_18px_38px_-28px_rgba(7,22,37,0.7)] sm:p-6">
            <h3 className="text-lg font-semibold tracking-tight text-[#0f2d4e] sm:text-xl">
              Herramientas de evaluación
            </h3>
            <dl className="mt-4 grid gap-3 sm:grid-cols-2">
              {EVALUATION_TOOLS.map((tool) => (
                <div key={tool.id} className="rounded-xl border border-[#d1deed] bg-[#f8fbff] px-3 py-3">
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1d5fa4]">
                    {tool.label}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-[#1d3f62]">
                    {tool.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
