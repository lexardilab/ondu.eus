import Image from "next/image";

export default function HomeHeroOne() {
  return (
    <section className="relative w-full h-screen">
      {/* Imagen de fondo */}
      <Image
        src="/foto_2.webp" // cambia por tu imagen
        alt="Ejemplo sección"
        fill
        priority
        className="object-cover"
      />

      {/* Recuadro blanco desde la derecha */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full md:w-2/5 bg-white/95 py-2 px-8 md:px-16 shadow-lg">
        <Image
          className="py-4"
          src="/logo.svg"
          alt="Logo"
          width={200}
          height={140}
        />
        <p className="text-base md:text-lg text-gray-600 pb-4">
          Nuestro método está basado en años de experiencia con resultados
          positivos, cercanía y atención a tus gustos y hábitos, para que
          aprender a cuidar tu alimentación no implique cambios innecesarios.
        </p>
      </div>
    </section>
  );
}
