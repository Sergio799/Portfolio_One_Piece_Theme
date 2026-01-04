import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sai Prakash Reddy - Full Stack Developer",
  description: "Full Stack Developer | TypeScript • React • Next.js • Node.js • AWS | Building scalable, production-grade web applications",
  openGraph: {
    title: "Sai Prakash Reddy - Full Stack Developer",
    description: "Full Stack Developer specializing in TypeScript, React, Next.js, and cloud architecture. 2.8+ years of experience building production-grade applications.",
    url: "https://saiprakashreddyportfolio-self.vercel.app",
    siteName: "Sai Prakash Reddy Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Prakash Reddy - Full Stack Developer",
    description: "Full Stack Developer | TypeScript • React • Next.js • Node.js • AWS",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Oswald:wght@700&family=Playfair+Display:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
