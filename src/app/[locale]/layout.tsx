import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/layout/header";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Nathan Ethier's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${manrope.variable}  h-full antialiased`}
    >
      <body className="bg-ink-950">
        <NextIntlClientProvider>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
