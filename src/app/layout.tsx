import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@/components/analytics/Analytics";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { company } from "@/config/company";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: { default: "Tecnologia, dados e IA para empresas | Creativity", template: "%s | Creativity" },
  description: "Da infraestrutura à inteligência: cloud, segurança, dados, BI, IA, software e suporte conectados para transformar operação em resultado.",
  applicationName: company.brandName,
  authors: [{ name: company.brandName }],
  creator: company.brandName,
  publisher: company.brandName,
  icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
  manifest: "/manifest.webmanifest",
  formatDetection: { telephone: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}><body className="flex min-h-full flex-col"><Header /><main className="flex-1">{children}</main><Footer /><CookieConsent /><Analytics /></body></html>;
}
