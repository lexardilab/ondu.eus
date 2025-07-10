import { PortableText } from '@portabletext/react'

export default function ContactPage({ data }) {
  return (
    <main className="p-8 max-w-4xl mx-auto ">
      <h1 className="text-xl font-bold mb-6 text-red-200">{data.title}</h1>
      <div className=" text-red-500">
        <PortableText value={data.content} />
      </div>
      <div>prueba</div>
    </main>
  )
}
