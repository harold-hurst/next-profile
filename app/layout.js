import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./tailwind.css"

import { inter } from '@/app/ui/fonts';

export const metadata = {
  title: "Harry Hurst",
  description: "Harry Hurst Developer Portfolio Profile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
