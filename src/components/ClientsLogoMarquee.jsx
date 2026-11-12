export default function ClientsLogoMarquee() {
  const clients = [
    { id: 'amphos', name: 'Amphos 21', src: '/images/logos/amphos.jpg' },
    { id: 'bisa', name: 'BISA', src: '/images/logos/bisa.jpg' },
    { id: 'lube', name: 'Lube', src: '/images/logos/lube.jpg' },
    { id: 'minsur', name: 'MINSUR', src: '/images/logos/minsur.jpg' },
    { id: 'nexa', name: 'Nexa Resources', src: '/images/logos/nexa.jpg' },
    { id: 'stantec', name: 'Stantec', src: '/images/logos/stantec.jpg' },
    { id: 'stracon', name: 'Stracon', src: '/images/logos/stracon.jpg' },
    { id: 'ur', name: 'UR', src: '/images/logos/ur.jpg' },
    { id: 'volcan', name: 'Volcan', src: '/images/logos/volcan.jpg' },
    { id: 'wsp', name: 'WSP', src: '/images/logos/wsp.jpg' },
  ]

  // Duplicamos el arreglo para que el desplazamiento infinito horizontal funcione sin cortes (-50%)
  const marqueeList = [...clients, ...clients]

  return (
    <section aria-label="Clientes y operaciones mineras" className="relative border-b border-slate-200/80 bg-slate-50 py-8 sm:py-10 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-5 sm:mb-6 text-center">
        <p className="text-xs sm:text-sm font-semibold tracking-wider text-slate-500 uppercase">
          Empresas y operaciones vinculadas al sector minero e industrial
        </p>
      </div>

      {/* Contenedor del Marquee con máscaras de degradado en los extremos */}
      <div className="relative w-full overflow-hidden">
        {/* Máscara de degradado izquierda */}
        <div 
          className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 sm:w-28 md:w-36 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent" 
          aria-hidden="true"
        />

        {/* Máscara de degradado derecha */}
        <div 
          className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 sm:w-28 md:w-36 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent" 
          aria-hidden="true"
        />

        {/* Pista de animación Marquee */}
        <div className="animate-marquee py-2 items-center">
          {marqueeList.map((client, idx) => (
            <div
              key={`${client.id}-${idx}`}
              className="bg-white px-6 py-4 rounded-lg border border-slate-200/80 shadow-xs flex items-center justify-center min-w-[180px] h-20 mx-2.5 sm:mx-3 shrink-0 select-none"
            >
              <img
                src={client.src}
                alt={client.name}
                className="h-12 md:h-14 w-auto max-w-[160px] object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
