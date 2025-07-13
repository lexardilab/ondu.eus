import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Navbar from "@/components/Navbar";

export async function generateMetadata({ params }) {
  const { lang } = params;
  const baseUrl = "https://ondu.eus";
  const path = `/${lang}`;

  const metadata = {
    es: {
      title: "Ondu",
      description: "Centro de nutrición y salud",
      image: `${baseUrl}/images/og-image-es.jpg`,
      locale: "es_ES",
    },
    eu: {
      title: "Ondu",
      description: "Nutrizio eta osasun zentroa",
      image: `${baseUrl}/images/og-image-eu.jpg`,
      locale: "eu_ES",
    },
  };

  const meta = metadata[lang] || metadata.es;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: baseUrl + path,
      languages: {
        es: baseUrl + "/es",
        eu: baseUrl + "/eu",
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: baseUrl + path,
      siteName: "Ondu",
      images: [
        {
          url: meta.image,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
      locale: meta.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [meta.image],
    },
  };
}
export default function LangLayout({ children, params }) {
  const { lang } = params;

  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem",
        }}
      ></header>
      <main>
        <GoogleAnalytics />
        <CookieBanner lang={lang} />
        <Navbar lang={lang} />
        {children}
      </main>
    </>
  );
}
