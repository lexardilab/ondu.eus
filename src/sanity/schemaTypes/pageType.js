import { defineField, defineType } from 'sanity'

export const pageType = defineType({
  name: 'page',
  title: 'Página',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title_es', // Puede ser string con el nombre del campo, es más limpio
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title_es',
      title: 'Título (Castellano)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title_eu',
      title: 'Izenburua (Euskera)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content_es',
      title: 'Contenido (Castellano)',
      type: 'blockContent',
    }),
    defineField({
      name: 'content_eu',
      title: 'Edukiak (Euskera)',
      type: 'blockContent',
    }),
  ],
})
