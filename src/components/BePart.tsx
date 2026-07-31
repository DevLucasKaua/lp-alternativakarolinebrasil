"use client";

import { motion } from "framer-motion";
import BlobReveal from "./BlobReveal";
import Ribbon from "./Ribbon";

export default function BePart() {
  return (
    <section id="contato" className="relative overflow-hidden bg-cream py-28">
      {/* Fitas diagonais ao fundo */}
      <div className="absolute left-1/2 top-[30%] w-[130vw] -translate-x-1/2 -rotate-[7deg] opacity-95">
        <Ribbon variant="cream" reverse className="border-y border-line/50" />
      </div>
      <div className="absolute left-1/2 top-[55%] w-[130vw] -translate-x-1/2 rotate-[5deg]">
        <Ribbon variant="maroon" />
      </div>

      {/* Card central */}
      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto grid max-w-[1110px] grid-cols-1 overflow-hidden rounded-2xl bg-card shadow-[0_30px_70px_-35px_rgba(45,7,20,0.4)] md:grid-cols-2"
      >
        {/* Texto */}
        <div className="flex flex-col justify-center px-8 py-14 md:px-[5.5rem] md:py-24">
          <span className="section-badge self-start">{"// Seja parte"}</span>
          <h2 className="mt-8 text-[2.1rem] leading-tight text-title-dark md:text-[2.6rem]">
            O próximo caso bem resolvido pode ser o seu.
          </h2>
          <p className="mt-8 border-l-[3px] border-crimson pl-3 text-[1.02rem] text-body">
            <strong className="font-bold text-[#4b4844]">
              Vamos conversar
            </strong>{" "}
            sobre a solução do seu caso?
          </p>
          <p className="mt-8 max-w-sm leading-relaxed text-body">
            <strong className="font-bold text-[#4b4844]">
              Agende uma conversa
            </strong>{" "}
            e saiba como Karoline pode ajudar você e a sua família.
          </p>
          <a
            href="https://wa.me/5549991626262"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta mt-9 w-full max-w-sm"
          >
            Quero falar com a advogada
          </a>
        </div>

        {/* Foto com efeito fluid reveal */}
        <div className="h-72 md:h-auto">
          <BlobReveal
            image={{ src: "/images/karolinebrasilimg.webp" }}
            startAlign="top"
          />
        </div>
      </motion.div>
    </section>
  );
}
