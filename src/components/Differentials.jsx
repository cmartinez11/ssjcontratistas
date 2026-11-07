import { differentials } from '../data/site'

export default function Differentials() {
  return (
    <section id="diferenciales" className="bg-navy py-20 text-white lg:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-xs font-bold tracking-widest text-amber-400 uppercase mb-2">
          Ventajas Competitivas
        </p>
        <h2 className="max-w-2xl font-display text-4xl font-bold sm:text-5xl">Lo que nos distingue frente a otros contratistas</h2>
        <div className="mt-12 grid border-t border-white/25 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map(([t, d], i) => (
            <div key={t} className={`border-b border-white/25 py-8 sm:pr-8 lg:border-b-0 ${i > 0 ? 'lg:border-l lg:pl-8' : ''}`}>
              <h3 className="border-l-4 border-cat pl-3 font-display text-2xl font-semibold leading-tight">{t}</h3>
              <p className="mt-3 text-white/80">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
