"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7 },
};

export default function About() {
  return (
    <section id="sobre" className="relative bg-cream px-4 py-6 md:px-10">
      <div className="relative mx-auto max-w-[1330px] rounded-3xl bg-cream-soft px-6 py-16 md:px-20 md:py-24">
        {/* Recorte superior com seta */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2">
          <div className="flex h-12 w-24 items-start justify-center rounded-b-full bg-cream pt-1">
            <svg
              viewBox="0 0 24 24"
              className="mt-1 h-5 w-5"
              fill="none"
              stroke="#a81e2c"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-16 gap-y-14 md:grid-cols-2">
          {/* Texto principal */}
          <motion.div {...fadeUp}>
            <span className="section-badge">{"// Sobre"}</span>
            <h2 className="mt-6 text-[2.1rem] leading-tight text-title-dark md:text-[2.7rem]">
              Conheça Karoline Brasil
            </h2>
            <p className="mt-6 leading-loose text-body">
              A advocacia de Karoline Brasil nasceu da união entre a técnica
              jurídica e a vocação de ensinar. Advogada e professora
              universitária, Karoline decidiu{" "}
              <strong className="font-bold text-[#4b4844]">
                transformar o Direito em uma ferramenta real de proteção para
                pessoas, famílias e profissionais.
              </strong>
            </p>
            <p className="mt-6 leading-loose text-body">
              O que nos move é simples:{" "}
              <strong className="font-bold text-[#4b4844]">
                fazer uma advocacia que funciona de verdade.
              </strong>{" "}
              Sem promessas irreais, sem fórmulas mágicas, apenas estratégia,
              dedicação e um acompanhamento que aproxima.
            </p>
          </motion.div>

          {/* Foto principal */}
          <motion.div {...fadeUp} className="flex items-center">
            <img
              src="/images/karoline-biblioteca.webp"
              alt="Karoline Brasil lendo em uma biblioteca"
              className="h-[340px] w-full rounded-md object-cover shadow-[0_20px_45px_-25px_rgba(45,7,20,0.35)] md:h-[400px]"
            />
          </motion.div>

          {/* Segunda foto */}
          <motion.div {...fadeUp} className="flex items-center">
            <img
              src="/images/karoline-auditorio.webp"
              alt="Karoline Brasil em um auditório durante evento jurídico"
              className="h-[300px] w-full rounded-md object-cover object-[center_22%] shadow-[0_20px_45px_-25px_rgba(45,7,20,0.35)]"
            />
          </motion.div>

          {/* Texto complementar */}
          <motion.div {...fadeUp} className="flex flex-col justify-center">
            <p className="leading-loose text-body">
              Acreditamos em proximidade, estratégia e consistência. Por isso,{" "}
              <strong className="font-bold text-[#4b4844]">
                acompanhamos cada cliente de perto
              </strong>
              , entendendo sua história e construindo uma defesa sólida e
              autêntica.
            </p>
            <p className="mt-6 leading-loose text-body">
              <strong className="font-bold text-[#4b4844]">
                Nosso objetivo é ser referência em advocacia estratégica
              </strong>{" "}
              para quem valoriza qualidade e verdade.
            </p>
          </motion.div>
        </div>

        {/* Bojo decorativo inferior */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 h-10 w-36 -translate-x-1/2 rounded-t-full bg-cream"
        />
      </div>
    </section>
  );
}
