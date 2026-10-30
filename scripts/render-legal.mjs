// Politique de confidentialité HomPilot (FR / EN) — Loi 25 (Québec) et données Google (Business Profile).
// Pages : /fr/confidentialite et /privacy. Exigée par Google pour vérifier l'application OAuth
// « HomPilot - Google Business Profile » (scope business.manage).
export const privacyPath = (lang) => (lang === 'fr' ? '/fr/confidentialite' : '/privacy');
export const PRIVACY_UPDATED = { fr: '30 octobre 2026', en: 'October 30, 2026' };
const CONTACT = 'hello@hompilot.com';
const GOOGLE_POLICY = 'https://developers.google.com/terms/api-services-user-data-policy';

const FR = {
  eyebrow: 'CONFIDENTIALITÉ',
  title: 'Politique de confidentialité',
  intro: `Cette politique explique comment HomPilot recueille, utilise, communique et protège les renseignements personnels, y compris les données obtenues de Google lorsqu’une entreprise relie sa fiche Google Business Profile à HomPilot. Dernière mise à jour : ${PRIVACY_UPDATED.fr}.`,
  sections: [
    ['Qui nous sommes', [
      `HomPilot exploite la plateforme HomPilot (hompilot.com et app.hompilot.com) : un logiciel de gestion et une réceptionniste IA, Maya, pour les entreprises de services résidentiels.`,
      `Responsable de la protection des renseignements personnels : Alexandre Somma, joignable à <a href="mailto:${CONTACT}">${CONTACT}</a>.`,
    ]],
    ['Notre rôle', [
      `Pour les comptes de nos entreprises clientes et de leurs utilisateurs, HomPilot décide de l’usage des renseignements.`,
      `Pour les renseignements des clients de ces entreprises (personnes qui appellent, écrivent ou réservent), HomPilot agit pour le compte de l’entreprise concernée, qui en demeure responsable. Les demandes de ces personnes peuvent être adressées à l’entreprise ou à nous ; nous les transmettons au besoin.`,
    ]],
    ['Renseignements recueillis', null, [
      `<strong>Compte et entreprise</strong> : nom, courriel, téléphone, rôle, nom et coordonnées de l’entreprise, réglages, renseignements d’abonnement.`,
      `<strong>Clients des entreprises</strong> : nom, téléphone, courriel, adresse du logement, détails des demandes, rendez-vous, soumissions, factures et paiements, renseignements sur les équipements du logement (HomPasseport).`,
      `<strong>Communications</strong> : enregistrements et transcriptions des appels traités par Maya, textos et courriels échangés avec l’entreprise.`,
      `<strong>Position des techniciens</strong> : seulement après le consentement du technicien, pendant un déplacement vers un client ; les positions sont effacées après 7 jours.`,
      `<strong>Données techniques</strong> : journaux de sécurité et de fonctionnement. Notre site n’utilise aucun témoin publicitaire ni outil de suivi publicitaire.`,
    ]],
    ['Utilisation des renseignements', null, [
      `Fournir le service : répondre aux appels et textos, prendre des rendez-vous, préparer des soumissions et des factures, encaisser des paiements, envoyer des confirmations et des rappels.`,
      `Assurer la sécurité, prévenir la fraude, corriger les erreurs et soutenir nos clients.`,
      `Respecter nos obligations légales.`,
      `Nous ne vendons aucun renseignement personnel.`,
    ]],
    ['Données Google (Google Business Profile)', [
      `Lorsqu’un administrateur d’une entreprise choisit « Connecter Google » dans HomPilot, il autorise HomPilot à accéder à sa fiche Google Business Profile (autorisation « business.manage »).`,
    ], [
      `<strong>Données obtenues</strong> : la liste des comptes et des fiches d’entreprise que le compte Google peut gérer (nom, adresse, identifiants Google de la fiche, lien Google Maps et lien pour laisser un avis), ainsi que les avis et la note de la fiche choisie.`,
      `<strong>Utilisation</strong> : uniquement pour associer la fiche à l’entreprise dans HomPilot, afficher ses avis et sa note (par exemple sur les soumissions), préparer les demandes d’avis envoyées aux clients de l’entreprise et vérifier que la connexion fonctionne.`,
      `<strong>Ce que nous ne faisons jamais</strong> : vendre ces données, les utiliser pour de la publicité, pour évaluer la solvabilité ou pour entraîner des modèles d’intelligence artificielle, ni les communiquer à des tiers, sauf aux fournisseurs nécessaires au service, sur instruction de l’entreprise, ou lorsque la loi l’exige.`,
      `<strong>Sécurité</strong> : les jetons d’accès Google sont chiffrés (AES-256) et utilisés uniquement par nos serveurs ; ils ne sont jamais transmis au navigateur. Seul le personnel autorisé y a accès, et seulement pour la sécurité, le soutien demandé par l’entreprise ou une obligation légale.`,
      `<strong>Retrait</strong> : l’entreprise peut déconnecter Google en tout temps dans HomPilot (Réglages › Intégrations) ou retirer l’accès dans son compte Google (<a href="https://myaccount.google.com/permissions">myaccount.google.com/permissions</a>). La déconnexion révoque l’accès chez Google et efface immédiatement les jetons conservés par HomPilot.`,
      `L’utilisation et le transfert, par HomPilot, des informations reçues des API Google respectent les <a href="${GOOGLE_POLICY}">Règles relatives aux données utilisateur des services d’API Google</a>, y compris les exigences d’utilisation limitée.`,
    ]],
    ['Fournisseurs et lieux d’hébergement', [
      `Nous confions certains traitements à des fournisseurs qui n’utilisent les renseignements que pour nous rendre service, notamment : hébergement et base de données (Supabase, Vercel, Amazon Web Services pour les sauvegardes), téléphonie et textos (Twilio), agent vocal (Retell AI), intelligence artificielle (Google Gemini, Anthropic), courriels (Resend), paiements (Stripe), cartes et adresses (Mapbox, Google Maps Platform).`,
      `Certains de ces fournisseurs hébergent des renseignements à l’extérieur du Québec, notamment aux États-Unis. Avant de communiquer des renseignements hors du Québec, nous évaluons la protection offerte et encadrons ces transferts par contrat.`,
    ]],
    ['Conservation', [
      `Nous conservons les renseignements pendant la durée de l’abonnement de l’entreprise cliente, puis le temps nécessaire aux fins prévues ou exigé par la loi. Ensuite, nous les détruisons ou les anonymisons. Une entreprise peut demander la suppression de ses données à la fin de son abonnement.`,
    ]],
    ['Sécurité', [
      `Nous appliquons des mesures raisonnables : chiffrement des communications et des données sensibles, contrôle des accès par entreprise et par rôle, journalisation et sauvegardes. En cas d’incident de confidentialité présentant un risque de préjudice sérieux, nous avisons les personnes concernées et la Commission d’accès à l’information.`,
    ]],
    ['Vos droits', [
      `Vous pouvez demander l’accès à vos renseignements, leur rectification, leur suppression ou leur transfert dans un format technologique structuré, et retirer votre consentement. Écrivez à <a href="mailto:${CONTACT}">${CONTACT}</a> ; nous répondons dans un délai de 30 jours. Si notre réponse ne vous satisfait pas, vous pouvez vous adresser à la <a href="https://www.cai.gouv.qc.ca">Commission d’accès à l’information du Québec</a>.`,
    ]],
    ['Modifications', [
      `Nous pouvons modifier cette politique. La date de mise à jour figure en haut de la page ; en cas de changement important, nous en informons les entreprises clientes.`,
    ]],
  ],
  contact: `Questions : <a href="mailto:${CONTACT}">${CONTACT}</a>`,
};

const EN = {
  eyebrow: 'PRIVACY',
  title: 'Privacy policy',
  intro: `This policy explains how HomPilot collects, uses, shares and protects personal information, including data obtained from Google when a business connects its Google Business Profile to HomPilot. Last updated: ${PRIVACY_UPDATED.en}.`,
  sections: [
    ['Who we are', [
      `HomPilot operates the HomPilot platform (hompilot.com and app.hompilot.com): business management software and an AI receptionist, Maya, for home service companies.`,
      `Person in charge of the protection of personal information: Alexandre Somma, reachable at <a href="mailto:${CONTACT}">${CONTACT}</a>.`,
    ]],
    ['Our role', [
      `For the accounts of our business customers and their users, HomPilot decides how the information is used.`,
      `For information about those businesses’ customers (people who call, text or book), HomPilot acts on behalf of the business concerned, which remains responsible for it. Those people may contact the business or us; we forward requests when needed.`,
    ]],
    ['Information we collect', null, [
      `<strong>Account and business</strong>: name, email, phone, role, business name and contact details, settings, subscription information.`,
      `<strong>Customers of businesses</strong>: name, phone, email, home address, request details, appointments, quotes, invoices and payments, information about home equipment (HomPassport).`,
      `<strong>Communications</strong>: recordings and transcripts of calls handled by Maya, texts and emails exchanged with the business.`,
      `<strong>Technician location</strong>: only after the technician’s consent, while travelling to a customer; locations are deleted after 7 days.`,
      `<strong>Technical data</strong>: security and operational logs. Our website uses no advertising cookies or advertising tracking tools.`,
    ]],
    ['How we use information', null, [
      `To provide the service: answer calls and texts, book appointments, prepare quotes and invoices, collect payments, send confirmations and reminders.`,
      `To keep the service secure, prevent fraud, fix errors and support our customers.`,
      `To meet our legal obligations.`,
      `We do not sell personal information.`,
    ]],
    ['Google data (Google Business Profile)', [
      `When a business administrator chooses “Connect Google” in HomPilot, they authorize HomPilot to access their Google Business Profile (the “business.manage” permission).`,
    ], [
      `<strong>Data obtained</strong>: the list of business accounts and profiles the Google account can manage (name, address, Google profile identifiers, Google Maps link and review link), and the reviews and rating of the selected profile.`,
      `<strong>Use</strong>: only to link the profile to the business in HomPilot, display its reviews and rating (for example on quotes), prepare review requests sent to the business’s customers and check that the connection works.`,
      `<strong>What we never do</strong>: sell this data, use it for advertising, for credit assessment or to train artificial intelligence models, or share it with third parties, except service providers needed to run the service, on the business’s instructions, or when required by law.`,
      `<strong>Security</strong>: Google access tokens are encrypted (AES-256) and used only by our servers; they are never sent to the browser. Only authorized staff can access them, and only for security, support requested by the business or a legal obligation.`,
      `<strong>Withdrawal</strong>: the business can disconnect Google at any time in HomPilot (Settings › Integrations) or remove access in its Google account (<a href="https://myaccount.google.com/permissions">myaccount.google.com/permissions</a>). Disconnecting revokes access at Google and immediately deletes the tokens kept by HomPilot.`,
      `HomPilot’s use and transfer of information received from Google APIs adheres to the <a href="${GOOGLE_POLICY}">Google API Services User Data Policy</a>, including the Limited Use requirements.`,
    ]],
    ['Service providers and hosting locations', [
      `We rely on providers that use information only to serve us, including: hosting and database (Supabase, Vercel, Amazon Web Services for backups), telephony and texting (Twilio), voice agent (Retell AI), artificial intelligence (Google Gemini, Anthropic), email (Resend), payments (Stripe), maps and addresses (Mapbox, Google Maps Platform).`,
      `Some of these providers host information outside Quebec, including in the United States. Before sharing information outside Quebec, we assess the protection offered and govern these transfers by contract.`,
    ]],
    ['Retention', [
      `We keep information for the duration of the business customer’s subscription, then for as long as needed for the intended purposes or required by law. We then destroy or anonymize it. A business may request deletion of its data when its subscription ends.`,
    ]],
    ['Security', [
      `We apply reasonable measures: encryption of communications and sensitive data, access control by business and role, logging and backups. If a confidentiality incident presents a risk of serious injury, we notify the people concerned and Quebec’s Commission d’accès à l’information.`,
    ]],
    ['Your rights', [
      `You may request access to your information, its correction, deletion or transfer in a structured technological format, and withdraw your consent. Write to <a href="mailto:${CONTACT}">${CONTACT}</a>; we reply within 30 days. If you are not satisfied with our answer, you may contact the <a href="https://www.cai.gouv.qc.ca">Commission d’accès à l’information du Québec</a>.`,
    ]],
    ['Changes', [
      `We may update this policy. The update date appears at the top of this page; we inform business customers of significant changes.`,
    ]],
  ],
  contact: `Questions: <a href="mailto:${CONTACT}">${CONTACT}</a>`,
};

export const privacyTitle = (lang) => (lang === 'fr' ? FR.title : EN.title);

export function privacyMarkup(lang) {
  const t = lang === 'fr' ? FR : EN;
  const fr = lang === 'fr';
  const home = fr ? '/fr' : '/';
  const body = t.sections.map(([h, paragraphs, items]) =>
    `<section><h2>${h}</h2>${(paragraphs || []).map((p) => `<p>${p}</p>`).join('')}${items ? `<ul>${items.map((i) => `<li>${i}</li>`).join('')}</ul>` : ''}</section>`,
  ).join('');
  return `<main id="main" class="service-page legal-page container"><nav aria-label="${fr ? 'Fil d’Ariane' : 'Breadcrumb'}"><a href="${home}">HomPilot</a> / <a href="${privacyPath(lang)}">${t.title}</a></nav><p class="eyebrow">${t.eyebrow}</p><h1>${t.title}</h1><p class="service-intro">${t.intro}</p>${body}<p class="legal-contact">${t.contact}</p></main><footer class="container service-footer"><a href="${home}">HomPilot</a> · <a href="${privacyPath(fr ? 'en' : 'fr')}" lang="${fr ? 'en' : 'fr'}">${fr ? 'English' : 'Français'}</a></footer>`;
}
