import { PortableText } from '@portabletext/react';

export default function AlimentacionPage({ data, lang }) {
  const textos = {
    es: {
      subtitulo: 'Alimentacion',
    },
    eu: {
      subtitulo: 'Alimentazioa',
    },
  };

  return (
    <main className="">
        <p className=""> Pagina de alimentacion.</p>
        {/* Aquí puedes insertar tu formulario */}
      </main>
  );
}
