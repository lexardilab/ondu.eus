'use client';

import { useEffect } from "react";

export default function GoogleAnalytics() {
  useEffect(() => {
    const consent = localStorage.getItem("cookiesAccepted");
    if (consent === "true" && typeof window !== "undefined") {
      // Carga el script de GA
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-QTZW800E7Q";
      script.async = true;
      document.head.appendChild(script);

      // Configura GA
      const inlineScript = document.createElement("script");
      inlineScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-QTZW800E7Q', {
          page_path: window.location.pathname,
        });
      `;
      document.head.appendChild(inlineScript);
    }
  }, []);

  return null;
}
