import { MapPin, Mail, Phone } from 'lucide-react'
import { company, waLink } from '../data/site'

export default function TopBar() {
  return (
    <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 hidden md:flex justify-between items-center border-b border-slate-800">
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-1.5 text-slate-300">
          <MapPin size={13} className="text-amber-500 shrink-0" aria-hidden="true" />
          <span>{company.city}</span>
        </span>
        <span className="h-3 w-px bg-slate-800" aria-hidden="true" />
        <a
          href={`mailto:${company.email}`}
          className="flex items-center gap-1.5 text-slate-300 transition-colors hover:text-white"
        >
          <Mail size={13} className="text-amber-500 shrink-0" aria-hidden="true" />
          <span>{company.email}</span>
        </a>
      </div>

      <div className="flex items-center gap-4">
        <a
          href={waLink('Hola, me comunico desde el portal web para atención inmediata.')}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 font-medium text-slate-200 transition-colors hover:text-white"
        >
          <Phone size={13} className="text-amber-500" aria-hidden="true" />
          <span>
            Central de Atención WhatsApp:{' '}
            <strong className="font-semibold text-amber-400 group-hover:underline">{company.phone}</strong>
          </span>
        </a>
      </div>
    </div>
  )
}

