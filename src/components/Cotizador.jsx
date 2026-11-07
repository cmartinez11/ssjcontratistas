import { useState, useEffect } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { company, specializedServices, waLink } from '../data/site'

export default function Cotizador({ selectedService = '' }) {
  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    telefono: '',
    servicio: selectedService || specializedServices[0].title,
    ubicacion: '',
    detalle: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (selectedService) {
      setForm((prev) => ({ ...prev, servicio: selectedService }))
    }
  }, [selectedService])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.nombre.trim()) {
      setError('Por favor, ingrese su nombre y apellido.')
      return
    }
    if (!form.telefono.trim()) {
      setError('Por favor, ingrese un número de teléfono o WhatsApp de contacto.')
      return
    }

    setError('')

    const message = [
      '📋 *SOLICITUD DE COTIZACIÓN B2B - SSJ CONTRATISTAS*',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━',
      `⛏️ *Servicio requerido:* ${form.servicio || 'Servicio General'}`,
      `👤 *Contacto:* ${form.nombre}`,
      `🏢 *Empresa / Unidad:* ${form.empresa || 'Particular / No especificada'}`,
      `📱 *Teléfono:* ${form.telefono}`,
      `📍 *Ubicación del proyecto:* ${form.ubicacion || 'Puno / Sur del Perú'}`,
      form.detalle ? `📝 *Detalles del alcance:* ${form.detalle}` : null,
      '━━━━━━━━━━━━━━━━━━━━━━━━━━',
      '_Enviado desde el cotizador web de SSJ Contratistas_',
    ]
      .filter(Boolean)
      .join('\n')

    const url = waLink(message)
    window.open(url, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 8000)
  }

  return (
    <section id="cotizador" className="relative bg-white py-20 lg:py-28 border-y border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Columna Izquierda: Información Corporativa B2B */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-bold tracking-widest text-amber-600 uppercase mb-2">
                Atención Corporativa Inmediata
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy leading-tight">
                Cotizador Rápido B2B para Minería y Obras
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                Seleccione el servicio o equipo que su proyecto necesita. Nuestro equipo técnico evaluará sus requerimientos y emitirá una propuesta formal en menos de 24 horas.
              </p>
            </div>

            {/* Garantías Corporativas Sobrias */}
            <div className="space-y-4 rounded-sm bg-slate-50 p-6 border border-slate-200">
              <h3 className="font-display text-xl font-bold text-navy">
                Respaldos Comerciales de SSJ
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start">
                  <span className="text-slate-400 font-bold mr-2 select-none">—</span>
                  <span><strong>Respuesta en menos de 24 horas</strong> con dimensionamiento técnico preliminar.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 font-bold mr-2 select-none">—</span>
                  <span><strong>RNP Vigente</strong> para contratación con el Estado y empresas del sector minero.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 font-bold mr-2 select-none">—</span>
                  <span><strong>Protocolos Ley 29783</strong>, personal homologado y pólizas de seguro SCTR.</span>
                </li>
              </ul>
            </div>

            {/* Llamada Directa */}
            <div className="rounded-sm border-l-4 border-amber-500 bg-slate-900 p-5 text-white">
              <p className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                ¿Parada de planta o requerimiento urgente?
              </p>
              <div className="mt-2 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-slate-300">Línea Directa de Operaciones:</p>
                  <a
                    href={`tel:+${company.whatsapp}`}
                    className="text-lg font-bold text-white hover:text-amber-400 transition-colors"
                  >
                    {company.phone}
                  </a>
                </div>
                <a
                  href={waLink('Hola, tengo un requerimiento urgente para mi operación.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm bg-amber-500 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-amber-400 transition-colors"
                >
                  WhatsApp Directo
                </a>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario B2B Limpio */}
          <div className="lg:col-span-7">
            <div className="rounded-sm bg-slate-900 p-7 sm:p-10 shadow-lg border border-slate-800 text-white">
              <div className="mb-6">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  Formulario de Requerimiento Técnico
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-300">
                  Complete los datos y al presionar enviar se generará una solicitud formal lista para despachar por WhatsApp.
                </p>
              </div>

              {error && (
                <div className="mb-6 rounded-sm bg-red-950/80 border border-red-500 p-3 text-xs sm:text-sm text-red-200">
                  {error}
                </div>
              )}

              {submitted && (
                <div className="mb-6 rounded-sm bg-emerald-950/80 border border-emerald-500 p-3 text-xs sm:text-sm text-emerald-200 flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                  <span>¡Solicitud enviada a WhatsApp! Nuestro equipo técnico le responderá a la brevedad.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Selector de Servicio Especializado */}
                <div>
                  <label htmlFor="servicio" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Servicio o Equipo Requerido *
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    value={form.servicio}
                    onChange={handleChange}
                    className="w-full rounded-sm border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white focus:border-amber-500 focus:outline-none"
                  >
                    {specializedServices.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Múltiples Especialidades / Obra Integral">
                      Múltiples Especialidades / Obra Integral
                    </option>
                    <option value="Alquiler Específico de Maquinaria">
                      Alquiler Específico de Maquinaria
                    </option>
                  </select>
                </div>

                {/* Datos de Contacto y Empresa */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Nombre y Apellido *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Ej: Ing. Carlos Mamani"
                      className="w-full rounded-sm border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="empresa" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Empresa / Unidad Minera
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      value={form.empresa}
                      onChange={handleChange}
                      placeholder="Ej: Consorcio Minero / Constructora"
                      className="w-full rounded-sm border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="telefono" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="Ej: +51 987 654 321"
                      className="w-full rounded-sm border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="ubicacion" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Ubicación del Proyecto
                    </label>
                    <input
                      type="text"
                      id="ubicacion"
                      name="ubicacion"
                      value={form.ubicacion}
                      onChange={handleChange}
                      placeholder="Ej: Puno, Juliaca, Carabaya, Melgar..."
                      className="w-full rounded-sm border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Alcance / Detalles del requerimiento */}
                <div>
                  <label htmlFor="detalle" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Detalles del Alcance Técnico (Opcional)
                  </label>
                  <textarea
                    id="detalle"
                    name="detalle"
                    rows={3}
                    value={form.detalle}
                    onChange={handleChange}
                    placeholder="Describa brevemente metrajes estimados, fechas tentativas o especificaciones requeridas..."
                    className="w-full rounded-sm border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none"
                  />
                </div>

                {/* Botón de Envío */}
                <button
                  type="submit"
                  className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-sm bg-cat px-6 py-3.5 font-display text-lg font-bold uppercase tracking-wider text-navy hover:bg-[#e8b900] transition-colors shadow-md cursor-pointer"
                >
                  <Send size={18} />
                  <span>Enviar Cotización a WhatsApp (+51 972 207 465)</span>
                </button>

                <p className="text-center text-[11px] text-slate-400">
                  Al enviar, se abrirá WhatsApp con el mensaje estructurado para atención directa por gerencia.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
