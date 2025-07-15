// src/components/pages/ContactPage.jsx

export default function ContactPage({ data }) {
  return (
    <main className="max-w-3xl px-4 py-8 mx-auto">
      <h1 className="mb-6 text-2xl font-bold">{data.title}</h1>
      <p className="mb-6">Este es el contenido de la página de contacto.</p>
      {/* Aquí puedes insertar tu formulario */}
    </main>
  )
}

