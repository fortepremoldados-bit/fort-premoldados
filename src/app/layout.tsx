import type { Metadata } from "next";
import { Barlow, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";

const barlow = Barlow({ 
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-barlow",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Forte Pré-Moldados | Infraestrutura e Pavimentação",
  description: "Pisos intertravados e meios-fios de alta resistência para loteamentos, rodovias e obras públicas. Concreto de alto desempenho (35 a 50 MPa).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${barlow.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-white text-black">
        <SmoothScrollProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

