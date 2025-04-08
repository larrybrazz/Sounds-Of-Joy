import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Exclusive Event 2025",
  description: "Join us for an unforgettable experience on June 19, 2025",
  keywords: ["event", "2025", "conference", "exhibition", "networking"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <ClientBody>
        {children}
        <Toaster position="top-right" />
      </ClientBody>
    </html>
  );
}
