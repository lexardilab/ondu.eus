import { sanityClient } from './sanityClient';

export async function getPages() {
  const query = `*[_type == "page" && showInNavbar == true] | order(order asc)[0..10]{
    _id,
    slug { current },
    title_es,
    title_eu,
    navbarTitle_es,
    navbarTitle_eu,
    order,
     subpages[]->{
       _id,
       slug { current },
       title_es,
       title_eu,
       navbarTitle_es,
       navbarTitle_eu,
       order
     }
  }`;

  try {
    const pages = await sanityClient.fetch(query);
    return pages;
  } catch (error) {
    console.error("Error al obtener páginas:", error);
    return [];
  }
}

