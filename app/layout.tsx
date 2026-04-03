import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CIBAI Studio — Diseño Web & Desarrollo",
  description:
    "Estudio de diseño y desarrollo web. Creamos experiencias digitales que impactan. Webs, webapps y comercio electrónico de alto rendimiento.",
  keywords: ["diseño web", "desarrollo web", "webapp", "ecommerce", "CIBAI Studio"],
  openGraph: {
    title: "CIBAI Studio — Diseño Web & Desarrollo",
    description: "Creamos experiencias digitales que impactan.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-full bg-white text-[#0A0A0A] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
