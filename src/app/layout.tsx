import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Medabalam Manohar | Full-Stack & Generative AI Developer",
  description: "Portfolio of Medabalam Manohar — Full-Stack Developer & Generative AI Specialist based in India. Meta-Certified Front-End Engineer specializing in React, Django, and LLM integrations.",
  keywords: [
    "Medabalam Manohar",
    "Full-Stack Developer",
    "Generative AI Specialist",
    "Meta-Certified Frontend Engineer",
    "React Developer",
    "Django Developer",
    "RAG Pipelines",
    "LangChain",
    "India"
  ],
  authors: [{ name: "Medabalam Manohar" }],
  creator: "Medabalam Manohar",
  openGraph: {
    title: "Medabalam Manohar | Full-Stack & Generative AI Developer",
    description: "Building quiet, robust interfaces and AI-integrated web systems.",
    type: "website",
    locale: "en_US",
    siteName: "Medabalam Manohar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medabalam Manohar | Full-Stack & Generative AI Developer",
    description: "Building quiet, robust interfaces and AI-integrated web systems.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="antialiased min-h-screen selection:bg-cyan-500/20 selection:text-cyan-400">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
