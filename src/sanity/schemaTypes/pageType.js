import { defineField, defineType } from "sanity";

export const pageType = defineType({
  name: "page",
  title: "Página",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title_es", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title_es",
      title: "Título (Castellano)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title_eu",
      title: "Izenburua (Euskera)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subpages",
      title: "Subpáginas",
      type: "array",
      of: [{ type: "reference", to: [{ type: "page" }] }],
    }),
    defineField({
      name: "showInNavbar",
      title: "Mostrar en navegación",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "navbarTitle_es",
      title: "Nombre en navbar (Castellano)",
      type: "string",
    }),
    defineField({
      name: "navbarTitle_eu",
      title: "Izenburua nabigazioan (Euskera)",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Orden en el navbar",
      type: "number",
      description: "Menor número aparece antes. Ej: 1, 2, 3...",
    }),
  ],
});
