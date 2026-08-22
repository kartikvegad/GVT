import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GVT | Solar Installation Company in Delhi NCR",
  description:
    "GVT is an MNRE-aligned solar EPC for Delhi NCR homes and businesses. Cut electricity bills by up to 90% with TopCon rooftop solar, net metering, and subsidy support.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className={`${plusJakarta.className} min-h-full bg-white text-foreground`}>
        {children}
      </body>
    </html>
  );
}
