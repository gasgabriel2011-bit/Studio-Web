const siteConfig = {
  brand: "Studio Web",
  email: "contact@exemple.fr",
  phone: "06 00 00 00 00",
  socials: [
    { label: "LinkedIn", value: "Profil à compléter", href: "#" },
    { label: "Instagram", value: "Compte à compléter", href: "#" }
  ]
};

const icons = {
  monitor: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5h16v10H4z" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M9 20h6M12 15.5V20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  inbox: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 13 7 5h10l3 8v5.5H4z" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M4 13h5l1.5 2h3L15 13h5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  palette: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4a8 8 0 0 0 0 16h1.3c1.2 0 1.8-1.5.9-2.3-.8-.7-.3-2 .8-2h1a4 4 0 0 0 4-4C20 7.4 16.4 4 12 4Z" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8.3 10.2h.1M11.4 7.9h.1M15.3 9.8h.1M10 13.7h.1" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>',
  rocket: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 14.5 9.5 11c1.4-3.7 4.5-5.8 9.2-6.2-.4 4.7-2.5 7.8-5.7 9.7Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9.5 11 6 12l-2 3 4-1M13 14.5l-1 3-3 2 1-4M16 8h.1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  video: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h10v10H4z" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m14 10 5-3v10l-5-3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
  cube: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',
  app: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M9 8h6M9 12h6M9 16h3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5 19 6v5.5c0 4-2.7 7-7 9-4.3-2-7-5-7-9V6z" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m8.7 12.2 2.1 2.1 4.6-4.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  key: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 9.5a4.5 4.5 0 1 1-3 4.2L20 5.2l2 2-2 2-2-2-1.8 1.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>'
};

const services = [
  {
    title: "Sites vitrines",
    icon: "monitor",
    text: "Présentez votre activité avec un site professionnel, responsive et clair : pages de présentation, services, galerie, formulaire de contact, carte, réseaux sociaux."
  },
  {
    title: "Sites avec demandes clients",
    icon: "inbox",
    text: "Ajout possible d'une interface simple pour recevoir et suivre les demandes : messages, réservations, demandes de devis, prises de contact."
  },
  {
    title: "Identité visuelle & contenu",
    icon: "palette",
    text: "Structuration des textes, choix visuels, mise en page, cohérence graphique, sections adaptées à votre activité."
  },
  {
    title: "Mise en ligne accompagnée",
    icon: "rocket",
    text: "Je vous guide pour le domaine, l'hébergement et les accès, afin que vous restiez propriétaire de votre site."
  }
];

const extraServices = [
  {
    title: "Vidéos pour entreprise",
    icon: "video",
    text: "Création ou montage de vidéos courtes pour présenter votre activité, alimenter vos réseaux sociaux ou valoriser un service."
  },
  {
    title: "Visuels et modèles 3D",
    icon: "cube",
    text: "Création de rendus, objets ou animations 3D simples pour mettre en valeur un produit, une bouteille, un packaging ou un concept."
  },
  {
    title: "Applications web ou mobiles",
    icon: "app",
    text: "Sur demande, possibilité de réfléchir à une interface plus avancée, une application web ou une version mobile selon les besoins du projet."
  }
];

const projects = [
  {
    title: "Site liqueur / univers produit",
    category: "Site vitrine + visuels 3D",
    description: "Un site de présentation autour d'un univers de liqueur, avec mise en avant de l'histoire, du produit, de l'ambiance visuelle et de modèles 3D.",
    image: "liqueur",
    link: "https://l-histoire-des-liqueurs.vercel.app"
  },
  {
    title: "Site nutrition",
    category: "Site professionnel",
    description: "Un site structuré pour présenter une activité autour de la nutrition, des programmes, des services et des contenus.",
    image: "nutrition",
    link: "https://nutritive-dietetique.vercel.app"
  },
  {
    title: "Site développement personnel",
    category: "Site inspiration / accompagnement",
    description: "Un site orienté contenu, objectifs, habitudes ou accompagnement personnel, avec une interface claire et motivante.",
    image: "personal",
    link: "https://devloppement-personnel.vercel.app"
  }
];

const processSteps = [
  {
    title: "Échange",
    text: "On définit vos besoins : type de site, pages, style, objectif, contenus et fonctionnalités."
  },
  {
    title: "Proposition",
    text: "Je vous propose une structure claire, une direction visuelle et une estimation adaptée au projet."
  },
  {
    title: "Création",
    text: "Je construis le site avec une attention particulière au design, à la lisibilité, au responsive et à l'expérience utilisateur."
  },
  {
    title: "Mise en ligne",
    text: "Je vous accompagne pour le nom de domaine, l'hébergement et la publication du site."
  },
  {
    title: "Livraison & autonomie",
    text: "Vous récupérez les accès essentiels. Vous pouvez ensuite gérer votre site ou me confier la maintenance."
  }
];

const ownershipItems = [
  "Domaine à votre nom",
  "Hébergement à votre nom",
  "Données accessibles",
  "Accès développeur possible",
  "Maintenance optionnelle",
  "Confidentialité respectée"
];

const offers = [
  {
    title: "Site essentiel",
    badge: "Pour démarrer",
    description: "Une présence claire, responsive et rassurante pour lancer ou structurer votre activité.",
    items: ["1 à 3 pages", "Design responsive", "Formulaire de contact", "Liens réseaux sociaux", "Mise en ligne accompagnée"],
    cta: "Demander un devis",
    featured: false
  },
  {
    title: "Site professionnel",
    badge: "Le plus demandé",
    description: "Un site plus complet, pensé pour présenter vos services et convertir les visiteurs en demandes.",
    items: ["4 à 7 sections ou pages", "Design plus travaillé", "Présentation services", "Réalisations ou galerie", "Formulaire avancé", "Accompagnement domaine / hébergement"],
    cta: "Demander un devis",
    featured: true
  },
  {
    title: "Site avancé",
    badge: "Projet sur mesure",
    description: "Une interface évolutive avec modules visuels ou connexions possibles vers un vrai service externe.",
    items: ["Interface plus complète", "Espace de gestion visuel possible", "Demandes clients", "Intégrations spécifiques", "Options vidéo, 3D ou application"],
    cta: "Discuter du projet",
    featured: false
  }
];

const estimateCopy = {
  simple: {
    label: "Projet simple",
    text: "Une base claire pour présenter votre activité et recevoir des demandes."
  },
  pro: {
    label: "Projet professionnel",
    text: "Un site plus structuré avec plusieurs sections, une direction visuelle forte et des options utiles."
  },
  custom: {
    label: "Projet sur mesure",
    text: "Un projet plus complet, à cadrer ensemble selon les fonctionnalités, contenus et intégrations souhaités."
  }
};

const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function iconMarkup(name) {
  return `<span class="icon-wrap">${icons[name] || icons.monitor}</span>`;
}

function renderServices() {
  const servicesRoot = qs("[data-services]");
  const extrasRoot = qs("[data-extra-services]");

  servicesRoot.innerHTML = services
    .map(
      (service) => `
        <article class="info-card reveal">
          ${iconMarkup(service.icon)}
          <h3>${service.title}</h3>
          <p>${service.text}</p>
        </article>
      `
    )
    .join("");

  extrasRoot.innerHTML = extraServices
    .map(
      (service) => `
        <article class="extra-card reveal">
          ${iconMarkup(service.icon)}
          <h3>${service.title}</h3>
          <p>${service.text}</p>
        </article>
      `
    )
    .join("");
}

function renderProjects() {
  qs("[data-projects]").innerHTML = projects
    .map(
      (project) => `
        <article class="project-card reveal">
          <a href="${project.link}" target="_blank" rel="noopener noreferrer" aria-label="Voir le projet ${project.title}">
            <div class="project-visual project-visual--${project.image}" role="img" aria-label="Aperçu stylisé du projet ${project.title}">
              <div class="project-scene"></div>
            </div>
          </a>
          <div class="project-content">
            <span class="project-category">${project.category}</span>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a class="button button-ghost" href="${project.link}" target="_blank" rel="noopener noreferrer">Voir le projet</a>
          </div>
        </article>
      `
    )
    .join("");
}

function renderProcess() {
  qs("[data-process]").innerHTML = processSteps
    .map(
      (step, index) => `
        <article class="timeline-card reveal">
          <span class="timeline-number">${index + 1}</span>
          <h3>${step.title}</h3>
          <p>${step.text}</p>
        </article>
      `
    )
    .join("");
}

function renderOwnership() {
  qs("[data-ownership]").innerHTML = ownershipItems
    .map(
      (item, index) => `
        <div class="ownership-item">
          ${iconMarkup(index < 3 ? "shield" : "key")}
          <strong>${item}</strong>
        </div>
      `
    )
    .join("");
}

function renderOffers() {
  qs("[data-offers]").innerHTML = offers
    .map(
      (offer) => `
        <article class="offer-card reveal ${offer.featured ? "is-featured" : ""}">
          <span class="offer-badge">${offer.badge}</span>
          <h3>${offer.title}</h3>
          <p>${offer.description}</p>
          <ul>
            ${offer.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
          <a class="button ${offer.featured ? "button-primary" : "button-ghost"}" href="#contact">${offer.cta}</a>
        </article>
      `
    )
    .join("");
}

function renderContact() {
  const contactItems = [
    { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { label: "Téléphone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replaceAll(" ", "")}` },
    ...siteConfig.socials
  ];

  qs("[data-contact-links]").innerHTML = contactItems
    .map(
      (item) => `
        <a class="contact-link" href="${item.href}">
          <strong>${item.label}</strong>
          <span>${item.value}</span>
        </a>
      `
    )
    .join("");

  qs("[data-site-brand]").textContent = siteConfig.brand;
  qs("[data-footer-brand]").textContent = siteConfig.brand;
  qs("[data-year]").textContent = new Date().getFullYear();
}

function setupMobileMenu() {
  const toggle = qs("[data-menu-toggle]");
  const mobileNav = qs("[data-mobile-nav]");

  toggle.addEventListener("click", () => {
    const isOpen = toggle.classList.toggle("is-open");
    mobileNav.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  qsa("a", mobileNav).forEach((link) => {
    link.addEventListener("click", () => {
      toggle.classList.remove("is-open");
      mobileNav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupHeader() {
  const header = qs("[data-header]");
  const setHeaderState = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 20);
  };

  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });
}

function setupRevealAnimations() {
  const elements = qsa(".reveal");

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
  );

  elements.forEach((element) => observer.observe(element));
}

function setupEstimator() {
  const estimator = qs("[data-estimator]");
  const state = {
    type: "vitrine",
    pages: "small",
    options: []
  };

  function setActive(groupSelector, value) {
    qsa(`${groupSelector} .choice`, estimator).forEach((button) => {
      button.classList.toggle("is-active", button.dataset.value === value);
    });
  }

  function getScore() {
    let score = 0;
    if (state.type === "portfolio") score += 1;
    if (state.type === "avance") score += 3;
    if (state.pages === "medium") score += 2;
    if (state.pages === "large") score += 4;
    score += state.options.length;
    if (state.options.includes("admin")) score += 2;
    return score;
  }

  function updateEstimate() {
    const score = getScore();
    const level = score >= 6 ? "custom" : score >= 3 ? "pro" : "simple";
    qs("[data-estimate-label]", estimator).textContent = estimateCopy[level].label;
    qs("[data-estimate-copy]", estimator).textContent = estimateCopy[level].text;
  }

  qsa("[data-project-type] .choice", estimator).forEach((button) => {
    button.addEventListener("click", () => {
      state.type = button.dataset.value;
      setActive("[data-project-type]", state.type);
      updateEstimate();
    });
  });

  qsa("[data-page-count] .choice", estimator).forEach((button) => {
    button.addEventListener("click", () => {
      state.pages = button.dataset.value;
      setActive("[data-page-count]", state.pages);
      updateEstimate();
    });
  });

  qsa('input[type="checkbox"]', estimator).forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      state.options = qsa('input[type="checkbox"]:checked', estimator).map((input) => input.value);
      updateEstimate();
    });
  });
}

function setupContactForm() {
  const form = qs("[data-contact-form]");
  const note = qs("[data-form-note]");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    note.textContent = "Merci, votre message est prêt à être envoyé. La connexion au service d'envoi sera ajoutée lors de la mise en ligne finale.";
    form.reset();
  });
}

function init() {
  renderServices();
  renderProjects();
  renderProcess();
  renderOwnership();
  renderOffers();
  renderContact();
  setupHeader();
  setupMobileMenu();
  setupEstimator();
  setupContactForm();
  setupRevealAnimations();
}

document.addEventListener("DOMContentLoaded", init);
