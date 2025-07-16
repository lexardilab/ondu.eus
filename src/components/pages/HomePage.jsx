import Image from "next/image";
import CookieBanner from "@/components/CookieBanner";

export default function HomePage({ data, lang }) {
  return (
    <>
      <main className="flex items-center justify-center h-screen">
        <Image src="/home.svg" width={400} height={600} alt="Ondu Zentroa" />
      </main>
      <CookieBanner lang={lang} />
    </>
  );
}
