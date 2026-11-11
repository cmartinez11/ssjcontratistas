import { Target, Eye, ShieldCheck, Scale, Award, Users, Handshake, CheckCircle2 } from 'lucide-react'
import { images } from '../data/images'
import { Photo } from './ui'

const corporateValues = [
  {
    title: '1. Seguridad',
    desc: 'Desarrollamos todas nuestras actividades de manera segura.',
    icon: ShieldCheck,
  },
  {
    title: '2. Integridad',
    desc: 'Actuamos con absoluta honestidad, transparencia y respeto.',
    icon: Scale,
  },
  {
    title: '3. Excelencia',
    desc: 'Buscamos ser los mejores en lo que hacemos.',
    icon: Award,
  },
  {
    title: '4. Responsabilidad',
    desc: 'Respetamos a todos nuestros grupos de interés y somos social y ambientalmente responsables.',
    icon: Users,
  },
  {
    title: '5. Compromiso',
    desc: 'Cumplimos con todo aquello con lo que nos comprometemos, somos perseverantes.',
    icon: Handshake,
  },
  {
    title: '6. Calidad',
    desc: 'El permanente esfuerzo por alcanzar la excelencia en cada servicio que ejecutamos.',
    icon: CheckCircle2,
  },
]

export default function About() {
  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Presentación Principal */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          <Photo {...images.about} className="aspect-[4/5] lg:col-span-5" />
          <div className="lg:col-span-7">
            <p className="text-xs font-bold tracking-widest text-amber-600 uppercase mb-2">
              Sobre SSJ Contratistas
            </p>
            <h2 className="font-display text-4xl font-bold text-navy sm:text-5xl">
              Contratista de obra y minería con base en Puno
            </h2>
            <div className="mt-6 max-w-prose space-y-4 text-lg leading-relaxed text-slate-700">
              <p>
                SSJ Contratistas ejecuta obras y servicios para el sector minero y de construcción en Perú. Con amplia experiencia en faenas sobre los 3,800 m.s.n.m., combinamos solvencia técnica, maquinaria pesada y personal altamente calificado.
              </p>
              <p className="text-sm text-slate-600">
                Reunimos ingeniería, obra civil, metalmecánica, electricidad y termofusión HDPE para que la empresa contratante coordine de forma ágil y transparente con una sola gerencia.
              </p>
            </div>
          </div>
        </div>

        {/* 1. Estructura de Misión y Visión (2 tarjetas contiguas en grid md:grid-cols-2) */}
        <div className="mt-14 md:mt-16 grid gap-6 md:grid-cols-2">
          {/* MISIÓN */}
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-7 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute top-0 left-0 h-1.5 w-full bg-amber-500" />
            <div className="flex items-center gap-3.5 mb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Misión
              </h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Somos una empresa comprometida con nuestros clientes cumpliendo con los compromisos asumidos, en plazo y calidad. Preservando la seguridad, salud ocupacional, medio ambiente y responsabilidad social. En un ambiente de confianza como base para mantener buenas relaciones institucionales con todos nuestros grupos de interés.
            </p>
          </div>

          {/* VISIÓN */}
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-7 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute top-0 left-0 h-1.5 w-full bg-navy" />
            <div className="flex items-center gap-3.5 mb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy/10 text-navy">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Visión
              </h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Ser una empresa líder en Ingeniería, construcción y minería, brindando productos de alta calidad, excelente servicio en plazo y costo, para conseguir la total satisfacción de nuestros clientes.
            </p>
          </div>
        </div>

        {/* 2. Estructura de Valores Corporativos (Grid de 6 tarjetas de 3x2 / 2x3 con bordes limpios en bg-white / border-slate-200) */}
        <div className="mt-14 md:mt-16">
          <div className="mb-8 text-center md:text-left">
            <p className="text-xs font-bold tracking-widest text-amber-600 uppercase mb-2">
              Pilares de nuestra cultura
            </p>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              NUESTROS VALORES
            </h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {corporateValues.map((val) => {
              const Icon = val.icon
              return (
                <div
                  key={val.title}
                  className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-amber-400/70 transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-display text-xl font-bold text-slate-900 group-hover:text-navy transition-colors">
                      {val.title}
                    </h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
