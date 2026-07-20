import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { company } from "@/config/company";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: "Tecnologia e Business Intelligence | Creativity Tecnologia",
    template: "%s | Creativity Tecnologia",
  },
  description:
    "Business Intelligence, licenciamento Microsoft e soluções de cloud, segurança e infraestrutura para empresas.",
  applicationName: company.brandName,
  authors: [{ name: company.brandName }],
  creator: company.brandName,
  publisher: company.brandName,
  icons: {
    icon: "/brand/creativity-symbol-official.png",
    apple: "/brand/creativity-symbol-official.png",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}
