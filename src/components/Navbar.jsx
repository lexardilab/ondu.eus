'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null); // 'nutricion' | 'alimentacion' | null
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRefs = {
    nutricion: useRef(null),
    alimentacion: useRef(null),
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        openDropdown &&
        dropdownRefs[openDropdown] &&
        !dropdownRefs[openDropdown].current.contains(e.target)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown]);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
        {/* Logo */}
        
        <Link href="/"><Image src="/logo.svg" alt="" width="200" height="100" /></Link>

        {/* Desktop menu */}
        <div className="items-center hidden space-x-6 md:flex">

          {/* Dropdown: Servicios */}
          <div className="relative" ref={dropdownRefs.nutricion}>
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === 'nutricion' ? null : 'nutricion')
              }
              className="flex items-center gap-1 text-gray-700 hover:text-primary"
            >
              Nutrición ▾
            </button>
            {openDropdown === 'nutricion' && (
              <div className="absolute left-0 z-20 w-48 mt-2 bg-white border rounded shadow-lg top-full">
                <Link href="/servicios/consulta" className="block px-4 py-2 text-sm hover:bg-gray-100">Nutrición deportiva</Link>
                <Link href="/servicios/peso" className="block px-4 py-2 text-sm hover:bg-gray-100">Nutrición clinica</Link>
              </div>
            )}
          </div>
          <Link href="/sobre-mi" className="text-gray-700 hover:text-primary">Perdida de peso</Link>

          {/* Dropdown: Recursos */}
          <div className="relative" ref={dropdownRefs.alimentacion}>
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === 'alimentacion' ? null : 'alimentacion')
              }
              className="flex items-center gap-1 text-gray-700 hover:text-primary"
            >
              Alimentación ▾
            </button>
            {openDropdown === 'alimentacion' && (
              <div className="absolute left-0 z-20 w-48 mt-2 bg-white border rounded shadow-lg top-full">
                <Link href="/recursos/blog" className="block px-4 py-2 text-sm hover:bg-gray-100">Blog</Link>
                <Link href="/recursos/guias" className="block px-4 py-2 text-sm hover:bg-gray-100">Guías</Link>
                <Link href="/recursos/videos" className="block px-4 py-2 text-sm hover:bg-gray-100">Videos</Link>
              </div>
            )}
          </div>
          <Link href="/contacto" className="text-gray-700 hover:text-primary">Sobre mi</Link>

          <Link href="/contacto" className="text-gray-700 hover:text-primary">Contacto</Link>
          <Link href="/contacto" className="text-gray-700 hover:text-primary">Regala salud</Link>
        </div>

        {/* Botón menú móvil */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-2xl text-gray-700 md:hidden"
          aria-label="Abrir menú"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Menú móvil */}
      {mobileOpen && (
        <div className="px-4 pb-4 space-y-3 bg-white border-t shadow-sm md:hidden">
          <Link href="/sobre-mi" className="block py-2 text-gray-700">Sobre mí</Link>

          {/* Dropdown Servicios */}
          <div>
            <p className="font-medium text-gray-700">Servicios</p>
            <div className="pl-4">
              <Link href="/servicios/consulta" className="block py-1 text-gray-600">Consulta Nutricional</Link>
              <Link href="/servicios/peso" className="block py-1 text-gray-600">Pérdida de Peso</Link>
              <Link href="/servicios/deporte" className="block py-1 text-gray-600">Nutrición Deportiva</Link>
            </div>
          </div>

          {/* Dropdown Recursos */}
          <div>
            <p className="font-medium text-gray-700">Recursos</p>
            <div className="pl-4">
              <Link href="/recursos/blog" className="block py-1 text-gray-600">Blog</Link>
              <Link href="/recursos/guias" className="block py-1 text-gray-600">Guías</Link>
              <Link href="/recursos/videos" className="block py-1 text-gray-600">Videos</Link>
            </div>
          </div>

          <Link href="/contacto" className="block py-2 text-gray-700">Contacto</Link>
        </div>
      )}
    </nav>
  );
}
