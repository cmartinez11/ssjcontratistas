export default function RegionalCommitment() {
  const pillars = [
    {
      badge: 'Ley N° 29783 & D.S. 024-2016-EM',
      title: 'Seguridad e Higiene Ocupacional',
      description:
        'Prioridad absoluta en la integridad y salud de nuestros colaboradores, operarios y personal en faenas mineras e industriales.',
      items: [
        'Cultura de Cero Accidentes con IPERC continuo en campo.',
        'EPP normado y homologado para alta montaña (> 3,800 m.s.n.m.).',
        'Cobertura integral SCTR Salud y Pensión en todas las operaciones.',
      ],
    },
    {
      badge: 'Sostenibilidad & OEFA',
      title: 'Cuidado y Sostenibilidad Ambiental',
      description:
        'Prácticas rigurosas de mitigación de impacto ambiental, protección de bofedales y preservación de fuentes de agua en la región Puno.',
      items: [
        'Manejo integral de residuos sólidos e hidrocarburos.',
        'Control estricto de polvos, ruidos y sedimentación en cauces.',
        'Termofusión limpia y procedimientos con nulo derrame de fluidos.',
      ],
    },
    {
      badge: 'Desarrollo Comunitario',
      title: 'Empleo Local Cualificado',
      description:
        'Compromiso genuino con las comunidades de Puno a través de oportunidades laborales formales y valor compartido.',
      items: [
        'Prioridad en la contratación de mano de obra local calificada.',
        'Capacitación continua en seguridad y competencias técnicas de obra.',
        'Alianzas con proveedores puneños para dinamizar la economía local.',
      ],
    },
  ]

  return (
    <section id="compromiso" className="bg-slate-100 py-16 sm:py-20 lg:py-24 border-y border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest text-amber-600 uppercase mb-2">
            Compromiso Regional & Minería Responsable
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
            Responsabilidad Social, Seguridad y Sostenibilidad
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            En SSJ CONTRATISTAS integramos la excelencia técnica con el estricto cumplimiento de la Ley N° 29783 de Seguridad y Salud en el Trabajo, preservación de ecosistemas altoandinos y generación de empleo formal en las comunidades puneñas.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col justify-between rounded-sm bg-white p-7 sm:p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div>
                <p className="text-xs font-bold tracking-wider uppercase text-slate-500 mb-2">
                  {pillar.badge}
                </p>

                <h3 className="font-display text-2xl font-bold text-navy mb-3">
                  {pillar.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-600 mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="border-t border-slate-100 pt-5">
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {pillar.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-slate-400 font-bold mr-2 select-none">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Barra inferior de acreditación limpia */}
        <div className="mt-12 rounded-sm bg-slate-900 p-6 sm:p-7 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="font-display text-xl font-bold">Operaciones Mineras Homologadas y Seguras</p>
            <p className="mt-1 text-xs sm:text-sm text-slate-300">
              Trabajamos bajo estándares corporativos mineros internacionales.
            </p>
          </div>
          <a
            href="#cotizador"
            className="shrink-0 rounded-sm bg-amber-500 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950 hover:bg-amber-400 transition-colors"
          >
            Coordinar Proyecto
          </a>
        </div>
      </div>
    </section>
  )
}
