"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { motion } from "framer-motion";
import Image from "next/image";

export function Projects() {
  const { dict } = useLanguage();

  return (
    <section id="projects" className="py-24 px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-[family-name:var(--font-heading)] font-bold text-primary tracking-tight">
            {dict.projects.title}
          </h2>
          <div className="h-1 w-20 bg-primary mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dict.projects.items.map((project, i) => (
            <motion.div
              key={project.repo + project.image}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              onClick={() => window.open(project.repo, "_blank")}
              className="bg-surface-container-lowest rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl group border border-outline-variant/10 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden bg-surface-variant">
                <Image
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${project.image}`}
                  alt={project.title}
                  fill
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
