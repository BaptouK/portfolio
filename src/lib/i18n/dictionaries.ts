export type Locale = "fr" | "en";

type Certification = {
  name: string;
  issuer: string;
};

type Language = {
  name: string;
  level: string;
};

type Volunteering = {
  organization: string;
  role: string;
  url?: string;
  startDate: string;
  endDate: string | null;
  description: string;
};

type Project = {
  title: string;
  description: string;
  stack: string[];
  image: string;
  repo: string;
};

type SkillGroup = {
  title: string;
  icon: string;
  skills: string[];
};

type TimelineEntry = {
  icon: string;
  iconBg: string;
  label: string;
  title: string;
  role: string;
  description: string;
  showLine: boolean;
};

export type Dictionary = {
  nav: {
    about: string;
    projects: string;
    experience: string;
    skills: string;
    contact: string;
    downloadCv: string;
  };
  hero: {
    title: string;
    aboutBefore: string;
    alternancePeriod: string;
  };
  about: {
    title: string;
    subtitle: string;
    certifications: string;
    languages: string;
    interests: string;
    volunteering: string;
    present: string;
  };
  certifications: Certification[];
  languages: Language[];
  interests: string[];
  volunteering: Volunteering[];
  projects: {
    title: string;
    items: Project[];
  };
  skills: {
    title: string;
    groups: SkillGroup[];
  };
  timeline: {
    title: string;
    entries: TimelineEntry[];
  };
  footer: {
    locationSuffix: string;
  };
};

const fr: Dictionary = {
  nav: {
    about: "À propos",
    projects: "Projets",
    experience: "Expérience",
    skills: "Compétences",
    contact: "Contact",
    downloadCv: "Télécharger mon CV",
  },
  hero: {
    title: "Développeur Logiciel/Web",
    aboutBefore:
      "Étudiant en 2e année d'informatique, je recherche une alternance pour la période de ",
    alternancePeriod: "Sept. 2026 à Sept. 2027",
  },
  about: {
    title: "En savoir plus",
    subtitle:
      "Certifications, langues, centres d'intérêt et engagement associatif.",
    certifications: "Certifications",
    languages: "Langues",
    interests: "Centres d'intérêt",
    volunteering: "Bénévolat",
    present: "Présent",
  },
  certifications: [{ name: "CCNA1", issuer: "Cisco" }],
  languages: [
    { name: "Français", level: "Langue maternelle" },
    { name: "Anglais", level: "B2" },
  ],
  interests: ["E-Sport", "Escalade", "Impression 3D", "Randonnée"],
  volunteering: [
    {
      organization: "Phenix Event",
      role: "Responsable Technique",
      startDate: "2022",
      endDate: null,
      description:
        "Mise en place technique et animation de compétitions de jeux vidéo en partenariat avec des mairies.",
    },
    {
      organization: "GIV",
      role: "Membre",
      url: "https://www.giv-lan.fr/",
      startDate: "2022",
      endDate: "2024",
      description:
        "Organisation d'événements liés aux jeux vidéo. Gestion de la régie d'événements européens d'E-Sport.",
    },
  ],
  projects: {
    title: "Projets Récents",
    items: [
      {
        title: "Site de combat Pokémon en temps réel",
        description:
          "Une plateforme interactive permettant des interactions multijoueurs instantanées avec une latence minimale.",
        stack: ["Angular", "TypeScript", "Java Spring", "MongoDB", "Node.js"],
        image: "/pokerixe.webp",
        repo: "https://github.com/BaptouK/PokeRixe",
      },
      {
        title: "Homelab Personnel",
        description:
          "Infrastructure auto-hébergée complète avec Proxmox pour la virtualisation, Traefik comme reverse proxy, Wireguard pour l'accès VPN sécurisé et Docker pour le déploiement des services. Hébergement de plusieurs applications : site web, Outline, gestionnaire de mots de passe et serveur Minecraft.",
        stack: ["Proxmox", "Docker", "Traefik", "Wireguard", "Debian"],
        image: "/homelab.avif",
        repo: "https://github.com/BaptouK/",
      },
      {
        title: "Jeu de la Vie \u2014 C++",
        description:
          "Implémentation de l'automate cellulaire de Conway utilisant la bibliothèque graphique SFML.",
        stack: ["C++", "SFML", "CMake", "CLion"],
        image: "/conway.webp",
        repo: "https://github.com/BaptouK/game_of_life",
      },
    ],
  },
  skills: {
    title: "Compétences Techniques",
    groups: [
      {
        title: "Frontend",
        icon: "terminal",
        skills: ["HTML5", "CSS3", "Angular", "JavaScript", "Typescript"],
      },
      {
        title: "Backend",
        icon: "data_object",
        skills: ["Java", "Node.js", "Express", "PHP", "SQL", "MongoDb"],
      },
      {
        title: "Programmation Logicielle",
        icon: "code",
        skills: ["C/C++", "C#", "Rust", "Python"],
      },
      {
        title: "Infrastructure",
        icon: "lan",
        skills: [
          "Docker",
          "Proxmox",
          "VirtualBox",
          "OpenSense",
          "Bash",
          "Linux (Debian/Fedora)",
          "Git",
          "Réseaux",
          "Traefik",
        ],
      },
      {
        title: "Outils",
        icon: "construction",
        skills: [
          "VS Code",
          "IntelliJ",
          "Impression 3D",
          "Postman",
          "SonarQube",
          "GitHub Actions",
          "WireGuard",
        ],
      },
    ],
  },
  timeline: {
    title: "Parcours & Expériences",
    entries: [
      {
        icon: "school",
        iconBg: "bg-primary-fixed text-primary",
        label: "Formation 2024-2027",
        title: "Sup De Vinci",
        role: "Bachelor en Informatique - 2e Année",
        description:
          "Spécialisation en développement logiciel, architecture web et gestion de projet.",
        showLine: true,
      },
      {
        icon: "volunteer_activism",
        iconBg: "bg-primary-fixed text-primary",
        label: "2021 - En cours",
        title: "Phénix Event",
        role: "Responsable Technique",
        description:
          "Mise en place technique et animation de compétitions de jeux vidéo en partenariat avec des mairies.",
        showLine: true,
      },
      {
        icon: "verified",
        iconBg: "bg-surface-container-highest text-primary",
        label: "Mars 2026",
        title: "Certification CCNA 1",
        role: "Cisco Certified Network Associate - Introduction",
        description:
          "Fondamentaux de la sécurité réseau et protocoles de communication.",
        showLine: true,
      },
      {
        icon: "group",
        iconBg: "bg-surface-container-highest text-primary",
        label: "2021-2025",
        title: "GIV",
        role: "Membre",
        description:
          "Organisation d'événements liés aux jeux vidéo. Gestion de la régie d'événements européens d'E-Sport.",
        showLine: true,
      },
      {
        icon: "history_edu",
        iconBg: "bg-surface-container-highest text-primary",
        label: "2021-2024",
        title: "Lycée Jeanne d'Arc",
        role: "BAC Général Spécialité Math/NSI Mention Assez Bien",
        description: "Bases solides en mathématiques et sciences numériques.",
        showLine: true,
      },
      {
        icon: "rocket_launch",
        iconBg: "bg-surface-container-highest text-primary",
        label: "Juin 2020",
        title: "Night Knight Studio",
        role: "Stage Développeur C# Unity",
        description:
          "Développement d'un jeu Android en C# via le logiciel Unity pendant une semaine.",
        showLine: false,
      },
    ],
  },
  footer: {
    locationSuffix: ", France",
  },
};

const en: Dictionary = {
  nav: {
    about: "About",
    projects: "Projects",
    experience: "Experience",
    skills: "Skills",
    contact: "Contact",
    downloadCv: "Download my CV",
  },
  hero: {
    title: "Software/Web Developer",
    aboutBefore:
      "Second-year Computer Science student, looking for an apprenticeship for the period of ",
    alternancePeriod: "Sept. 2026 to Sept. 2027",
  },
  about: {
    title: "Learn more",
    subtitle:
      "Certifications, languages, interests and volunteer work.",
    certifications: "Certifications",
    languages: "Languages",
    interests: "Interests",
    volunteering: "Volunteering",
    present: "Present",
  },
  certifications: [{ name: "CCNA1", issuer: "Cisco" }],
  languages: [
    { name: "French", level: "Native" },
    { name: "English", level: "B2" },
  ],
  interests: ["E-Sports", "Climbing", "3D Printing", "Hiking"],
  volunteering: [
    {
      organization: "Phenix Event",
      role: "Technical Director",
      startDate: "2022",
      endDate: null,
      description:
        "Technical setup and hosting of video game competitions in partnership with local town halls.",
    },
    {
      organization: "GIV",
      role: "Member",
      url: "https://www.giv-lan.fr/",
      startDate: "2022",
      endDate: "2024",
      description:
        "Organizing video game events. Managing the production desk for European E-Sports tournaments.",
    },
  ],
  projects: {
    title: "Recent Projects",
    items: [
      {
        title: "Real-Time Pokémon Battle Platform",
        description:
          "An interactive platform enabling instant multiplayer battles with minimal latency.",
        stack: ["Angular", "TypeScript", "Java Spring", "MongoDB", "Node.js"],
        image: "/pokerixe.webp",
        repo: "https://github.com/BaptouK/PokeRixe",
      },
      {
        title: "Personal Homelab",
        description:
          "Complete self-hosted infrastructure using Proxmox for virtualization, Traefik as a reverse proxy, Wireguard for secure VPN access and Docker for service deployment. Hosting multiple applications: website, Outline, password manager and Minecraft server.",
        stack: ["Proxmox", "Docker", "Traefik", "Wireguard", "Debian"],
        image: "/homelab.avif",
        repo: "https://github.com/BaptouK/",
      },
      {
        title: "Game of Life \u2014 C++",
        description:
          "Implementation of Conway's cellular automaton using the SFML graphics library.",
        stack: ["C++", "SFML", "CMake", "CLion"],
        image: "/conway.webp",
        repo: "https://github.com/BaptouK/game_of_life",
      },
    ],
  },
  skills: {
    title: "Technical Skills",
    groups: [
      {
        title: "Frontend",
        icon: "terminal",
        skills: ["HTML5", "CSS3", "Angular", "JavaScript", "Typescript"],
      },
      {
        title: "Backend",
        icon: "data_object",
        skills: ["Java", "Node.js", "Express", "PHP", "SQL", "MongoDb"],
      },
      {
        title: "Software Programming",
        icon: "code",
        skills: ["C/C++", "C#", "Rust", "Python"],
      },
      {
        title: "Infrastructure",
        icon: "lan",
        skills: [
          "Docker",
          "Proxmox",
          "VirtualBox",
          "OpenSense",
          "Bash",
          "Linux (Debian/Fedora)",
          "Git",
          "Networking",
          "Traefik",
        ],
      },
      {
        title: "Tools",
        icon: "construction",
        skills: [
          "VS Code",
          "IntelliJ",
          "3D Printing",
          "Postman",
          "SonarQube",
          "GitHub Actions",
          "WireGuard",
        ],
      },
    ],
  },
  timeline: {
    title: "Education & Experience",
    entries: [
      {
        icon: "school",
        iconBg: "bg-primary-fixed text-primary",
        label: "Education 2024-2027",
        title: "Sup De Vinci",
        role: "Computer Science Bachelor - 2nd Year",
        description:
          "Specializing in software development, web architecture and project management.",
        showLine: true,
      },
      {
        icon: "volunteer_activism",
        iconBg: "bg-primary-fixed text-primary",
        label: "2021 - Present",
        title: "Phénix Event",
        role: "Technical Director",
        description:
          "Technical setup and hosting of video game competitions in partnership with local town halls.",
        showLine: true,
      },
      {
        icon: "verified",
        iconBg: "bg-surface-container-highest text-primary",
        label: "March 2026",
        title: "CCNA 1 Certification",
        role: "Cisco Certified Network Associate - Introduction",
        description:
          "Network security fundamentals and communication protocols.",
        showLine: true,
      },
      {
        icon: "group",
        iconBg: "bg-surface-container-highest text-primary",
        label: "2021-2025",
        title: "GIV",
        role: "Member",
        description:
          "Organizing video game events. Managing the production desk for European E-Sports tournaments.",
        showLine: true,
      },
      {
        icon: "history_edu",
        iconBg: "bg-surface-container-highest text-primary",
        label: "2021-2024",
        title: "Jeanne d'Arc High School",
        role: "French Baccalaureate, Mathematics & Computer Science specialty, with merit",
        description:
          "Strong foundation in mathematics and computer science.",
        showLine: true,
      },
      {
        icon: "rocket_launch",
        iconBg: "bg-surface-container-highest text-primary",
        label: "June 2020",
        title: "Night Knight Studio",
        role: "C# Unity Developer Intern",
        description:
          "Built an Android game in C# using Unity over one week.",
        showLine: false,
      },
    ],
  },
  footer: {
    locationSuffix: ", France",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { fr, en };
