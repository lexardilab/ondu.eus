'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname()
  const currentLang = pathname.split('/')[1] || 'es'

  const [isOpen, setIsOpen] = useState(false)

  const changeLanguage = (lang) => {
    const parts = pathname.split('/')
    parts[1] = lang
    router.push(parts.join('/'))
    setIsOpen(false) // cerrar menú al cambiar idioma
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="p-4 text-white bg-gray-900">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        {/* Logo o título */}
        <div className="text-xl font-bold">
          <Link href={`/${currentLang}`}>Ondu.eus</Link>
        </div>

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
            className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {currentLang === 'es' ? 'Inicio' : 'Hasiera'}
          </Link>
          <Link
            href={`/${currentLang}/about`}
            className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {currentLang === 'es' ? 'Acerca de' : 'Guri buruz'}
          </Link>

          {/* Selector idiomas desktop */}
          <button
            onClick={() => changeLanguage('eu')}
            disabled={currentLang === 'eu'}
            className={`px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
              currentLang === 'eu'
                ? 'bg-indigo-600 cursor-default'
                : 'bg-indigo-800 hover:bg-indigo-700'
            }`}
            aria-current={currentLang === 'eu' ? 'page' : undefined}
          >
            Euskera
          </button>
          <button
            onClick={() => changeLanguage('es')}
            disabled={currentLang === 'es'}
            className={`px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
              currentLang === 'es'
                ? 'bg-indigo-600 cursor-default'
                : 'bg-indigo-800 hover:bg-indigo-700'
            }`}
            aria-current={currentLang === 'es' ? 'page' : undefined}
          >
            Castellano
          </button>
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
            {currentLang === 'es' ? 'Inicio' : 'Hasiera'}
          </Link>
          <Link
            href={`/${currentLang}/about`}
            className="block hover:underline"
            onClick={() => setIsOpen(false)}
          >
            {currentLang === 'es' ? 'Acerca de' : 'Guri buruz'}
          </Link>
          <div className="flex mt-2 space-x-4">
            <button
              onClick={() => changeLanguage('eu')}
              disabled={currentLang === 'eu'}
              className={`px-3 py-1 rounded ${
                currentLang === 'eu' ? 'bg-indigo-600 cursor-default' : 'bg-indigo-800 hover:bg-indigo-700'
              }`}
              aria-current={currentLang === 'eu' ? 'page' : undefined}
            >
              Euskera
            </button>
            <button
              onClick={() => changeLanguage('es')}
              disabled={currentLang === 'es'}
              className={`px-3 py-1 rounded ${
                currentLang === 'es' ? 'bg-indigo-600 cursor-default' : 'bg-indigo-800 hover:bg-indigo-700'
              }`}
              aria-current={currentLang === 'es' ? 'page' : undefined}
            >
              Castellano
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
