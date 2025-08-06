import { PortableText } from '@portabletext/react';
import Image from 'next/image';

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
        <Image src="/1.jpg" height="200" width="1000" alt=""></Image>
      </main>
  );
}
