"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { motion } from "framer-motion";

export function Skills() {
  const { dict } = useLanguage();

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
            {dict.skills.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dict.skills.groups.map((group, i) => (
            <motion.div
              key={group.icon}
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
