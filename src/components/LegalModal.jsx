import { useEffect } from 'react'
import { X, ShieldCheck, Cookie, ArrowLeft } from 'lucide-react'

export default function LegalModal({ isOpen, docType = 'privacy', onClose, onSwitchDoc }) {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const isPrivacy = docType === 'privacy'

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera del Modal */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2 sm:gap-3">
            {isPrivacy ? (
              <ShieldCheck className="w-6 h-6 text-amber-600 shrink-0" />
            ) : (
              <Cookie className="w-6 h-6 text-amber-600 shrink-0" />
            )}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-amber-600">
                Cumplimiento Legal • SSJ Contratistas Generales S.A.C.
              </p>
              <h2 id="legal-modal-title" className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">
                {isPrivacy ? 'Política de Privacidad y Protección de Datos' : 'Política de Cookies'}
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar ventana legal"
            className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200/70 transition-colors cursor-pointer"
          >
            <X size={22} />
          </button>
        </div>

        {/* Pestañas de Navegación entre Documentos */}
        <div className="flex border-b border-slate-200 bg-slate-100/70 px-5 sm:px-8">
          <button
            type="button"
            onClick={() => onSwitchDoc && onSwitchDoc('privacy')}
            className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer ${isPrivacy
                ? 'border-amber-500 text-slate-950 bg-white rounded-t-md shadow-xs'
                : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
          >
            1. Política de Privacidad (Ley N° 29733)
          </button>
          <button
            type="button"
            onClick={() => onSwitchDoc && onSwitchDoc('cookies')}
            className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer ${!isPrivacy
                ? 'border-amber-500 text-slate-950 bg-white rounded-t-md shadow-xs'
                : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
          >
            2. Política de Cookies
          </button>
        </div>

        {/* Cuerpo del Documento (Scrollable) */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-8 py-6 text-slate-700 text-sm leading-relaxed space-y-6">
          {isPrivacy ? (
            /* ============================================================ */
            /* DOCUMENTO A: POLÍTICA DE PRIVACIDAD                          */
            /* ============================================================ */
            <div className="space-y-6">
              <div className="rounded-lg bg-amber-50 p-4 border border-amber-200 text-amber-950 text-xs sm:text-sm">
                <strong>Aviso de Cumplimiento Normativo:</strong> El presente documento regula el tratamiento de datos personales de conformidad con la <strong>Ley N° 29733 (Ley de Protección de Datos Personales del Perú)</strong> y su Reglamento aprobado mediante Decreto Supremo N° 003-2013-JUS.
              </div>

              <section className="space-y-2">
                <h3 className="font-bold text-slate-900 text-base">1. Identidad y Domicilio del Titular del Banco de Datos</h3>
                <p>
                  El titular del banco de datos personales y responsable del tratamiento de los datos recopilados a través de este sitio web es:
                </p>
                <div className="bg-slate-50 p-3.5 rounded-md border border-slate-200 text-xs space-y-1.5 font-medium">
                  <p><span className="text-slate-500 uppercase">Razón Social:</span> SSJ CONTRATISTAS GENERALES S.A.C.</p>
                  <p><span className="text-slate-500 uppercase">Sede Antauta:</span> Av. Unión Antauta N° 122 – Antauta – Melgar – Puno, Perú.</p>
                  <p><span className="text-slate-500 uppercase">Sede Juliaca:</span> Av. Aeroperú Mz J Lt 02 – Juliaca – San Román – Puno, Perú.</p>
                  <p><span className="text-slate-500 uppercase">Teléfono de Contacto:</span> +51 932 393 161</p>
                  <p><span className="text-slate-500 uppercase">Correos Electrónicos:</span> comercial@ssjcontratistas.com / gerencia@ssjcontratistas.com</p>
                </div>
              </section>

              <section className="space-y-2">
                <h3 className="font-bold text-slate-900 text-base">2. Datos Personales Recopilados</h3>
                <p>
                  A través de nuestros formularios digitales de contacto y cotización B2B, SSJ Contratistas recopila los siguientes datos personales:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>Nombres y apellidos completos.</li>
                  <li>Número de teléfono o contacto de WhatsApp.</li>
                  <li>Dirección de correo electrónico corporativo o personal.</li>
                  <li>Empresa, institución o proyecto minero de procedencia.</li>
                  <li>Ubicación geográfica de la obra o requerimiento.</li>
                  <li>Detalles técnicos, metrajes o especificaciones del servicio solicitado.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="font-bold text-slate-900 text-base">3. Finalidad del Tratamiento de los Datos</h3>
                <p>
                  Los datos personales que usted suministra voluntariamente serán tratados con las siguientes finalidades explícitas y legítimas:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                  <li><strong>Gestión de Cotizaciones B2B:</strong> Evaluación técnica preliminar, cálculo de metrajes, dimensionamiento de flota y emisión de propuestas comerciales formales.</li>
                  <li><strong>Atención de Consultas:</strong> Canalización de requerimientos con la gerencia de operaciones y residentes de obra.</li>
                  <li><strong>Coordinación Operativa:</strong> Coordinación de visitas técnicas de campo, inspecciones de seguridad y homologación de proveedores mineros.</li>
                  <li><strong>Cumplimiento Legal y Minero:</strong> Cumplimiento de estándares de seguridad y salud en el trabajo bajo la <strong>Ley N° 29783</strong> y normativa del sector minero-energético.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="font-bold text-slate-900 text-base">4. Consentimiento y Principio de Finalidad</h3>
                <p>
                  Al marcar la casilla obligatoria <em>"He leído y acepto la Política de Privacidad"</em> en nuestros formularios y remitir sus datos, el usuario otorga su consentimiento previo, libre, informado, expreso e inequívoco a SSJ Contratistas Generales S.A.C. para el tratamiento de su información con los fines expuestos.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-bold text-slate-900 text-base">5. Plazo de Conservación y Transferencia</h3>
                <p>
                  Los datos personales serán conservados durante el tiempo estrictamente necesario para atender la relación precontractual o contractual, o hasta que el titular solicite su revocación, siempre que no subsista una obligación legal de conservación fiscal, minera o laboral.
                </p>
                <p>
                  SSJ Contratistas no comercializa, no alquila ni transfiere datos personales a terceros con fines publicitarios ajenos a la prestación de nuestros servicios.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-bold text-slate-900 text-base">6. Ejercicio de Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)</h3>
                <p>
                  El titular de los datos personales puede ejercer en cualquier momento sus derechos de <strong>Acceso, Rectificación, Cancelación y Oposición (ARCO)</strong>, consagrados en la Ley N° 29733, mediante el siguiente procedimiento:
                </p>
                <div className="bg-slate-50 p-4 rounded-md border border-slate-200 text-xs space-y-2">
                  <p><strong>Canal habilitado:</strong> Remitir un correo electrónico a <a href="mailto:comercial@ssjcontratistas.com" className="text-amber-600 font-bold underline">comercial@ssjcontratistas.com</a> con copia a <a href="mailto:gerencia@ssjcontratistas.com" className="text-amber-600 font-bold underline">gerencia@ssjcontratistas.com</a>.</p>
                  <p><strong>Asunto:</strong> "Ejercicio de Derechos ARCO - Protección de Datos Personales".</p>
                  <p><strong>Requisitos de la solicitud:</strong> Nombres y apellidos del titular, copia simple de documento de identidad (DNI o Carné de Extranjería), descripción clara del derecho que desea ejercer y fundamentos de la petición.</p>
                  <p><strong>Plazo legal de respuesta:</strong> Máximo diez (10) días hábiles conforme al Reglamento de la Ley N° 29733.</p>
                </div>
              </section>

              <section className="space-y-2">
                <h3 className="font-bold text-slate-900 text-base">7. Medidas de Seguridad y Confidencialidad</h3>
                <p>
                  SSJ Contratistas aplica rigurosas medidas técnicas, organizativas y operativas de seguridad informática para proteger sus datos personales contra acceso no autorizado, alteración, pérdida o tratamiento indebido. Todo el personal y especialistas técnicos que intervienen en la gestión comercial y técnica guardan estricta reserva y secreto profesional.
                </p>
              </section>
            </div>
          ) : (
            /* ============================================================ */
            /* DOCUMENTO B: POLÍTICA DE COOKIES                             */
            /* ============================================================ */
            <div className="space-y-6">
              <div className="rounded-lg bg-amber-50 p-4 border border-amber-200 text-amber-950 text-xs sm:text-sm">
                <strong>Transparencia de Navegación:</strong> Esta Política de Cookies le informa de manera clara y comprensible sobre el uso de archivos de almacenamiento local y cookies en nuestro portal institucional, su propósito y cómo administrarlas o deshabilitarlas.
              </div>

              <section className="space-y-2">
                <h3 className="font-bold text-slate-900 text-base">1. ¿Qué es una Cookie?</h3>
                <p>
                  Una cookie es un pequeño archivo de texto que los sitios web almacenan en su navegador o dispositivo (ordenador, tablet o teléfono inteligente) al visitarlos. Las cookies permiten que el sitio web recuerde sus preferencias de navegación y garantizan el funcionamiento técnico seguro y fluido del entorno digital.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-bold text-slate-900 text-base">2. Tipos de Cookies que Empleamos</h3>
                <div className="space-y-3">
                  <div className="border border-slate-200 rounded-md p-3.5 bg-slate-50">
                    <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-amber-600 mb-1">
                      A) Cookies Técnicas y Estrictamente Necesarias (Propias)
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Son fundamentales para que el sitio web funcione correctamente, permitiendo la navegación a través de las distintas secciones técnicas (Obras Civiles, HDPE, Paradas de Planta, etc.), la interacción con el cotizador B2B y el registro de su consentimiento sobre el banner de cookies (almacenado localmente en su navegador bajo el identificador <code className="bg-slate-200 px-1 py-0.5 rounded text-slate-800">ssj_cookie_consent</code>).
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-md p-3.5 bg-slate-50">
                    <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-amber-600 mb-1">
                      B) Cookies de Terceros (Google Maps)
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      En las secciones de <strong>Proyectos</strong> (U.M. San Rafael - Antauta) y <strong>Contacto</strong>, integramos mapas satelitales mediante el servicio oficial de Google Maps (propiedad de Google LLC). Google puede utilizar cookies técnicas, analíticas y de geolocalización para cargar la cartografía y registrar métricas agregadas. Dichas cookies se rigen por la política de privacidad de Google (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-600 underline">policies.google.com/privacy</a>).
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-2">
                <h3 className="font-bold text-slate-900 text-base">3. Gestión, Bloqueo y Eliminación de Cookies</h3>
                <p>
                  Usted tiene el control total sobre las cookies. Puede gestionar sus preferencias en cualquier momento a través de nuestro banner inferior seleccionando <em>"Solo esenciales"</em> o modificando la configuración de su navegador web:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
                  <div className="border border-slate-200 p-3 rounded bg-white">
                    <p className="font-bold text-slate-800">Google Chrome:</p>
                    <p className="text-slate-500 mt-1">Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios.</p>
                  </div>
                  <div className="border border-slate-200 p-3 rounded bg-white">
                    <p className="font-bold text-slate-800">Mozilla Firefox:</p>
                    <p className="text-slate-500 mt-1">Ajustes &gt; Privacidad &amp; Seguridad &gt; Cookies y datos del sitio.</p>
                  </div>
                  <div className="border border-slate-200 p-3 rounded bg-white">
                    <p className="font-bold text-slate-800">Microsoft Edge:</p>
                    <p className="text-slate-500 mt-1">Configuración &gt; Cookies y permisos del sitio &gt; Administrar y eliminar cookies.</p>
                  </div>
                  <div className="border border-slate-200 p-3 rounded bg-white">
                    <p className="font-bold text-slate-800">Apple Safari:</p>
                    <p className="text-slate-500 mt-1">Preferencias &gt; Privacidad &gt; Bloquear todas las cookies o gestionar datos.</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  <em>Nota: Si bloquea o deshabilita las cookies técnicas esenciales, algunas funcionalidades interactivas (como la geolocalización de mapas satelitales) podrían verse limitadas.</em>
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-bold text-slate-900 text-base">4. Actualización de la Política de Cookies</h3>
                <p>
                  SSJ Contratistas Generales S.A.C. se reserva el derecho de modificar o actualizar la presente Política de Cookies en función de requerimientos regulatorios peruanos o adaptaciones técnicas del sitio web. Le recomendamos revisar este documento periódicamente.
                </p>
              </section>
            </div>
          )}
        </div>

        {/* Pie del Modal con Botones */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-5 sm:px-8 py-4 border-t border-slate-200 bg-slate-50">
          <button
            type="button"
            onClick={() => onSwitchDoc && onSwitchDoc(isPrivacy ? 'cookies' : 'privacy')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-amber-600 transition-colors cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span>Ver {isPrivacy ? 'Política de Cookies' : 'Política de Privacidad'}</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-sm bg-navy hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
          >
            Cerrar / Entendido
          </button>
        </div>
      </div>
    </div>
  )
}

