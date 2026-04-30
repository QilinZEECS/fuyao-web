"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { CONTENT, type ContentShape, type Lang } from "@/lib/i18n";

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  content: ContentShape;
}

const LangContext = createContext<LangContextValue | null>(null);

const STORAGE_KEY = "fuyao-lang";
const HTML_LANG: Record<Lang, string> = { zh: "zh-CN", tw: "zh-TW", en: "en" };

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("zh");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)) as Lang | null;
    if (saved === "zh" || saved === "tw" || saved === "en") {
      setLangState(saved);
    } else if (typeof navigator !== "undefined") {
      const nav = navigator.language.toLowerCase();
      if (nav.startsWith("zh-tw") || nav.startsWith("zh-hk") || nav.startsWith("zh-mo")) {
        setLangState("tw");
      } else if (!nav.startsWith("zh")) {
        setLangState("en");
      }
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = HTML_LANG[lang];
      document.title = CONTENT[lang].SITE_NAME + " — " + CONTENT[lang].HERO.title;
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, l);
    }
  };

  return (
    <LangContext.Provider value={{ lang, setLang, content: CONTENT[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}

export function useContent() {
  return useLang().content;
}
