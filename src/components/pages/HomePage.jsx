import Image from "next/image";
import CookieBanner from "@/components/CookieBanner";

export default function HomePage({ data, lang }) {
  return (
    <>
      <main className="flex items-center justify-center w-full h-screen bg-white">
        <div
          className="
            w-[340px] h-[620px] 
            sm:w-[320px] sm:h-[480px] 
            md:w-[400px] md:h-[600px] 
            relative 
            mt-[-35vh] sm:mt-[-15vh] md:mt-0
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

