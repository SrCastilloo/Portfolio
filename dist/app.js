'use strict';
const projects = {
  robot: { title:'Mano robótica', label:'TRABAJO DE FIN DE GRADO / ANDROID + ROBÓTICA', image:'robot-hand.svg', summary:'Una aplicación Android que conecta al usuario con una mano robótica, combinando software, visión artificial y sensores.', tags:['Android','Raspberry Pi','Python','FastAPI','OpenCV'], context:'Mi Trabajo de Fin de Grado explora cómo facilitar la interacción entre una persona y un dispositivo robótico. El sistema conecta una aplicación Android con una Raspberry Pi y un backend desarrollado en Python.', features:['Control de la mano desde una aplicación Android.','Integración de comandos de voz y visión artificial con OpenCV.','Sensores capacitivos para adaptar el agarre de los dedos al contacto con objetos.'], status:'Proyecto académico · Trabajo de Fin de Grado.' },
  calendar: { title:'Calendario colaborativo', label:'APLICACIÓN WEB Y ANDROID', image:'calendar.svg', summary:'Un espacio compartido para organizar los eventos y las tareas de una organización.', tags:['Kotlin','Jetpack Compose','Firebase','Android','Web'], context:'Una aplicación multiplataforma centrada en la organización del trabajo en equipo. Los perfiles, roles y permisos permiten gestionar la participación de los usuarios en el calendario compartido.', features:['Autenticación, perfiles de usuario, roles y permisos.','Gestión compartida de eventos y tareas, con notificaciones.','Aplicación Android en Kotlin y Jetpack Compose.','Firebase para la gestión de datos y archivos.'] },
  books: { title:'My Book Repository', label:'API REST + APLICACIÓN MÓVIL', image:'books.svg', summary:'Una biblioteca personal digital que une una API estructurada con una experiencia móvil para organizar lecturas.', tags:['Java','Spring Boot','MongoDB Atlas','React Native','Expo','TypeScript'], context:'La API gestiona usuarios y bibliotecas personales con una arquitectura organizada en controladores, servicios, repositorios y DTO. La aplicación móvil amplía esta base con pantallas, formularios y componentes reutilizables.', features:['Operaciones sobre libros y seguimiento del progreso de lectura.','Validación de datos y cifrado de contraseñas.','Consulta de libros, estados de lectura y favoritos en la app móvil.'], status:'La aplicación móvil con React Native, Expo y TypeScript está en desarrollo.' },
  vr: { title:'Laboratorio en realidad virtual', label:'PROYECTO GANADOR / EXPERIENCIA EDUCATIVA', image:'vr-lab.svg', summary:'Aprender cómo funciona un equipo de laboratorio explorándolo desde dentro de una experiencia inmersiva.', tags:['Unity','Meta Quest','Realidad virtual','Trabajo en equipo'], context:'Proyecto desarrollado en un equipo de siete estudiantes para recrear un evaporador vertical de laboratorio. Participé en su desarrollo y en la dirección y coordinación del equipo.', features:['Entorno interactivo desarrollado en Unity para Meta Quest.','Exploración de los componentes de un evaporador vertical.','Interacción con los controles del equipo para comprender su funcionamiento.'], status:'Proyecto ganador desarrollado en un equipo de siete estudiantes.' },
  menu: { title:'Punto Cero × La Glotona', label:'DESARROLLO Y DESPLIEGUE WEB', monogram:'P×G', summary:'Una carta digital accesible desde el móvil, con un panel para mantener al día el contenido del bar.', tags:['HTML','CSS','JavaScript','Cloudflare Pages','Cloudflare D1'], context:'Diseñé y desarrollé una interfaz adaptable a móviles, organizada por categorías y accesible mediante enlace y código QR. La publicación en Cloudflare Pages y la base de datos D1 permiten que las actualizaciones estén disponibles para todos los clientes.', features:['Carta digital organizada por categorías.','Panel de administración protegido.','Edición de productos, precios, fotografías y contenido.','Despliegue en Cloudflare Pages con almacenamiento en D1.'] },
  nature: { title:'Natureat', label:'APLICACIÓN MULTIPLATAFORMA', monogram:'N.', summary:'Una aplicación para reservar espacios naturales dentro de los parques de un municipio.', tags:['HTML','CSS','JavaScript','Android','Jetpack Compose','Node.js'], context:'Un proyecto que conecta interfaces web y móviles con un backend común para gestionar la información necesaria en la reserva de espacios naturales.', features:['Versión web desarrollada con HTML, CSS y JavaScript.','Aplicación Android con Jetpack Compose.','Backend en Node.js para la gestión de datos e información.'] },
  order: { title:'OrderFlow', label:'GESTIÓN / APLICACIÓN WEB', monogram:'OF', summary:'La gestión de un local, desde las mesas y los clientes hasta los pedidos y el inventario.', tags:['Java','Spring Boot','Vaadin'], context:'Una aplicación construida en Java con Spring Boot en el backend y Vaadin en el frontend para reunir los distintos procesos de gestión de un establecimiento.', features:['Gestión de mesas y clientes.','Organización de pedidos y repartos.','Gestión del inventario del local.'] },
  party: { title:'iParty', label:'DISEÑO DE EXPERIENCIA DE USUARIO', monogram:'iP', summary:'Diseño y prototipado de un sistema interactivo pensado para la experiencia en festivales.', tags:['UX','Design Thinking','Prototipado','Diseño centrado en el usuario'], context:'Un proyecto de diseño que parte de las personas: sus necesidades, sus escenarios de uso y los requisitos de un sistema para festivales. El trabajo se concreta en prototipos web y móviles.', features:['Elaboración de perfiles de usuario y escenarios.','Definición de requisitos del sistema.','Prototipos web y móviles.','Planificación de evaluaciones de usabilidad y accesibilidad.'], status:'Proyecto de diseño y prototipado. Las evaluaciones de usabilidad y accesibilidad están planificadas.' }
};
// Idioma del contenido dinámico. El controlador i18n.js llama a setLanguage.
let language = 'es';
let activeProjects = projects;
const text = (es, en) => language === 'en' ? en : es;
const escapeHTML = value => String(value).replace(/[&<>"']/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[character]));

const cards = [...document.querySelectorAll('[data-project]')];
const filters = [...document.querySelectorAll('.filter')];
function updateProjectCount() {
  const count = cards.filter(card => !card.hidden).length;
  document.querySelector('.project-count').textContent = `${count} ${text(
    count === 1 ? 'proyecto' : 'proyectos', count === 1 ? 'project' : 'projects'
  )}`;
}
filters.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  filters.forEach(filter => {
    const active = filter === button;
    filter.classList.toggle('active', active);
    filter.setAttribute('aria-pressed', String(active));
  });
  cards.forEach(card => {
    card.hidden = category !== 'all' && !card.dataset.categories.split(' ').includes(category);
  });
  updateProjectCount();
  document.querySelector('.more-projects').hidden = !document.querySelector('.project-row:not([hidden])');
}));

const dialog = document.querySelector('.project-dialog');
const dialogBody = document.querySelector('#dialog-body');
const closeButton = document.querySelector('.dialog-close');
let trigger = null;
let currentProject = null;
function showProject(id) {
  const p = activeProjects[id];
  if (!p) return;
  currentProject = id;
  const title = escapeHTML(p.title);
  const visual = p.image
    ? `<img src="assets/${escapeHTML(p.image)}" alt="${text('Ilustración conceptual de', 'Concept illustration of')} ${title}">`
    : `<span class="dialog-monogram" aria-hidden="true">${escapeHTML(p.monogram)}</span>`;
  const subject = encodeURIComponent(text('Hablemos sobre ', 'Let’s talk about ') + p.title);
  dialogBody.innerHTML = `
    <div class="dialog-visual">
      ${visual}
      ${p.image ? `<small>${text('ILUSTRACIÓN CONCEPTUAL DEL PROYECTO', 'PROJECT CONCEPT ILLUSTRATION')}</small>` : ''}
    </div>
    <div class="dialog-content">
      <p class="eyebrow">${escapeHTML(p.label)}</p>
      <h2 id="dialog-title">${title}</h2>
      <p class="dialog-summary">${escapeHTML(p.summary)}</p>
      <div class="dialog-tags">${p.tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join('')}</div>
      <div class="dialog-columns">
        <div><h3>${text('EL CONTEXTO', 'THE CONTEXT')}</h3><p>${escapeHTML(p.context)}</p></div>
        <div><h3>${text('QUÉ INCLUYE', 'WHAT IT INCLUDES')}</h3>
          <ul>${p.features.map(feature => `<li>${escapeHTML(feature)}</li>`).join('')}</ul>
        </div>
      </div>
      ${p.status ? `<p class="dialog-status">${escapeHTML(p.status)}</p>` : ''}
      <div class="dialog-bottom">
        <a href="mailto:daniiterador@gmail.com?subject=${subject}">${text('Hablemos de este proyecto', 'Let’s talk about this project')} ↗</a>
        <button class="next-project">${text('Siguiente proyecto', 'Next project')} <span aria-hidden="true">→</span></button>
      </div>
    </div>`;
  dialogBody.querySelector('.next-project').addEventListener('click', () => {
    const ids = cards.filter(card => !card.hidden).map(card => card.dataset.project);
    if (ids.length) showProject(ids[(ids.indexOf(currentProject) + 1) % ids.length]);
    closeButton.focus({ preventScroll: true });
  });
  dialog.scrollTop = 0;
}
function openProject(id, source) {
  trigger = source;
  showProject(id);
  dialog.showModal();
  document.body.classList.add('modal-open');
}
cards.forEach(card => card.addEventListener('click', () => openProject(card.dataset.project, card)));
document.querySelector('.hero-visual').addEventListener('click', event => {
  event.preventDefault();
  openProject('robot', event.currentTarget);
});
closeButton.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  trigger?.focus({ preventScroll: true });
});

const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');
function updateMenuLabel() {
  menuButton.setAttribute('aria-label', mobileMenu.hidden
    ? text('Abrir menú', 'Open menu') : text('Cerrar menú', 'Close menu'));
}
function closeMenu() {
  mobileMenu.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  updateMenuLabel();
}
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  mobileMenu.hidden = expanded;
  menuButton.setAttribute('aria-expanded', String(!expanded));
  updateMenuLabel();
});
mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !mobileMenu.hidden) { closeMenu(); menuButton.focus(); }
});
matchMedia('(min-width:761px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

let toastTimeout;
const toastElement = document.querySelector('.toast');
function toast(message) {
  toastElement.textContent = message;
  toastElement.classList.add('visible');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toastElement.classList.remove('visible'), 3500);
}
const copyButton = document.querySelector('.copy-email');
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('daniiterador@gmail.com');
    toast(text('Email copiado. ¡Hablamos pronto!', 'Email copied. Talk soon!'));
  } catch {
    toast(text('Puedes copiar el correo: ', 'You can copy this email: ') + 'daniiterador@gmail.com');
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();

window.Portfolio = Object.freeze({
  setLanguage(nextLanguage, englishProjects = {}) {
    language = nextLanguage === 'en' ? 'en' : 'es';
    activeProjects = language === 'en'
      ? Object.fromEntries(Object.entries(projects).map(([id, project]) => [id, { ...project, ...englishProjects[id] }]))
      : projects;
    updateProjectCount();
    updateMenuLabel();
    closeButton.setAttribute('aria-label', text('Cerrar proyecto', 'Close project'));
    copyButton.setAttribute('aria-label', text('Copiar dirección de correo', 'Copy email address'));
    copyButton.innerHTML = `${text('Copiar email', 'Copy email')} <span aria-hidden="true">⧉</span>`;
    clearTimeout(toastTimeout);
    toastElement.classList.remove('visible');
    toastElement.textContent = '';
    if (dialog.open && currentProject) showProject(currentProject);
  }
});
