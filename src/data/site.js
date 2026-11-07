import { images } from './images'

export const company = {
  name: 'SSJ Contratistas',
  whatsapp: '51972207465',
  phone: '+51 972 207 465',
  email: 'gerencia@ssjcontratistas.com',
  city: 'Puno, Perú',
  address: 'Oficina Central Puno / Operaciones en Mina',
  hours: 'Lunes a sábado, 7:00 a 19:00 | Atención de Emergencia 24/7 en Operaciones',
  social: [
    { label: 'Facebook', href: '#' },
    { label: 'LinkedIn', href: '#' },
  ],
}

export const waLink = (text = 'Hola, quisiera solicitar una cotización formal.') =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`

export const nav = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Compromiso Puno', href: '#compromiso' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Cotizador B2B', href: '#cotizador' },
  { label: 'Por qué SSJ', href: '#diferenciales' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
]

export const specializedServices = [
  {
    id: 'obras-civiles',
    title: 'Obras Civiles',
    shortDesc: 'Movimiento de tierras masivo, plataformas de perforación, cimentaciones y edificaciones modulares para campamentos mineros.',
    features: [
      'Movimiento masivo de tierras, excavaciones y accesos viales en mina',
      'Cimentaciones de concreto armado para molinos, chancadoras y tolvas',
      'Plataformas de perforación, tajos y presas de relave',
      'Construcción y habilitación de campamentos mineros modulares',
    ],
    images: [
      {
        src: 'https://images.pexels.com/photos/8809473/pexels-photo-8809473.jpeg',
        alt: 'Obras Civiles: Cimentaciones y estructuras de concreto armado',
      },
      {
        src: 'https://images.unsplash.com/photo-1580544859986-05322c53b1d4?auto=format&fit=crop&w=800&q=80',
        alt: 'Obras Civiles: Movimiento de tierras y conformación de plataformas',
      },
    ],
  },
  {
    id: 'ingenieria-modelado',
    title: 'Ingeniería y Modelado',
    shortDesc: 'Estudios de ingeniería básica y de detalle, modelado BIM/CAD, memorias de cálculo, expedientes técnicos y supervisión de obras en alta montaña.',
    features: [
      'Expedientes técnicos integrales y memorias descriptivas aprobadas',
      'Estudios geotécnicos, mecánica de suelos y estabilidad de taludes',
      'Diseño estructural y modelado digital para minería e industria',
      'Supervisión y aseguramiento de calidad QA/QC en campo',
    ],
    images: [
      {
        src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
        alt: 'Ingeniería: Supervisión técnica y gestión de planos en obra',
      },
      {
        src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
        alt: 'Modelado: Ensayos de laboratorio y modelado estructural',
      },
    ],
  },
  {
    id: 'metalmecanica',
    title: 'Metalmecánica',
    shortDesc: 'Fabricación y montaje de estructuras de acero pesado, tolvas, chutes de transferencia, tanques y coberturas industriales.',
    features: [
      'Fabricación y montaje de estructuras pesadas de acero estructural',
      'Fabricación de chutes de traspaso, tolvas y ductos de proceso minero',
      'Montaje de tanques de almacenamiento y tuberías de acero al carbono',
      'Procedimientos de soldadura homologada AWS D1.1 (3G, 4G y 6G)',
    ],
    images: [
      {
        src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80',
        alt: 'Metalmecánica: Soldadura homologada y fabricación de estructuras',
      },
      {
        src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
        alt: 'Metalmecánica: Montaje de naves y componentes industriales',
      },
    ],
  },
  {
    id: 'obras-electricas',
    title: 'Obras Eléctricas',
    shortDesc: 'Instalaciones de media y baja tensión en campamentos, subestaciones eléctricas, tableros de control y grupos electrógenos.',
    features: [
      'Tendido de líneas aéreas y subterráneas de media y baja tensión',
      'Montaje e interconexión de subestaciones y transformadores',
      'Fabricación e instalación de tableros de fuerza y control automatizado',
      'Mallas de puesta a tierra de alta exigencia en terreno rocoso minero',
    ],
    images: [
      {
        src: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
        alt: 'Obras Eléctricas: Montaje de tableros y canalizaciones en mina',
      },
      {
        src: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
        alt: 'Obras Eléctricas: Subestaciones eléctricas e infraestructura de media tensión',
      },
    ],
  },
  {
    id: 'mantenimiento-industrial',
    title: 'Mantenimiento Industrial',
    shortDesc: 'Servicios integrales de mantenimiento preventivo y paradas de planta, cambio de componentes de desgaste y revestimientos.',
    features: [
      'Gestión y ejecución de paradas de planta programadas 24/7',
      'Mantenimiento electromecánico de sistemas de molienda y chancado',
      'Reemplazo de placas y elementos de desgaste en tolvas y chutes',
      'Aplicación de revestimientos antidesgaste y pintura epóxica industrial',
    ],
    images: [
      {
        src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
        alt: 'Mantenimiento Industrial: Intervención mecánica en equipos de planta',
      },
      {
        src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
        alt: 'Mantenimiento Industrial: Inspección técnica y seguridad operativa',
      },
    ],
  },
  {
    id: 'tuberias-hdpe',
    title: 'Tuberías y Termofusión HDPE',
    shortDesc: 'Tendido, termofusión certificada y pruebas hidrostáticas en líneas de tubería HDPE para relaves, lixiviación y agua.',
    features: [
      'Termofusión y electrofusión de tuberías HDPE de alta presión (hasta 48 pulgadas)',
      'Tendido en terrenos escarpados de alta montaña y cruces especiales',
      'Líneas de relave, agua fresca, lixiviación ácida y drenaje minero',
      'Pruebas hidrostáticas certificadas y control de trazabilidad por soldadura',
    ],
    images: [
      {
        src: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=800&q=80',
        alt: 'Termofusión HDPE: Tendido de líneas de tubería de gran diámetro',
      },
      {
        src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
        alt: 'Termofusión HDPE: Unión certificada y control de presión en campo',
      },
    ],
  },
  {
    id: 'topografia-satelital',
    title: 'Topografía Satelital',
    shortDesc: 'Levantamientos con drones RTK, estación total de alta precisión, control de taludes en tajos y replanteo geodésico.',
    features: [
      'Fotogrametría y levantamientos topográficos con Drones RTK de alta cota',
      'Geodesia satelital y monitoreo milimétrico de estabilidad de taludes',
      'Replanteo de ejes, plataformas, gradientes y accesos mineros',
      'Cálculo y cubicación certificada de volúmenes de movimiento de tierras',
    ],
    images: [
      {
        src: 'https://images.pexels.com/photos/5802821/pexels-photo-5802821.jpeg',
        alt: 'Topografía: Estación total de precisión y geodesia satelital',
      },
      {
        src: 'https://images.pexels.com/photos/8961260/pexels-photo-8961260.jpeg',
        alt: 'Topografía: Control topográfico y levantamiento en campo',
      },
    ],
  },
  {
    id: 'alquiler-maquinaria',
    title: 'Alquiler de Maquinaria Pesada',
    shortDesc: 'Flota moderna de excavadoras sobre orugas, retroexcavadoras, cargadores frontales y volquetes con operadores certificados.',
    features: [
      'Excavadoras sobre orugas de 20 a 35 toneladas (Caterpillar / Komatsu)',
      'Camiones volquetes 6x4 y 8x4 de alto tonelaje para acarreo minero',
      'Tractores de oruga D6 / D8 y rodillos compactadores autopropulsados',
      'Operadores homologados con récord Cero Accidentes y SCTR vigente',
    ],
    images: [
      {
        src: 'https://images.unsplash.com/photo-1580901368919-7738efb0f87e?auto=format&fit=crop&w=800&q=80',
        alt: 'Alquiler de Maquinaria: Excavadoras y volquetes Caterpillar en operación',
      },
      {
        src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
        alt: 'Alquiler de Maquinaria: Flota pesada en faena minera y cantera',
      },
    ],
  },
]

// Mantener compatibilidad con componentes que lean `services`
export const services = specializedServices.map((s) => ({
  title: s.title,
  text: s.shortDesc,
}))

export const values = [
  ['Seguridad', 'Ninguna obra justifica un riesgo evitable para las personas (Ley 29783).'],
  ['Cumplimiento', 'Plazos y alcances acordados por escrito, con estándares de minería formal.'],
  ['Calidad', 'Control de aseguramiento QA/QC revisado en campo antes de cada entrega.'],
  ['Trato Directo', 'Coordinación directa con gerencia de operaciones y residentes de obra.'],
]

export const differentials = [
  ['Múltiples especialidades, una sola gerencia', 'Obras civiles, electricidad, metalmecánica y HDPE coordinadas bajo un solo interlocutor responsable.'],
  ['Flota propia de maquinaria pesada', 'Disponibilidad inmediata de equipos para movimiento de tierras y apoyo a operaciones mineras.'],
  ['Base operativa en Puno', 'Respuesta ágil, logística local y adaptabilidad probada al trabajo sobre los 3,800 m.s.n.m.'],
  ['Homologación y cumplimiento normativo', 'Estrictos estándares de seguridad Ley 29783, seguros SCTR y gestión ambiental responsable.'],
]
