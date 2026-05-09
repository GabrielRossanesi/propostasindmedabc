import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Morales Soluções | Bloom Gifts Franchise Portal",
  description:
    "Proposta comercial interativa da Morales Soluções para uma plataforma fechada de pedidos, aprovação e pagamento para franquias.",
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
