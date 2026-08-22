import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { LogoLoader } from "@/components/logo-loader";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GVT | Solar Installation Company in India",
  description:
    "GVT is a solar EPC for homes and businesses across India. TopCon rooftop solar, net metering, and subsidy support — from site visit to commissioning.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${plusJakarta.variable} min-h-screen antialiased`}>
      <body className={`${plusJakarta.className} min-h-screen bg-white text-foreground`}>
        <LogoLoader />
        {children}
      </body>
    </html>
  );
}
