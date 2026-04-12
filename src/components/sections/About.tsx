"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Award, Globe, Heart, Users } from "lucide-react";

export function About() {
  const { dict } = useLanguage();

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 text-2xl font-bold tracking-tight sm:text-3xl">
            {dict.about.title}
          </h2>
          <p className="mb-12 text-muted-foreground">{dict.about.subtitle}</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-xl border border-border/50 bg-card/50 p-6"
          >
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Award className="h-4 w-4 text-primary" />
              </div>
              <h3 className="font-semibold">{dict.about.certifications}</h3>
            </div>
            <ul className="space-y-2">
              {dict.certifications.map((cert) => (
                <li key={cert.name} className="text-sm">
                  <span className="font-medium">{cert.name}</span>
                  <span className="text-muted-foreground"> — {cert.issuer}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-xl border border-border/50 bg-card/50 p-6"
          >
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Globe className="h-4 w-4 text-primary" />
              </div>
              <h3 className="font-semibold">{dict.about.languages}</h3>
            </div>
            <ul className="space-y-2">
              {dict.languages.map((lang) => (
                <li key={lang.name} className="text-sm">
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-muted-foreground"> — {lang.level}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="rounded-xl border border-border/50 bg-card/50 p-6"
          >
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Heart className="h-4 w-4 text-primary" />
              </div>
              <h3 className="font-semibold">{dict.about.interests}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {dict.interests.map((interest) => (
                <Badge key={interest} variant="secondary" className="font-normal">
                  {interest}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Volunteering */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="rounded-xl border border-border/50 bg-card/50 p-6"
          >
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-4 w-4 text-primary" />
              </div>
              <h3 className="font-semibold">{dict.about.volunteering}</h3>
            </div>
            <div className="space-y-4">
              {dict.volunteering.map((vol) => (
                <div key={vol.organization}>
                  <div className="flex items-baseline justify-between">
                    <h4 className="text-sm font-medium">
                      {vol.url ? (
                        <a
                          href={vol.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
                        >
                          {vol.organization}
                        </a>
                      ) : (
                        vol.organization
                      )}
                    </h4>
                    <span className="text-xs text-muted-foreground">
                      {vol.startDate} — {vol.endDate ?? dict.about.present}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{vol.role}</p>
                  <p className="mt-1 text-sm text-muted-foreground/80">
                    {vol.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
