import { useEffect } from 'react'
import { X } from 'lucide-react'

export default function ImageLightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [image, onClose])

  if (!image) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.alt || 'Visualización de imagen en pantalla completa'}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      {/* Botón superior derecho de cerrar ("X" blanco grande) */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar imagen en pantalla completa"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all duration-200 cursor-pointer focus:outline-none"
      >
        <X size={32} className="text-white drop-shadow-md" />
      </button>

      {/* Contenedor central sin propagación de click */}
      <div
        className="relative max-h-[90vh] max-w-[95vw] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.alt || 'Fotografía de obra SSJ Contratistas'}
          className="max-h-[90vh] max-w-[95vw] w-auto h-auto object-contain rounded-lg shadow-2xl select-none"
        />

        {image.alt && (
          <p className="mt-3 text-center text-xs sm:text-sm text-slate-300 bg-black/60 backdrop-blur-xs px-4 py-1.5 rounded-full max-w-xl truncate">
            {image.alt}
          </p>
        )}
      </div>
    </div>
  )
}

