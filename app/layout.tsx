import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import ResizeObserverErrorGuard from "./components/ResizeObserverErrorGuard";
import SiteNav from "./components/SiteNav";

// Inter có subset "vietnamese" đầy đủ (Geist không hỗ trợ) — dùng cho toàn bộ chữ.
const appSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin", "vietnamese"],
  display: "swap",
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
        className={`${appSans.variable} ${geistMono.variable} antialiased`}
      >
        <ResizeObserverErrorGuard />
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
