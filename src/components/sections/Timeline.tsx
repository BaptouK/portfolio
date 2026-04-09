"use client";

import { motion } from "framer-motion";

const entries = [
  {
    icon: "school",
    iconBg: "bg-primary-fixed text-primary",
    label: "Formation 2024-2027 ",
    title: "Sup De Vinci",
    role: "Bachelor en Informatique - 2e Année",
    description:
      "Spécialisation en développement logiciel, architecture web et gestion de projet.",
    showLine: true,
  },
  {
    icon: "volunteer_activism",
    iconBg: "bg-surface-container-highest text-primary",
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
    role: "BAC Générale Spécialité Math/NSI Mention Assez Bien",
    description:
      "Bases solides en mathématiques et sciences numériques.",
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
];

export function Timeline() {
  return (
    <section id="experience" className="py-24 px-8 bg-surface">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-[family-name:var(--font-heading)] font-bold text-primary tracking-tight">
            Parcours & Experiences
          </h2>
        </motion.div>

        <div className="space-y-12">
          {entries.map((entry, i) => (
            <motion.div
              key={entry.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-8 group"
            >
              <div className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 ${entry.iconBg} flex items-center justify-center rounded shrink-0 transition-transform group-hover:scale-110`}
                >
                  <span className="material-symbols-outlined">
                    {entry.icon}
                  </span>
                </div>
                {entry.showLine && (
                  <div className="w-0.5 h-full bg-surface-container-highest mt-4" />
                )}
              </div>
              <div className={entry.showLine ? "pb-8" : ""}>
                <span className="text-xs font-bold uppercase tracking-widest text-primary-container dark:text-primary-fixed-dim">
                  {entry.label}
                </span>
                <h3 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-on-surface mt-1">
                  {entry.title}
                </h3>
                <p className="text-on-surface-variant font-medium mt-2">
                  {entry.role}
                </p>
                <p className="text-on-surface-variant/80 text-sm mt-3 leading-relaxed">
                  {entry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
