import Image from "next/image";

export default function DosColumnas() {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Columna izquierda: imagen */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src="/foto_5.webp"
            alt="Ejemplo"
            fill
            className="object-cover rounded-xl shadow-md"
            priority
          />
        </div>

        {/* Columna derecha: texto */}
        <div className="w-full">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
            Servicios que tenemos en Ondu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 text-base leading-relaxed">
            {/* Lista izquierda */}
            <ul className="list-disc list-inside space-y-2">
              <li>Plan nutricional personalizado</li>
              <li>Seguimiento continuo</li>
              <li>Atención cercana y profesional</li>
              <li>Mejora de hábitos saludables</li>
              <li>Resultados sostenibles</li>
            </ul>

            {/* Lista derecha */}
            <ul className="list-disc list-inside space-y-2">
              <li>Educación nutricional</li>
              <li>Recetas adaptadas</li>
              <li>Prevención de enfermedades</li>
              <li>Bienestar integral</li>
              <li>Mayor energía diaria</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
