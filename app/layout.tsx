import { Nunito, Fredoka, Press_Start_2P } from "next/font/google";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

const body = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--nf-body",
});

const display = Fredoka({
  subsets: ["latin"],
  display: "swap",
  variable: "--nf-display",
});

const pixel = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--nf-pixel",
});

const DESCRIPTION =
  "Elly Olegario: Computer Science student at Ateneo de Manila, specializing in data science, analytics, and enterprise systems.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ellyson.dev"),
  title: "Elly Olegario",
  description: DESCRIPTION,
  openGraph: {
    title: "Elly Olegario · Data & Business Analytics",
    description: DESCRIPTION,
    url: "https://www.ellyson.dev",
    siteName: "Elly Olegario",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elly Olegario · Data & Business Analytics",
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${display.variable} ${pixel.variable}`}
    >
      <body className="bg-lav-50 font-sans text-ink antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
