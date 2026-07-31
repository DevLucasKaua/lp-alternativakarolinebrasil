"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Seal from "./Seal";

type Solution = {
  number: string;
  title: string;
  text: string;
  image: string;
  imagePosition: string;
};

const SOLUTIONS: Solution[] = [
  {
    number: "01.",
    title: "Escuta e acolhimento",
    text: "Tudo começa com um atendimento pessoal e sem pressa: ouvimos a sua história por inteiro para entender o caso além dos papéis.",
    image: "/images/atuacao-2.webp",
    imagePosition: "center 55%",
  },
  {
    number: "02.",
    title: "Análise estratégica",
    text: "Estudo técnico aprofundado do seu caso, mapeando riscos, caminhos possíveis e a estratégia com maior chance de êxito.",
    image: "/images/atuacao-3.webp",
    imagePosition: "center 35%",
  },
  {
    number: "03.",
    title: "Plano de ação claro",
    text: "Você recebe um plano transparente, sabendo o que será feito, por que será feito e o que esperar de cada etapa.",
    image: "/images/atuacao-1.webp",
    imagePosition: "center 30%",
  },
  {
    number: "04.",
    title: "Condução dedicada",
    text: "Acompanhamento pessoal em audiências, prazos e diligências, com comunicação constante: você nunca fica sem resposta.",
    image: "/images/karoline-retrato.webp",
    imagePosition: "center 30%",
  },
  {
    number: "05.",
    title: "Resultado e cuidado contínuo",
    text: "Lutamos até a decisão final e seguimos ao seu lado, orientando os próximos passos para proteger o que foi conquistado.",
    image: "/images/atuacao-certificado.webp",
    imagePosition: "center 35%",
  },
];

const TRACK_GAP = 24; /* gap-6 */
const SNAP_SPRING = { type: "spring", stiffness: 70, damping: 18 } as const;

export default function Solutions() {
  const [index, setIndex] = useState(0);
  const [stops, setStops] = useState<number[]>([0]);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const controls = useAnimation();

  const xFor = useCallback((i: number) => -(stops[i] ?? 0), [stops]);

  useEffect(() => {
    const measure = () => {
      const viewport = viewportRef.current;
      const track = trackRef.current;
      const card = track?.children[0] as HTMLElement | undefined;
      if (!viewport || !track || !card) return;
      const step = card.offsetWidth + TRACK_GAP;
      const max = Math.max(0, track.scrollWidth - viewport.clientWidth);

      /* Paradas do carrossel: uma por card enquanto couber rolagem inteira.
         A última parada é o fim da trilha (último card na borda direita);
         a parada anterior é descartada quando ficaria a menos de 60% de um
         passo do fim (página quase repetida, caso do desktop) — mas mantida
         quando o restante é maior (caso do mobile, um card por página). */
      const next: number[] = [];
      for (let i = 0; i < SOLUTIONS.length; i++) {
        const x = i * step;
        if (x >= max) break;
        next.push(x);
      }
      if (next.length && max - next[next.length - 1] < step * 0.6) next.pop();
      next.push(max);

      setStops(next);
      setIndex((i) => Math.min(i, next.length - 1));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    controls.start({ x: xFor(index), transition: SNAP_SPRING });
  }, [index, xFor, controls]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!dragging.current) setIndex((i) => (i + 1) % stops.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [index, stops]);

  return (
    <section id="como-atuamos" className="bg-plum pb-24 pt-4 text-cream-text">
      {/* Título */}
      <div className="px-6 text-center">
        <span className="section-badge !border-[#a85560] !text-[#e0929b]">
          {"// Como atuamos"}
        </span>
        <h2 className="mt-7 text-[2.4rem] leading-tight md:text-[3.1rem]">
          A condução do seu caso, passo a passo
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-[1.02rem] text-[#f3e6da]">
          Um método claro do primeiro contato à decisão final, para você saber exatamente o que acontece em cada etapa.
        </p>
      </div>

      {/* Carrossel */}
      <div ref={viewportRef} className="mt-14 overflow-hidden">
        <motion.div
          ref={trackRef}
          className="flex cursor-grab select-none gap-6 active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -stops[stops.length - 1], right: 0 }}
          dragElastic={0.06}
          dragMomentum={false}
          animate={controls}
          onDragStart={() => {
            dragging.current = true;
          }}
          onDragEnd={(_, info) => {
            dragging.current = false;
            const projected = -(
              xFor(index) +
              info.offset.x +
              info.velocity.x * 0.25
            );
            let target = 0;
            stops.forEach((stop, i) => {
              if (
                Math.abs(stop - projected) <
                Math.abs(stops[target] - projected)
              ) {
                target = i;
              }
            });
            setIndex(target);
            controls.start({ x: xFor(target), transition: SNAP_SPRING });
          }}
        >
          {SOLUTIONS.map((item) => (
            <div
              key={item.number}
              className="flex w-[calc(100vw-3rem)] shrink-0 flex-col md:w-[min(70vw,900px)] md:flex-row"
            >
              {/* Painel de texto */}
              <div className="relative flex w-full flex-col items-center bg-cream-soft px-6 pb-8 pt-10 md:h-[440px] md:w-1/2 md:px-8 md:pb-0">
                <Seal className="h-16 w-16" color="#c26d74" />
                <div className="flex flex-1 flex-col items-center justify-center pt-6 text-center md:pb-14 md:pt-0">
                  <p
                    className="text-[2rem] leading-none text-crimson"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.number}
                  </p>
                  <h3 className="mt-1 text-[1.9rem] leading-tight text-crimson md:text-[2.1rem]">
                    {item.title}
                  </h3>
                  <p className="mt-8 max-w-xs text-[0.92rem] leading-relaxed text-rosewood">
                    {item.text}
                  </p>
                </div>
                {/* Recorte circular escuro na borda direita */}
                <div
                  aria-hidden="true"
                  className="absolute -right-9 top-1/2 hidden h-[76px] w-[76px] -translate-y-1/2 rounded-full bg-plum md:block"
                />
              </div>
              {/* Painel de imagem */}
              <div className="h-[280px] w-full md:h-[440px] md:w-1/2">
                <img
                  src={item.image}
                  alt={item.title}
                  draggable={false}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: item.imagePosition }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Indicadores */}
      <div className="mt-10 flex justify-center gap-2.5">
        {stops.map((stop, i) => (
          <button
            key={stop}
            type="button"
            aria-label={`Ir para a posição ${i + 1} do carrossel`}
            onClick={() => setIndex(i)}
            className={`h-[3px] w-16 rounded-full transition-colors ${
              i === index ? "bg-cream-text" : "bg-[#5a2a35]"
            }`}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 flex justify-center px-6">
        <a
          href="https://wa.me/5549991626262?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20a%20advogada."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta w-full max-w-sm border border-[#7a2a30] !shadow-none"
        >
          Quero falar com a advogada
        </a>
      </div>
    </section>
  );
}
