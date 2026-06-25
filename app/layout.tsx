import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ResizeObserverErrorGuard from "./components/ResizeObserverErrorGuard";
import SiteNav from "./components/SiteNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Managerial Accounting — Học theo bản chất",
  description:
    "Học Managerial Accounting theo bản chất từng chương kèm bộ câu hỏi bẫy có giải thích sâu.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ResizeObserverErrorGuard />
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
