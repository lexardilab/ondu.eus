import { PortableText } from '@portabletext/react';

export default function ContactPage({ data, lang }) {
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
        <p className=""> Pagina de contacto.</p>
        {/* Aquí puedes insertar tu formulario */}
      </main>
  );
}

