import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { nav, company, waLink } from '../data/site'
import { Button } from './ui'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white shadow-xs">
      <div className="mx-auto flex min-h-[90px] md:min-h-[108px] lg:min-h-[124px] max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 py-2 md:py-3">
        <a href="#" className="flex items-center" aria-label="SSJ Contratistas, inicio">
          <img
            src="/images/logo-ssj-contratista.jpeg"
            alt="SSJ Contratistas"
            className="h-20 md:h-24 lg:h-28 w-auto object-contain transition-all duration-300"
          />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-semibold text-slate-800 transition-colors hover:text-navy hover:underline hover:decoration-cat hover:decoration-2 hover:underline-offset-8"
            >
              {n.label}
            </a>
          ))}
          <Button href="#cotizador" variant="primary" className="py-2 px-5 text-sm">
            Cotizar Proyecto
          </Button>
        </nav>

        <button
          className="p-2 text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav id="menu-movil" aria-label="Móvil" className="border-t border-navy/10 bg-white px-5 pb-5 lg:hidden">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block border-b border-navy/10 py-3 font-medium text-slate-800"
            >
              {n.label}
            </a>
          ))}
          <Button href="#cotizador" onClick={() => setOpen(false)} className="mt-4 w-full">
            Cotizar Proyecto
          </Button>

          {/* Contacto Directo en Menú Móvil */}
          <div className="mt-4 pt-4 border-t border-slate-200 text-xs text-slate-600 space-y-2.5">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-bold text-slate-900 hover:text-amber-600"
            >
              <Phone size={15} className="text-amber-600 shrink-0" />
              <span>WhatsApp: {company.phone}</span>
            </a>
            <a
              href="mailto:comercial@ssjcontratistas.com"
              className="flex items-center gap-2 text-slate-700 hover:text-amber-600"
            >
              <Mail size={15} className="text-amber-600 shrink-0" />
              <span>comercial@ssjcontratistas.com</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
