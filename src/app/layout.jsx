import "./globals.css";
import { EB_Garamond } from 'next/font/google';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'], // puedes agregar más pesos si los necesitas
  variable: '--font-eb-garamond',
});


// src/app/layout.jsx
export const metadata = {
  title: {
    default: "Ondu Zentroa",
    template: "%s | Centro de nutrición y salud",
  },
  description: "Ondu Centro de nutrición y salud",
  icons: {
    icon: "/favicon.ico",
  },
  // Puedes añadir más: openGraph, twitter, etc.
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={ebGaramond.variable}>
      <body>{children}</body>
    </html>
  );
}
