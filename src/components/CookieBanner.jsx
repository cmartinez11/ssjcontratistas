import { useState, useEffect } from 'react'
import { Cookie, Check, Shield } from 'lucide-react'

export default function CookieBanner({ onOpenCookiesPolicy }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    try {
      const consent = localStorage.getItem('ssj_cookie_consent')
      if (!consent) {
        setIsVisible(true)
      }
    } catch {
      // Si localStorage no está disponible, mostrar el banner por defecto
      setIsVisible(true)
    }
  }, [])

  const handleConsent = (level) => {
    try {
      localStorage.setItem('ssj_cookie_consent', level)
    } catch {
      // Ignorar fallos de almacenamiento en modos restringidos
    }
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      role="region"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 inset-x-0 z-40 bg-slate-950 text-white border-t border-slate-800 p-4 sm:p-5 shadow-2xl animate-fadeIn"
    >
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Texto informativo */}
        <div className="flex items-start gap-3 max-w-3xl">
          <Cookie className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            En <strong className="text-white">SSJ Contratistas Generales S.A.C.</strong> utilizamos cookies técnicas
            propias y de terceros (Google Maps) para garantizar el funcionamiento del portal, visualizar la geolocalización
            satelital de proyectos mineros y mejorar su experiencia. Para más información, consulte nuestra{' '}
            <button
              type="button"
              onClick={onOpenCookiesPolicy}
              className="text-amber-400 hover:text-amber-300 underline font-semibold transition-colors cursor-pointer"
            >
              Política de Cookies
            </button>
            .
          </p>
        </div>

        {/* Botones de acción */}
        <div className="flex items-center gap-2.5 shrink-0 self-end md:self-center">
          <button
            type="button"
            onClick={() => handleConsent('essential')}
            className="rounded-sm border border-slate-700 bg-slate-900 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
          >
            Solo esenciales
          </button>
          <button
            type="button"
            onClick={() => handleConsent('all')}
            className="inline-flex items-center gap-1.5 rounded-sm bg-cat hover:bg-[#e8b900] px-5 py-2 text-xs sm:text-sm font-bold text-navy transition-colors shadow-sm cursor-pointer"
          >
            <Check size={16} />
            <span>Aceptar todas</span>
          </button>
        </div>
      </div>
    </div>
  )
}

