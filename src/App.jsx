import { useState } from 'react'
import TopBar from './components/TopBar'
import Header from './components/Header'
import About from './components/About'
import RegionalCommitment from './components/RegionalCommitment'
import Services from './components/Services'
import Cotizador from './components/Cotizador'
import Differentials from './components/Differentials'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export function Hero() {
  return (
    <section id="inicio" className="relative bg-slate-900 text-white min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/16042295/pexels-photo-16042295.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Servicios de minería y obras civiles SSJ Contratistas" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40 z-10"></div>
      </div>

      {/* 2. Contenedor de contenido en capa superior z-20 */}
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 z-20">
        <div className="max-w-xl text-left">
          <p className="text-xs font-bold tracking-widest text-amber-400 uppercase mb-3">
            Ingeniería y Construcción Minera
          </p>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08]">
            Soluciones Integrales en Ingeniería, Obras Civiles y Servicios Mineros
          </h1>

          <p className="mt-6 max-w-xl text-lg sm:text-xl text-slate-200 leading-relaxed">
            Ejecución de proyectos de infraestructura, metalmecánica, termofusión HDPE y alquiler de maquinaria pesada con altos estándares de seguridad.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#cotizador"
              className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-3.5 rounded-sm shadow-md transition text-center"
            >
              Solicitar Cotización B2B
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center border border-slate-300 text-white hover:bg-white/10 font-medium px-8 py-3.5 rounded-sm transition text-center"
            >
              Ver Servicios
            </a>
          </div>
        </div>
      </div>

      {/* 3. Franja inferior discreta z-20 */}
      <div className="absolute bottom-0 inset-x-0 border-t border-white/15 bg-slate-950/70 backdrop-blur-xs py-3.5 px-4 z-20">
        <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-8 text-xs sm:text-sm font-medium text-slate-300">
          <span>Cobertura en Puno y Sur del Perú</span>
          <span className="hidden md:inline text-amber-500/60" aria-hidden="true">|</span>
          <span>Cumplimiento Ley 29783</span>
          <span className="hidden md:inline text-amber-500/60" aria-hidden="true">|</span>
          <span>Flota de Equipos Disponibles</span>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  const [selectedService, setSelectedService] = useState('')

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle)
  }

  return (
    <>
      {/* TOP BAR CORPORATIVO */}
      <TopBar />

      {/* HEADER PRINCIPAL */}
      <Header />

      <main>
        {/* PORTADA / HERO CORREGIDA CON CAPAS Y Z-INDEX */}
        <Hero />

        {/* NOSOTROS */}
        <About />

        {/* RESPONSABILIDAD SOCIAL Y COMPROMISO REGIONAL (PUNO) */}
        <RegionalCommitment />

        {/* GRID DE SERVICIOS ESPECIALIZADOS - PESTAÑAS INTERACTIVAS */}
        <Services onSelectService={handleSelectService} />

        {/* COTIZADOR RÁPIDO B2B */}
        <Cotizador selectedService={selectedService} />

        {/* POR QUÉ SSJ / DIFERENCIALES */}
        <Differentials />

        {/* REGISTRO FOTOGRÁFICO / GALERÍA */}
        <Gallery />

        {/* CONTACTO Y ATENCIÓN */}
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* BOTÓN FLOTANTE PERMANENTE DE WHATSAPP */}
      <FloatingWhatsApp />
    </>
  )
}
