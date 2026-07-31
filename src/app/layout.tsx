import type { Metadata, Viewport } from "next";
import { Prata, Nunito_Sans } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#2d0714",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const prata = Prata({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-prata",
  display: "swap",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  style: ["normal"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Karoline Brasil | Advocacia Estratégica e Humana",
  description:
    "Advocacia estratégica e humana para quem quer ser defendido de verdade. Direito Penal, Direito Médico, Família, Holding Familiar e Inventário.",
  keywords: [
    "advogada",
    "Karoline Brasil",
    "direito penal",
    "direito médico",
    "direito de família",
    "holding familiar",
    "inventário",
    "São Miguel do Oeste",
    "Santa Catarina",
    "advocacia humanizada",
    "OAB SC",
  ],
  authors: [{ name: "Karoline Brasil" }],
  creator: "Karoline Brasil",
  metadataBase: new URL("https://lp.karolinebrasil.com.br"),
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  category: "legal",
  openGraph: {
    title: "Karoline Brasil | Advocacia Estratégica e Humana",
    description:
      "Advocacia estratégica e humana para quem quer ser defendido de verdade. Direito Penal, Médico, Família, Holding Familiar e Inventário.",
    url: "https://lp.karolinebrasil.com.br",
    siteName: "Karoline Brasil Advocacia",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Karoline Brasil - Advogada",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Karoline Brasil Advocacia",
  description:
    "Advocacia estratégica e humana. Direito Penal, Direito Médico, Direito de Família, Holding Familiar e Inventário.",
  url: "https://lp.karolinebrasil.com.br",
  telephone: "+5549991626262",
  image: "https://lp.karolinebrasil.com.br/images/og-image.jpg",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Miguel do Oeste",
    addressRegion: "SC",
    addressCountry: "BR",
  },
  areaServed: "BR",
  founder: {
    "@type": "Person",
    name: "Karoline Brasil",
    jobTitle: "Advogada",
  },
  knowsAbout: [
    "Direito Penal",
    "Direito Médico",
    "Direito de Família",
    "Holding Familiar",
    "Inventário e Sucessões",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`h-full antialiased ${prata.variable} ${nunito.variable}`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
