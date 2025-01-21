import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Form } from "@/components/FormContact";
import { Footer } from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const geistFira = Fira_Code({
  variable: "--font-geist-fira",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "HerisonTech.",
    template: "%s | HerisonTech.",
  },
  icons: [
    {
      url: "/favicon.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
      <body
        className={`min-h-screen flex flex-col ${geistFira.variable} font-primary text-zinc-300`}
      >
        <BackToTop />
        <Header />
        {children}
        <Form />
        <Footer />
      </body>
    </html>
  );
}
