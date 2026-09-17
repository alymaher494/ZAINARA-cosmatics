"use client";
import { useLangStore } from "@/lib/lang-store";
import type { Dict } from "@/lib/content";
import { t as content } from "@/lib/content";
import { useEffect } from "react";

/** Hook: returns current language and the dictionary for that language. */
export function useT(): { lang: "de" | "ar"; t: Dict } {
  const lang = useLangStore((s) => s.lang);
  return { lang, t: content[lang] as Dict };
}

/**
 * Mount this once near the root to sync <html lang/dir> with the chosen language.
 */
export function HtmlLangSync() {
  const lang = useLangStore((s) => s.lang);
  useEffect(() => {
    syncHtmlAttrsClient(lang);
  }, [lang]);
  return null;
}

function syncHtmlAttrsClient(lang: "de" | "ar") {
  if (typeof document === "undefined") return;
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === "ar" ? "rtl" : "ltr";
}
