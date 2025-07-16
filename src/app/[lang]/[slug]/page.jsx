import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";

// Importa componentes específicos para ciertas páginas
import ContactPage from "@/components/pages/ContactPage";
import HomePage from "@/components/pages/HomePage";
import NutricionPage from "@/components/pages/NutricionPage";
import NutricionDeportivaPage from "@/components/pages/NutricionDeportivaPage";
import NutricionClinicaPage from "@/components/pages/NutricionClinicaPage";
import PerdidaPage from "@/components/pages/PerdidaDePesoPage";
import AlimentacionPage from "@/components/pages/AlimentacionPage";
import SobreMiPage from "@/components/pages/SobreMiPage";


// import NutritionPage from '@/components/pages/NutritionPage'

/**
 * Consulta a Sanity por slug
 */
async function getPage(slug) {
  const query = `*[_type == "page" && slug.current == $slug][0]{
    title_es,
    title_eu,
    content_es,
    content_eu
  }`;
  const data = await client.fetch(query, { slug });
  return data;
}

export default async function Page({ params }) {
  // Esperar params que es una Promise
  params = await params;

  const { lang, slug } = params;

  const data = await getPage(slug);

  if (!data) {
    return (
      <p className="mt-10 text-center text-red-600">Página no encontrada</p>
    );
  }

  const pageData = {
    title: lang === "es" ? data.title_es : data.title_eu,
    content: lang === "es" ? data.content_es : data.content_eu,
  };

  // Mapeo de slugs con componentes específicos
  const customPages = {
    home: HomePage,
    nutricion: NutricionPage,
    "nutricion-deportiva": NutricionDeportivaPage,
    "nutricion-clinica": NutricionClinicaPage,
    "perdida-de-peso": PerdidaPage,
    alimentacion: AlimentacionPage,
    "sobre-mi": SobreMiPage,
    contacto: ContactPage,
  };

  const CustomComponent = customPages[slug];

  if (CustomComponent) {
    return <CustomComponent data={pageData} lang={lang} />;
  }

  // Render genérico si no hay componente específico
  return (
    <main className="max-w-3xl px-4 py-8 mx-auto">
      <h1 className="mb-6 text-2xl font-bold">{pageData.title}</h1>
      <PortableText value={pageData.content} />
    </main>
  );
}

import { groq } from "next-sanity";

export async function generateStaticParams() {
  const query = groq`*[_type == "page"]{ "slug": slug.current }`;
  const slugs = await client.fetch(query);

  // Idiomas que tienes activos
  const languages = ["es", "eu"];

  // Combinaciones: [{ lang: 'es', slug: 'contacto' }, ...]
  return slugs.flatMap(({ slug }) =>
    languages.map((lang) => ({
      lang,
      slug,
    }))
  );
}
