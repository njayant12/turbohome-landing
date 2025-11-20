import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TurboHome - Flat Fee, No Commission Real Estate Agents",
  description: "Turn your agent's $30,000 commission into weapons you actually need: offer power, rate buydowns, and unbiased analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
