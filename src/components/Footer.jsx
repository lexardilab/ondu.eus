import Link from "next/link";
import {
  PiInstagramLogoLight,
  PiFacebookLogoLight,
  PiLinkedinLogoLight,
  PiCopyrightLight,
} from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200">
      <div className="flex flex-col items-center justify-center py-3 px-4 gap-3 md:grid md:grid-cols-3 md:gap-0">
        {/* 📌 Columna 1 */}
        <div className="text-center md:text-left">
          <Link className="text-sm" href="/es/aviso-legal">
            Politica de Cookies y Aviso Legal
          </Link>
        </div>

        {/* 📌 Columna 2 */}
        <div className="flex items-center justify-center text-sm">
          <PiCopyrightLight className="mr-1" />
          <p>2025 Ondu Centro de Nutrición</p>
        </div>

        {/* 📌 Columna 3 */}
        <div className="flex items-center justify-center md:justify-end gap-3">
          <Link className="text-sm" href="/es/sobre-mi">
            Nosotros
          </Link>
          <Link className="text-sm" href="/es/contacto">
            Contacto
          </Link>
          <PiInstagramLogoLight className="w-5 h-5" />
          <PiFacebookLogoLight className="w-5 h-5" />
          <PiLinkedinLogoLight className="w-5 h-5" />
        </div>
      </div>
    </footer>
  );
}
