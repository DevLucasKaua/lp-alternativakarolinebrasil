import Ribbon from "./Ribbon";

/* Transição da área clara para a área escura com fitas diagonais cruzadas */
export default function RibbonTransition() {
  return (
    <div className="relative h-[300px] overflow-hidden bg-cream md:h-[380px]">
      {/* Cunha escura que inicia a seção escura */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[62%] bg-plum"
        style={{ clipPath: "polygon(0 32%, 100% 0, 100% 100%, 0 100%)" }}
      />

      {/* Fita clara ao fundo */}
      <div className="absolute left-1/2 top-[38%] w-[130vw] -translate-x-1/2 -rotate-[5deg]">
        <Ribbon variant="cream" reverse className="shadow-lg" />
      </div>

      {/* Fita escura à frente */}
      <div className="absolute left-1/2 top-[34%] w-[130vw] -translate-x-1/2 rotate-[2.5deg]">
        <Ribbon variant="maroon" className="shadow-xl" />
      </div>
    </div>
  );
}
