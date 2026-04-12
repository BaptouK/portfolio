"use client";

import { identity } from "@/lib/data";
import { useLanguage } from "@/components/LanguageProvider";

export function Footer() {
  const { dict } = useLanguage();

  return (
    <footer
      id="contact"
      className="w-full bg-purple-50 dark:bg-zinc-950 border-t border-purple-100 dark:border-purple-900/30"
    >
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full max-w-7xl mx-auto gap-8">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <p className="text-sm uppercase tracking-widest text-purple-900 dark:text-purple-300">
            &copy; {new Date().getFullYear()} {identity.firstName}{" "}
            {identity.lastName}
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <span className="material-symbols-outlined text-primary">
              location_on
            </span>
            <p className="text-on-surface-variant text-sm font-medium">
              {identity.location}{dict.footer.locationSuffix}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <a
            href={identity.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700/60 dark:text-purple-500 hover:text-purple-900 dark:hover:text-purple-300 transition-colors hover:-translate-y-0.5 transition-transform text-sm uppercase tracking-widest font-bold"
          >
            GitHub
          </a>
          <a
            href={identity.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700/60 dark:text-purple-500 hover:text-purple-900 dark:hover:text-purple-300 transition-colors hover:-translate-y-0.5 transition-transform text-sm uppercase tracking-widest font-bold"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${identity.email}`}
            className="text-purple-700/60 dark:text-purple-500 hover:text-purple-900 dark:hover:text-purple-300 transition-colors hover:-translate-y-0.5 transition-transform text-sm uppercase tracking-widest font-bold"
          >
            Email
          </a>
          <a
            href={`tel:${identity.phone}`}
            className="text-purple-700/60 dark:text-purple-500 hover:text-purple-900 dark:hover:text-purple-300 transition-colors hover:-translate-y-0.5 transition-transform text-sm uppercase tracking-widest font-bold"
          >
            Phone
          </a>
        </div>
      </div>
    </footer>
  );
}
