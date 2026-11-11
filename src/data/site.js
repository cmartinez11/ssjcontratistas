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
    shortDesc: 'Desarrollo de ingeniería, consultoría y ejecución integral de obras civiles estructurales, movimiento masivo de tierras, saneamiento e infraestructura para el sector minero e industrial.',
    features: [
      "Servicios de consultoría y proyectos de construcción civil.",
      "Elaboración de ingeniería y expedientes técnicos para proyectos civiles.",
      "Desarrollo y ejecución de proyectos en obras civiles estructurales, edificaciones y campamentos mineros modulares.",
      "Cimentaciones de concreto armado para molinos, chancadoras y tolvas.",
      "Movimiento masivo de tierras, habilitación de accesos viales, tajos, presas de relave y estabilización de taludes.",
      "Ejecución de sistemas sanitarios, hidráulicos y construcción de saneamiento básico.",
      "Obras civiles misceláneas en proyectos de minería e industriales.",
      "Mantenimiento, remodelación y conservación de campamentos e infraestructura."
    ],
    images: [
      {
        src: 'https://images.pexels.com/photos/6034140/pexels-photo-6034140.jpeg',
        alt: 'Obras Civiles: Cimentaciones y estructuras de concreto armado',
      },
      {
        src: 'https://images.pexels.com/photos/10951145/pexels-photo-10951145.jpeg',
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
        src: 'https://images.pexels.com/photos/5759611/pexels-photo-5759611.jpeg',
        alt: 'Metalmecánica: Soldadura homologada y fabricación de estructuras',
      },
      {
        src: 'https://images.pexels.com/photos/8555598/pexels-photo-8555598.jpeg',
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
    shortDesc: 'Servicios integrales de mantenimiento preventivo, correctivo y paradas de planta programadas 24/7 en sistemas de chancado, molienda, celdas de flotación y equipos de procesamiento minero e industrial.',
    features: [
      "Gestión y ejecución de paradas de planta programadas 24/7 en faenas mineras.",
      "Mantenimiento integral de chancadoras (primarias, cónicas de pebbles, de quijada y HP: cambio de manto, excéntrica, cóncavos, spider y bowl liners).",
      "Mantenimiento y cambio de componentes en fajas transportadoras (polines de carga, retorno, impacto, garland, alineamiento, bastidores y raspadores).",
      "Reparación, mantenimiento y reemplazo de revestimientos y elementos de desgaste en tolvas, chutes de carga, descarga y transferencia.",
      "Mantenimiento electromecánico de sistemas de molienda y procesamiento (liners de vertimill, espesadores, rotor, estator y celdas de flotación).",
      "Mantenimiento de canaletas de recolección de concentrado, cajones de traspaso y transferencia.",
      "Mantenimiento y atención de bombas sumergibles y barcazas de extracción.",
      "Instalación, mantenimiento y cambio de tuberías HDPE, sistemas de flotación y aplicación de pintura epóxica / revestimientos antidesgaste."
    ],
    images: [
      {
        src: 'https://images.pexels.com/photos/9389356/pexels-photo-9389356.jpeg',
        alt: 'Mantenimiento Industrial: Instalacion y mantenimiento y cambio de tuberias HDPE.',
      },
      {
        src: 'https://images.pexels.com/photos/28929545/pexels-photo-28929545.jpeg',
        alt: 'Mantenimiento Industrial: Inspección técnica y seguridad operativa',
      },
    ],
  },
  {
    id: 'parada-de-planta',
    badge: 'ESPECIALIDAD MINERA 06',
    title: 'Parada de Planta',
    shortDesc: 'Planeación estratégica, gestión de activos y ejecución integral de paradas de planta programadas 24/7 en faenas mineras e industriales, optimizando tiempos de parada y garantizando cero accidentes.',
    description: 'Planeación estratégica, gestión de activos y ejecución integral de paradas de planta programadas 24/7 en faenas mineras e industriales, optimizando tiempos de parada y garantizando cero accidentes.',
    features: [
      'Planeación estratégica con cronogramas detallados para minimizar tiempos de inactividad.',
      'Aplicación de rigurosos protocolos de seguridad integral bajo norma y estándares mineros.',
      'Intervenciones mecánicas y electromecánicas críticas con personal técnico altamente especializado.',
      'Monitoreo y control tecnológico de vanguardia para asegurar el retorno rápido a la operación.',
      'Gestión de activos, evaluación y certificación de componentes críticos en planta concentradora.',
      'Mantenimiento mayor de chancadoras, molinos, espesadores, celdas de flotación y fajas transportadoras.',
      'Despliegue rápido de cuadrillas y logística operativa para faenas en alta montaña 24/7.',
      'Aseguramiento de calidad QA/QC y dossier técnico de entregables al finalizar la parada.'
    ],
    images: [
      {
        src: 'https://images.pexels.com/photos/38888656/pexels-photo-38888656.jpeg',
        alt: 'Ejecución de parada de planta en minería SSJ Contratistas'
      },
      {
        src: 'https://images.pexels.com/photos/12324202/pexels-photo-12324202.jpeg',
        alt: 'Personal técnico en mantenimiento de planta industrial'
      }
    ],
  },
  {
    id: 'electromecanica',
    badge: 'ESPECIALIDAD MINERA 07',
    title: 'Electromecánica',
    shortDesc: 'Diseño, montaje y mantenimiento electromecánico integral en subestaciones, tableros de fuerza y control, sistemas de puesta a tierra y maquinaria industrial para minería e industria.',
    description: 'Diseño, montaje y mantenimiento electromecánico integral en subestaciones, tableros de fuerza y control, sistemas de puesta a tierra y maquinaria industrial para minería e industria.',
    features: [
      'Mantenimiento de subestaciones eléctricas en media tensión y sistemas de baja tensión.',
      'Desarrollo de proyectos electromecánicos industriales, diseño y ejecución de tableros eléctricos de fuerza y control.',
      'Modificación, actualización de planos electromecánicos y dossiers técnicos.',
      'Fabricación de estructuras de soporte para tableros, bandejas, canaletas y equipos eléctricos en general.',
      'Reparación de equipos y máquinas industriales con mantenimiento predictivo, preventivo y correctivo.',
      'Preparación, mantenimiento, mediciones y diagnóstico certificado de sistemas de puesta a tierra.',
      'Montaje electromecánico de motores, bombas industriales y sistemas de accionamiento.',
      'Inspección termográfica y pruebas de aislamiento en tableros y centros de control de motores (CCM).'
    ],
    images: [
      {
        src: 'https://images.pexels.com/photos/28942196/pexels-photo-28942196.jpeg',
        alt: 'Mantenimiento electromecánico y tableros eléctricos SSJ Contratistas'
      },
      {
        src: 'https://images.pexels.com/photos/33559451/pexels-photo-33559451.jpeg',
        alt: 'Técnico especialista en tableros de fuerza y control'
      }
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
        src: 'https://images.pexels.com/photos/27354191/pexels-photo-27354191.jpeg',
        alt: 'Termofusión HDPE: Tendido de líneas de tubería de gran diámetro',
      },
      {
        src: 'https://images.pexels.com/photos/6509862/pexels-photo-6509862.jpeg',
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
    title: 'Alquiler de Equipos',
    shortDesc: 'Disponibilidad inmediata de flota propia y homologada de maquinaria pesada, equipos auxiliares y unidades de transporte para operaciones en alta montaña, con mantenimiento preventivo riguroso y operadores certificados.',
    features: [
      'Alquiler de retroexcavadora, minicargador y minirodillo.',
      'Alquiler de camionetas y camiones para minería e industria.',
      'Alquiler de grupo electrógeno, generador de energía y torres de iluminación.',
      'Alquiler de camiones cisterna para combustible y/o agua.',
      'Alquiler de equipos de poder para construcción civil.',
      'Alquiler de equipos de medición e instrumentación.'
    ],
    images: [
      {
        src: 'https://images.pexels.com/photos/10410019/pexels-photo-10410019.jpeg',
        alt: 'Alquiler de Maquinaria: Excavadoras y volquetes Caterpillar en operación',
      },
      {
        src: 'https://images.pexels.com/photos/14484391/pexels-photo-14484391.jpeg',
        alt: 'Alquiler de Maquinaria: Flota pesada en faena minera y cantera',
      },
      {
        src: 'https://images.pexels.com/photos/461789/pexels-photo-461789.jpeg',
        alt: 'Alquiler de Maquinaria: Flota pesada en faena minera y cantera',
      },
      {
        src: 'https://images.pexels.com/photos/31543919/pexels-photo-31543919.jpeg',
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
