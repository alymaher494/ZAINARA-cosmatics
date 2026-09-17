"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Lang = "de" | "ar";

type LangState = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
};

export const useLangStore = create<LangState>()(
  persist(
    (set, get) => ({
      lang: "de",
      setLang: (l) => set({ lang: l }),
      toggle: () => set({ lang: get().lang === "de" ? "ar" : "de" }),
    }),
    { name: "zainara-lang" }
  )
);

/** Apply dir/lang to <html> whenever language changes (client only). */
export function syncHtmlAttrs(lang: Lang) {
  if (typeof document === "undefined") return;
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === "ar" ? "rtl" : "ltr";
}
