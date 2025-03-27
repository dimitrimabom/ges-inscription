import type React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Institut Universitaire INSAM - Inscription en ligne",
  description:
    "Découvrez les programmes académiques de l'Institut Universitaire INSAM et inscrivez-vous en ligne facilement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
