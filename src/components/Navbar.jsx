'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar({ lang, pages }) {
  const [openMenuId, setOpenMenuId] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getTitle = (page) =>
    lang === "eu"
      ? page.navbarTitle_eu || page.title_eu
      : page.navbarTitle_es || page.title_es;

  const sortPages = (pagesArray) =>
    pagesArray?.slice().sort((a, b) => (a.order ?? 0) - (b.order ?? 0)) || [];

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setOpenMenuId(null); // cerrar submenus al abrir/cerrar mobile
  };

  return (
    <nav className="py-4 ">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 ">
            <Link href={`/${lang}`}>
              <Image
                src="/logo2.svg"
                alt="Logo"
                width={200}
                height={140}
                className=""
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden space-x-6 md:flex">
            {sortPages(pages).map((page) => {
              const hasSubpages = (page.subpages ?? []).length > 0;
              const isOpen = openMenuId === page._id;

              return (
                <li key={page._id} className="relative">
                  <div className="flex items-center space-x-1">
                    <Link
                      href={`/${lang}/${page.slug.current}`}
                      className="font-medium text-[#5f7254] "
                      onClick={() => setOpenMenuId(null)} // cerrar menus al click
                    >
                      {getTitle(page)}
                    </Link>
                    {hasSubpages && (
                      <button
                        onClick={() => toggleMenu(page._id)}
                        aria-expanded={isOpen}
                        aria-controls={`submenu-${page._id}`}
                        className="text-[#5f7254]  focus:outline-none"
                        aria-label={isOpen ? "Cerrar submenu" : "Abrir submenu"}
                      >
                        ▼
                      </button>
                    )}
                  </div>

                  {hasSubpages && isOpen && (
                    <ul
                      id={`submenu-${page._id}`}
                      className="absolute left-0 z-50 w-48 mt-2 bg-white border border-gray-200 rounded-md shadow-lg top-full"
                    >
                      {sortPages(page.subpages ?? []).map((subpage) => (
                        <li key={subpage._id}>
                          <Link
                            href={`/${lang}/${subpage.slug.current}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => setOpenMenuId(null)}
                          >
                            {getTitle(subpage)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Language switcher desktop */}
          <div className="flex-shrink-0 hidden md:flex">
            <LanguageSwitcher lang={lang} />
          </div>

          {/* Hamburger button mobile */}
          <button
            className="flex items-center justify-center p-2 text-[#5f7254] rounded-md md:hidden "
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={toggleMobileMenu}
          >
            {/* Icono hamburguesa / X */}
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ zIndex: 999 }}
      >
        <ul className="flex flex-col px-4 py-4 space-y-2">
          {sortPages(pages).map((page) => {
            const hasSubpages = (page.subpages ?? []).length > 0;
            const isOpen = openMenuId === page._id;

            return (
              <li key={page._id} className="relative">
                <div className="flex items-center justify-between">
                  <Link
                    href={`/${lang}/${page.slug.current}`}
                    className="block w-full py-2 font-medium text-[#5f7254] "
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setOpenMenuId(null);
                    }}
                  >
                    {getTitle(page)}
                  </Link>
                  {hasSubpages && (
                    <button
                      onClick={() => toggleMenu(page._id)}
                      aria-expanded={isOpen}
                      aria-controls={`submenu-mobile-${page._id}`}
                      className="text-[#5f7254] focus:outline-none"
                      aria-label={isOpen ? "Cerrar submenu" : "Abrir submenu"}
                    >
                      {isOpen ? "▲" : "▼"}
                    </button>
                  )}
                </div>

                {hasSubpages && isOpen && (
                  <ul
                    id={`submenu-mobile-${page._id}`}
                    className="pl-4 mt-2 border-l border-gray-300"
                  >
                    {sortPages(page.subpages ?? []).map((subpage) => (
                      <li key={subpage._id}>
                        <Link
                          href={`/${lang}/${subpage.slug.current}`}
                          className="block py-1 text-gray-700 hover:text-blue-600"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setOpenMenuId(null);
                          }}
                        >
                          {getTitle(subpage)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}

          {/* Language switcher mobile */}
          <li className="pt-4 border-t border-gray-200">
            <LanguageSwitcher lang={lang} />
          </li>
        </ul>
      </div>
    </nav>
  );
}
