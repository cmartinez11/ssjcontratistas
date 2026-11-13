import { useState } from 'react'
import { MapPin, ArrowUpRight, ZoomIn } from 'lucide-react'
import ImageLightbox from './ImageLightbox'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="proyectos" className="bg-white py-20 lg:py-28 border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-bold tracking-widest text-amber-600 uppercase mb-2">
              EXPERIENCIA OPERATIVA COMPROBADA
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy">
              UNO DE NUESTROS PROYECTOS
            </h2>
            <p className="mt-3 max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed">
              Registro de obras civiles, tendido de líneas HDPE, estructuras metalmecánicas y servicios mineros realizados en condiciones de alta exigencia climática y geográfica.
            </p>
          </div>

          <a
            href="#cotizador"
            className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-amber-600 transition-colors shrink-0 group"
          >
            <span>Consultar disponibilidad para su proyecto</span>
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Contenedor principal del proyecto destacado (Grid de 2 columnas) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-slate-50 p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm">
          {/* Columna Izquierda: Fotografía con visor Lightbox */}
          <div className="lg:col-span-6 flex flex-col">
            <div
              onClick={() =>
                setSelectedImage({
                  src: '/images/proyectos/proyecto01.jpeg',
                  alt: 'Operación de Flota Pesada y Vehículos Livianos - U.M. San Rafael',
                })
              }
              className="group relative h-full min-h-[320px] max-h-[500px] w-full overflow-hidden rounded-lg cursor-zoom-in shadow-sm bg-slate-200"
            >
              <img
                src="/images/proyectos/proyecto01.jpeg"
                alt="Operación de Flota Pesada y Vehículos Livianos - U.M. San Rafael"
                className="w-full h-full min-h-[320px] max-h-[500px] object-cover rounded-lg cursor-zoom-in shadow-sm transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="p-2.5 rounded-full bg-slate-900/80 text-white shadow-lg">
                  <ZoomIn size={22} />
                </span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Información Operativa + Mapa Satelital */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
            {/* Bloque de información superior */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-1.5">
                ALQUILER DE MAQUINARIA PESADA Y VEHÍCULOS
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy leading-snug">
                Operación de Flota Pesada y Vehículos Livianos
              </h3>
              <div className="mt-2.5 flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 font-medium">
                <MapPin size={15} className="text-amber-500 shrink-0" />
                <span>U.M. San Rafael - Minsur S.A. (Antauta, Melgar - Puno)</span>
              </div>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Despliegue y operación continua de flota pesada y camionetas 4x4 equipadas bajo estándares de seguridad minera en alta montaña.
              </p>
            </div>

            {/* Bloque inferior con Mapa de la zona de trabajo */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Zona de Operaciones en Faena Minera:
              </p>
              <div className="w-full h-56 rounded-lg overflow-hidden border border-slate-200 shadow-inner">
                <iframe
                  title="Ubicación U.M. San Rafael - Minsur"
                  src="https://maps.google.com/maps?q=Mina+San+Rafael+Antauta+Puno&t=k&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-3 flex items-center justify-end text-xs sm:text-sm">
                <a
                  href="#cotizador"
                  className="font-bold text-navy hover:text-amber-600 transition-colors inline-flex items-center gap-1"
                >
                  <span>Cotizar proyecto similar</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Cierre de sección con llamada a la acción */}
        <div className="mt-12 rounded-sm bg-slate-100 p-6 sm:p-8 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="font-display text-2xl font-bold text-navy">
              ¿Requiere dossier de calidad o referencias comerciales de obra?
            </h4>
            <p className="mt-1 text-sm text-slate-600">
              Podemos facilitarle fichas técnicas detalladas y actas de conformidad de proyectos.
            </p>
          </div>
          <a
            href="#contacto"
            className="shrink-0 rounded-sm bg-navy px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:bg-slate-800 transition-colors shadow-sm"
          >
            Contactar
          </a>
        </div>
      </div>

      {/* Modal / Lightbox de imagen en pantalla completa */}
      <ImageLightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  )
}
