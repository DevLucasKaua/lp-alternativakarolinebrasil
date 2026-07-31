"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Seal from "./Seal";

/* Hover interativo (Interactive Grid — Originkit): o tile sob o mouse cresce,
   os vizinhos na grade reagem levemente. */
const HOVER_DURATION = 200;
const HOVER_LEAVE_DELAY = 200;
const HOVER_PERSPECTIVE = 1600;

/* Vizinhos de cada tile no layout md (0 Penal, 1 imagem, 2 Médico, 3 Família, 4 Holding) */
const TILE_NEIGHBOURS: number[][] = [
  [1, 2, 3],
  [0, 3, 4],
  [0, 3, 4],
  [0, 1, 2, 4],
  [1, 2, 3],
];

function tileTransform(state: "big" | "small" | null) {
  if (state === "big") return "scale(1.05) translateY(-10px) translateZ(16px)";
  if (state === "small") return "scale(1.02) translateY(-4px) translateZ(6px)";
  return "none";
}

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7 },
};

type AreaCard = {
  title: string;
  text: string;
  items: string[];
};

const CARDS: AreaCard[] = [
  {
    title: "Direito Penal",
    text: "Atuação em casos criminais desde a fase investigativa, como inquéritos policiais e flagrantes, até recursos nos Tribunais Superiores. Defesa técnica rigorosa com acompanhamento pessoal em cada audiência e diligência.",
    items: [
      "Inquéritos policiais e flagrantes",
      "Defesa em ações penais",
      "Recursos em Tribunais Superiores",
      "Acompanhamento em audiências",
    ],
  },
  {
    title: "Direito Médico",
    text: "Atuação especializada em demandas relacionadas aos direitos dos médicos residentes, bolsa auxílio, abatimento de dívida do FIES e demais questões jurídicas da área médica.",
    items: [
      "Direitos de médicos residentes",
      "Bolsa auxílio e FIES",
      "Questões jurídicas médicas",
    ],
  },
  {
    title: "Direito de Família",
    text: "Condução sensível e estratégica de divórcio, partilha de bens, guarda, pensão alimentícia e demais demandas familiares, sempre priorizando soluções que preservem relações e protejam interesses.",
    items: [
      "Divórcio e partilha de bens",
      "Guarda e regulamentação de visitas",
      "Pensão alimentícia",
    ],
  },
  {
    title: "Holding Familiar e Inventário",
    text: "Planejamento patrimonial estratégico, organização sucessória e condução de processos de inventário. Proteção do patrimônio familiar com segurança jurídica e planejamento tributário eficiente.",
    items: [
      "Holding familiar",
      "Planejamento sucessório",
      "Condução de inventários",
      "Proteção patrimonial",
    ],
  },
];

function Card({
  card,
  className = "",
  wide = false,
  defaultOpen = false,
}: {
  card: AreaCard;
  className?: string;
  wide?: boolean;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.article
      {...fadeUp}
      className={`flex flex-col rounded-lg border border-line/60 bg-card p-8 transition-colors md:p-9 ${
        open ? "" : "hover:border-crimson/40"
      } ${className}`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <h3 className="text-[1.8rem] text-title-dark md:text-[2rem]">
          {card.title}
        </h3>
        <span
          aria-hidden="true"
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-xl leading-none text-crimson transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      <p
        className={`mt-5 text-[0.95rem] leading-relaxed text-body ${
          wide ? "max-w-3xl" : "max-w-md"
        } ${open ? "" : "line-clamp-3"}`}
      >
        {card.text}
      </p>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="flex flex-col pt-6">
          <ul
            className={`mt-6 grid grid-cols-1 gap-2.5 ${
              wide ? "md:grid-cols-2 md:gap-x-10" : ""
            }`}
          >
            {card.items.map((item) => (
              <li
                key={item}
                className="flex items-baseline gap-3 text-[0.92rem] leading-relaxed text-body"
              >
                <span aria-hidden="true" className="text-crimson">
                  —
                </span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={`https://wa.me/5549991626262?text=${encodeURIComponent(
              `Olá! Gostaria de saber mais sobre ${card.title}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 self-start text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-crimson transition-colors hover:text-rosewood"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Saiba mais →
          </a>
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function ForWho() {
  const [hovered, setHovered] = useState<number | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (leaveTimer.current) clearTimeout(leaveTimer.current);
    };
  }, []);

  const onTileEnter = (i: number) => {
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
    setHovered(i);
  };

  const onGridLeave = () => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(() => setHovered(null), HOVER_LEAVE_DELAY);
  };

  const tileState = (i: number): "big" | "small" | null => {
    if (hovered === i) return "big";
    if (hovered !== null && TILE_NEIGHBOURS[hovered].includes(i))
      return "small";
    return null;
  };

  const tileProps = (i: number) => ({
    onPointerEnter: () => onTileEnter(i),
    style: {
      transform: tileTransform(tileState(i)),
      transition: `transform ${HOVER_DURATION}ms`,
      willChange: "transform",
      zIndex: hovered === i ? 10 : undefined,
    } as React.CSSProperties,
  });

  return (
    <section id="para-quem" className="relative overflow-hidden bg-cream pb-24 pt-10">
      {/* Círculo decorativo à direita */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-52 top-1/3 h-[620px] w-[620px] rounded-full border border-line/60"
      />

      {/* Divisor com selo central */}
      <div className="mx-auto flex max-w-[1180px] items-center gap-6 px-6">
        <span className="relative h-px flex-1 bg-line">
          <span className="absolute -left-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-line" />
        </span>
        <Seal className="h-24 w-24 shrink-0" color="#c26d74" />
        <span className="relative h-px flex-1 bg-line">
          <span className="absolute -right-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-line" />
        </span>
      </div>

      {/* Título */}
      <motion.div {...fadeUp} className="mt-24 text-center">
        <span className="section-badge">{"// Áreas de atuação"}</span>
        <h2 className="mt-8 text-[2.2rem] leading-tight text-title-dark md:text-[3rem]">
          Expertise jurídica especializada
        </h2>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-body">
          Atuação concentrada em áreas estratégicas do Direito, com profundidade
          técnica e dedicação integral a cada caso.
        </p>
      </motion.div>

      {/* Bento grid de áreas + imagem */}
      <div
        onPointerLeave={onGridLeave}
        className="mx-auto mt-16 grid max-w-[1180px] grid-cols-1 gap-4 px-6 md:grid-cols-3"
        style={{
          perspective: HOVER_PERSPECTIVE,
          transformStyle: "preserve-3d",
        }}
      >
        <div {...tileProps(0)} className="md:col-span-2">
          <Card card={CARDS[0]} className="h-full" />
        </div>

        {/* Box de imagem */}
        <div
          {...tileProps(1)}
          className="min-h-[260px] md:row-span-2 md:min-h-[440px]"
        >
          <motion.div
            {...fadeUp}
            className="relative h-full w-full overflow-hidden rounded-lg border border-line/60"
          >
            <img
              src="/images/expertise-justica.webp"
              alt="Estátua da Deusa da Justiça em bronze"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-wine/60 via-wine/10 to-transparent"
            />
            <span
              className="absolute bottom-6 left-6 right-6 text-[0.72rem] uppercase tracking-[0.2em] text-cream-text"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {"// Justiça com estratégia"}
            </span>
          </motion.div>
        </div>

        <div {...tileProps(2)}>
          <Card card={CARDS[1]} className="h-full" />
        </div>
        <div {...tileProps(3)}>
          <Card card={CARDS[2]} className="h-full" />
        </div>
        <div {...tileProps(4)} className="md:col-span-3">
          <Card card={CARDS[3]} className="h-full" wide />
        </div>
      </div>

      {/* CTA */}
      <motion.div {...fadeUp} className="mt-14 flex justify-center px-6">
        <a
          href="https://wa.me/5549991626262"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta w-full max-w-sm"
        >
          Quero falar com a advogada
        </a>
      </motion.div>
    </section>
  );
}
