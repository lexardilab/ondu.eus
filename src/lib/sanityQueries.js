// src/lib/sanityQueries.js
export const getPageQuery = (lang) => `
*[_type == "page" && slug.current == $slug][0] {
  title: title_${lang},
  content: content_${lang}
}
`
