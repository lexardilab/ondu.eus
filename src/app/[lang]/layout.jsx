import LanguageSwitcher from "@/components/LanguageSwitcher";

export async function generateMetadata({ params }) {
  const { lang } = params;

  const metadata = {
    es: {
      title: "Ondu",
      description: "Centro de nutrición y salud",
    },
    eu: {
      title: "Ondu",
      description: "Nutrizio eta osasun zentroa",
    },
  };

  return {
    title: metadata[lang]?.title || metadata.es.title,
    description: metadata[lang]?.description || metadata.es.description,
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
      >
      </header>
      <main>{children}</main>
    </>
  );
}
