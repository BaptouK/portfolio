"use client";

import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "./LanguageProvider";
import { useEffect, useState } from "react";

const linkIds = ["about", "projects", "experience", "skills", "contact"] as const;

export function Navbar() {
  const { dict, locale } = useLanguage();
  const [activeLink, setActiveLink] = useState("about");

  const cvHref = locale === "en" ? "/CV_en.pdf" : "/CV.pdf";

  const links = [
    { label: dict.nav.about, href: "#about" },
    { label: dict.nav.projects, href: "#projects" },
    { label: dict.nav.experience, href: "#experience" },
    { label: dict.nav.skills, href: "#skills" },
    { label: dict.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
    });

    linkIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 w-full bg-white/80 dark:bg-[#1e1820]/80 backdrop-blur-[12px] bg-gradient-to-b from-purple-50/50 to-transparent dark:from-purple-950/30 dark:to-transparent"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <div className="text-xl font-bold tracking-tighter font-[family-name:var(--font-heading)] text-purple-900 dark:text-purple-50">
          Baptiste DUPUIS
        </div>

        <div className="hidden items-center space-x-8 md:flex">
          {links.map((link) => {
            const linkId = link.href.replace("#", "");
            const isActive = activeLink === linkId;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`font-[family-name:var(--font-heading)] transition-colors ${isActive
                    ? "font-bold text-purple-900 dark:text-purple-300 border-b-2 border-purple-900 dark:border-purple-300 pb-1"
                    : "font-medium text-purple-700/70 dark:text-purple-400/70 hover:text-purple-900 dark:hover:text-purple-200"
                  }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={cvHref}
            download="Baptiste_DUPUIS_CV.pdf"
            className="hidden sm:inline-flex px-4 py-2 bg-purple-900 dark:bg-purple-700 text-white dark:text-purple-50 rounded-lg font-bold text-sm hover:bg-purple-800 dark:hover:bg-purple-600 transition-colors"
          >
            {dict.nav.downloadCv}
          </a>
          <a
            href={cvHref}
            download="Baptiste_DUPUIS_CV.pdf"
            className="sm:hidden inline-flex items-center justify-center p-2 bg-purple-900 dark:bg-purple-700 text-white dark:text-purple-50 rounded-lg hover:bg-purple-800 dark:hover:bg-purple-600 transition-colors"
            aria-label={dict.nav.downloadCv}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  );
}
