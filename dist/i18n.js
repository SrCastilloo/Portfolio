'use strict';

(() => {
  const english = window.PORTFOLIO_EN;
  const portfolio = window.Portfolio;
  if (!english || !portfolio) return;

  const storageKey = 'daniel-portfolio-language';
  // Guardamos el español del HTML como versión principal, sin duplicarlo.
  const page = english.page.flatMap(([selector, mode, en]) =>
    [...document.querySelectorAll(selector)].map(element => ({
      element,
      property: mode === 'html' ? 'innerHTML' : 'textContent',
      es: mode === 'html' ? element.innerHTML : element.textContent,
      en
    }))
  );
  const attributes = english.attributes.flatMap(([selector, attribute, en]) =>
    [...document.querySelectorAll(selector)].map(element => ({
      element, attribute, es: element.getAttribute(attribute), en
    }))
  );
  const buttons = [...document.querySelectorAll('[data-language]')];
  const status = document.querySelector('.language-status');

  function setLanguage(requestedLanguage, { persist = true, announce = true } = {}) {
    const language = requestedLanguage === 'en' ? 'en' : 'es';
    document.documentElement.lang = language;

    page.forEach(entry => { entry.element[entry.property] = entry[language]; });
    attributes.forEach(entry => {
      const value = entry[language];
      if (value === null) entry.element.removeAttribute(entry.attribute);
      else entry.element.setAttribute(entry.attribute, value);
    });

    buttons.forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.language === language));
    });
    document.querySelector('.language-switch').setAttribute(
      'aria-label', language === 'en' ? 'Language' : 'Idioma'
    );
    document.querySelectorAll('.cv-label').forEach(element => {
      element.textContent = language === 'en' ? 'Download CV' : 'Descargar CV';
    });
    document.querySelectorAll('.cv-format').forEach(element => {
      element.textContent = language === 'en' ? 'PDF · Spanish' : 'PDF · Español';
    });

    portfolio.setLanguage(language, english.projects);
    if (persist) {
      try { localStorage.setItem(storageKey, language); }
      catch { /* La web sigue funcionando si el navegador bloquea el almacenamiento. */ }
    }
    if (announce) {
      status.textContent = language === 'en' ? 'Language changed to English.' : 'Idioma cambiado a español.';
    }
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => setLanguage(button.dataset.language));
  });

  // Español en la primera visita, independientemente del idioma del navegador.
  let initialLanguage = 'es';
  try {
    if (localStorage.getItem(storageKey) === 'en') initialLanguage = 'en';
  } catch { /* Si no hay almacenamiento, se mantiene el español. */ }
  setLanguage(initialLanguage, { persist: false, announce: false });
})();
