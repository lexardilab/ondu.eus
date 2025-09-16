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
    <>
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
            En ONDU consideramos el peso, una cifra que no necesariamente habla
            de salud y no nos debe obsesionar.
          </p>
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
        {/* Columna 1: Imagen */}
        <div className="flex justify-center">
          <Image
            src="/foto_6.webp"
            width={600}
            height={200}
            alt="Ejemplo"
            className="rounded-lg"
          />
        </div>

        {/* Columna 2: Texto */}
        <div className="flex items-center">
          <p className="text-base md:text-2xl text-gray-600 leading-relaxed max-w-sm">
            Tratamos cada caso de forma totalmente individualizada y te ayudamos
            a alcanzar el peso en el que te sientas cómodo/a, sin dietas
            restrictivas, disfrutando del proceso y de la comida en todas sus
            versiones.
          </p>
        </div>
      </div>
    </>
  );
}
