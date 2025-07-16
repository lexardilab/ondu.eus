'use client';

import React, { useState, useEffect } from 'react';

export default function CookieBanner({ lang }) {
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [checkedStorage, setCheckedStorage] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookiesAccepted");
    const declined = localStorage.getItem("cookiesRejected");
    if (consent === "true") setAccepted(true);
    if (declined === "true") setRejected(true);
    setCheckedStorage(true);
  }, []);

  function acceptCookies() {
    localStorage.setItem("cookiesAccepted", "true");
    localStorage.removeItem("cookiesRejected");
    setAccepted(true);
    setRejected(false);
  }

  function rejectCookies() {
    localStorage.setItem("cookiesRejected", "true");
    localStorage.removeItem("cookiesAccepted");
    setRejected(true);
    setAccepted(false);
  }

  if (!checkedStorage) return null;
  if (accepted || rejected) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-col sm:flex-row items-center justify-between p-4 bg-[#5f7254] text-[#f5ecdc]">
      <p className="mb-2 text-sm sm:mb-0">
        {lang === 'eu' ? "Cookieak onartzen dituzu?" : "¿Aceptas las cookies?"}
      </p>
      <div className="flex gap-2">
        <button
          onClick={acceptCookies}
          className="px-4 py-2 bg-[#f5ecdc] text-[#5f7254] font-semibold rounded hover:brightness-90 transition"
        >
          {lang === 'eu' ? "Onartu" : "Aceptar"}
        </button>
        <button
          onClick={rejectCookies}
          className="px-4 py-2 bg-[#5f7254] border border-[#f5ecdc] text-[#f5ecdc] font-semibold rounded hover:bg-[#4f5e46] transition"
        >
          {lang === 'eu' ? "Ezeztatu" : "Rechazar"}
        </button>
      </div>
    </div>
  );
}
