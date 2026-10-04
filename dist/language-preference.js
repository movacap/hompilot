// Localized URLs are explicit; only the neutral homepage negotiates language.
(function () {
  if (!['/', '/index.html'].includes(location.pathname)) return;
  let saved;
  try { saved = localStorage.getItem('hompilot-lang'); } catch {}
  const browserLanguage = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
  const preferred = ['en', 'fr'].includes(saved) ? saved : (/^fr(?:-|$)/i.test(browserLanguage) ? 'fr' : 'en');
  if (preferred === 'fr') location.replace('/fr' + location.search + location.hash);
})();
