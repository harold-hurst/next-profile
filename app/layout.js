import "./globals.css";
import "./tailwind.css"

import { outfit } from '@/app/ui/fonts';

export const metadata = {
  title: "Harry Hurst",
  description: "Harry Hurst Developer Portfolio Profile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className}`}>
        {children}
      </body>
    </html>
  );
}
