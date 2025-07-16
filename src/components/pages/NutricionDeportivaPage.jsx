import { PortableText } from '@portabletext/react';

export default function NutricionDeportivaPage({ data, lang }) {
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
        <p className=""> Pagina de nutricion deportiva.</p>
        {/* Aquí puedes insertar tu formulario */}
      </main>
  );
}
