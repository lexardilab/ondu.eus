import { PortableText } from '@portabletext/react';

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
    <main className="">
        <p className=""> Pagina de sobre mi.</p>
        {/* Aquí puedes insertar tu formulario */}
      </main>
  );
}
