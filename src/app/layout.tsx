import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lambdata - Dashboard Administrateur",
  description: "Dashboard Administrateur Lambdata - Pilotage des campagnes de collecte, modération des contributions et gestion des paiements.",
  keywords: ["Lambdata", "dashboard", "collecte", "contributions", "paiements", "administration"],
  authors: [{ name: "Lambdata" }],
  openGraph: {
    title: "Lambdata - Dashboard Administrateur",
    description: "Dashboard Administrateur Lambdata - Pilotage des campagnes de collecte, modération des contributions et gestion des paiements.",
    siteName: "Lambdata",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lambdata - Dashboard Administrateur",
    description: "Dashboard Administrateur Lambdata - Pilotage des campagnes de collecte, modération des contributions et gestion des paiements.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
