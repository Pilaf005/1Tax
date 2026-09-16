import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { AppLayoutClient } from "@/components/layout/AppLayoutClient";
import "./globals.css";

/* ----------------------------------------------------------
   Font declarations — loaded via Next.js, served from _next/static
   Zero external requests at runtime, zero CLS
   ---------------------------------------------------------- */
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: "1Tax — Chartered Accountant Advisory Firm",
  description: "Professional CA services in Delhi NCR and Pan-India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body>
        <AppLayoutClient>{children}</AppLayoutClient>
      </body>
    </html>
  );
}
