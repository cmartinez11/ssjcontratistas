import { useState } from 'react'
import { MapPin, ArrowUpRight, ZoomIn } from 'lucide-react'
import { images } from '../data/images'
import ImageLightbox from './ImageLightbox'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="proyectos" className="bg-white py-20 lg:py-28 border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-bold tracking-widest text-amber-600 uppercase mb-2">
              Experiencia Operativa Comprobada
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy">
              Proyectos y Trabajos Ejecutados
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

        {/* Cuadrícula limpia de 3 columnas - Diseño Editorial */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {images.gallery.map((item) => (
            <div
              key={item.id}
              className="flex flex-col overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Imagen limpia con zoom al hacer clic */}
              <div
                onClick={() => setSelectedImage({ src: item.src, alt: item.title })}
                className="h-60 w-full overflow-hidden bg-slate-100 cursor-zoom-in group relative"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span className="p-2.5 rounded-full bg-slate-900/80 text-white shadow-lg">
                    <ZoomIn size={20} />
                  </span>
                </div>
              </div>

              {/* Información del Proyecto */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-1.5">
                    {item.category}
                  </p>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-navy leading-snug">
                    {item.title}
                  </h3>
                  <div className="mt-2.5 flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin size={13} className="text-amber-500 shrink-0" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-end text-xs text-slate-500">
                  <a
                    href="#cotizador"
                    className="font-bold text-navy hover:text-amber-600 transition-colors"
                  >
                    Cotizar similar →
                  </a>
                </div>
              </div>
            </div>
          ))}
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
