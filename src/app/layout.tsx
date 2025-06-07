import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "0xj4an - Portfolio",
  description: "Exploring the intersection of technology, community, and innovation in the blockchain space.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-black text-white">
          {children}
        </main>
      </body>
    </html>
  );
}
