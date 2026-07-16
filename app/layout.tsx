import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://storyplugs.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "StoryPlugs — A little kindness, every day",
  description:
    "StoryPlugs delivers a real, true-to-life story every day — kindness, hope, forgiveness, and the quiet moments that remind you people are good. Build a reading streak, save your favorites, and reflect on what matters.",
  openGraph: {
    title: "StoryPlugs — A little kindness, every day",
    description:
      "A real, true-to-life story every day. Build a reading streak, save your favorites, and reflect on what matters.",
    url: siteUrl,
    siteName: "StoryPlugs",
    images: ["/icon.png"],
    type: "website",
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
