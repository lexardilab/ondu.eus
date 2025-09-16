import Image from "next/image";

export default function ContactFooter() {
  return (
    <section className="relative min-h-screen">
      {/* 🌄 Imagen de fondo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/foto_8.webp" // 👈 pon tu imagen en /public
          alt="Fondo contacto"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* 📝 Formulario centrado */}
      <div className="max-w-6xl px-4 py-12 mx-auto">
        <div className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-semibold">Contáctanos</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Correo electrónico
              </label>
              <input
                type="email"
                placeholder="tucorreo@ejemplo.com"
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Teléfono
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="Tu número"
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mensaje
              </label>
              <textarea
                rows="4"
                placeholder="Escribe tu mensaje..."
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-4 py-2 text-white transition bg-black rounded hover:bg-gray-800"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>

      {/* 🌍 Columnas a pantalla completa */}
      <div className="w-screen pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 h-[500px]">
          {/* 🗺️ Columna 1: Mapa */}
          <div className="w-full h-full">
            <iframe
              title="Ubicación Ondu"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.642950444443!2d-2.937742!3d43.262985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e4f444b0df123%3A0xa1e5f52c438e9f10!2sBilbao!5e0!3m2!1ses!2ses!4v1690402712345!5m2!1ses!2ses"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="w-full h-full border-0 rounded-lg"
            ></iframe>
          </div>

          {/* 📄 Columna 2: Dirección */}
          <div className="flex flex-col justify-end p-8 bg-white/80 backdrop-blur-sm rounded-lg">
            <div>
              <Image
                className="pb-4"
                src="/logo.svg"
                width="200"
                height="50"
                alt=""
              />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Mikal San Miguel</h3>

            <p className="mb-4 text-gray-600">
              Mendiko, 2<br />
              01470 Amurrio, Alava
            </p>
            <p className="text-gray-600">
              📞 +34 670 217 881
              <br />
              📧 mikalsanmiguel@ondu.eus
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
