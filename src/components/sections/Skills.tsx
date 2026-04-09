"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    icon: "terminal",
    skills: ["HTML5", "CSS3", "Angular", "JavaScript", "Typescript"], 
  },
  {
    title: "Backend",
    icon: "data_object",
    skills: ["Java", "Node.js", "Express", "PHP", "SQL","MongoDb"],
  },
  {
    title: "Software Programming",
    icon: "code",
    skills: ["C/C++", "C#", "Rust", "Python"],
  },
  {
    title: "Infrastructure",
    icon: "lan",
    skills: ["Docker", "Proxmox", "VirtualBox", "OpenSense", "Bash", "Linux (Debian/Fedora)", "Git", "Networking", "Traefik"],
  },
  {   
    title: "Tools",
    icon: "construction",
    skills: ["VS Code", "IntelliJ", "3D Printing", "Postman", "SonarQube", "GitHub Action", "WireGuard"],
  },
];  

export function Skills() {
  return (
    <section id="skills" className="py-24 px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-[family-name:var(--font-heading)] font-bold text-primary tracking-tight">
            Competences Techniques
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-surface-container p-8 rounded-xl border-t-2 border-primary"
            >
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-primary mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  {group.icon}
                </span>
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
