import Link from "next/link";
import { PiInstagramLogoLight } from "react-icons/pi";
import { PiCopyrightLight } from "react-icons/pi";
import { PiFacebookLogoLight } from "react-icons/pi";

export default function Footer() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white">
      <div className="grid grid-cols-3">
        <div className="px-4">
          <Link className="text-sm" href="/es/aviso-legal">
            Politica de Cookies y Aviso Legal
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <PiCopyrightLight />

          <p className="text-sm pl-1">2025 Ondu Centro de Nutrición</p>
        </div>
        <div className="flex justify-end px-4 items-center">
          <Link className="text-sm pr-2" href="/es/sobre-mi">
            Nosotros
          </Link>
          <Link className="text-sm pr-2" href="/es/contacto">
            Contacto
          </Link>
          <span className="">
            {" "}
            <PiInstagramLogoLight />
          </span>
          <span className="pl-1">
            <PiFacebookLogoLight className="" />
          </span>
        </div>
      </div>
    </div>
  );
}
