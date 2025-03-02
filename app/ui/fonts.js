// next/font will automatically optimize your fonts (including custom fonts) and remove
// external network requests for improved privacy and performance.

// // import page fonts
import { Inter, Lusitana, Outfit } from 'next/font/google';
 
// export for use
export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
  });

  export const outfit = Outfit({
    weight: ['400', '700'],
    subsets: ['latin'],
  });