import { useState } from 'react'
import { ChevronRight, ArrowRight } from 'lucide-react'
import { specializedServices } from '../data/site'

export default function Services({ onSelectService }) {
  const [activeService, setActiveService] = useState(0)

  const current = specializedServices[activeService] || specializedServices[0]

  const handleSelectCotizacion = (serviceTitle) => {
    if (onSelectService) {
      onSelectService(serviceTitle)
    }
    const cotizadorEl = document.getElementById('cotizador')
    if (cotizadorEl) {
      cotizadorEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="servicios" className="bg-slate-100/70 py-20 lg:py-28 border-y border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Encabezado Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-amber-600 uppercase mb-2">
              Portafolio Técnico Integral
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy">
              Servicios Especializados para Minería y Construcción
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore nuestras líneas operativas diseñadas para faenas mineras y proyectos de infraestructura en alta montaña.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="#cotizador"
              className="inline-flex items-center gap-2 rounded-sm bg-cat px-6 py-3 font-semibold text-navy hover:bg-[#e8b900] transition-colors shadow-sm text-sm"
            >
              <span>Ir al Cotizador B2B</span>
              <ChevronRight size={18} />
            </a>
          </div>
        </div>

        {/* Estructura Interactiva de 2 Columnas (Grid de 12 Columnas) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Menú Lateral Izquierdo (4 Columnas) */}
          <div className="lg:col-span-4 flex flex-col gap-1.5">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 px-1">
              Seleccione una especialidad:
            </p>
            {specializedServices.map((service, index) => {
              const isActive = activeService === index
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveService(index)}
                  className={`flex items-center justify-between text-left transition-all ${
                    isActive
                      ? 'bg-slate-900 text-white font-bold border-l-4 border-amber-500 rounded-r-md px-5 py-3.5 shadow-sm'
                      : 'bg-white text-slate-700 hover:bg-slate-100 font-medium border-l-4 border-transparent px-5 py-3.5 rounded-r-md'
                  }`}
                >
                  <span className="text-sm sm:text-base leading-snug">{service.title}</span>
                  <ChevronRight
                    size={16}
                    className={`shrink-0 transition-transform ${
                      isActive ? 'text-amber-400 translate-x-1' : 'text-slate-400'
                    }`}
                  />
                </button>
              )
            })}
          </div>

          {/* Panel de Detalle Técnico (8 Columnas) */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-md border border-slate-200 shadow-sm">
            <div className="border-b border-slate-100 pb-5 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">
                  {current.badge || `Especialidad Minera ${(activeService + 1).toString().padStart(2, '0')}`}
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                  {current.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => handleSelectCotizacion(current.title)}
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-navy px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:bg-amber-500 hover:text-slate-950 transition-colors shadow-sm shrink-0"
              >
                <span>Cotizar esta Especialidad</span>
                <ArrowRight size={15} />
              </button>
            </div>

            {/* Descripción comercial concreta */}
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              {current.shortDesc || current.description}
            </p>

            {/* Lista de Alcances Técnicos con viñetas sobrias */}
            <div className="rounded-md bg-slate-50 p-5 border border-slate-200/80 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                Alcances Técnicos y Procedimientos Operativos:
              </h4>
              <ul className="space-y-2 text-sm text-slate-700">
                {(current.features || current.items || []).map((feature, i) => (
                  <li key={i} className="flex items-start leading-relaxed">
                    <span className="text-amber-500 font-bold mr-2 select-none">—</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Galería de 2 imágenes reales en cuadrícula */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Registros Fotográficos de la Especialidad en Campo:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {current.images.map((img, i) => (
                  <div key={i} className="overflow-hidden rounded-md bg-slate-100">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="rounded-md h-56 w-full object-cover border border-slate-200"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Nota inferior institucional */}
        <div className="mt-12 text-center text-xs text-slate-500">
          ¿Tiene un proyecto que combina varias de estas especialidades? Gestionamos la obra civil, electromecánica y HDPE bajo una sola gerencia con un único contrato y cronograma unificado.
        </div>
      </div>
    </section>
  )
}
