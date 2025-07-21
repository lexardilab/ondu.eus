import Image from 'next/image';
import CookieBanner from '../CookieBanner';

export default function HomePage({ data, lang }) {
  return (
    <>
      <main className="flex items-center justify-center px-12 pt-48">
        <Image
          src="/ondu_home.jpg"
          width={400}
          height={600}
          alt="Ondu Zentroa"
          className="block h-auto max-w-full"
        />
      </main>
      <CookieBanner lang={lang} />
    </>
  );
}
