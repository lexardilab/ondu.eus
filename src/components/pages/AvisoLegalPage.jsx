import { PortableText } from "@portabletext/react";

export default function AvisoLegalPage({ data, lang }) {
  const textos = {
    es: { subtitulo: "Politica de Cookies y Aviso Legal" },
    eu: { subtitulo: "Lege Oharra" },
  };

  return (
    <main className="px-4 pt-6 pb-16">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        {textos[lang].subtitulo}
      </h1>

      <div className="max-w-3xl mx-auto space-y-6 text-justify text-sm leading-relaxed">
        {/* Sección: Identidad del titular */}
        <p>
          En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la
          Sociedad de la Información y de Comercio Electrónico, le informamos
          que el titular de https://www.ondu.eus es: Mikal San Miguel Figueiras
          CIF: 30695169J, Ugartebetxi, 34 Bj Amurrio (Alava), España. T. 670 217
          881 M. mikalsanmiguel@ondu.eus.
        </p>

        {/* Sección: Condiciones generales */}
        <h2 className="text-lg font-semibold">Condiciones generales de uso</h2>
        <p>
          El acceso a esta página web le atribuye la condición de “Usuario”,
          implicando su aceptación expresa y sin reservas de las condiciones
          generales publicadas en https://www.ondu.eus. Por lo tanto, el Usuario
          deberá leerlas cada vez que acceda a la web, ya que pueden sufrir
          modificaciones.
        </p>

        <p>
          Se entenderá por “Usuario” a la persona que acceda, navegue, utilice o
          participe en los servicios y actividades desarrolladas en
          https://www.ondu.eus.
        </p>

        {/* Sección: Objeto y ámbito */}
        <h2 className="text-lg font-semibold">Objeto y ámbito de aplicación</h2>
        <p>
          Las presentes condiciones regulan el acceso, navegación y uso de la
          web, así como las responsabilidades derivadas de la utilización de sus
          contenidos tales como textos, gráficos, software, fotografías, música,
          vídeos, sonidos, bases de datos, imágenes y cualquier otra creación
          protegida por leyes de propiedad intelectual e industrial.
        </p>

        <p>
          La propietaria podrá establecer condiciones particulares aplicables al
          uso o contratación de servicios específicos.
        </p>

        {/* Sección: Condiciones de acceso */}
        <h2 className="text-lg font-semibold">
          Condiciones de acceso y utilización de los servicios
        </h2>
        <p>
          a) El acceso a https://www.ondu.eus es libre y gratuito, salvo algunos
          servicios que requieran contratación previa.
        </p>
        <p>
          b) Los menores deberán contar con consentimiento de padres o tutores.
        </p>
        <p>
          c) El Usuario debe realizar un uso lícito de los servicios, conforme a
          la ley, moral y buenas prácticas en Internet.
        </p>
        <p>
          d) El Usuario garantiza que la información aportada es lícita, veraz y
          actualizada.
        </p>
        <p>
          e) El Usuario se abstendrá de introducir virus, recopilar datos con
          fines publicitarios, reproducir contenidos sin autorización, realizar
          acciones que lesionen derechos de terceros, entre otros.
        </p>
        <p>
          f) En caso de registro, el Usuario se compromete a custodiar su
          contraseña y no ceder su uso a terceros. La responsabilidad recae en
          el Usuario ante accesos no autorizados.
        </p>

        {/* Sección: Propiedad intelectual */}
        <h2 className="text-lg font-semibold">
          Derechos de propiedad intelectual e industrial
        </h2>
        <p>
          La propietaria es titular de los derechos de propiedad intelectual e
          industrial de todos los elementos que integran https://www.ondu.eus,
          incluyendo marca, diseño gráfico, código fuente, logos, textos,
          gráficos, ilustraciones, fotografías, sonidos y demás elementos. El
          acceso no implica renuncia ni licencia sobre estos derechos.
        </p>

        {/* Sección: Política de privacidad */}
        <h2 className="text-lg font-semibold">Política de privacidad</h2>
        <p>
          En cumplimiento del Reglamento (UE) 2016/679 (RGPD), Mikal San Miguel
          Figueiras, como responsable del tratamiento, informa que los datos
          personales recabados serán utilizados para registrarle como usuario,
          desarrollo de compras y venta, y, si se suscribe a la newsletter, para
          enviar información de novedades.
        </p>

        <p>
          Los usuarios podrán ejercitar los derechos de acceso, rectificación,
          supresión y oposición mediante carta o email. La propietaria no vende,
          cede ni transmite información personal a terceros. El usuario
          garantiza la veracidad de los datos.
        </p>

        {/* Sección: Política de cookies */}
        <h2 className="text-lg font-semibold">Política de cookies</h2>
        <p>
          NO recogemos cookies ni datos de los usuarios que visitan la web,
          unicamente disponemos del banner a modo de aviso y para que quede
          claro que puedes aceptarlas o rechazaras aun avisando de antemano que
          no recogemos ni comercializamos datos de terceros..
        </p>

        {/* Sección: Legislación y reclamaciones */}
        <h2 className="text-lg font-semibold">
          Legislación aplicable y reclamaciones
        </h2>
        <p>
          Las partes se someten, con renuncia a otro fuero, a los juzgados del
          domicilio de la propietaria.
        </p>
      </div>
    </main>
  );
}
