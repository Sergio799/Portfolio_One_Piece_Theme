import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lokesh Kukatla - Data Analyst",
  description: "Data Analyst | SQL • Excel • Power BI • Python | Process Automation & Reporting",
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
