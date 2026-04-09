"use client";

import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeLink, setActiveLink] = useState("about");

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

    links.forEach((link) => {
      const id = link.href.replace("#", "");
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
            href="/CV.pdf"
            download="Baptiste_DUPUIS_CV.pdf"
            className="hidden sm:inline-flex px-4 py-2 bg-purple-900 dark:bg-purple-700 text-white dark:text-purple-50 rounded-lg font-bold text-sm hover:bg-purple-800 dark:hover:bg-purple-600 transition-colors"
          >
            Télécharger mon CV
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  );
}
