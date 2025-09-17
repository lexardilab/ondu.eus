import Image from "next/image";

export default function NutricionHeroOne() {
  return (
    <section className="relative w-full h-screen">
      {/* Imagen de fondo */}
      <Image
        src="/foto_9.webp" // cambia por tu imagen
        alt="Ejemplo sección"
        fill
        priority
        className="object-cover"
      />

      {/* Recuadro blanco desde la derecha */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full md:w-2/5 bg-[#dde3c6] py-2 px-8 md:px-16 shadow-lg">
        <div>
          <h1 className="text-4xl pb-2 text-gray-600">Nutrición</h1>
        </div>
        <p className="text-base md:text-lg text-gray-600 pb-4">
          En ONDU te enseñamos a nutrirte de forma que el estrés del día a día
          no te lleve a un desajuste orgánico que desemboque en malestar o
          enfermedad y en caso de que ya haya ocurrido, desaprender los hábitos
          que te han llevado a esa situación.
        </p>
      </div>
    </section>
  );
}
