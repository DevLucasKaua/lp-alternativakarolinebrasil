"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7 },
};

type Qualification = {
  number: string;
  title: string;
  icon: React.ReactNode;
  items: string[];
};

const ICON_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

const QUALIFICATIONS: Qualification[] = [
  {
    number: "01.",
    title: "Formação Acadêmica",
    icon: (
      <svg {...ICON_PROPS} className="h-6 w-6">
        <path d="M12 4 2 9l10 5 10-5-10-5z" />
        <path d="M6 11.5V16c0 1.66 2.69 3 6 3s6-1.34 6-3v-4.5" />
        <path d="M22 9v5" />
      </svg>
    ),
    items: [
      "Pós-graduação em Direito Penal e Processual Penal Prático Contemporâneo",
      "Cursos de extensão em Direito Médico",
      "Legal English, UCSD (University of California, San Diego, EUA) 🇺🇸",
      "Curso de Inglês em Toronto, Canadá 🇨🇦",
      "Cursos em Holding Familiar",
      "Curso Inteligência Defensiva, Escola de Criminalistas",
    ],
  },
  {
    number: "02.",
    title: "Atuação Acadêmica",
    icon: (
      <svg {...ICON_PROPS} className="h-6 w-6">
        <path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2V4z" />
        <path d="M22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7V4z" />
      </svg>
    ),
    items: [
      "Professora universitária de Criminologia, Direito Penal e Processo Penal",
      "Coordenadora do NUJUR, Núcleo Jurídico do Centro Acadêmico UCEFF Itapiranga",
    ],
  },
  {
    number: "03.",
    title: "Atuação Institucional",
    icon: (
      <svg {...ICON_PROPS} className="h-6 w-6">
        <path d="M12 3l8 4v5c0 4.8-3.4 7.9-8 9-4.6-1.1-8-4.2-8-9V7l8-4z" />
      </svg>
    ),
    items: [
      "OAB/SC 59.540",
      "Comissão do Jovem Advogado, Subseção de São Miguel do Oeste",
      "5+ anos de atuação em Direito Penal, Médico, Família e Holding Familiar",
    ],
  },
];

function QualificationCard({
  group,
  className = "",
  withCta = false,
}: {
  group: Qualification;
  className?: string;
  withCta?: boolean;
}) {
  return (
    <motion.article
      {...fadeUp}
      className={`flex flex-col rounded-2xl bg-cream-soft p-7 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-1 md:p-8 ${className}`}
    >
      {/* Cabeçalho do card */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-crimson/10 text-crimson">
            {group.icon}
          </span>
          <div>
            <p
              className="text-[0.78rem] leading-none text-crimson"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {group.number}
            </p>
            <h3 className="mt-1.5 text-[1.45rem] leading-tight text-title-dark">
              {group.title}
            </h3>
          </div>
        </div>
        <span className="rounded-full bg-crimson/10 px-4 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-crimson">
          {String(group.items.length).padStart(2, "0")} qualificações
        </span>
      </div>

      {/* Lista de qualificações */}
      <ul className="mt-7 flex flex-col gap-3.5 border-t border-line/60 pt-7">
        {group.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-[0.93rem] leading-relaxed text-body"
          >
            <span
              aria-hidden="true"
              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-crimson/10 text-crimson"
            >
              <svg {...ICON_PROPS} strokeWidth={2.4} className="h-3 w-3">
                <path d="M4 12.5l5 5L20 6.5" />
              </svg>
            </span>
            {item}
          </li>
        ))}
      </ul>

      {withCta && (
        <div className="mt-auto pt-8">
          <a
            href="https://wa.me/5549991626262?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20a%20advogada."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta w-full"
          >
            Quero falar com a advogada
          </a>
        </div>
      )}
    </motion.article>
  );
}

export default function Courses() {
  return (
    <section id="formacao" className="bg-plum pb-24 pt-10 text-cream-text">
      {/* Cabeçalho */}
      <div className="px-6 text-center">
        <span className="section-badge !border-[#a85560] !text-[#e0929b]">
          {"// Formação"}
        </span>
        <h2 className="mt-6 text-[2.3rem] leading-tight md:text-[2.9rem]">
          Formação de excelência
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-[1.02rem] text-[#f3e6da]">
          Uma base acadêmica sólida e diversificada, combinada com experiência
          prática e atualização constante.
        </p>
      </div>

      {/* Bento grid: card principal à esquerda, dois empilhados à direita */}
      <div className="mx-auto mt-12 grid max-w-[1240px] grid-cols-1 gap-4 px-6 md:grid-cols-[1.15fr_1fr] md:grid-rows-2">
        <QualificationCard
          group={QUALIFICATIONS[0]}
          className="md:row-span-2"
          withCta
        />
        <QualificationCard group={QUALIFICATIONS[1]} />
        <QualificationCard group={QUALIFICATIONS[2]} />
      </div>
    </section>
  );
}
