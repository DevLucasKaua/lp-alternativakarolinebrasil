"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type FaqItem = {
  question: string;
  answer: string;
};

const FAQS: FaqItem[] = [
  {
    question: "Preciso ir até o escritório para ser atendida(o)?",
    answer:
      "Não. O atendimento pode ser presencial ou totalmente online, e nós te acompanhamos em todo o processo para que você se sinta seguro.",
  },
  {
    question: "Vocês atendem qualquer tipo de causa?",
    answer:
      "Nosso foco são as áreas penal, médica, de família e o planejamento patrimonial.",
  },
  {
    question: "Vocês fazem só consultas?",
    answer:
      "Não. Trabalhamos com estratégia completa, condução do processo e acompanhamento.",
  },
  {
    question: "Atendem fora de Santa Catarina?",
    answer:
      "Sim, com atuação em todo o Brasil, de forma presencial e online.",
  },
];

function ArrowIcon({ open }: { open: boolean }) {
  /* Seta ↗ quando aberto; gira 180° (↙) quando fechado */
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 transition-transform duration-300 ${
        open ? "" : "rotate-180"
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<boolean[]>(
    FAQS.map(() => true)
  );

  const toggle = (i: number) =>
    setOpenItems((items) => items.map((v, idx) => (idx === i ? !v : v)));

  return (
    <section id="faq" className="bg-cream px-6 pb-28 pt-10">
      {/* Título */}
      <div className="text-center">
        <span className="section-badge">{"// FAQ"}</span>
        <h2 className="mt-8 text-[2.3rem] leading-tight text-title-dark md:text-[2.9rem]">
          Perguntas Frequentes
        </h2>
      </div>

      {/* Itens */}
      <div className="mx-auto mt-14 flex max-w-[930px] flex-col gap-4">
        {FAQS.map((faq, i) => {
          const open = openItems[i];
          const featured = open && i === 0;
          return (
            <div
              key={faq.question}
              className={`rounded-lg px-6 py-7 transition-colors md:px-[1.35rem] ${
                featured
                  ? "bg-cream-tint"
                  : "bg-card shadow-[0_10px_25px_-20px_rgba(45,7,20,0.35)]"
              }`}
            >
              <button
                type="button"
                aria-expanded={open}
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between gap-6 text-left"
              >
                <span
                  className="text-[1.35rem] leading-snug text-rosewood"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {faq.question}
                </span>
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition-colors ${
                    featured
                      ? "border border-crimson/70 text-crimson"
                      : "bg-crimson text-white"
                  }`}
                >
                  <ArrowIcon open={open} />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-xl pt-4 text-[0.95rem] leading-relaxed text-body">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
