# Daniel Castillo · Portfolio

Portfolio estático, adaptable y sin dependencias de compilación. El contenido parte del currículum facilitado por Daniel. Las ilustraciones son conceptos visuales, no capturas de los productos.

## Edición

- `dist/index.html`: estructura, presentación, trayectoria y contacto.
- `dist/styles.css`: sistema visual y diseño adaptable.
- `dist/app.js`: fichas de proyectos, filtros, navegación y copia del correo.
- `dist/assets/`: ilustraciones SVG y retrato extraído del CV.

## Vista local

Desde esta carpeta: `node server.mjs`. Abre http://localhost:4173.

Los detalles de cada proyecto se mantienen en el objeto `projects` de `dist/app.js`. No se incluyen DNI, domicilio, teléfono ni estado civil. El CV original no se distribuye con la web.

## Validación

`node --check dist/app.js`

La publicación utiliza el manifiesto `.openai/hosting.json` y el directorio estático `dist`.
