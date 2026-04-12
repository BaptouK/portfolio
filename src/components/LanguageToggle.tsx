"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-9 w-9" />;

  const next = locale === "fr" ? "en" : "fr";

  return (
    <button
      onClick={() => setLocale(next)}
      className="flex h-9 w-9 items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors text-sm font-semibold"
      aria-label={
        locale === "fr" ? "Switch language to English" : "Passer en français"
      }
    >
      {next.toUpperCase()}
    </button>
  );
}
