"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { motion } from "framer-motion";

export function Timeline() {
  const { dict } = useLanguage();

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
            {dict.timeline.title}
          </h2>
        </motion.div>

        <div className="space-y-12">
          {dict.timeline.entries.map((entry, i) => (
            <motion.div
              key={`${entry.title}-${entry.label}`}
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
