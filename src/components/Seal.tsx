type SealProps = {
  className?: string;
  color?: string;
};

/* Logomarca (monograma K) tingida com a cor recebida via máscara CSS */
export default function Seal({ className = "", color = "#a81e2c" }: SealProps) {
  const mask = {
    maskImage: "url(/images/logo/karolbrasillogo-centered.png)",
    maskSize: "contain",
    maskRepeat: "no-repeat",
    maskPosition: "center",
    WebkitMaskImage: "url(/images/logo/karolbrasillogo-centered.png)",
    WebkitMaskSize: "contain",
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
  } as const;

  return (
    <span
      aria-hidden="true"
      className={`inline-block ${className}`}
      style={{ backgroundColor: color, ...mask }}
    />
  );
}
