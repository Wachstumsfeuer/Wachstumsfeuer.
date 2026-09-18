import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  metadataBase: new URL("https://wachstumsfeuer.de"),
  title: { default: "Wachstumsfeuer – Bücher, die dich weiterbringen", template: "%s | Wachstumsfeuer" },
  description: "Ausgewählte Buchempfehlungen für persönliches Wachstum, Finanzen, Psychologie, Gewohnheiten und Unternehmertum.",
  openGraph: { type: "website", locale: "de_DE", siteName: "Wachstumsfeuer", title: "Wachstumsfeuer – Bücher, die dich weiterbringen", description: "Kluge Buchempfehlungen für dein persönliches und finanzielles Wachstum." },
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body><Header />{children}<Footer /></body></html>;
}
