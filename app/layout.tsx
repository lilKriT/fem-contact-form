import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";

const karlaSans = Karla({
  variable: "--font-karla-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "FEM Contact Form | lilKriT",
  description: "Created by lilKriT with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${karlaSans.variable} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
