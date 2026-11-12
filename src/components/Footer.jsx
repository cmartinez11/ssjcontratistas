import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { company, nav } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/85">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Columna 1: Logo y Presentación */}
        <div className="space-y-4">
          <a href="#" className="inline-block" aria-label="SSJ Contratistas, inicio">
            <img
              src="/images/logo-ssj-contratista.jpeg"
              alt="SSJ Contratistas"
              className="h-24 md:h-32 w-auto object-contain bg-white p-3 rounded-xl shadow-md block"
            />
          </a>
          <p className="text-sm text-slate-300 leading-relaxed">
            Ingeniería, construcción y servicios especializados para minería e industria en alta montaña.
          </p>
          <div className="pt-1 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 mb-1 font-semibold text-slate-300">
              <Clock size={14} className="text-amber-400 shrink-0" />
              <span>Horario de Atención:</span>
            </span>
            <p className="leading-snug">{company.hours}</p>
          </div>
        </div>

        {/* Columna 2: Navegación Rápida */}
        <div>
          <p className="font-display text-lg font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
            Navegación
          </p>
          <ul className="space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-slate-300 hover:text-amber-400 transition-colors">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3: Contacto Directo */}
        <div>
          <p className="font-display text-lg font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
            Contacto Directo
          </p>
          <div className="space-y-3 text-sm">
            <div>
              <span className="block text-xs font-semibold text-amber-400 uppercase">WhatsApp / Teléfono:</span>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white hover:text-amber-400 transition-colors inline-flex items-center gap-1.5 mt-0.5"
              >
                <Phone size={14} className="text-amber-400" />
                <span>{company.phone}</span>
              </a>
            </div>

            <div>
              <span className="block text-xs font-semibold text-amber-400 uppercase">Correo Comercial:</span>
              <a
                href="mailto:comercial@ssjcontratistas.com"
                className="text-slate-200 hover:text-amber-400 transition-colors inline-flex items-center gap-1.5 mt-0.5 break-all"
              >
                <Mail size={14} className="text-amber-400 shrink-0" />
                <span>comercial@ssjcontratistas.com</span>
              </a>
            </div>

            <div>
              <span className="block text-xs font-semibold text-amber-400 uppercase">Correo Gerencia:</span>
              <a
                href="mailto:gerencia@ssjcontratistas.com"
                className="text-slate-200 hover:text-amber-400 transition-colors inline-flex items-center gap-1.5 mt-0.5 break-all"
              >
                <Mail size={14} className="text-amber-400 shrink-0" />
                <span>gerencia@ssjcontratistas.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Columna 4: Sedes en Puno */}
        <div>
          <p className="font-display text-lg font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
            Sedes en Puno
          </p>
          <div className="space-y-3 text-xs text-slate-300">
            <div className="bg-white/5 rounded p-2.5 border border-white/10">
              <span className="flex items-center gap-1 font-bold text-amber-400 uppercase mb-1">
                <MapPin size={13} className="shrink-0" />
                <span>Sede Antauta:</span>
              </span>
              <p className="leading-snug">Av. Unión Antauta N° 122 – Antauta – Melgar – Puno</p>
            </div>

            <div className="bg-white/5 rounded p-2.5 border border-white/10">
              <span className="flex items-center gap-1 font-bold text-amber-400 uppercase mb-1">
                <MapPin size={13} className="shrink-0" />
                <span>Sede Juliaca:</span>
              </span>
              <p className="leading-snug">Av. Aeroperú Mz J Lt 02 – Juliaca – San Román – Puno</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15 py-5 px-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} {company.name}. Todos los derechos reservados | Hecho con ❤️ por{' '}
        <a href="https://www.femsperu.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-400">
          FEMS PERU
        </a>
      </div>
    </footer>
  )
}
