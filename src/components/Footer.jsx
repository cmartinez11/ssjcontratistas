import { company, nav } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/85">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <a href="#" className="inline-block" aria-label="SSJ Contratistas, inicio">
            <img
              src="/images/logo-ssj-contratista.jpeg"
              alt="SSJ Contratistas"
              className="h-16 md:h-20 w-auto object-contain bg-white p-2 rounded-md shadow-sm"
            />
          </a>
          <p className="mt-4 max-w-xs text-sm">Construcción y servicios para minería. {company.city}.</p>
        </div>
        <nav aria-label="Pie de página">
          <ul className="space-y-2">
            {nav.map((n) => <li key={n.href}><a href={n.href} className="hover:text-cat">{n.label}</a></li>)}
          </ul>
        </nav>
        <div className="space-y-2 text-sm">
          <p><a href={`tel:+${company.whatsapp}`} className="hover:text-cat">{company.phone}</a></p>
          <p><a href={`mailto:${company.email}`} className="hover:text-cat">{company.email}</a></p>
          <p className="flex gap-4 pt-2">
            {company.social.map((s) => <a key={s.label} href={s.href} className="underline hover:text-cat">{s.label}</a>)}
          </p>
        </div>
      </div>
      <p className="border-t border-white/15 py-5 text-center text-sm">© {new Date().getFullYear()} {company.name}. Todos los derechos reservados | Hecho con ❤️ por <a href="https://www.femsperu.com" className="underline hover:text-cat">FEMS PERU</a></p>
    </footer>
  )
}
