import { images } from './images'
import { servicesData } from './services'

export const company = {
  name: 'SSJ Contratistas',
  whatsapp: '51932393161',
  phone: '+51 932 393 161',
  email: 'comercial@ssjcontratistas.com',
  emailGerencia: 'gerencia@ssjcontratistas.com',
  emails: [
    { label: 'Correo Comercial', email: 'comercial@ssjcontratistas.com' },
    { label: 'Correo Gerencia', email: 'gerencia@ssjcontratistas.com' },
  ],
  city: 'Puno, Perú',
  locations: [
    {
      name: 'Sede Antauta',
      address: 'Av. Unión Antauta N° 122 – Antauta – Melgar – Puno',
    },
    {
      name: 'Sede Juliaca',
      address: 'Av. Aeroperú Mz J Lt 02 – Juliaca – San Román – Puno',
    },
  ],
  address: 'Av. Unión Antauta N° 122 (Antauta) / Av. Aeroperú Mz J Lt 02 (Juliaca) – Puno',
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

export { servicesData }
export const specializedServices = servicesData

// Mantener compatibilidad con componentes que lean `services`
export const services = servicesData.map((s) => ({
  title: s.title,
  text: s.description,
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
