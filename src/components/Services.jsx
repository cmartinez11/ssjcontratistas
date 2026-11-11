import { useState } from 'react'
import {
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  CalendarClock,
  ShieldCheck,
  Wrench,
  Cpu,
  Flame,
  CheckCircle2,
} from 'lucide-react'
import { specializedServices } from '../data/site'

const plantStopPillars = [
  {
    number: '01',
    title: 'Planeación Estratégica',
    desc: 'Diseño de cronogramas minuciosos, ruta crítica y asignación anticipada de recursos para minimizar tiempos de inactividad.',
    icon: CalendarClock,
  },
  {
    number: '02',
    title: 'Seguridad Integral',
    desc: 'Rigurosos protocolos de seguridad bajo estándares mineros Ley 29783 para proteger a nuestros colaboradores, equipos y entorno.',
    icon: ShieldCheck,
  },
  {
    number: '03',
    title: 'Ejecución Precisa',
    desc: 'Intervenciones mecánicas y electromecánicas críticas 24/7 realizadas por cuadrillas multidisciplinarias altamente capacitadas.',
    icon: Wrench,
  },
  {
    number: '04',
    title: 'Tecnología de vanguardia',
    desc: 'Herramientas de torque calibrado, alineación láser y monitoreo en tiempo real para un comisionamiento seguro y trazable.',
    icon: Cpu,
  },
]

const specialistCards = [
  { title: 'Planeación y Programación', subtitle: 'Ruta crítica y cronogramas de parada' },
  { title: 'Refinerías', subtitle: 'Mantenimiento en unidades de proceso térmico' },
  { title: 'Plantas Mineras', subtitle: 'Chancado, molienda, celdas y flotación' },
  { title: 'Plantas de Tratamiento', subtitle: 'Espesadores, filtros y clarificadores' },
  { title: 'Sistemas de Transporte', subtitle: 'Fajas transportadoras, polines y chutes' },
  { title: 'BOP (Balance of Plant)', subtitle: 'Sistemas auxiliares, compresores y bombas' },
  { title: 'Arenado / Granallado', subtitle: 'Preparación superficial y pintura epóxica' },
  { title: 'Soldaduras Especiales', subtitle: 'Homologadas AWS D1.1 en alta exigencia' },
  { title: 'Pruebas y Puesta en Marcha', subtitle: 'Comisionamiento y arranque seguro' },
  { title: 'Digital Twins', subtitle: 'Modelado y monitoreo tecnológico predictivo' },
]

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
            {current.id === 'paradas-de-planta' ? (
              /* ============================================================ */
              /* PLANTILLA PERSONALIZADA: PARADAS DE PLANTA                   */
              /* ============================================================ */
              <div className="space-y-8">
                {/* a) Banner superior de alto impacto con llamada a la acción */}
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-950 via-slate-900 to-navy-deep text-white p-6 sm:p-8 border border-slate-800 shadow-md">
                  <div className="absolute -right-8 -bottom-8 w-56 h-56 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="max-w-xl">
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                        <Flame className="h-3.5 w-3.5" />
                        <span>Especialidad Crítica 24/7 • Paradas de Planta</span>
                      </div>
                      <h3 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                        Paradas de Planta
                      </h3>
                      <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                        Planeación estratégica, gestión de activos y ejecución integral 24/7 en faenas mineras e industriales, optimizando tiempos de inactividad con cero accidentes.
                      </p>
                    </div>

                    <div className="shrink-0 flex flex-col items-start md:items-end gap-2">
                      <button
                        type="button"
                        onClick={() => handleSelectCotizacion(current.title)}
                        className="inline-flex items-center justify-center gap-2 rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
                      >
                        <span>Solicitar Cotización</span>
                        <ArrowRight size={16} />
                      </button>
                      <span className="text-[11px] text-slate-400">
                        Atención técnica inmediata
                      </span>
                    </div>
                  </div>
                </div>

                {/* b) Bloque de 4 pilares en grilla 2x2 */}
                <div>
                  <div className="mb-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">
                      Metodología Operativa
                    </p>
                    <h4 className="text-xl sm:text-2xl font-bold text-slate-900">
                      Pilares de Ejecución
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {plantStopPillars.map((p) => {
                      const Icon = p.icon
                      return (
                        <div
                          key={p.number}
                          className="rounded-lg border border-slate-200 bg-slate-50/70 p-5 hover:bg-white hover:border-amber-400 hover:shadow-sm transition-all"
                        >
                          <div className="flex items-start gap-3.5">
                            <span className="font-display text-2xl font-bold text-amber-600 leading-none">
                              {p.number}.
                            </span>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1.5">
                                <Icon className="h-4.5 w-4.5 text-navy shrink-0" />
                                <h5 className="text-base font-bold text-slate-900">
                                  {p.title}
                                </h5>
                              </div>
                              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                {p.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* c) Bloque "¡Somos especialistas!" con descripción y 10 tarjetas con flecha */}
                <div>
                  <div className="mb-5">
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Experiencia y Cobertura Integral</span>
                    </div>
                    <h4 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                      ¡Somos especialistas!
                    </h4>
                    <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                      Con amplia trayectoria en plantas concentradoras, refinerías y complejos mineros e industriales, nuestro equipo multidisciplinario asegura disponibilidad operativa en cada frente crítico de parada de planta:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {specialistCards.map((card, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleSelectCotizacion(`Parada de Planta: ${card.title}`)}
                        className="group flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white p-3.5 shadow-2xs hover:border-amber-500 hover:shadow-md hover:bg-amber-50/30 transition-all duration-200 cursor-pointer"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-slate-100 text-slate-700 font-bold text-xs group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                            {(idx + 1).toString().padStart(2, '0')}
                          </span>
                          <div className="truncate">
                            <span className="block text-sm font-bold text-slate-900 group-hover:text-navy transition-colors truncate">
                              {card.title}
                            </span>
                            <span className="block text-[11px] text-slate-500 truncate">
                              {card.subtitle}
                            </span>
                          </div>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* ============================================================ */
              /* PLANTILLA ESTÁNDAR: DEMÁS ESPECIALIDADES                     */
              /* ============================================================ */
              <div>
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
                  {current.description || current.shortDesc}
                </p>

                {/* Lista de Alcances Técnicos con viñetas sobrias */}
                <div className="rounded-md bg-slate-50 p-5 border border-slate-200/80 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                    Alcances Técnicos y Procedimientos Operativos:
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {(current.items || current.features || []).map((feature, i) => (
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
                    {current.images && current.images.map((img, i) => (
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
            )}
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
