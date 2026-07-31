import Seal from "./Seal";

export default function Footer() {
  return (
    <footer className="bg-plum-deep py-12 text-cream-text">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center justify-between gap-8 px-6 md:flex-row">
        <div className="flex items-center gap-4">
          <Seal className="h-16 w-16" color="#e6b9ad" />
          <span
            className="text-[1.9rem] leading-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Karoline Brasil
          </span>
        </div>
        <div className="text-center text-[0.92rem] leading-relaxed text-cream-text/90 md:text-right">
          <p>
            Página produzida com carinho por{" "}
            <a
              href="https://instagram.com/e3digital"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 hover:underline"
            >
              @e3digital
            </a>
          </p>
          <p>© 2026 - Karoline Brasil - Todos os Direitos Reservados</p>
        </div>
      </div>
    </footer>
  );
}
