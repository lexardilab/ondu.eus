import CookieBanner from "@/components/CookieBanner";
import Image from "next/image";
import HomeHeroOne from "../HomeHeroOne";
import HomeHeroTwo from "../HomeHeroTwo";
import HomeHeroThree from "../HomeHeroThree";

export default function HomePage({ data, lang }) {
  return (
    <>
      <main>
        <HomeHeroOne />
        <HomeHeroTwo />
        <HomeHeroThree />
      </main>
      <CookieBanner lang={lang} />
    </>
  );
}
