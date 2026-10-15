import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jharyll Fuertes | Programmer Profile",
  description: "Personal programmer profile of Jharyll Fuertes, a BSIT student at NVSU.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
