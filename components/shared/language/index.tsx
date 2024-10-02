"use client";

import { useLanguage } from "@/context/language";

export default function LanguageComponent() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = (lang: "en" | "es") => {
    setLanguage(lang);
  };

  return (
    <div className="flex items-center space-x-1">
      <button
        onClick={() => toggleLanguage("en")}
        className={`text-sm transition-all focus:outline-none ${
          language === "en"
            ? "font-bold text-white"
            : "font-normal text-gray-400 hover:text-white"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-sm text-white">/</span>
      <button
        onClick={() => toggleLanguage("es")}
        className={`text-sm transition-all focus:outline-none ${
          language === "es"
            ? "font-bold text-white"
            : "font-normal text-gray-400 hover:text-white"
        }`}
        aria-label="Switch to Spanish"
      >
        ES
      </button>
    </div>
  );
}
