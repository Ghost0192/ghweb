"use client";

import { useLanguage } from "@/context/language";
import { Button } from "@/components/ui/button";

export default function LanguageComponent() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      size="sm"
      className="bg-gray-800 text-gray-200 hover:bg-gray-700 hover:text-gray-100 text-xs font-medium px-3 py-1.5 rounded-md border-none"
    >
      {language === "en" ? "EN / ES" : "ES / EN"}
    </Button>
  );
}
