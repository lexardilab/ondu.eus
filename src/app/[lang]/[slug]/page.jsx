// app/[lang]/[slug]/page.jsx

export async function generateStaticParams() {
    const posts = await client.fetch(`*[_type == "post"]{ slug, language }`)
  
    return posts.map((post) => ({
      lang: post.language,       // 'es' o 'eu'
      slug: post.slug.current,
    }))
  }
  