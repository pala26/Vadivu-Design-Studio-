import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata = {
  title: "Vadivu Design Studio — Design & Build Agency",
  description:
    "Vadivu Design Studio is a design agency crafting brand identity, web experiences, and digital products for ambitious teams. Based in Chennai, working worldwide.",
  keywords: [
    "design agency",
    "branding studio",
    "web development agency",
    "UI UX design",
    "Vadivu Design Studio",
  ],
  openGraph: {
    title: "Vadivu Design Studio — Design & Build Agency",
    description:
      "Brand identity, web experiences, and digital products for ambitious teams.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
