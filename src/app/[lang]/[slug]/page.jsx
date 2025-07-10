import { createClient } from 'next-sanity'
import { PortableText } from '@portabletext/react'
import ContactPage from '../../../components/pages/ContactPage'
// Importa otros componentes según páginas que tengas, por ejemplo:
// import NutritionPage from '../../../components/pages/NutritionPage'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: '2023-07-10',
})

async function getPage(slug) {
  const query = `*[_type == "page" && slug.current == $slug][0]{
    title_es,
    title_eu,
    content_es,
    content_eu
  }`
  const data = await client.fetch(query, { slug })
  return data
}

export default async function Page({ params }) {
  const { lang, slug } = await params
  const data = await getPage(slug)

  if (!data) {
    return <p>Página no encontrada</p>
  }

  // Elegir contenido y título según idioma
  const pageData = {
    title: lang === 'es' ? data.title_es : data.title_eu,
    content: lang === 'es' ? data.content_es : data.content_eu,
  }

  // Renderizado condicional según slug
  if (slug === 'contacto') {
    return <ContactPage data={pageData} />
  }
  if (slug === 'home') {
    return <HomePage data={data} />
  }

  // Puedes añadir más condiciones para otros slugs
  // if (slug === 'nutricion') return <NutritionPage data={pageData} />

  // Por defecto, renderiza genérico:
  return (
    <main className="">
      <h1 className="">{pageData.title}</h1>
      <PortableText value={pageData.content} />
    </main>
  )
}
