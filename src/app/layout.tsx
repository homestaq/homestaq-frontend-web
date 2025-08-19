import type { Metadata } from "next";
import { inter } from "@/styles/fonts";
import "./globals.css";
import SEOProvider from "@/components/SEOProvider";

export const metadata: Metadata = {
  title: "Homestaq - Modern Next.js SEO Starter",
  description:
    "A fully SEO-optimized Next.js 14+ starter with best practices for 2025.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <SEOProvider>{children}</SEOProvider>
      </body>
    </html>
  );
}
