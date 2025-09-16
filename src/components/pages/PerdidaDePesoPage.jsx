import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default function PerdidaDePesoPage({ data, lang }) {
  const textos = {
    es: {
      subtitulo: "Nutrición especializada para el rendimiento deportivo",
    },
    eu: {
      subtitulo: "Kirol errendimendura zuzendutako nutrizio espezializatua",
    },
  };

  return (
    <section className="relative w-full h-screen">
      {/* Imagen de fondo */}
      <Image
        src="/foto_1.webp" // cambia por tu imagen
        alt="Ejemplo sección"
        fill
        priority
        className="object-cover"
      />

      {/* Recuadro blanco desde la derecha */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-3/5 bg-white/95 py-12 px-8 md:px-16 shadow-lg">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-gray-800">
          Nutrición personalizada
        </h2>
        <p className="text-base md:text-lg text-gray-600">
          Te acompañamos en el proceso de aprender a comer mejor, con pautas
          adaptadas a tus necesidades y estilo de vida.
        </p>
      </div>
    </section>
  );
}
