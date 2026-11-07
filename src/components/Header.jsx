import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav } from '../data/site'
import { Button } from './ui'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white shadow-xs">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <a href="#" className="flex items-center" aria-label="SSJ Contratistas, inicio">
          <img
            src="/images/logo-ssj-contratista.jpeg"
            alt="SSJ Contratistas"
            className="h-10 md:h-12 w-auto object-contain"
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
        </nav>
      )}
    </header>
  )
}
