// Conditions générales d'utilisation HomPilot (FR / EN).
// Pages : /fr/conditions et /terms. Lien en pied de page à côté de la politique de confidentialité.
import { privacyPath } from './render-legal.mjs';

export const termsPath = (lang) => (lang === 'fr' ? '/fr/conditions' : '/terms');
export const TERMS_EFFECTIVE = { fr: '16 novembre 2026', en: 'November 16, 2026' };
const CONTACT = 'hello@hompilot.com';
const SITE = 'https://www.hompilot.com';
const mail = `<a href="mailto:${CONTACT}">${CONTACT}</a>`;

// Chaque section : [titre, blocs]. Un bloc texte devient un paragraphe, un tableau devient une liste.
const FR = {
  eyebrow: 'CONDITIONS',
  title: 'Conditions générales d’utilisation',
  intro: `Date d’entrée en vigueur : ${TERMS_EFFECTIVE.fr}.`,
  sections: [
    ['1. Acceptation des conditions', [
      'Bienvenue sur HomPilot.',
      'Les présentes conditions générales d’utilisation (« Conditions ») encadrent l’accès et l’utilisation de la plateforme HomPilot, de ses applications, fonctionnalités et services associés.',
      'En créant un compte, en accédant à la plateforme ou en utilisant ses services, vous acceptez d’être lié par les présentes Conditions.',
      'Si vous n’acceptez pas ces Conditions, vous ne devez pas utiliser la plateforme.',
    ]],
    ['2. Présentation de HomPilot', [
      'HomPilot est une plateforme technologique conçue pour aider les entreprises et leurs utilisateurs à gérer leurs opérations, leurs informations et leurs activités professionnelles.',
      'La plateforme peut notamment proposer :',
      [
        'Des outils de gestion et d’administration.',
        'La gestion des clients et des informations associées.',
        'Des fonctionnalités de suivi des opérations.',
        'Des outils de gestion commerciale et financière.',
        'Des intégrations avec des services et logiciels tiers.',
        'Des fonctionnalités d’automatisation et de synchronisation de données.',
      ],
      'Les fonctionnalités disponibles peuvent évoluer au fil du temps.',
    ]],
    ['3. Création et sécurité des comptes', [
      'Pour utiliser certaines fonctionnalités, vous devez créer un compte HomPilot.',
      'Vous vous engagez à :',
      [
        'Fournir des renseignements exacts et à jour.',
        'Maintenir la confidentialité de vos identifiants.',
        'Protéger l’accès à votre compte.',
        'Informer HomPilot de toute utilisation non autorisée de votre compte.',
        'Ne pas partager vos accès avec des personnes non autorisées.',
      ],
      'Vous êtes responsable des activités réalisées au moyen de votre compte, sous réserve des dispositions légales applicables.',
      'HomPilot se réserve le droit de suspendre un compte en cas d’utilisation frauduleuse, abusive ou contraire aux présentes Conditions.',
    ]],
    ['4. Abonnements et paiements', [
      'Certaines fonctionnalités de HomPilot peuvent être offertes sous forme d’abonnement payant.',
      'Les tarifs, modalités de facturation et fonctionnalités associées sont communiqués au moment de la souscription.',
      'Sauf indication contraire :',
      [
        'Les abonnements sont facturés selon la fréquence sélectionnée.',
        'Les paiements doivent être effectués conformément aux modalités applicables.',
        'Les modifications tarifaires seront communiquées aux clients concernés.',
        'Les taxes applicables peuvent être ajoutées aux montants facturés.',
      ],
      'Les conditions de renouvellement, de résiliation et de remboursement sont celles communiquées lors de la souscription, sous réserve des droits impératifs prévus par la loi.',
    ]],
    ['5. Intégrations avec des services tiers', [
      'HomPilot peut permettre aux utilisateurs de connecter leur compte à des services externes, notamment :',
      [
        'QuickBooks Online (Intuit).',
        'Des plateformes de paiement.',
        'Des outils de gestion et d’administration.',
        'D’autres applications et services compatibles.',
      ],
      'Lorsqu’un utilisateur connecte un service tiers, il autorise HomPilot à accéder aux données et fonctionnalités nécessaires, selon les permissions qu’il accorde.',
      'Pour l’intégration QuickBooks Online :',
      [
        'Chaque entreprise doit autoriser individuellement sa connexion.',
        'Les utilisateurs doivent disposer des autorisations nécessaires sur leur compte QuickBooks.',
        'Les échanges de données sont effectués selon les permissions accordées.',
        'Les utilisateurs peuvent déconnecter leur compte tiers selon les fonctionnalités disponibles.',
      ],
      'HomPilot n’est pas propriétaire des services tiers et ne contrôle pas leur disponibilité, leurs modifications ou leurs politiques.',
      'L’utilisation de ces services demeure également assujettie aux conditions générales de leurs fournisseurs respectifs.',
      'QuickBooks et Intuit sont des marques et services de leurs propriétaires respectifs. HomPilot n’est ni affilié à Intuit ni officiellement approuvé par Intuit, sauf indication expresse contraire.',
    ]],
    ['6. Données et confidentialité', [
      'HomPilot accorde une importance particulière à la protection des renseignements et des données de ses utilisateurs.',
      `Les renseignements personnels sont collectés, utilisés, conservés et traités conformément à notre <a href="${privacyPath('fr')}">Politique de confidentialité</a>.`,
      'En utilisant HomPilot, vous reconnaissez avoir pris connaissance de cette politique.',
      'Les utilisateurs demeurent responsables de s’assurer qu’ils disposent des droits et autorisations nécessaires pour transmettre à HomPilot les données concernant leurs clients, employés, fournisseurs ou autres tiers.',
      'HomPilot met en œuvre des mesures de sécurité raisonnables afin de protéger les informations hébergées sur sa plateforme.',
    ]],
    ['7. Propriété intellectuelle', [
      'La plateforme HomPilot, incluant notamment son logiciel, son code source, son architecture, son interface, ses éléments graphiques, ses fonctionnalités, ses marques et ses contenus, demeure la propriété de HomPilot ou de ses concédants de licence.',
      'Aucune disposition des présentes Conditions ne confère à l’utilisateur un droit de propriété sur ces éléments.',
      'L’utilisateur bénéficie uniquement d’un droit limité, non exclusif, non transférable et révocable d’utiliser la plateforme conformément aux présentes Conditions et à son abonnement.',
      'Il est interdit de :',
      [
        'Copier ou reproduire le logiciel sans autorisation.',
        'Décompiler ou tenter de reconstituer le code source.',
        'Contourner les mécanismes de sécurité.',
        'Revendre ou redistribuer la plateforme sans autorisation.',
        'Utiliser la plateforme pour développer un service concurrent au moyen d’un accès non autorisé.',
      ],
    ]],
    ['8. Utilisation acceptable', [
      'Les utilisateurs s’engagent à utiliser HomPilot conformément aux lois applicables.',
      'Il est notamment interdit de :',
      [
        'Utiliser la plateforme à des fins illégales ou frauduleuses.',
        'Accéder aux données d’autres utilisateurs sans autorisation.',
        'Perturber le fonctionnement ou la sécurité des systèmes.',
        'Introduire des virus, logiciels malveillants ou codes nuisibles.',
        'Utiliser la plateforme pour transmettre des contenus illicites.',
        'Exploiter les services d’une manière susceptible de compromettre leur sécurité ou leur disponibilité.',
      ],
      'HomPilot peut prendre les mesures nécessaires pour prévenir ou faire cesser ces activités.',
    ]],
    ['9. Disponibilité et maintenance', [
      'HomPilot s’efforce de maintenir sa plateforme accessible et fonctionnelle.',
      'Toutefois, HomPilot ne garantit pas une disponibilité ininterrompue ou sans erreur.',
      'Des interruptions peuvent survenir notamment en raison :',
      [
        'De travaux de maintenance.',
        'De mises à jour technologiques.',
        'De défaillances techniques.',
        'De problèmes liés aux fournisseurs externes.',
        'D’événements indépendants de son contrôle.',
      ],
      'HomPilot se réserve le droit de modifier, améliorer, suspendre ou retirer certaines fonctionnalités, dans le respect des obligations légales et contractuelles applicables.',
    ]],
    ['10. Limitation de responsabilité', [
      'HomPilot fournit une plateforme technologique destinée à faciliter la gestion et les opérations de ses utilisateurs.',
      'HomPilot ne fournit pas de services professionnels de comptabilité, de fiscalité, de conseil juridique ou de services financiers, sauf indication contractuelle expresse.',
      'Les utilisateurs demeurent responsables :',
      [
        'De l’exactitude des informations saisies.',
        'De la vérification des transactions et synchronisations.',
        'De leurs obligations comptables et fiscales.',
        'De la conformité de leurs activités aux lois applicables.',
        'De la validation des données transmises à des services tiers.',
      ],
      'Dans les limites permises par la loi, HomPilot ne pourra être tenu responsable des dommages indirects, pertes de profits, pertes d’opportunités commerciales ou interruptions d’activités résultant de l’utilisation de la plateforme.',
      'Aucune disposition des présentes Conditions ne vise à exclure une responsabilité qui ne peut légalement être exclue ou limitée.',
    ]],
    ['11. Suspension et résiliation', [
      'Un utilisateur peut demander la résiliation de son compte conformément aux modalités de son abonnement.',
      'HomPilot peut suspendre ou résilier un compte en cas :',
      [
        'De violation importante des présentes Conditions.',
        'D’activité frauduleuse ou illégale.',
        'De risque pour la sécurité de la plateforme.',
        'De non-paiement selon les modalités applicables.',
      ],
      'À la suite d’une résiliation, l’accès aux fonctionnalités peut être désactivé.',
      `La conservation, la récupération et la suppression des données seront effectuées conformément à notre <a href="${privacyPath('fr')}">Politique de confidentialité</a> et aux obligations légales applicables.`,
    ]],
    ['12. Modifications des Conditions', [
      'HomPilot peut modifier les présentes Conditions afin de tenir compte de l’évolution de ses services, de ses fonctionnalités ou des exigences légales.',
      'Les modifications importantes seront communiquées aux utilisateurs par un moyen approprié.',
      'La date de mise à jour sera indiquée au début du présent document.',
      'L’utilisation continue de la plateforme après l’entrée en vigueur des modifications sera régie par les nouvelles Conditions, sous réserve des exigences légales applicables.',
    ]],
    ['13. Droit applicable', [
      'Les présentes Conditions sont régies par les lois applicables dans la province de Québec et les lois fédérales du Canada qui s’y appliquent, sous réserve des règles impératives de protection des consommateurs et des autres dispositions légales applicables.',
      'Tout différend sera soumis aux tribunaux compétents conformément aux règles de compétence applicables.',
    ]],
    ['14. Contact', [
      'Pour toute question concernant les présentes Conditions ou l’utilisation de HomPilot, vous pouvez communiquer avec notre équipe :',
      [
        `Site Web : <a href="${SITE}">www.hompilot.com</a>`,
        `Courriel : ${mail}`,
      ],
    ]],
  ],
  footnote: '© 2026 HomPilot. Tous droits réservés.',
};

const EN = {
  eyebrow: 'TERMS',
  title: 'Terms of use',
  intro: `Effective date: ${TERMS_EFFECTIVE.en}.`,
  sections: [
    ['1. Acceptance of terms', [
      'Welcome to HomPilot.',
      'These terms of use (the “Terms”) govern access to and use of the HomPilot platform, its applications, features and related services.',
      'By creating an account, accessing the platform or using its services, you agree to be bound by these Terms.',
      'If you do not accept these Terms, you must not use the platform.',
    ]],
    ['2. About HomPilot', [
      'HomPilot is a technology platform designed to help businesses and their users manage their operations, information and business activities.',
      'The platform may offer, among other things:',
      [
        'Management and administration tools.',
        'Management of customers and related information.',
        'Operations tracking features.',
        'Sales and financial management tools.',
        'Integrations with third-party services and software.',
        'Automation and data synchronization features.',
      ],
      'Available features may change over time.',
    ]],
    ['3. Account creation and security', [
      'To use certain features, you must create a HomPilot account.',
      'You agree to:',
      [
        'Provide accurate and up-to-date information.',
        'Keep your credentials confidential.',
        'Protect access to your account.',
        'Notify HomPilot of any unauthorized use of your account.',
        'Not share your access with unauthorized persons.',
      ],
      'You are responsible for activities carried out through your account, subject to applicable legal provisions.',
      'HomPilot reserves the right to suspend an account in the event of fraudulent or abusive use, or use contrary to these Terms.',
    ]],
    ['4. Subscriptions and payments', [
      'Certain HomPilot features may be offered as a paid subscription.',
      'Prices, billing terms and related features are communicated at the time of subscription.',
      'Unless otherwise stated:',
      [
        'Subscriptions are billed at the selected frequency.',
        'Payments must be made in accordance with the applicable terms.',
        'Price changes will be communicated to the customers concerned.',
        'Applicable taxes may be added to the amounts billed.',
      ],
      'Renewal, cancellation and refund terms are those communicated at the time of subscription, subject to mandatory rights provided by law.',
    ]],
    ['5. Third-party integrations', [
      'HomPilot may allow users to connect their account to external services, including:',
      [
        'QuickBooks Online (Intuit).',
        'Payment platforms.',
        'Management and administration tools.',
        'Other compatible applications and services.',
      ],
      'When a user connects a third-party service, they authorize HomPilot to access the necessary data and features, according to the permissions they grant.',
      'For the QuickBooks Online integration:',
      [
        'Each business must individually authorize its connection.',
        'Users must have the necessary permissions on their QuickBooks account.',
        'Data is exchanged according to the permissions granted.',
        'Users may disconnect their third-party account using the available features.',
      ],
      'HomPilot does not own third-party services and does not control their availability, changes or policies.',
      'Use of these services also remains subject to the terms and conditions of their respective providers.',
      'QuickBooks and Intuit are trademarks and services of their respective owners. HomPilot is neither affiliated with nor officially endorsed by Intuit, unless expressly stated otherwise.',
    ]],
    ['6. Data and privacy', [
      'HomPilot places particular importance on protecting its users’ information and data.',
      `Personal information is collected, used, retained and processed in accordance with our <a href="${privacyPath('en')}">Privacy policy</a>.`,
      'By using HomPilot, you acknowledge that you have read this policy.',
      'Users remain responsible for ensuring that they have the rights and authorizations needed to provide HomPilot with data about their customers, employees, suppliers or other third parties.',
      'HomPilot implements reasonable security measures to protect the information hosted on its platform.',
    ]],
    ['7. Intellectual property', [
      'The HomPilot platform, including its software, source code, architecture, interface, graphic elements, features, trademarks and content, remains the property of HomPilot or its licensors.',
      'Nothing in these Terms grants the user any ownership rights in these elements.',
      'The user receives only a limited, non-exclusive, non-transferable and revocable right to use the platform in accordance with these Terms and their subscription.',
      'It is prohibited to:',
      [
        'Copy or reproduce the software without authorization.',
        'Decompile or attempt to reconstruct the source code.',
        'Circumvent security mechanisms.',
        'Resell or redistribute the platform without authorization.',
        'Use the platform to develop a competing service through unauthorized access.',
      ],
    ]],
    ['8. Acceptable use', [
      'Users agree to use HomPilot in accordance with applicable laws.',
      'In particular, it is prohibited to:',
      [
        'Use the platform for illegal or fraudulent purposes.',
        'Access other users’ data without authorization.',
        'Disrupt the operation or security of the systems.',
        'Introduce viruses, malware or harmful code.',
        'Use the platform to transmit unlawful content.',
        'Use the services in a way that could compromise their security or availability.',
      ],
      'HomPilot may take the necessary measures to prevent or stop these activities.',
    ]],
    ['9. Availability and maintenance', [
      'HomPilot strives to keep its platform accessible and functional.',
      'However, HomPilot does not guarantee uninterrupted or error-free availability.',
      'Interruptions may occur due to, among other things:',
      [
        'Maintenance work.',
        'Technology updates.',
        'Technical failures.',
        'Issues with external providers.',
        'Events beyond its control.',
      ],
      'HomPilot reserves the right to modify, improve, suspend or remove certain features, in compliance with applicable legal and contractual obligations.',
    ]],
    ['10. Limitation of liability', [
      'HomPilot provides a technology platform intended to facilitate its users’ management and operations.',
      'HomPilot does not provide professional accounting, tax, legal advice or financial services, unless expressly stated in a contract.',
      'Users remain responsible for:',
      [
        'The accuracy of the information entered.',
        'Verifying transactions and synchronizations.',
        'Their accounting and tax obligations.',
        'The compliance of their activities with applicable laws.',
        'Validating data sent to third-party services.',
      ],
      'To the extent permitted by law, HomPilot shall not be liable for indirect damages, loss of profits, loss of business opportunities or business interruptions resulting from the use of the platform.',
      'Nothing in these Terms is intended to exclude any liability that cannot legally be excluded or limited.',
    ]],
    ['11. Suspension and termination', [
      'A user may request termination of their account in accordance with the terms of their subscription.',
      'HomPilot may suspend or terminate an account in the event of:',
      [
        'A material breach of these Terms.',
        'Fraudulent or illegal activity.',
        'A risk to the security of the platform.',
        'Non-payment under the applicable terms.',
      ],
      'Following termination, access to features may be disabled.',
      `Data retention, recovery and deletion will be carried out in accordance with our <a href="${privacyPath('en')}">Privacy policy</a> and applicable legal obligations.`,
    ]],
    ['12. Changes to the Terms', [
      'HomPilot may amend these Terms to reflect changes in its services, features or legal requirements.',
      'Significant changes will be communicated to users by appropriate means.',
      'The update date will be shown at the top of this document.',
      'Continued use of the platform after the changes take effect will be governed by the new Terms, subject to applicable legal requirements.',
    ]],
    ['13. Governing law', [
      'These Terms are governed by the laws applicable in the Province of Quebec and the federal laws of Canada applicable therein, subject to mandatory consumer protection rules and other applicable legal provisions.',
      'Any dispute will be submitted to the competent courts in accordance with the applicable rules of jurisdiction.',
    ]],
    ['14. Contact', [
      'For any questions about these Terms or the use of HomPilot, you can contact our team:',
      [
        `Website: <a href="${SITE}">www.hompilot.com</a>`,
        `Email: ${mail}`,
      ],
    ]],
  ],
  footnote: '© 2026 HomPilot. All rights reserved.',
};

export const termsTitle = (lang) => (lang === 'fr' ? FR.title : EN.title);

export function termsMarkup(lang) {
  const t = lang === 'fr' ? FR : EN;
  const fr = lang === 'fr';
  const home = fr ? '/fr' : '/';
  const body = t.sections.map(([h, blocks]) =>
    `<section><h2>${h}</h2>${blocks.map((b) => (Array.isArray(b) ? `<ul>${b.map((i) => `<li>${i}</li>`).join('')}</ul>` : `<p>${b}</p>`)).join('')}</section>`,
  ).join('');
  return `<main id="main" class="service-page legal-page container"><nav aria-label="${fr ? 'Fil d’Ariane' : 'Breadcrumb'}"><a href="${home}">HomPilot</a> / <a href="${termsPath(lang)}">${t.title}</a></nav><p class="eyebrow">${t.eyebrow}</p><h1>${t.title}</h1><p class="service-intro">${t.intro}</p>${body}<p class="legal-contact">${t.footnote}</p></main><footer class="container service-footer"><a href="${home}">HomPilot</a> · <a href="${termsPath(fr ? 'en' : 'fr')}" lang="${fr ? 'en' : 'fr'}">${fr ? 'English' : 'Français'}</a> · <a href="${privacyPath(lang)}">${fr ? 'Politique de confidentialité' : 'Privacy policy'}</a></footer>`;
}
