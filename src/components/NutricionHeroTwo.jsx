import Image from "next/image";

export default function NutricionHeroTwo() {
  return (
    <section className="w-full py-16 px-6 bg-[#dde3c6]">
      <div className="max-w-7xl mx-auto ">
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          En Ondu tenemos más de 15 años de experiencia en el abordaje y
          tratamiento de patologías a través de la alimentación, siempre con un
          enfoque individualizado, serio y basado en la evidencia.
        </p>
        <p className="text-4xl pt-6 text-gray-600">Nutrición Clinica</p>
        <p className="text-gray-600 pt-4">
          Cuando el terreno está nutrido, hidratado y oxigenado se adapta mucho
          mejor a los cambios y retos que se le presenten, el cuerpo funciona
          igual.
        </p>
        <div className="grid grid-cols-2 pt-6">
          <div className="flex flex-col">
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              - Nutrición preventiva
              <br />
              - Patología digestiva
              <br />
              - Enfermedades metabólicas
              <br />
              - Salud articular
              <br />- Inflamación
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              - Diabetes
              <br />
              - Hipertensión
              <br />
              - Hipercolesterolemia e hipertrigliceridemia
              <br />
              - Alergias e intolerancias alimentarias
              <br />
              - Salud reproductiva
              <br />
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 pt-6 gap-12">
          <div className="flex flex-col">
            <p className="text-4xl pt-6 text-gray-600">Nutrición Deportiva</p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed pt-6">
              El mejor rendimiento deportivo está a tu alcance con un correcto
              aporte nutricional y buen descanso. En ONDU disponemos de técnicas
              avanzadas en estudio antropométrico y diagnóstico nutricional para
              establecer y conseguir los objetivos deseados tanto si eres
              deportista a nivel usuario como en alto rendimiento.
            </p>
          </div>
          <div className="pt-12">
            <Image src="/foto_11.webp" width="600" height="200" alt="Ejemplo" />
          </div>
        </div>
      </div>
    </section>
  );
}
