export default function ClientsLogoMarquee() {
  const clients = [
    {
      id: 'minsur',
      name: 'MINSUR',
      subtext: 'Unidad San Rafael - Puno',
      color: '#005a9c',
      icon: (
        <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
          <rect width="36" height="36" rx="8" fill="#005A9C" />
          <path d="M9 25V11L18 19L27 11V25" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="18" cy="24" r="2.5" fill="#E31B23" />
        </svg>
      )
    },
    {
      id: 'antamina',
      name: 'ANTAMINA',
      subtext: 'Compañía Minera',
      color: '#00796b',
      icon: (
        <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
          <rect width="36" height="36" rx="8" fill="#004D40" />
          <path d="M18 8L27 24H9L18 8Z" fill="#F57C00" />
          <path d="M18 14L23 23H13L18 14Z" fill="#FFFFFF" />
        </svg>
      )
    },
    {
      id: 'cerro-verde',
      name: 'CERRO VERDE',
      subtext: 'Sociedad Minera',
      color: '#1b5e20',
      icon: (
        <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
          <rect width="36" height="36" rx="8" fill="#1B5E20" />
          <path d="M8 26L15 13L21 21L25 15L29 26H8Z" fill="#81C784" />
          <circle cx="26" cy="11" r="3" fill="#FFB300" />
        </svg>
      )
    },
    {
      id: 'southern-copper',
      name: 'SOUTHERN COPPER',
      subtext: 'Grupo México',
      color: '#b71c1c',
      icon: (
        <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
          <rect width="36" height="36" rx="8" fill="#B71C1C" />
          <circle cx="18" cy="18" r="9" stroke="#FFA726" strokeWidth="3" />
          <path d="M18 12V24M12 18H24" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'las-bambas',
      name: 'LAS BAMBAS',
      subtext: 'Minería MMG',
      color: '#00838f',
      icon: (
        <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
          <rect width="36" height="36" rx="8" fill="#00838F" />
          <rect x="9" y="11" width="8" height="14" rx="2" fill="#E65100" />
          <rect x="19" y="11" width="8" height="14" rx="2" fill="#FFFFFF" />
        </svg>
      )
    },
    {
      id: 'buenaventura',
      name: 'BUENAVENTURA',
      subtext: 'Compañía de Minas',
      color: '#f57f17',
      icon: (
        <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
          <rect width="36" height="36" rx="8" fill="#263238" />
          <path d="M11 25L18 10L25 25" stroke="#FBC02D" strokeWidth="3" strokeLinecap="round" />
          <path d="M14 20H22" stroke="#FFFFFF" strokeWidth="2.5" />
        </svg>
      )
    },
    {
      id: 'hudbay',
      name: 'HUDBAY PERÚ',
      subtext: 'Constancia Mining',
      color: '#00695c',
      icon: (
        <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
          <rect width="36" height="36" rx="8" fill="#00695C" />
          <path d="M11 10V26M25 10V26M11 18H25" stroke="#80CBC4" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'antapaccay',
      name: 'ANTAPACCAY',
      subtext: 'Glencore Operations',
      color: '#e65100',
      icon: (
        <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
          <rect width="36" height="36" rx="8" fill="#E65100" />
          <path d="M18 9L26 24H10L18 9Z" stroke="#FFE082" strokeWidth="2.5" />
          <circle cx="18" cy="19" r="2.5" fill="#FFFFFF" />
        </svg>
      )
    },
    {
      id: 'nexa',
      name: 'NEXA RESOURCES',
      subtext: 'Minería & Metalurgia',
      color: '#0277bd',
      icon: (
        <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
          <rect width="36" height="36" rx="8" fill="#0277BD" />
          <path d="M10 24L18 12L26 24" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round"/>
          <path d="M14 20L22 20" stroke="#4FC3F7" strokeWidth="2.5"/>
        </svg>
      )
    },
    {
      id: 'hochschild',
      name: 'HOCHSCHILD',
      subtext: 'Mining Perú',
      color: '#1a237e',
      icon: (
        <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
          <rect width="36" height="36" rx="8" fill="#1A237E" />
          <path d="M12 11V25M24 11V25M12 18H24" stroke="#FFD54F" strokeWidth="3" strokeLinecap="round" />
          <circle cx="18" cy="18" r="2" fill="#FFFFFF" />
        </svg>
      )
    }
  ]

  // Duplicamos el arreglo para garantizar el bucle infinito al desplazarse -50%
  const marqueeList = [...clients, ...clients]

  return (
    <section aria-label="Clientes y proyectos mineros" className="relative border-b border-slate-200/80 bg-slate-50 py-8 sm:py-10 overflow-hidden">
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
              className="group mx-2.5 sm:mx-3.5 flex items-center gap-3.5 rounded-xl border border-slate-200/80 bg-white px-4 py-2.5 sm:px-5 sm:py-3 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-300 cursor-default select-none shrink-0"
            >
              {/* Contenedor de icono con filtro en escala de grises que pasa a color en hover */}
              <div className="shrink-0 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                {client.icon}
              </div>

              {/* Textos del cliente */}
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold tracking-tight text-slate-800 transition-colors duration-200 group-hover:text-slate-950">
                  {client.name}
                </span>
                <span className="text-[11px] font-medium text-slate-500 transition-colors duration-200 group-hover:text-slate-700">
                  {client.subtext}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

