"use client";

import { motion } from "framer-motion";
import Seal from "./Seal";

const SERVICES = [
  "01. Direito Penal",
  "02. Direito Médico",
  "03. Direito de Família",
  "04. Holding Familiar",
  "05. Inventário e Sucessões",
];

export default function Hero() {
  return (
    <section className="relative bg-cream overflow-hidden">
      {/* Círculos decorativos ao fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-[750px] w-[750px] rounded-full border border-line/70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-40 h-[550px] w-[550px] rounded-full border border-line/50"
      />

      {/* Blush vinho na parte inferior, de lado a lado */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[340px] bg-gradient-to-t from-wine/35 via-wine/15 to-transparent"
      />

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-4 px-6 pt-14 md:grid-cols-2 md:gap-8 md:px-16 md:pt-24">
        {/* Coluna de texto */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="z-10 flex flex-col justify-center pb-2 md:pb-20"
        >
          {/* Logo */}
          <div className="mb-10 flex items-center gap-4">
            <img
              src="/images/logo/karolbrasillogo-centered.png"
              alt="Logo Karoline Brasil"
              className="h-14 w-14 object-contain"
            />
            <span className="h-10 w-px bg-title/40" />
            <span className="flex flex-col">
              <span
                className="text-2xl leading-tight text-title"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Karoline Brasil
              </span>
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.25em] text-title/80">
                Advocacia Estratégica
              </span>
            </span>
          </div>

          <h1 className="w-full text-[2.15rem] leading-[1.12] text-title-dark md:max-w-xl md:text-[3.35rem]">
            Advocacia estratégica e humana para quem quer ser defendido de
            verdade.
          </h1>

          <p className="mt-7 hidden max-w-md text-[1.05rem] font-semibold leading-relaxed text-rosewood md:block">
            Unimos técnica jurídica e escuta ativa para conduzir o seu caso com
            a atenção que ele merece, do primeiro atendimento à decisão final.
          </p>

          <a
            href="https://wa.me/5549991626262?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20a%20advogada."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta mt-10 hidden w-full max-w-sm md:inline-block"
          >
            Quero falar com a advogada
          </a>
        </motion.div>

        {/* Coluna da foto */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative flex items-end justify-center md:justify-end"
        >
          <img
            src="/images/karoline-hero-cropped.webp"
            alt="Karoline Brasil, advogada"
            className="relative z-10 max-h-[580px] w-auto max-w-full object-contain object-bottom md:max-h-[680px]"
          />
        </motion.div>
      </div>

      {/* CTA acima da faixa (apenas mobile) */}
      <div className="relative z-20 px-6 pb-8 md:hidden">
        <a
          href="https://wa.me/5549991626262?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20a%20advogada."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta w-full"
        >
          Quero falar com a advogada
        </a>
      </div>

      {/* Faixa de serviços */}
      <div className="relative z-20 w-full overflow-hidden border-t border-line/50 bg-cream-soft py-6">
        <div className="marquee-track items-center">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center">
              {SERVICES.map((service) => (
                <div
                  key={`${dup}-${service}`}
                  className="flex shrink-0 items-center"
                >
                  <span
                    className="whitespace-nowrap px-10 text-[0.85rem] uppercase tracking-[0.14em] text-title"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {service}
                  </span>
                  <Seal className="h-14 w-14 shrink-0" color="#cf8288" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
