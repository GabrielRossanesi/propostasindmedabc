import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Morales Soluções | Site Institucional Sindmed ABC",
  description:
    "Proposta comercial interativa da Morales Soluções para o site institucional do Sindmed ABC, com notícias, associação digital e canal de denúncias.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
