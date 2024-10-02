"use client";

import { useLanguage } from "@/context/language";
import { Button } from "@/components/ui/button";

export default function LanguageComponent() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="p-4">
      <div className="space-x-2">
        <Button
          onClick={() => setLanguage("en")}
          variant={language === "en" ? "default" : "outline"}
        >
          English
        </Button>
        <Button
          onClick={() => setLanguage("es")}
          variant={language === "es" ? "default" : "outline"}
        >
          Español
        </Button>
      </div>
    </div>
  );
}
