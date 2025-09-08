import "./globals.css";
import { EB_Garamond } from "next/font/google";
import { Montserrat } from "next/font/google";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"], // puedes agregar más pesos si los necesitas
  variable: "--font-eb-garamond",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // todas las variantes
  variable: "--font-montserrat",
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
    <html lang="es" className={`${montserrat.variable} ${ebGaramond.variable}`}>
      <body>{children}</body>
    </html>
  );
}
