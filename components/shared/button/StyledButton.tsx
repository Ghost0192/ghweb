"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/language";

export default function StyledButton() {
  const { language } = useLanguage();

  const buttonText = {
    en: "LEARN MORE",
    es: "CONOCE MÁS",
  };

  return (
    <Button
      variant="default"
      size="lg"
      className="bg-[#094F30] hover:bg-[#82BB27] text-white text-base font-semibold rounded-full px-6 py-3 transition-colors duration-300 flex items-center gap-2"
    >
      {buttonText[language]}
      <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
    </Button>
  );
}
