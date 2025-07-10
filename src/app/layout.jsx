import "./globals.css";

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
    <html lang="es">
      <body>
        
        {children}
      </body>
    </html>
  );
}
