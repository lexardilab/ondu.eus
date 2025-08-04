import CookieBanner from "@/components/CookieBanner";
import Image from "next/image";

export default function HomePage({ data, lang }) {
  return (
    <>
      <main className="flex justify-center w-full h-screen bg-white md:items-start md:pt-10">
        <div
          className=""
        >
<Image src="ondu.svg" height="200"    width={1200} alt="Ondu Zentroa"  />  </div>
      </main>
      <CookieBanner lang={lang} />
    </>
  );
}

