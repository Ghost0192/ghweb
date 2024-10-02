"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

type Theme = "light" | "dark";
type Language = "en" | "es";

interface ThemeLanguageContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  language: Language;
  setLanguage: (language: Language) => void;
}

const ThemeLanguageContext = createContext<
  ThemeLanguageContextType | undefined
>(undefined);

export const ThemeLanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("dark");
  const [language, setLanguage] = useState<Language>("es");

  return (
    <ThemeLanguageContext.Provider
      value={{ theme, setTheme, language, setLanguage }}
    >
      {children}
    </ThemeLanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(ThemeLanguageContext);
  if (context === undefined) {
    throw new Error(
      "useThemeLanguage must be used within a ThemeLanguageProvider"
    );
  }
  return context;
};
