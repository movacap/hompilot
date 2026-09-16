(function () {
  const SUPABASE = 'https://ydismictggxavbjxawvx.supabase.co/functions/v1';

  // ---------------------------------------------------------------------------
  // i18n — toutes les chaînes affichées à l'utilisateur.
  // Les noms de groupes/paliers et les erreurs des Edge Functions restent tels
  // quels (la base n'a pas encore de colonnes anglaises).
  // ---------------------------------------------------------------------------
  const L = {
    fr: {
      months: ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'],
      days: ['DIM','LUN','MAR','MER','JEU','VEN','SAM'],
      genericError: 'Une erreur est survenue.',
      tiersSub: 'Réservez votre service en quelques minutes. Prix fixe, déplacement inclus, aucun frais caché.',
      inclTitle: 'Ce qui est inclus',
      inclNone: 'Aucune préférence',
      inclChoose: 'Choisissez une option',
      inclRequired: 'obligatoire',
      inclErr: 'Veuillez choisir une option.',

      loading: 'Chargement…',
      loadingSlots: 'Chargement des disponibilités…',
      calTitle: 'Choisissez votre date et heure',
      noSlots: 'Aucune disponibilité ce jour-là.',
      back: 'Retour',
      next: 'Continuer',
      formTitle: 'Vos coordonnées',
      firstName: 'Prénom',
      lastName: 'Nom',
      addressWork: 'Adresse des travaux',
      unit: 'App. / unité',
      unitPh: '302, B, suite 400…',
      unitShort: 'app.',
      city: 'Ville',
      postalCode: 'Code postal',
      email: 'Courriel',
      phone: 'Téléphone',
      notes: 'Commentaires (facultatif)',
      errName: 'Prénom et nom requis.',
      errEmail: 'Courriel invalide.',
      errPhone: 'Numéro de téléphone invalide.',
      errAddress: 'Adresse requise.',
      addrTitle: 'Où auront lieu les travaux ?',
      addrSub: 'Nous validons l\'adresse pour vous proposer les bons créneaux.',
      errCity: 'Ville requise.',
      errPostal: 'Code postal requis.',
      geoChecking: 'Validation de l\'adresse…',
      geoLow: 'Nous n\'avons pas trouvé cette adresse avec certitude. Vérifiez le numéro civique, la ville et le code postal.',
      geoNotFound: 'Adresse introuvable. Vérifiez le numéro civique, la ville et le code postal.',
      geoAnyway: 'Continuer quand même',
      outCoverTitle: 'Adresse hors zone desservie',
      outCoverBody: 'Aucune de nos équipes ne dessert cette adresse pour le moment. Vérifiez l\'adresse ou contactez-nous pour valider votre secteur.',
      outCoverBack: 'Modifier mon adresse',

      reviewTitle: 'Confirmez votre réservation',
      rowService: 'Service',
      rowDate: 'Date',
      rowDuration: 'Durée',
      rowName: 'Nom',
      rowAddress: 'Adresse',
      rowPhone: 'Téléphone',
      rowTotal: 'Total (avant taxes)',
      booking: 'Réservation en cours…',
      confirmBtn: 'Confirmer la réservation',
      doneTitle: 'Réservation confirmée',
      doneBody: (when) => 'Votre rendez-vous est confirmé pour le ' + when + '. Vous recevrez un message texte de confirmation sous peu.',
      money: (n) => n + ' $',
      time: (hhmm) => hhmm,
      calHead: (mo, y) => L.fr.months[mo] + ' ' + y,
      longDate: (d, mo, y, hhmm) => d + ' ' + L.fr.months[mo] + ' ' + y + ' à ' + L.fr.time(hhmm),
      dur: (h, r) => (h ? h + 'h' : '') + (r ? (h ? ' ' : '') + r + 'min' : ''),
    },
    en: {
      months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
      days: ['SUN','MON','TUE','WED','THU','FRI','SAT'],
      genericError: 'Something went wrong.',
      tiersSub: 'Book your service in just a few minutes. Flat rate, travel included, no hidden fees.',
      inclTitle: 'What is included',
      inclNone: 'No preference',
      inclChoose: 'Select an option',
      inclRequired: 'required',
      inclErr: 'Please select an option.',

      loading: 'Loading…',
      loadingSlots: 'Loading availability…',
      calTitle: 'Choose your date and time',
      noSlots: 'No availability on that day.',
      back: 'Back',
      next: 'Continue',
      formTitle: 'Your contact information',
      firstName: 'First name',
      lastName: 'Last name',
      addressWork: 'Service address',
      unit: 'Apt. / unit',
      unitPh: '302, B, suite 400…',
      unitShort: 'apt.',
      city: 'City',
      postalCode: 'Postal code',
      email: 'Email',
      phone: 'Phone',
      notes: 'Comments (optional)',
      errName: 'First and last name are required.',
      errEmail: 'Invalid email address.',
      errPhone: 'Invalid phone number.',
      errAddress: 'Address is required.',
      addrTitle: 'Where will the work take place?',
      addrSub: 'We validate the address to show you the right time slots.',
      errCity: 'City is required.',
      errPostal: 'Postal code is required.',
      geoChecking: 'Validating address…',
      geoLow: 'We could not confirm this address. Please check the street number, city and postal code.',
      geoNotFound: 'Address not found. Please check the street number, city and postal code.',
      geoAnyway: 'Continue anyway',
      outCoverTitle: 'Address outside our service area',
      outCoverBody: 'None of our crews currently serve this address. Please check the address or contact us to confirm your area.',
      outCoverBack: 'Change my address',

      reviewTitle: 'Confirm your booking',
      rowService: 'Service',
      rowDate: 'Date',
      rowDuration: 'Duration',
      rowName: 'Name',
      rowAddress: 'Address',
      rowPhone: 'Phone',
      rowTotal: 'Total (before taxes)',
      booking: 'Booking…',
      confirmBtn: 'Confirm booking',
      doneTitle: 'Booking confirmed',
      doneBody: (when) => 'Your appointment is confirmed for ' + when + '. You will receive a confirmation text message shortly.',
      money: (n) => '$' + n,
      time: (hhmm) => {
        const p = String(hhmm).split(':');
        let h = Number(p[0]);
        const m = p[1] == null ? '00' : p[1];
        const ap = h >= 12 ? 'PM' : 'AM';
        h = h % 12; if (h === 0) h = 12;
        return h + ':' + m + ' ' + ap;
      },
      calHead: (mo, y) => L.en.months[mo] + ' ' + y,
      longDate: (d, mo, y, hhmm) => L.en.months[mo] + ' ' + d + ', ' + y + ' at ' + L.en.time(hhmm),
      dur: (h, r) => (h ? h + 'h' : '') + (r ? (h ? ' ' : '') + r + 'm' : ''),
    },
  };

  const script = document.currentScript;
  const companyId = script.getAttribute('data-company-id');
  const groupSlug = script.getAttribute('data-group');
  // v-Redirect-1 : l'attribut du code collé reste PRIORITAIRE sur la base.
  const redirectTo = script.getAttribute('data-redirect-to') || '';
  const mountId = script.getAttribute('data-mount') || 'hompilot-book';

  function pickLang() {
    const attr = (script.getAttribute('data-lang') || '').trim().toLowerCase();
    if (attr === 'en' || attr === 'fr') return attr;
    if (!attr) {
      const docLang = (document.documentElement.getAttribute('lang') || '').trim().toLowerCase();
      if (docLang.indexOf('en') === 0) return 'en';
    }
    return 'fr';
  }

  const lang = pickLang();
  const T = L[lang];
  const MONTHS = T.months;
  const DAYS = T.days;

  if (!companyId || !groupSlug) {
    return console.error('embed-book.js: data-company-id et data-group requis');
  }

  const host = document.getElementById(mountId);
  if (!host) return console.error('embed-book.js: élément #' + mountId + ' introuvable');

  const root = host.attachShadow({ mode: 'open' });

  // v-Redirect-1 : redirige la page VISIBLE par le visiteur. Le widget n'est pas
  // dans une iframe (Shadow DOM dans la page hôte) ; on tente tout de même la
  // fenêtre du haut au cas où l'hôte serait lui-même encadré.
  function gotoThankYou(url, params) {
    try {
      const u = new URL(url, window.location.href);
      if (u.protocol !== 'https:') return false;
      Object.keys(params || {}).forEach((k) => {
        if (params[k] != null && params[k] !== '') u.searchParams.set(k, params[k]);
      });
      let target = window;
      try { if (window.top && window.top.location.origin === window.location.origin) target = window.top; }
      catch (e) { target = window; }
      target.location.href = u.toString();
      return true;
    } catch (e) { return false; }
  }


  const CSS = `
    :host { all: initial; }
    * { box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
    .wrap { max-width: 720px; margin: 0 auto; color: #1a2233; }
    .steps { display: flex; gap: 8px; justify-content: center; margin-bottom: 24px; }
    .step { width: 72px; height: 4px; border-radius: 2px; background: #dfe3e8; }
    .step.on { background: #2f45ff; }
    .card { background: #fff; border: 1px solid #e6e9ef; border-radius: 12px; padding: 24px; }
    h2 { margin: 0 0 4px; font-size: 20px; }
    .sub { color: #67707f; font-size: 14px; margin: 0 0 20px; }
    .tier { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;
            border: 1px solid #e6e9ef; border-radius: 10px; padding: 14px 16px;
            margin-bottom: 10px; cursor: pointer; transition: .15s; background: #fff; }
    .tier:hover { border-color: #2f45ff; background: #f7f8ff; }
    .tier.sel { border-color: #2f45ff; background: #f2f4ff; }
    .tier-name { font-weight: 600; font-size: 15px; }
    .tier-sub { color: #67707f; font-size: 13px; margin-top: 2px; }
    .tier-block { margin-bottom: 10px; }
    .tier-block .tier { margin-bottom: 0; }
    .incl { border: 1px solid #e6e9ef; border-top: none; border-radius: 0 0 10px 10px;
            padding: 12px 16px; background: #fbfcfe; }
    .incl-title { font-size: 12px; font-weight: 700; letter-spacing: .04em;
                  text-transform: uppercase; color: #8a92a3; margin-bottom: 8px; }
    .incl-line { display: flex; justify-content: space-between; align-items: center; gap: 12px;
                 font-size: 13px; color: #1a2233; padding: 4px 0; }
    .incl-sel.unset { color: #8a92a3; }
    .tier-block .btn { margin-top: 12px; }
    .incl-sel { all: unset; box-sizing: border-box; max-width: 100%; border: 1px solid #dfe3e8; border-radius: 8px;
                padding: 6px 10px; font-size: 13px; background: #fff; cursor: pointer; min-width: 150px; }
    .incl-req { color: #a3261f; font-weight: 600; margin-left: 4px; }
    .incl-sel.invalid { border-color: #d92d20; background: #fff6f5; }
    .incl-err { color: #a3261f; font-size: 12px; padding: 0 0 6px; text-align: right; }

    .badge { display: inline-block; background: #ffd84d; color: #1a2233; font-size: 11px;
             font-weight: 700; padding: 2px 8px; border-radius: 999px; margin-left: 8px; }
    .tier-right { text-align: right; white-space: nowrap; }
    .price { font-weight: 700; font-size: 17px; }
    .dur { color: #67707f; font-size: 12px; }
    .cal-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
    .cal-head strong { font-size: 15px; }
    .nav { border: 1px solid #e6e9ef; background: #fff; border-radius: 8px; width: 32px; height: 32px;
           cursor: pointer; font-size: 16px; line-height: 1; }
    .nav:disabled { opacity: .35; cursor: default; }
    .grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; }
    .dow { text-align: center; font-size: 11px; color: #8a92a3; padding: 6px 0; font-weight: 600; }
    .day { aspect-ratio: 1; border: none; background: #f4f6f9; border-radius: 8px; cursor: pointer;
           font-size: 14px; color: #1a2233; }
    .day:disabled { background: transparent; color: #c8cdd6; cursor: default; }
    .day.sel { background: #2f45ff; color: #fff; font-weight: 700; }
    .times { display: grid; grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); gap: 8px; margin-top: 18px; }
    .time { border: 1px solid #e6e9ef; background: #fff; border-radius: 8px; padding: 12px; cursor: pointer; font-size: 14px; }
    .time:hover { border-color: #2f45ff; }
    .time.sel { background: #2f45ff; color: #fff; border-color: #2f45ff; }
    label { display: block; font-size: 13px; font-weight: 600; margin: 10px 0 4px; }
    input, textarea { all: unset; box-sizing: border-box; display: block; width: 100%; max-width: 100%;
                      border: 1px solid #dfe3e8; border-radius: 8px;
                      padding: 11px 12px; font-size: 14px; background: #fff; color: #1a2233; }
    input:focus, textarea:focus { border-color: #2f45ff; }
    textarea { min-height: 80px; }
    .row { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); column-gap: 16px; row-gap: 0; }
    .row > div { min-width: 0; }
    /* v-Unit-1 : App. / unité + Ville + Code postal sur une même ligne. */
    .row3 { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr) minmax(0,1fr); column-gap: 16px; row-gap: 0; }
    .row3 > div { min-width: 0; }
    .btn { all: unset; display: inline-block; text-align: center; background: #2f45ff; color: #fff;
           padding: 13px 28px; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 15px; margin-top: 20px; }
    .btn:hover { background: #1e33e0; }
    .btn[disabled] { background: #b9c0cc; cursor: default; }
    .btn.ghost { background: #fff; color: #1a2233; border: 1px solid #dfe3e8; margin-right: 8px; }
    .rec { border-top: 1px solid #eef0f4; padding-top: 14px; margin-top: 14px; }
    .rec div { display: flex; justify-content: space-between; padding: 6px 0; font-size: 14px; }
    .rec .tot { border-top: 1px solid #eef0f4; margin-top: 8px; padding-top: 12px; font-weight: 700; font-size: 17px; }
    .err { background: #fdeaea; color: #a3261f; padding: 11px 14px; border-radius: 8px; font-size: 14px; margin-top: 14px; }
    .warn { background: #fff6e5; color: #8a5a00; padding: 11px 14px; border-radius: 8px; font-size: 14px; margin-top: 14px; }
    .link { all: unset; cursor: pointer; color: #2f45ff; font-weight: 600; text-decoration: underline; display: inline-block; margin-top: 8px; font-size: 14px; }
    .muted { color: #8a92a3; font-size: 14px; padding: 20px 0; text-align: center; }
    .ac-wrap { position: relative; }
    .ac-list { position: absolute; z-index: 30; top: 100%; left: 0; right: 0; background: #fff;
               border: 1px solid #dfe3e8; border-radius: 8px; margin-top: 4px; overflow: hidden;
               box-shadow: 0 8px 24px rgba(16,24,40,.12); }
    .ac-item { padding: 10px 12px; font-size: 14px; cursor: pointer; }
    .ac-item:hover { background: #f2f4ff; }
    @media (max-width: 560px) {
      .row { grid-template-columns: 1fr; column-gap: 0; }
      .row3 { grid-template-columns: 1fr; column-gap: 0; }
      .card { padding: 20px 22px; }
      .steps { margin-bottom: 16px; }
      .sub { margin: 0 0 12px; }
      label { margin: 8px 0 3px; }
      .btn { margin-top: 14px; }
      .rec { padding-top: 10px; margin-top: 10px; }
      .err, .warn { margin-top: 10px; }
    }
  `;

  // Étapes nommées : 1 = paliers, 2 = adresse, 3 = calendrier, 4 = formulaire, 5 = révision.
  const STEP = { TIERS: 1, ADDRESS: 2, CALENDAR: 3, FORM: 4, REVIEW: 5 };
  const STEP_COUNT = 5;

  const S = { step: STEP.TIERS, group: null, tiers: [], tier: null, month: null,
              days: [], date: null, slot: null, busy: false, err: '', sel: {},
              // v-InclReq-1 : inclusions obligatoires en erreur (id -> true).
              selErr: {},
              geo: null, geoKey: '', geoStatus: '', geoBusy: false, geoWarn: '',
              outOfCoverage: false,
              // v-Features-1 : options de la compagnie, apprises via public-tiers.
              features: { crews: false, geo: false } };



  const el = document.createElement('div');
  root.appendChild(Object.assign(document.createElement('style'), { textContent: CSS }));
  root.appendChild(el);

  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  function ymd(d) {
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  const money = (n) => T.money(n);
  const fmtTime = (hhmm) => T.time(hhmm);

  // v-Scroll-1 : hauteur d'un éventuel header fixe/sticky du site hôte.
  function hostHeaderOffset() {
    try {
      const nodes = document.querySelectorAll('header, [role="banner"], .header');
      for (let i = 0; i < nodes.length; i++) {
        const pos = getComputedStyle(nodes[i]).position;
        if (pos === 'fixed' || pos === 'sticky') return nodes[i].getBoundingClientRect().height || 0;
      }
    } catch (e) {}
    return 0;
  }

  // v-Scroll-1 : le widget repositionne lui-même la page, sans dépendre du site hôte.
  function scrollToWidget() {
    try {
      const rect = host.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < (window.innerHeight || 0)) return; // déjà visible
      const top = rect.top + window.pageYOffset - hostHeaderOffset() - 16;
      window.scrollTo({ top: top < 0 ? 0 : top, behavior: 'smooth' });
    } catch (e) {}
  }

  function emitStepChange() {
    try {
      window.postMessage({ source: 'hompilot-book', event: 'step_change', step: S.step }, '*');
    } catch (e) {}
    scrollToWidget();
  }


  async function api(path, body) {
    const r = await fetch(SUPABASE + '/' + path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.assign({ lang: lang }, body)),
    });
    const d = await r.json().catch(() => ({}));
    if (!r.ok) {
      const err = new Error(d.error || T.genericError);
      err.code = d.code || '';
      throw err;
    }
    return d;
  }

  async function loadTiers() {
    const d = await api('public-tiers', { company_id: companyId, group_slug: groupSlug });
    S.group = d.group; S.tiers = d.tiers || [];
    // v-Features-1 : sans l'option Géolocalisation, l'étape adresse reste un
    // simple formulaire — aucun appel à public-geocode.
    S.features = { crews: !!(d.features && d.features.crews), geo: !!(d.features && d.features.geo) };
    // v-Redirect-1 : page de remerciement configurée dans les réglages (repli
    // si le code collé ne porte pas data-redirect-to).
    S.redirectUrl = typeof d.redirect_url === 'string' ? d.redirect_url : '';
    render();
  }

  async function loadMonth() {
    const now = new Date();
    const first = new Date(S.month.getFullYear(), S.month.getMonth(), 1);
    const last = new Date(S.month.getFullYear(), S.month.getMonth() + 1, 0);
    const from = first < now ? ymd(now) : ymd(first);
    S.days = []; render();
    // v-Travel-1 : les coordonnées activent le filtre couverture + trajet côté
    // serveur. Sans elles, la requête est identique à avant.
    const payload = {
      company_id: companyId, tier_id: S.tier.id, from: from, to: ymd(last),
    };
    if (S.features.geo && S.geo) { payload.latitude = S.geo.latitude; payload.longitude = S.geo.longitude; }
    if (S.features.geo && F.city && F.city.trim()) payload.city = F.city.trim();
    const d = await api('public-availability', payload);
    S.outOfCoverage = d.out_of_coverage === true;
    S.days = d.days || [];
    render();
  }


  function render() {
    if (S.step === STEP.TIERS) return renderTiers();
    if (S.step === STEP.ADDRESS) return renderAddress();
    if (S.step === STEP.CALENDAR) return renderCalendar();
    if (S.step === STEP.FORM) return renderForm();
    if (S.step === STEP.REVIEW) return renderReview();
  }

  // v-SkipAddr-1 : l'étape adresse n'existe que si l'option Géolocalisation est
  // active. Sans elle, la barre compte une étape de moins.
  function hasAddressStep() { return !!S.features.geo; }

  function bar(n) {
    const skip = !hasAddressStep();
    const total = STEP_COUNT - (skip ? 1 : 0);
    const cur = skip && n > STEP.ADDRESS ? n - 1 : n;
    let out = '<div class="steps">';
    for (let i = 1; i <= total; i++) out += '<div class="step' + (i <= cur ? ' on' : '') + '"></div>';
    return out + '</div>';
  }


  // Clé de cache du géocodage : si l'adresse change au formulaire, la clé change
  // et on relance silencieusement le géocodage avant l'envoi.
  function addrKey() {
    return [F.address, F.city, F.postal_code]
      .map((v) => String(v || '').trim().toLowerCase().replace(/\s+/g, ' '))
      .join('|');
  }

  async function geocodeCurrent() {
    const d = await api('public-geocode', {
      company_id: companyId, address: F.address.trim(),
      city: F.city.trim(), postal_code: F.postal_code.trim(),
    });
    S.geoKey = addrKey();
    S.geoStatus = d.status || 'not_found';
    S.geo = (d.status === 'ok' && d.latitude != null && d.longitude != null)
      ? { latitude: d.latitude, longitude: d.longitude } : null;
    return d;
  }

  function goCalendar() {
    S.step = STEP.CALENDAR; S.err = ''; S.geoWarn = '';
    S.month = new Date(); S.date = null; S.slot = null;
    render(); emitStepChange();
    loadMonth().catch((e) => { S.err = e.message; render(); });
  }


  // v-Autocomplete-1 : suggestions d'adresses Google via public-address-autocomplete.
  function attachAutocomplete(input, onPick) {
    if (!input) return;
    input.setAttribute('autocomplete', 'off');
    const wrap = document.createElement('div');
    wrap.className = 'ac-wrap';
    input.parentNode.insertBefore(wrap, input);
    wrap.appendChild(input);
    const list = document.createElement('div');
    list.className = 'ac-list';
    list.style.display = 'none';
    wrap.appendChild(list);

    let timer = null, seq = 0;
    let token = Math.random().toString(36).slice(2) + Date.now().toString(36);
    const hide = () => { list.style.display = 'none'; list.innerHTML = ''; };

    input.addEventListener('input', () => {
      const q = input.value.trim();
      if (timer) clearTimeout(timer);
      if (q.length < 3) return hide();
      timer = setTimeout(async () => {
        const my = ++seq;
        try {
          const d = await api('public-address-autocomplete', {
            company_id: companyId, action: 'suggest', q: q, session_token: token,
          });
          if (my !== seq) return;
          const items = d.suggestions || [];
          if (!items.length) return hide();
          list.innerHTML = items.map((s2, i) =>
            '<div class="ac-item" data-i="' + i + '">' + esc(s2.text) + '</div>').join('');
          list.style.display = 'block';
          list.querySelectorAll('.ac-item').forEach((n) => {
            n.addEventListener('mousedown', async (ev) => {
              ev.preventDefault();
              const s2 = items[Number(n.dataset.i)];
              hide();
              let det = null;
              try {
                det = await api('public-address-autocomplete', {
                  company_id: companyId, action: 'details', place_id: s2.place_id, session_token: token,
                });
              } catch (e) { det = null; }
              token = Math.random().toString(36).slice(2) + Date.now().toString(36);
              // Ne jamais écrire l'adresse complète dans le champ adresse :
              // numéro civique + rue uniquement.
              const street = (det && det.address) ||
                String((det && det.formatted_address) || s2.text).split(',')[0].trim();
              onPick(det
                ? { address: street, city: det.city || '', postal_code: det.postal_code || '' }
                : { address: street, city: '', postal_code: '' });
            });
          });
        } catch (e) { hide(); }
      }, 250);
    });
    input.addEventListener('blur', () => setTimeout(hide, 150));
  }

  function renderAddress() {
    el.innerHTML = bar(STEP.ADDRESS) + '<div class="card"><h2>' + T.addrTitle + '</h2>' +
      '<p class="sub">' + T.addrSub + '</p>' +
      '<label for="a_addr">' + T.addressWork + '</label>' +
      '<input id="a_addr" autocomplete="new-address-hompilot" autocorrect="off" spellcheck="false" value="' + esc(F.address) + '">' +
      // v-Unit-1 : champ optionnel, jamais fusionné à l'adresse.
      '<div class="row3"><div><label for="a_unit">' + T.unit + '</label>' +
      '<input id="a_unit" autocomplete="new-address-hompilot" autocorrect="off" spellcheck="false" placeholder="' + esc(T.unitPh) + '" value="' + esc(F.unit) + '"></div>' +
      '<div><label for="a_city">' + T.city + '</label>' +
      '<input id="a_city" autocomplete="new-address-hompilot" autocorrect="off" spellcheck="false" value="' + esc(F.city) + '"></div><div><label for="a_post">' + T.postalCode + '</label>' +
      '<input id="a_post" autocomplete="new-address-hompilot" autocorrect="off" spellcheck="false" value="' + esc(F.postal_code) + '"></div></div>' +
      (S.err ? '<div class="err">' + esc(S.err) + '</div>' : '') +
      (S.geoWarn ? '<div class="warn">' + esc(S.geoWarn) +
        '<br><button class="link" id="anyway">' + T.geoAnyway + '</button></div>' : '') +
      (S.geoBusy ? '<p class="muted">' + T.geoChecking + '</p>' : '') +
      '<button class="btn ghost" id="back">' + T.back + '</button>' +
      '<button class="btn" id="nextAddr" ' + (S.geoBusy ? 'disabled' : '') + '>' + T.next + '</button>' +
      '</div>';

    const bindA = (id, k) => el.querySelector(id).addEventListener('input', (e) => { F[k] = e.target.value; });
    bindA('#a_addr','address'); bindA('#a_unit','unit'); bindA('#a_city','city'); bindA('#a_post','postal_code');
    attachAutocomplete(el.querySelector('#a_addr'), (d) => {
      if (d.address) F.address = d.address;
      if (d.city) F.city = d.city;
      if (d.postal_code) F.postal_code = d.postal_code;
      render();
    });

    const anyway = el.querySelector('#anyway');
    if (anyway) anyway.addEventListener('click', () => { S.geo = null; goCalendar(); });

    el.querySelector('#back').addEventListener('click', () => {
      S.step = STEP.TIERS; S.err = ''; S.geoWarn = ''; render(); emitStepChange();
    });
    el.querySelector('#nextAddr').addEventListener('click', async () => {
      if (S.geoBusy) return;
      if (!F.address.trim()) { S.err = T.errAddress; S.geoWarn = ''; return render(); }
      if (!F.city.trim()) { S.err = T.errCity; S.geoWarn = ''; return render(); }
      if (!F.postal_code.trim()) { S.err = T.errPostal; S.geoWarn = ''; return render(); }
      // v-Features-1 : option Géolocalisation inactive → on continue sans géocoder.
      if (!S.features.geo) { S.err = ''; S.geoWarn = ''; S.geo = null; return goCalendar(); }
      S.err = ''; S.geoWarn = ''; S.geoBusy = true; render();
      try {
        const d = await geocodeCurrent();
        S.geoBusy = false;
        if (d.status === 'ok') return goCalendar();
        S.geoWarn = d.status === 'low_confidence' ? T.geoLow : T.geoNotFound;
        render();
      } catch (e) {
        // Le géocodage ne doit jamais bloquer définitivement la réservation.
        S.geoBusy = false; S.geo = null; S.geoKey = ''; S.geoStatus = '';
        S.geoWarn = T.geoNotFound;
        render();
      }
    });
  }


  // v-Inclusions-1 : « Ce qui est inclus » sous chaque palier. Les inclusions
  // 'fixed' sont de simples lignes ; les 'choice' offrent un menu déroulant
  // dont la sélection est OPTIONNELLE et n'affecte ni le prix ni la durée.
  function hasChoice(t) {
    return ((t && t.inclusions) || []).some((i) => i.type === 'choice' && (i.options || []).length);
  }

  // v-Inclusions-4 : comportement uniforme — le clic sélectionne la carte et
  // déplie ses inclusions ; un bouton « Continuer » sous la carte sélectionnée
  // fait passer à l'étape suivante. Le choix d'option reste optionnel.
  function choiceInclusions(t) {
    return ((t && t.inclusions) || []).filter((i) => i.type === 'choice' && (i.options || []).length);
  }

  // v-InclReq-1 : is_required vient de public-tiers ; une inclusion obligatoire
  // exige un choix explicite. Cela n'affecte ni le prix ni la durée du palier.
  function isRequiredIncl(i) {
    return i && i.type === 'choice' && i.is_required === true && (i.options || []).length > 0;
  }

  function missingRequiredInclusions(t) {
    return choiceInclusions(t).filter((i) => isRequiredIncl(i) && !S.sel[i.id]);
  }

  function renderInclusions(t) {
    const list = (t && t.inclusions) || [];
    if (!list.length) return '';
    if (!S.tier || S.tier.id !== t.id) return '';
    return '<div class="incl" data-tier="' + esc(t.id) + '">' +
      '<div class="incl-title">' + T.inclTitle + '</div>' +
      list.map((i) => {
        if (i.type !== 'choice' || !(i.options || []).length) {
          return '<div class="incl-line">' + esc(i.label) + '</div>';
        }
        const cur = S.sel[i.id] || '';
        const req = isRequiredIncl(i);
        const bad = req && !!S.selErr[i.id];
        return '<div class="incl-line"><span>' + esc(i.label) +
          (req ? '<span class="incl-req">* ' + T.inclRequired + '</span>' : '') + '</span>' +
          '<select class="incl-sel' + (cur ? '' : ' unset') + (bad ? ' invalid' : '') +
            '" data-inc="' + esc(i.id) + '">' +
            (req
              ? '<option value="" disabled' + (cur ? '' : ' selected') + '>' + T.inclChoose + '</option>'
              : '<option value=""' + (cur ? '' : ' selected') + '>' + T.inclNone + '</option>') +
            i.options.map((o) =>
              '<option value="' + esc(o.id) + '"' + (cur === o.id ? ' selected' : '') + '>' +
                esc(o.label) + '</option>').join('') +
          '</select></div>' +
          (bad ? '<div class="incl-err">' + T.inclErr + '</div>' : '');
      }).join('') +
      '</div>';
  }



  function renderTiers() {
    el.innerHTML = bar(STEP.TIERS) + '<div class="card"><h2>' + esc(S.group ? S.group.display_name : '') + '</h2>' +
      '<p class="sub">' + esc((S.group && S.group.subtitle) ? S.group.subtitle : T.tiersSub) + '</p>' +
      (S.tiers.length ? S.tiers.map((t) =>
        '<div class="tier-block">' +
        '<div class="tier' + (S.tier && S.tier.id === t.id ? ' sel' : '') + '" data-id="' + esc(t.id) + '">' +
          '<div class="tier-left"><div class="tier-name">' + esc(t.label) +
            (t.badge ? '<span class="badge">' + esc(t.badge) + '</span>' : '') + '</div>' +
            (t.subtitle ? '<div class="tier-sub">' + esc(t.subtitle) + '</div>' : '') + '</div>' +
          '<div class="tier-right"><div class="price">' + money(Number(t.price).toFixed(0)) + '</div>' +
            '<div class="dur">' + fmtDur(t.duration_minutes) + '</div></div>' +
        '</div>' + renderInclusions(t) +
        (S.tier && S.tier.id === t.id
          ? '<button class="btn tier-next" data-id="' + esc(t.id) + '">' + T.next + '</button>'
          : '') +
        '</div>').join('') : '<p class="muted">' + T.loading + '</p>') +
      (S.err ? '<div class="err">' + esc(S.err) + '</div>' : '') + '</div>';

    el.querySelectorAll('.incl-sel').forEach((sel) => {
      sel.addEventListener('change', () => {
        S.sel[sel.dataset.inc] = sel.value || '';
        // v-InclReq-1 : l'erreur disparaît dès qu'une valeur est choisie.
        if (sel.value) delete S.selErr[sel.dataset.inc];
        render();
      });
    });


    function proceed(id) {
      const t = S.tiers.find((x) => x.id === id);
      // v-InclReq-1 : blocage tant qu'une inclusion obligatoire n'est pas choisie.
      const missing = missingRequiredInclusions(t);
      if (missing.length) {
        S.tier = t; S.selErr = {};
        missing.forEach((i) => { S.selErr[i.id] = true; });
        render();
        const first = el.querySelector('.incl-sel.invalid');
        if (first) {
          try { first.scrollIntoView({ behavior: 'smooth', block: 'center' }); } catch (e) { first.scrollIntoView(); }
          first.focus();
        }
        return;
      }
      S.selErr = {};
      S.tier = t;
      S.date = null; S.slot = null; S.err = ''; S.geoWarn = '';
      // v-SkipAddr-1 : sans Géolocalisation, on passe direct au calendrier.
      if (!hasAddressStep()) { S.geo = null; return goCalendar(); }
      S.step = STEP.ADDRESS;
      render(); emitStepChange();
    }

    el.querySelectorAll('.tier-next').forEach((b) => b.addEventListener('click', () => proceed(b.dataset.id)));

    el.querySelectorAll('.tier').forEach((n) => n.addEventListener('click', () => {
      const t = S.tiers.find((x) => x.id === n.dataset.id);
      if (S.tier && S.tier.id === t.id) return;
      S.tier = t; S.err = '';
      choiceInclusions(t).forEach((i) => { delete S.sel[i.id]; });
      S.selErr = {};
      render();
    }));

  }




  function fmtDur(m) {
    const h = Math.floor(m / 60), r = m % 60;
    return T.dur(h, r);
  }

  function renderCalendar() {
    // v-Travel-1 : aucune équipe ne dessert l'adresse — message explicite plutôt
    // qu'un calendrier vide sans explication.
    if (S.outOfCoverage) {
      el.innerHTML = bar(STEP.CALENDAR) + '<div class="card"><h2>' + T.outCoverTitle + '</h2>' +
        '<p class="sub">' + T.outCoverBody + '</p>' +
        '<button class="btn ghost" id="back">' + T.back + '</button></div>';
      el.querySelector('#back').addEventListener('click', () => {
        S.step = hasAddressStep() ? STEP.ADDRESS : STEP.TIERS;
        S.err = ''; S.geoWarn = ''; S.outOfCoverage = false;

        render(); emitStepChange();
      });
      return;
    }
    const y = S.month.getFullYear(), mo = S.month.getMonth();

    const firstDow = new Date(y, mo, 1).getDay();
    const nDays = new Date(y, mo + 1, 0).getDate();
    const byDate = {};
    S.days.forEach((d) => { byDate[d.date] = d.slots; });
    const today = new Date(); today.setHours(0,0,0,0);
    const isFirstMonth = y === today.getFullYear() && mo === today.getMonth();

    let cells = '';
    for (let i = 0; i < firstDow; i++) cells += '<div></div>';
    for (let d = 1; d <= nDays; d++) {
      const key = y + '-' + String(mo + 1).padStart(2, '0') + '-' + String(d).padStart(2, '0');
      const has = (byDate[key] || []).length > 0;
      cells += '<button class="day' + (S.date === key ? ' sel' : '') + '" data-d="' + key + '" ' +
        (has ? '' : 'disabled') + '>' + d + '</button>';
    }

    const slots = S.date ? (byDate[S.date] || []) : [];
    el.innerHTML = bar(STEP.CALENDAR) + '<div class="card"><h2>' +
      T.calTitle + '</h2>' +
      '<p class="sub">' + esc(S.tier.label) + ' · ' + money(Number(S.tier.price).toFixed(0)) + ' · ' + fmtDur(S.tier.duration_minutes) + '</p>' +
      '<div class="cal-head"><button class="nav" id="prev" ' + (isFirstMonth ? 'disabled' : '') + '>‹</button>' +
        '<strong>' + T.calHead(mo, y) + '</strong>' +
        '<button class="nav" id="next">›</button></div>' +
      '<div class="grid">' + DAYS.map((d) => '<div class="dow">' + d + '</div>').join('') + cells + '</div>' +
      (S.days.length === 0 ? '<p class="muted">' + T.loadingSlots + '</p>' : '') +
      (S.date ? (slots.length
        ? '<div class="times">' + slots.map((s) =>
            '<button class="time' + (S.slot && S.slot.starts_at === s.starts_at ? ' sel' : '') + '" data-s="' + esc(s.starts_at) + '">' + esc(fmtTime(s.time)) + '</button>').join('') + '</div>'
        : '<p class="muted">' + T.noSlots + '</p>') : '') +
      (S.err ? '<div class="err">' + esc(S.err) + '</div>' : '') +
      '<button class="btn ghost" id="back">' + T.back + '</button>' +
      '<button class="btn" id="next2" ' + (S.slot ? '' : 'disabled') + '>' + T.next + '</button>' +
      '</div>';

    el.querySelectorAll('.day').forEach((n) => n.addEventListener('click', () => {
      S.date = n.dataset.d; S.slot = null; render();
    }));
    el.querySelectorAll('.time').forEach((n) => n.addEventListener('click', () => {
      S.slot = (byDate[S.date] || []).find((s) => s.starts_at === n.dataset.s); render();
    }));
    el.querySelector('#prev').addEventListener('click', () => {
      S.month = new Date(y, mo - 1, 1); S.date = null; S.slot = null;
      render(); loadMonth().catch((e) => { S.err = e.message; render(); });
    });
    el.querySelector('#next').addEventListener('click', () => {
      S.month = new Date(y, mo + 1, 1); S.date = null; S.slot = null;
      render(); loadMonth().catch((e) => { S.err = e.message; render(); });
    });
    el.querySelector('#back').addEventListener('click', () => { S.step = hasAddressStep() ? STEP.ADDRESS : STEP.TIERS; S.err = ''; S.geoWarn = ''; render(); emitStepChange(); });
    const nx = el.querySelector('#next2');
    if (nx) nx.addEventListener('click', () => { S.step = STEP.FORM; S.err = ''; render(); emitStepChange(); });
  }

  const F = { first_name:'', last_name:'', email:'', phone:'', address:'', unit:'', city:'', postal_code:'', notes:'' };

  function renderForm() {
    el.innerHTML = bar(STEP.FORM) + '<div class="card"><h2>' + T.formTitle + '</h2>' +
      '<div class="row"><div><label>' + T.firstName + '</label>' +
      '<input id="f_first" value="' + esc(F.first_name) + '"></div><div><label>' + T.lastName + '</label>' +
      '<input id="f_last" value="' + esc(F.last_name) + '"></div></div>' +
      '<label for="f_addr">' + T.addressWork + '</label>' +
      '<input id="f_addr" autocomplete="new-address-hompilot" autocorrect="off" spellcheck="false" value="' + esc(F.address) + '">' +
      // v-Unit-1 : champ optionnel, jamais fusionné à l'adresse.
      '<div class="row3"><div><label for="f_unit">' + T.unit + '</label>' +
      '<input id="f_unit" autocomplete="new-address-hompilot" autocorrect="off" spellcheck="false" placeholder="' + esc(T.unitPh) + '" value="' + esc(F.unit) + '"></div>' +
      '<div><label>' + T.city + '</label>' +
      '<input id="f_city" autocomplete="new-address-hompilot" autocorrect="off" spellcheck="false" value="' + esc(F.city) + '"></div><div><label>' + T.postalCode + '</label>' +
      '<input id="f_post" autocomplete="new-address-hompilot" autocorrect="off" spellcheck="false" value="' + esc(F.postal_code) + '"></div></div>' +
      '<label for="f_mail">' + T.email + '</label><input id="f_mail" value="' + esc(F.email) + '">' +
      '<label for="f_tel">' + T.phone + '</label><input id="f_tel" value="' + esc(F.phone) + '">' +
      '<label for="f_notes">' + T.notes + '</label><textarea id="f_notes">' + esc(F.notes) + '</textarea>' +
      (S.err ? '<div class="err">' + esc(S.err) + '</div>' : '') +
      '<button class="btn ghost" id="back">' + T.back + '</button><button class="btn" id="next3">' + T.next + '</button>' +
      '</div>';

    const bind = (id, k) => el.querySelector(id).addEventListener('input', (e) => { F[k] = e.target.value; });
    bind('#f_first','first_name'); bind('#f_last','last_name'); bind('#f_addr','address');
    bind('#f_unit','unit');
    bind('#f_city','city'); bind('#f_post','postal_code'); bind('#f_mail','email');
    bind('#f_tel','phone'); bind('#f_notes','notes');
    attachAutocomplete(el.querySelector('#f_addr'), (d) => {
      if (d.address) F.address = d.address;
      if (d.city) F.city = d.city;
      if (d.postal_code) F.postal_code = d.postal_code;
      render();
    });

    el.querySelector('#back').addEventListener('click', () => { S.step = STEP.CALENDAR; S.err = ''; render(); emitStepChange(); });
    el.querySelector('#next3').addEventListener('click', () => {
      if (!F.first_name.trim() || !F.last_name.trim()) { S.err = T.errName; return render(); }
      if (!/.+@.+\..+/.test(F.email)) { S.err = T.errEmail; return render(); }
      if (F.phone.replace(/\D/g,'').length < 10) { S.err = T.errPhone; return render(); }
      if (!F.address.trim()) { S.err = T.errAddress; return render(); }
      // v-SkipAddr-2 : sans étape adresse, ville et code postal ne sont validés qu'ici.
      if (!hasAddressStep()) {
        if (!F.city.trim()) { S.err = T.errCity; return render(); }
        if (!F.postal_code.trim()) { S.err = T.errPostal; return render(); }
      }

      S.err = ''; S.step = STEP.REVIEW; render(); emitStepChange();
    });
  }

  function renderReview() {
    const d = new Date(S.slot.starts_at);
    const dateTxt = T.longDate(d.getDate(), d.getMonth(), d.getFullYear(), S.slot.time);
    el.innerHTML = bar(STEP.REVIEW) + '<div class="card"><h2>' + T.reviewTitle + '</h2>' +
      '<div class="rec">' +
        '<div><span>' + T.rowService + '</span><span>' + esc(S.tier.label) + '</span></div>' +
        '<div><span>' + T.rowDate + '</span><span>' + esc(dateTxt) + '</span></div>' +
        '<div><span>' + T.rowDuration + '</span><span>' + fmtDur(S.tier.duration_minutes) + '</span></div>' +
        '<div><span>' + T.rowName + '</span><span>' + esc(F.first_name + ' ' + F.last_name) + '</span></div>' +
        '<div><span>' + T.rowAddress + '</span><span>' + esc([F.address, (F.unit || '').trim() ? T.unitShort + ' ' + (F.unit || '').trim() : '', F.city].filter(Boolean).join(', ')) + '</span></div>' +
        '<div><span>' + T.rowPhone + '</span><span>' + esc(F.phone) + '</span></div>' +
        '<div class="tot"><span>' + T.rowTotal + '</span><span>' + money(Number(S.tier.price).toFixed(2)) + '</span></div>' +
      '</div>' +
      (S.err ? '<div class="err">' + esc(S.err) + '</div>' : '') +
      '<button class="btn ghost" id="back">' + T.back + '</button>' +
      '<button class="btn" id="confirm" ' + (S.busy ? 'disabled' : '') + '>' +
        (S.busy ? T.booking : T.confirmBtn) + '</button>' +
      '</div>';

    el.querySelector('#back').addEventListener('click', () => { S.step = STEP.FORM; S.err = ''; render(); emitStepChange(); });
    el.querySelector('#confirm').addEventListener('click', book);
  }

  async function book() {
    if (S.busy) return;
    S.busy = true; S.err = ''; render();
    try {
      // Si l'adresse a été modifiée au formulaire, les coordonnées mémorisées
      // sont obsolètes : on relance le géocodage en silence, sans bloquer.
      if (S.features.geo && addrKey() !== S.geoKey) {
        try { await geocodeCurrent(); } catch (e) { S.geo = null; S.geoKey = ''; }
      }

      // v-Inclusions-1 : une entrée par inclusion 'choice' du palier retenu ;
      // option_id vide = aucun choix (cas prévu, la réservation passe quand même).
      const tierSelections = ((S.tier && S.tier.inclusions) || [])
        .filter((i) => i.type === 'choice' && (i.options || []).length)
        .map((i) => ({ inclusion_id: i.id, option_id: S.sel[i.id] || null }));

      const payload = Object.assign({
        company_id: companyId, tier_id: S.tier.id, starts_at: S.slot.starts_at,
        tier_selections: tierSelections,
      }, F);
      // v-Unit-1 : unité envoyée séparément ; chaîne vide = null. Jamais dans address.
      payload.unit = (F.unit || '').trim() || null;
      if (S.features.geo && S.geo) { payload.latitude = S.geo.latitude; payload.longitude = S.geo.longitude; }

      const r = await api('public-book', payload);

      try {
        window.postMessage({ source:'hompilot-maya', event:'appointment_booked',
          service: r.service, value: r.amount, appointment_id: r.appointment_id }, '*');
      } catch (e) {}

      const dest = redirectTo || S.redirectUrl || '';
      if (dest && gotoThankYou(dest, {
        order_id: r.appointment_id,
        amount: r.amount,
        service: r.service,
      })) return;

      el.innerHTML = bar(STEP.REVIEW) + '<div class="card"><h2>' + T.doneTitle + '</h2>' +
        '<p class="sub">' + T.doneBody(esc(r.confirmation)) + '</p></div>';
    } catch (e) {
      S.busy = false; S.err = e.message;
      // Codes serveur qui invalident le créneau choisi : on renvoie l'utilisateur
      // au calendrier avec des disponibilités fraîches. Repli sur l'ancienne
      // regex française tant que la fonction déployée ne renvoie pas `code`.
      const RETRY_CODES = ['SLOT_TAKEN', 'SLOT_TOO_SOON', 'DAY_CLOSED', 'OUTSIDE_HOURS', 'DAY_FULL'];
      const retry = e.code
        ? RETRY_CODES.indexOf(e.code) !== -1
        : /réservé|complète|rapproché|ouverture|disponibilité/i.test(e.message);
      if (retry) {
        S.step = STEP.CALENDAR; S.slot = null;
        render(); emitStepChange(); loadMonth().catch(() => {});
        return;
      }
      render();
    }
  }

  render();
  loadTiers().catch((e) => { S.err = e.message; render(); });
})();
