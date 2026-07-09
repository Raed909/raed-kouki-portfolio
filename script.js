const header = document.querySelector("[data-elevate]");
const langToggle = document.querySelector("[data-lang-toggle]");
const langLabel = document.querySelector("[data-lang-label]");

const cvByLang = {
  fr: "./assets/CV_RAED_KOUKI_FR.pdf",
  en: "./assets/CV_RAED_KOUKI_EN.pdf",
};

const translations = {
  fr: {
    "common.cv": "CV PDF",
    "nav.expertise": "Expertise",
    "nav.experience": "Expérience",
    "nav.projects": "Projets",
    "nav.contact": "Contact",
    "hero.eyebrow": "Disponible immédiatement - Data Engineering / Data Analysis / Fullstack",
    "hero.title": "Data Engineer capable de transformer des données complexes en produits fiables.",
    "hero.lead": "J'interviens de la conception des pipelines à l'exploitation métier: intégration, orchestration, cloud, indicateurs et interfaces utiles aux équipes.",
    "hero.contact": "Contacter Raed",
    "hero.viewCv": "Voir le CV",
    "profile.role": "Data Engineer - IA - Cloud",
    "metrics.stackLabel": "Stack",
    "metrics.pathLabel": "Parcours",
    "metrics.pathValue": "Master IA",
    "metrics.positionLabel": "Positionnement",
    "intro.kicker": "Profil",
    "intro.title": "Un profil data orienté livraison, impact et collaboration.",
    "intro.body": "Formé en intelligence artificielle et déjà exposé à des environnements grands comptes, je combine engineering data, automatisation cloud et développement applicatif. Mon objectif: construire des solutions qui fiabilisent la donnée et accélèrent la prise de décision.",
    "proof.oneTitle": "Industrialisation data",
    "proof.oneBody": "Pipelines, orchestration, CI/CD et cloud avec une logique production.",
    "proof.twoTitle": "Culture produit",
    "proof.twoBody": "Cadrage MVP, parcours utilisateurs et indicateurs suivis avec les parties prenantes.",
    "proof.threeTitle": "Adaptabilité technique",
    "proof.threeBody": "Data engineering, analyse, backend, frontend et mobile selon le besoin projet.",
    "expertise.kicker": "Expertise",
    "expertise.title": "Ce que j'apporte à une équipe data.",
    "expertise.card1Title": "Data pipelines",
    "expertise.card1Body": "Intégration automatisée de sources hétérogènes, transformation, qualité et alimentation d'outils décisionnels.",
    "expertise.card2Title": "Cloud & orchestration",
    "expertise.card2Body": "BigQuery, GCS, Airflow, CI/CD et pratiques d'industrialisation pour rendre les traitements maintenables.",
    "expertise.card3Title": "Produit & analyse",
    "expertise.card3Body": "Cadrage MVP, indicateurs de suivi, estimation, dashboards et traduction des besoins métier en solutions data.",
    "experience.kicker": "Expérience",
    "experience.title": "Des expériences formulées pour montrer l'impact business et la maturité technique.",
    "experience.queueDate": "Avr. 2025 - Aujourd'hui",
    "experience.queueTitle": "The Queue - Co-concepteur technique et Data",
    "experience.queueIntro": "Projet entrepreneurial mené avec un profil commercial et un investisseur pour concevoir une application aidant les utilisateurs à trouver rapidement des restaurants disponibles pendant les périodes d'affluence.",
    "experience.queueLi1": "Traduction d'un besoin marché en MVP clair: parcours utilisateurs, priorisation fonctionnelle et cadrage produit.",
    "experience.queueLi2": "Conception de l'architecture technique, du modèle de données et du système d'estimation du niveau d'occupation.",
    "experience.queueLi3": "Définition des indicateurs utiles au pilotage: affluence, temps d'attente, adoption et usage applicatif.",
    "experience.queueLi4": "Autonomie, communication transverse et capacité à passer d'une idée à une solution structurée.",
    "experience.renaultDate": "Sept. 2024 - Déc. 2025",
    "experience.renaultTitle": "Renault Group - Alternance Data Engineer",
    "experience.renaultIntro": "Alternance dans un environnement grand compte, avec un objectif concret: automatiser l'intégration de données projet et fournir des indicateurs fiables aux équipes.",
    "experience.renaultLi1": "Intégration de sources hétérogènes: Jira, MagicDraw, Excel et Confluence.",
    "experience.renaultLi2": "Centralisation, stockage et transformation dans Google Cloud Platform avec BigQuery et GCS.",
    "experience.renaultLi3": "Orchestration des traitements avec Apache Airflow et intégration dans une logique GitLab CI/CD.",
    "experience.renaultLi4": "Alimentation automatisée de Spotfire pour fiabiliser le suivi opérationnel et réduire les manipulations manuelles.",
    "experience.renaultLi5": "Expérience des contraintes industrielles, documentation, qualité de données et collaboration avec plusieurs métiers.",
    "experience.lactalisDate": "Avr. - Août 2024",
    "experience.lactalisTitle": "Groupe Lactalis - Analyste Développeur",
    "experience.lactalisIntro": "Stage centré sur l'efficacité interne: rendre des informations métier plus accessibles via des interfaces de consultation claires, sans exposer directement la base de données.",
    "experience.lactalisLi1": "Création d'interfaces interactives pour faciliter la navigation dans les processus internes.",
    "experience.lactalisLi2": "Mise en place d'une recherche multi-critères et d'un affichage structuré des données.",
    "experience.lactalisLi3": "Amélioration de l'autonomie des utilisateurs en limitant la dépendance aux extractions manuelles.",
    "experience.lactalisLi4": "Capacité à comprendre un besoin utilisateur, sécuriser l'accès à l'information et livrer une interface exploitable.",
    "experience.dksDate": "Fév. - Août 2023",
    "experience.dksTitle": "Digital Kakushin Soft - Développeur mobile",
    "experience.dksIntro": "Développement d'une application mobile de gestion des commandes pour la restauration, avec une contribution sur toute la chaîne applicative.",
    "experience.dksLi1": "Conception du back-end: API, logique métier et interactions avec la base de données.",
    "experience.dksLi2": "Développement du front-end mobile pour fluidifier la prise et le suivi des commandes.",
    "experience.dksLi3": "Contribution fullstack permettant de comprendre les contraintes produit, performance et expérience utilisateur.",
    "experience.dksLi4": "Profil capable de dialoguer avec les équipes data, backend et applicatives.",
    "tags.dataProduct": "Produit data",
    "tags.modeling": "Modélisation",
    "tags.indicators": "Indicateurs",
    "tags.internalUx": "UX interne",
    "tags.search": "Recherche",
    "projects.kicker": "Projets",
    "projects.title": "Des projets qui prouvent la capacité à industrialiser.",
    "projects.githubTitle": "Prédiction du temps de résolution GitHub",
    "projects.githubBody": "Solution prédictive estimant la durée de résolution d'issues à partir de métadonnées, texte, langage et description.",
    "projects.nlpTitle": "NLP candidat / offre",
    "projects.nlpBody": "Système de matching entre profils candidats et offres d'emploi par traitement automatique du langage naturel.",
    "education.kicker": "Formation",
    "education.title": "Base solide en IA et informatique.",
    "education.masterTitle": "Master Intelligence Artificielle",
    "education.masterBody": "Université du Mans - 2023 à 2025",
    "education.licenseTitle": "Licence Informatique",
    "education.licenseBody": "Université du Mans - 2020 à 2023",
    "education.certTitle": "Certification Databricks",
    "education.certBody": "Get Started with Databricks for Data Engineering - obtenue le 07/01/2026.",
    "contact.kicker": "Contact",
    "contact.title": "Prêt à rejoindre une équipe data ambitieuse.",
    "contact.body": "Disponible immédiatement pour une opportunité en Data Engineering, Data Analysis ou développement Fullstack.",
    "contact.location": "Élancourt, Île-de-France",
    "contact.languages": "Français courant - Anglais avancé - Espagnol débutant",
    "contact.download": "Télécharger le CV",
    "footer.top": "Retour en haut",
  },
  en: {
    "common.cv": "Resume PDF",
    "nav.expertise": "Expertise",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.eyebrow": "Available immediately - Data Engineering / Data Analysis / Fullstack",
    "hero.title": "Data Engineer who turns complex data into reliable products.",
    "hero.lead": "I work from pipeline design to business usage: integration, orchestration, cloud platforms, indicators, and interfaces that help teams make better decisions.",
    "hero.contact": "Contact Raed",
    "hero.viewCv": "View resume",
    "profile.role": "Data Engineer - AI - Cloud",
    "metrics.stackLabel": "Stack",
    "metrics.pathLabel": "Education",
    "metrics.pathValue": "AI Master's",
    "metrics.positionLabel": "Focus",
    "intro.kicker": "Profile",
    "intro.title": "A data profile focused on delivery, impact, and collaboration.",
    "intro.body": "Trained in artificial intelligence and already exposed to enterprise environments, I combine data engineering, cloud automation, and application development. My goal is to build solutions that make data reliable and accelerate decision-making.",
    "proof.oneTitle": "Data industrialization",
    "proof.oneBody": "Pipelines, orchestration, CI/CD, and cloud practices with a production mindset.",
    "proof.twoTitle": "Product mindset",
    "proof.twoBody": "MVP framing, user journeys, and indicators followed with stakeholders.",
    "proof.threeTitle": "Technical adaptability",
    "proof.threeBody": "Data engineering, analytics, backend, frontend, and mobile depending on project needs.",
    "expertise.kicker": "Expertise",
    "expertise.title": "What I bring to a data team.",
    "expertise.card1Title": "Data pipelines",
    "expertise.card1Body": "Automated integration of heterogeneous sources, transformation, quality, and feeding decision-making tools.",
    "expertise.card2Title": "Cloud & orchestration",
    "expertise.card2Body": "BigQuery, GCS, Airflow, CI/CD, and industrialization practices to make data processing maintainable.",
    "expertise.card3Title": "Product & analytics",
    "expertise.card3Body": "MVP framing, monitoring indicators, estimation, dashboards, and translation of business needs into data solutions.",
    "experience.kicker": "Experience",
    "experience.title": "Experience written to show business impact and technical maturity.",
    "experience.queueDate": "Apr. 2025 - Present",
    "experience.queueTitle": "The Queue - Technical and Data Co-designer",
    "experience.queueIntro": "Entrepreneurial project built with a business profile and an investor to design an app helping users quickly find available restaurants during peak periods.",
    "experience.queueLi1": "Translated a market need into a clear MVP: user journeys, functional prioritization, and product framing.",
    "experience.queueLi2": "Designed the technical architecture, data model, and occupancy-level estimation system.",
    "experience.queueLi3": "Defined useful monitoring indicators: crowd level, waiting time, adoption, and app usage.",
    "experience.queueLi4": "Autonomy, cross-functional communication, and ability to turn an idea into a structured solution.",
    "experience.renaultDate": "Sept. 2024 - Dec. 2025",
    "experience.renaultTitle": "Renault Group - Data Engineer Apprenticeship",
    "experience.renaultIntro": "Apprenticeship in an enterprise environment, with a concrete goal: automate project data integration and provide reliable indicators to teams.",
    "experience.renaultLi1": "Integrated heterogeneous sources: Jira, MagicDraw, Excel, and Confluence.",
    "experience.renaultLi2": "Centralized, stored, and transformed data in Google Cloud Platform with BigQuery and GCS.",
    "experience.renaultLi3": "Orchestrated processing with Apache Airflow and integrated workflows into a GitLab CI/CD approach.",
    "experience.renaultLi4": "Automated Spotfire feeds to improve operational monitoring and reduce manual handling.",
    "experience.renaultLi5": "Experience with industrial constraints, documentation, data quality, and collaboration with multiple business teams.",
    "experience.lactalisDate": "Apr. - Aug. 2024",
    "experience.lactalisTitle": "Groupe Lactalis - Analyst Developer",
    "experience.lactalisIntro": "Internship focused on internal efficiency: making business information more accessible through clear consultation interfaces without exposing the database directly.",
    "experience.lactalisLi1": "Created interactive interfaces to simplify navigation through internal processes.",
    "experience.lactalisLi2": "Implemented multi-criteria search and structured data display.",
    "experience.lactalisLi3": "Improved user autonomy by reducing dependence on manual extractions.",
    "experience.lactalisLi4": "Ability to understand user needs, secure access to information, and deliver a usable interface.",
    "experience.dksDate": "Feb. - Aug. 2023",
    "experience.dksTitle": "Digital Kakushin Soft - Mobile Developer",
    "experience.dksIntro": "Developed a mobile order-management application for restaurants, contributing across the full application chain.",
    "experience.dksLi1": "Designed the backend: API, business logic, and database interactions.",
    "experience.dksLi2": "Developed the mobile frontend to streamline order taking and tracking.",
    "experience.dksLi3": "Fullstack contribution supporting understanding of product, performance, and user-experience constraints.",
    "experience.dksLi4": "Profile able to collaborate with data, backend, and application teams.",
    "tags.dataProduct": "Data product",
    "tags.modeling": "Modeling",
    "tags.indicators": "Indicators",
    "tags.internalUx": "Internal UX",
    "tags.search": "Search",
    "projects.kicker": "Projects",
    "projects.title": "Projects showing the ability to industrialize.",
    "projects.githubTitle": "GitHub issue resolution-time prediction",
    "projects.githubBody": "Predictive solution estimating issue resolution time from metadata, text, programming language, and description.",
    "projects.nlpTitle": "NLP candidate / job matching",
    "projects.nlpBody": "Matching system between candidate profiles and job offers using natural language processing.",
    "education.kicker": "Education",
    "education.title": "Strong foundation in AI and computer science.",
    "education.masterTitle": "Master's Degree in Artificial Intelligence",
    "education.masterBody": "Le Mans University - 2023 to 2025",
    "education.licenseTitle": "Bachelor's Degree in Computer Science",
    "education.licenseBody": "Le Mans University - 2020 to 2023",
    "education.certTitle": "Databricks Certification",
    "education.certBody": "Get Started with Databricks for Data Engineering - obtained on 01/07/2026.",
    "contact.kicker": "Contact",
    "contact.title": "Ready to join an ambitious data team.",
    "contact.body": "Available immediately for an opportunity in Data Engineering, Data Analysis, or Fullstack development.",
    "contact.location": "Élancourt, Île-de-France",
    "contact.languages": "French fluent - English advanced - Spanish beginner",
    "contact.download": "Download resume",
    "footer.top": "Back to top",
  },
};

const updateHeader = () => {
  header.classList.toggle("is-elevated", window.scrollY > 16);
};

const applyLanguage = (lang) => {
  const dictionary = translations[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-cv-link]").forEach((link) => {
    link.href = cvByLang[lang];
  });

  langLabel.textContent = lang === "fr" ? "EN" : "FR";
  langToggle.setAttribute("aria-label", lang === "fr" ? "Switch to English" : "Passer en français");
  localStorage.setItem("portfolio-language", lang);
};

updateHeader();
applyLanguage(localStorage.getItem("portfolio-language") || "fr");

window.addEventListener("scroll", updateHeader, { passive: true });

langToggle.addEventListener("click", () => {
  const current = document.documentElement.lang === "fr" ? "fr" : "en";
  applyLanguage(current === "fr" ? "en" : "fr");
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
