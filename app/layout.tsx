import { JetBrains_Mono } from "next/font/google";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Elly Olegario",
  description: "My Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Analytics />
      <body className={jetbrainsMono.className}>
        {children}
      </body>
    </html>
  );
}
