import { PortableText } from '@portabletext/react';
import Contact from '../Contact';

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
        <Contact/>
      </main>
  );
}

