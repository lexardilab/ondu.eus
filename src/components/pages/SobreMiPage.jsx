import { PortableText } from '@portabletext/react';
import Image from 'next/image';

export default function SobreMiPage({ data, lang }) {
  const textos = {
    es: {
      subtitulo: 'Nutrición especializada para el rendimiento deportivo',
    },
    eu: {
      subtitulo: 'Kirol errendimendura zuzendutako nutrizio espezializatua',
    },
  };

  return (
    <div className="px-4 grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      {/* Texto columna izquierda */}
      <div className="flex flex-col justify-end">
        <h1 className="text-2xl font-bold mb-4">
        </h1>
        <p className="text-lg">
          Este es el texto en la columna izquierda, alineado abajo.
        </p>
      </div>

      {/* Imagen columna derecha */}
      <div className="flex items-center justify-center">
        <Image
          src="/3.jpg"
          alt="Imagen"
          width="600"
          height="400"
          className="justify-center"
          style={{ maxHeight: "90vh" }}
        />
      </div>
    </div>
  );
}
