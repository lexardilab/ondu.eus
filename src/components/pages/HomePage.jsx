import Image from "next/image";
import CookieBanner from "@/components/CookieBanner";

export default function HomePage({ data, lang }) {
  return (
    <>
      <main className="flex items-center justify-center w-full h-screen bg-white md:items-start md:pt-10">
        <div
          className="
            w-[340px] h-[620px]       /* móvil */
            sm:w-[320px] sm:h-[480px] /* sm */
            md:w-[440px] md:h-[740px] /* desktop más grande */
            relative 
            mt-[-35vh] sm:mt-[-15vh] md:mt-[-5vh] /* desktop un poco más arriba */
          "
        >
          <Image
            src="/home.svg"
            alt="Ondu Zentroa"
            fill
            className="object-contain"
            priority
          />
        </div>
      </main>
      <CookieBanner lang={lang} />
    </>
  );
}

