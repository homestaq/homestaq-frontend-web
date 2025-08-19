"use client";
import { DefaultSeo } from "next-seo";

export default function SEOProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | Homestaq"
        defaultTitle="Homestaq - Modern Next.js SEO Starter"
        description="A fully SEO-optimized Next.js 14+ starter with best practices for 2025."
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://www.homestaq.com/",
          siteName: "Homestaq",
          images: [
            {
              url: "https://www.homestaq.com/og-image.png",
              width: 1200,
              height: 630,
              alt: "Homestaq Open Graph Image",
            },
          ],
        }}
        twitter={{
          handle: "@homestaq",
          site: "@homestaq",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          { name: "viewport", content: "width=device-width, initial-scale=1" },
          { name: "theme-color", content: "#ffffff" },
        ]}
      />
      {children}
    </>
  );
}
