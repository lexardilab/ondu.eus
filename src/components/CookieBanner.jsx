"use client";

import { useState, useEffect } from "react";

export default function CookieBanner({ lang }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookiesAccepted");
    if (consent === null) setShow(true); // Mostrar banner si no hay respuesta
  }, []);

  const onAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShow(false);
  };

  const onReject = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 w-full bg-gray-900 text-white p-4 flex justify-between items-center z-50">
      <p>{lang === "eu" ? "Cookieak erabiltzen ditugu zure esperientzia hobetzeko." : "Usamos cookies para mejorar tu experiencia."}</p>
      <div>
        <button
          onClick={onReject}
          className="bg-red-600 px-3 py-1 rounded mr-2"
        >
          {lang === "eu" ? "Ukatu" : "Rechazar"}
        </button>
        <button
          onClick={onAccept}
          className="bg-green-600 px-3 py-1 rounded"
        >
          {lang === "eu" ? "Onartu" : "Aceptar"}
        </button>
      </div>
    </div>
  );
}
