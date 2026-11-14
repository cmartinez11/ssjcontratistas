import { useState } from 'react'
import { Mail, MapPin, Phone, Clock } from 'lucide-react'
import { company, services, waLink } from '../data/site'
import { Button } from './ui'

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRe = /^[+\d][\d\s-]{6,}$/

function validate(v) {
  const e = {}
  if (v.nombre.trim().length < 3) e.nombre = 'Escriba su nombre completo.'
  if (!emailRe.test(v.contacto.trim()) && !phoneRe.test(v.contacto.trim())) e.contacto = 'Ingrese un correo o un teléfono válido.'
  if (v.mensaje.trim().length < 10) e.mensaje = 'Describa brevemente lo que necesita (mínimo 10 caracteres).'
  if (!v.acceptedPrivacy) e.privacy = 'Debe aceptar la Política de Privacidad para continuar.'
  return e
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block font-semibold text-navy">{label}</label>
      {children}
      {error && <p id={`${id}-error`} role="alert" className="mt-1 text-sm text-red-700">{error}</p>}
    </div>
  )
}

const input = 'w-full rounded-sm border border-navy/30 bg-white px-3 py-2.5 focus:border-navy'

export default function Contact({ onOpenLegal }) {
  const [v, setV] = useState({ nombre: '', contacto: '', servicio: '', mensaje: '', acceptedPrivacy: false })
  const [errors, setErrors] = useState({})
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const found = validate(v)
    setErrors(found)
    if (Object.keys(found).length) return
    const text = `Hola, soy ${v.nombre}. ${v.servicio ? `Servicio: ${v.servicio}. ` : ''}${v.mensaje} Contacto: ${v.contacto}`
    window.open(waLink(text), '_blank', 'noopener')
  }

  return (
    <section id="contacto" className="bg-paper py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="text-xs font-bold tracking-widest text-amber-600 uppercase mb-2">
            Oficina Central & Operaciones
          </p>
          <h2 className="font-display text-4xl font-bold text-navy sm:text-5xl">Canales de Contacto Directo</h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-slate-600">Comuníquese con nuestra oficina para coordinar requerimientos y visitas técnicas a faena.</p>

          <div className="mt-8 space-y-6 divide-y divide-navy/15 border-y border-navy/15 py-4">
            {/* Teléfono / WhatsApp */}
            <div className="flex gap-4 pt-2">
              <Phone size={22} className="mt-1 shrink-0 text-amber-600" aria-hidden="true" />
              <div>
                <p className="font-semibold text-navy text-xs uppercase tracking-wider mb-1">Teléfono / WhatsApp Directo</p>
                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-slate-900 hover:text-amber-600 underline decoration-cat decoration-2 underline-offset-4"
                >
                  {company.phone}
                </a>
                <p className="text-xs text-slate-500 mt-0.5">Atención y cotizaciones inmediatas por WhatsApp</p>
              </div>
            </div>

            {/* Correos Electrónicos */}
            <div className="flex gap-4 pt-4">
              <Mail size={22} className="mt-1 shrink-0 text-amber-600" aria-hidden="true" />
              <div className="space-y-2">
                <p className="font-semibold text-navy text-xs uppercase tracking-wider mb-1">Correos Electrónicos</p>
                <div>
                  <span className="text-xs font-bold text-slate-500 block uppercase">Correo Comercial:</span>
                  <a
                    href="mailto:comercial@ssjcontratistas.com"
                    className="text-slate-800 hover:text-amber-600 underline decoration-cat decoration-2 underline-offset-4 text-sm sm:text-base font-semibold"
                  >
                    comercial@ssjcontratistas.com
                  </a>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 block uppercase">Correo Gerencia:</span>
                  <a
                    href="mailto:gerencia@ssjcontratistas.com"
                    className="text-slate-800 hover:text-amber-600 underline decoration-cat decoration-2 underline-offset-4 text-sm sm:text-base font-semibold"
                  >
                    gerencia@ssjcontratistas.com
                  </a>
                </div>
              </div>
            </div>

            {/* Ubicaciones / Sedes en Puno */}
            <div className="flex gap-4 pt-4">
              <MapPin size={22} className="mt-1 shrink-0 text-amber-600" aria-hidden="true" />
              <div className="space-y-3 w-full">
                <p className="font-semibold text-navy text-xs uppercase tracking-wider mb-1">Ubicaciones / Sedes en Puno</p>
                
                <div className="rounded-md bg-white p-3.5 border border-slate-200/90 shadow-2xs">
                  <span className="inline-block text-xs font-bold text-amber-600 uppercase tracking-wide">
                    Sede Antauta
                  </span>
                  <p className="text-sm text-slate-800 font-medium mt-0.5">
                    Av. Unión Antauta N° 122 – Antauta – Melgar – Puno
                  </p>
                </div>

                <div className="rounded-md bg-white p-3.5 border border-slate-200/90 shadow-2xs">
                  <span className="inline-block text-xs font-bold text-amber-600 uppercase tracking-wide">
                    Sede Juliaca
                  </span>
                  <p className="text-sm text-slate-800 font-medium mt-0.5">
                    Av. Aeroperú Mz J Lt 02 – Juliaca – San Román – Puno
                  </p>
                </div>
              </div>
            </div>

            {/* Horario de Atención */}
            <div className="flex gap-4 pt-4 pb-2">
              <Clock size={22} className="mt-1 shrink-0 text-amber-600" aria-hidden="true" />
              <div>
                <p className="font-semibold text-navy text-xs uppercase tracking-wider mb-1">Horario de Atención</p>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {company.hours}
                </p>
              </div>
            </div>
          </div>

          <Button href={waLink()} target="_blank" rel="noopener noreferrer" className="mt-8">
            Escribir por WhatsApp
          </Button>
        </div>

        <form onSubmit={submit} noValidate className="space-y-5 bg-white p-6 sm:p-8 rounded-md border border-slate-200 shadow-sm">
          <Field id="nombre" label="Nombre" error={errors.nombre}>
            <input id="nombre" className={input} value={v.nombre} onChange={set('nombre')} autoComplete="name" aria-invalid={!!errors.nombre} aria-describedby={errors.nombre ? 'nombre-error' : undefined} />
          </Field>
          <Field id="contacto" label="Correo o teléfono" error={errors.contacto}>
            <input id="contacto" className={input} value={v.contacto} onChange={set('contacto')} autoComplete="email" aria-invalid={!!errors.contacto} aria-describedby={errors.contacto ? 'contacto-error' : undefined} />
          </Field>
          <Field id="servicio" label="Servicio de interés">
            <select id="servicio" className={input} value={v.servicio} onChange={set('servicio')}>
              <option value="">Seleccione un servicio</option>
              {services.map((s) => <option key={s.title}>{s.title}</option>)}
            </select>
          </Field>
          <Field id="mensaje" label="Mensaje" error={errors.mensaje}>
            <textarea id="mensaje" rows="4" className={input} value={v.mensaje} onChange={set('mensaje')} aria-invalid={!!errors.mensaje} aria-describedby={errors.mensaje ? 'mensaje-error' : undefined} />
          </Field>
          <div className="pt-1">
            <div className="flex items-start gap-2.5">
              <input
                id="privacy-contact"
                type="checkbox"
                required
                checked={v.acceptedPrivacy}
                onChange={(e) => setV({ ...v, acceptedPrivacy: e.target.checked })}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-400 cursor-pointer"
              />
              <label htmlFor="privacy-contact" className="text-xs text-slate-600 leading-snug cursor-pointer">
                He leído y acepto la{' '}
                <button
                  type="button"
                  onClick={() => onOpenLegal && onOpenLegal('privacy')}
                  className="font-semibold text-navy hover:text-amber-600 underline cursor-pointer"
                >
                  Política de Privacidad
                </button>{' '}
                (Ley N° 29733 - Protección de Datos Personales).
              </label>
            </div>
            {errors.privacy && <p role="alert" className="mt-1 text-xs text-red-700 font-medium">{errors.privacy}</p>}
          </div>
          <button type="submit" className="w-full rounded-sm bg-navy px-6 py-3 font-semibold text-white transition-colors hover:bg-navy-deep cursor-pointer">
            Enviar solicitud por WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}
