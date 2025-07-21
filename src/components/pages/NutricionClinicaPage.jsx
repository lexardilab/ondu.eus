import { PortableText } from '@portabletext/react';

export default function NutricionCLinicaPage({ data, lang }) {
  const textos = {
    es: {
      subtitulo: 'Nutrición especializada para el rendimiento deportivo',
    },
    eu: {
      subtitulo: 'Kirol errendimendura zuzendutako nutrizio espezializatua',
    },
  };

  return (
    <main className="">
        <p className=""> Pagina de nutricion clinica.</p>
        {/* Aquí puedes insertar tu formulario */}
      </main>
  );
}
