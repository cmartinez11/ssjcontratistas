# SSJ Contratistas – Sitio corporativo

React + Vite + Tailwind CSS 4 + Lucide.

## Instalar y ejecutar
```bash
npm install
npm run dev      # desarrollo en http://localhost:5173
npm run build    # producción en /dist
npm run preview  # probar el build
```

## Dónde editar
- `src/data/site.js`: teléfono, correo, horario, dirección, redes, servicios, valores y diferenciales.
- `src/data/images.js`: todas las fotografías. Copie sus fotos a `public/images/` con los nombres indicados
  (hero.jpg, nosotros.jpg, servicios.jpg, galeria-1.jpg a galeria-5.jpg) o cambie las rutas.
  Si falta una imagen se muestra un bloque azul con su descripción.
- `src/index.css`: colores (`--color-navy`, `--color-cat`) y tipografías (Barlow Condensed y Barlow).

## Pendiente por confirmar con el cliente
Tipo de clientes, dirección, horario real, redes sociales, historia, misión/visión, logotipo oficial y fotos reales.
No se incluyeron certificaciones, clientes ni cifras.

## Formulario
Valida los campos y abre WhatsApp con el mensaje armado. Para recibir correos, conecte un servicio (Formspree, EmailJS o un backend).
