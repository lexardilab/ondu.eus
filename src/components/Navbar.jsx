"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLang = pathname.split("/")[1] || "es";

  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lang) => {
    const parts = pathname.split("/");
    parts[1] = lang;
    router.push(parts.join("/"));
    setIsOpen(false); // cerrar menú al cambiar idioma
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="">
      <div className="flex items-center justify-between px-4 py-4">
        {/* Logo o título */}
        <Link href={`/${currentLang}`}>
          <Image
            src="/logo.svg"
            alt="Logotipo Ondu Centro de nutriciín y salud"
            width={200}
            height={500}
          />
        </Link>
        {/* Botón hamburguesa para móvil */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        {/* Menú principal desktop */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          <Link
            href={`/${currentLang}`}
            className="hover:underline"
          >
            {currentLang === "es" ? "Inicio" : "Hasiera"}
          </Link>
          <Link
            href={`/${currentLang}/about`}
            className="hover:underline"
          >
            {currentLang === "es" ? "Acerca de" : "Guri buruz"}
          </Link>

          {/* Selector idiomas desktop */}
          <LanguageSwitcher />
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="mt-4 space-y-4 md:hidden">
          <Link
            href={`/${currentLang}`}
            className="block hover:underline"
            onClick={() => setIsOpen(false)}
          >
            {currentLang === "es" ? "Inicio" : "Hasiera"}
          </Link>
          <Link
            href={`/${currentLang}/about`}
            className="block hover:underline"
            onClick={() => setIsOpen(false)}
          >
            {currentLang === "es" ? "Acerca de" : "Guri buruz"}
          </Link>
          <div className="flex mt-2 space-x-4">
            <button
              onClick={() => changeLanguage("eu")}
              disabled={currentLang === "eu"}
              className={`px-3 py-1 rounded ${
                currentLang === "eu"
                  ? "bg-indigo-600 cursor-default"
                  : "bg-indigo-800 hover:bg-indigo-700"
              }`}
              aria-current={currentLang === "eu" ? "page" : undefined}
            >
              Euskera
            </button>
            <button
              onClick={() => changeLanguage("es")}
              disabled={currentLang === "es"}
              className={`px-3 py-1 rounded ${
                currentLang === "es"
                  ? "bg-indigo-600 cursor-default"
                  : "bg-indigo-800 hover:bg-indigo-700"
              }`}
              aria-current={currentLang === "es" ? "page" : undefined}
            >
              Castellano
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
