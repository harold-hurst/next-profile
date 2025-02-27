import "./globals.css";
import "./tailwind.css"

import { lusitana } from '@/app/ui/fonts';

export const metadata = {
  title: "Harry Hurst",
  description: "Harry Hurst Developer Portfolio Profile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lusitana.className}`}>
        {children}
      </body>
    </html>
  );
}
