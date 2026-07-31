import Seal from "./Seal";

type RibbonProps = {
  variant: "maroon" | "cream";
  reverse?: boolean;
  className?: string;
};

/* Fita de marca com texto repetido, usada nas transições diagonais */
export default function Ribbon({
  variant,
  reverse = false,
  className = "",
}: RibbonProps) {
  const isMaroon = variant === "maroon";
  const text = isMaroon ? "text-cream-text" : "text-maroon";
  const sealColor = isMaroon ? "#e6b9ad" : "#a81e2c";

  return (
    <div
      className={`w-full overflow-hidden py-4 ${
        isMaroon ? "bg-maroon" : "bg-cream-soft"
      } ${className}`}
    >
      <div className={reverse ? "marquee-track-reverse" : "marquee-track-fast"}>
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex shrink-0 items-center gap-14 px-7">
                <div className={`text-center ${text}`}>
                  <p
                    className="whitespace-nowrap text-[1.7rem] uppercase tracking-[0.18em] leading-none"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Karoline Brasil
                  </p>
                  <p className="mt-1.5 whitespace-nowrap text-[0.55rem] font-bold uppercase tracking-[0.1em] opacity-90">
                    Tudo que o seu caso precisa para
                    <br />
                    ser bem conduzido, em um só lugar.
                  </p>
                </div>
                <Seal className="h-14 w-14 shrink-0" color={sealColor} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
