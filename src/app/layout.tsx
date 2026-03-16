import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "White Glove Education — Empowering the Next Generation",
  description:
    "White Glove Education is the holding company behind StudySquare Telangana and LoopEarn — building transformative platforms at the intersection of education, technology, and student empowerment.",
  openGraph: {
    title: "White Glove Education",
    description:
      "Building transformative platforms at the intersection of education, technology, and student empowerment.",
    url: "https://whitegloveeducation.com",
    siteName: "White Glove Education",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "White Glove Education",
    description:
      "Building transformative platforms at the intersection of education, technology, and student empowerment.",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream text-charcoal antialiased">{children}</body>
    </html>
  );
}
