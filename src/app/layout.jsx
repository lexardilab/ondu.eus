import CookieBanner from "@/components/CookieBanner";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

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

export default async function RootLayout({ children, params }) {
  const { lang } = await params
  return (
    <html lang="es">
      <body>
        <GoogleAnalytics /> 
        <CookieBanner lang={lang} />
        {children}
      </body>
    </html>
  );
}
