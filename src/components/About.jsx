import { images } from '../data/images'
import { values } from '../data/site'
import { Photo } from './ui'

export default function About() {
  return (
    <section id="nosotros" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-12 lg:gap-16">
        <Photo {...images.about} className="aspect-[4/5] lg:col-span-5" />
        <div className="lg:col-span-7">
          <p className="text-xs font-bold tracking-widest text-amber-600 uppercase mb-2">
            Sobre SSJ Contratistas
          </p>
          <h2 className="font-display text-4xl font-bold text-navy sm:text-5xl">Contratista de obra y minería con base en Puno</h2>
          <div className="mt-6 max-w-prose space-y-4 text-lg leading-relaxed">
            <p>SSJ Contratistas ejecuta obras y servicios para el sector minero y de construcción en el sur del Perú. Con base operativa en Puno y experiencia en faenas sobre los 3,800 m.s.n.m., combinamos solvencia técnica, maquinaria pesada y personal altamente calificado.</p>
            <p className="text-sm text-slate-600">Reunimos ingeniería, obra civil, metalmecánica, electricidad y termofusión HDPE para que la empresa contratante coordine de forma ágil y transparente con una sola gerencia.</p>
          </div>
          <dl className="mt-10 divide-y divide-navy/15 border-y border-navy/15">
            {values.map(([k, v]) => (
              <div key={k} className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
                <dt className="font-display text-2xl font-semibold text-navy">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
