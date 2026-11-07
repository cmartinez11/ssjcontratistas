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

export default function Contact() {
  const [v, setV] = useState({ nombre: '', contacto: '', servicio: '', mensaje: '' })
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

  const rows = [
    [Phone, 'Teléfono / WhatsApp', company.phone, `tel:+${company.whatsapp}`],
    [Mail, 'Correo', company.email, `mailto:${company.email}`],
    [MapPin, 'Ubicación', `${company.city}. ${company.address}`],
    [Clock, 'Horario', company.hours],
  ]

  return (
    <section id="contacto" className="bg-paper py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="text-xs font-bold tracking-widest text-amber-600 uppercase mb-2">
            Oficina Central & Operaciones
          </p>
          <h2 className="font-display text-4xl font-bold text-navy sm:text-5xl">Canales de Contacto Directo</h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-slate-600">Comuníquese con nuestra oficina en Puno o con nuestra gerencia de operaciones para coordinar requerimientos y visitas técnicas a faena.</p>
          <ul className="mt-8 divide-y divide-navy/15 border-y border-navy/15">
            {rows.map(([Icon, label, value, href]) => (
              <li key={label} className="flex gap-4 py-4">
                <Icon size={20} className="mt-1 shrink-0 text-navy" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-navy">{label}</p>
                  {href ? <a href={href} className="underline decoration-cat decoration-2 underline-offset-4">{value}</a> : <p>{value}</p>}
                </div>
              </li>
            ))}
          </ul>
          <Button href={waLink()} target="_blank" rel="noopener noreferrer" className="mt-8">Escribir por WhatsApp</Button>
        </div>
        <form onSubmit={submit} noValidate className="space-y-5 bg-white p-6 sm:p-8">
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
          <button type="submit" className="w-full rounded-sm bg-navy px-6 py-3 font-semibold text-white transition-colors hover:bg-navy-deep">
            Enviar solicitud por WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}
