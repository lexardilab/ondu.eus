"use client";

import { useEffect } from "react";

export default function GoogleAnalytics() {
  useEffect(() => {
    const consent = localStorage.getItem("cookiesAccepted");
    if (consent === "true") {
      // Añade el script de Google Analytics
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-QTZW800E7Q";
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() { window.dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-QTZW800E7Q', { page_path: window.location.pathname });
    }
  }, []);

  return null;
}
