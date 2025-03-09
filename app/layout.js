import "./globals.css";
import "./tailwind.css"

import { outfit } from '@/app/ui/fonts';

export const metadata = {
  title: "Harold Hurst",
  description: "Harold Hurst Developer Portfolio Profile",
};

// take children as props
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className}`}>
        {children}
      </body>
    </html>
  );
}
