"use client";

import React, { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import StyledButton from "@/components/shared/button/StyledButton";
import { useLanguage } from "../../context/language";

const texts = {
  en: [
    "WE DEVELOP",
    "AGRICULTURAL PRODUCTS",
    "& SERVICES WITH EXCELLENCE",
    "AT LARGE SCALE",
  ],
  es: [
    "DESARROLLAMOS",
    "CON EXCELENCIA",
    "PRODUCTOS Y SERVICIOS",
    "AGRÍCOLAS A GRAN ESCALA",
  ],
};

export default function Landing() {
  const loadingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { theme, language } = useLanguage();

  useEffect(() => {
    const tl = gsap.timeline();

    // Loading animation
    tl.to(loadingRef.current, {
      opacity: 1,
      duration: 1,
      onComplete: () => {
        tl.to(loadingRef.current, {
          opacity: 0,
          duration: 1,
          onComplete: () => {
            if (loadingRef.current) {
              loadingRef.current.style.display = "none";
            }
          },
        });
      },
    });

    // Reveal content
    tl.fromTo(
      contentRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        onComplete: () => {
          // Animate lines and letters after content is fully visible
          if (textRef.current) {
            const lines = textRef.current.querySelectorAll(".line");
            lines.forEach((line) => {
              const letters = line.querySelectorAll(".letter");
              tl.fromTo(
                letters,
                {
                  opacity: 0,
                  y: 20,
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  stagger: 0.03,
                  ease: "power3.out",
                },
                "-=0.6"
              );
            });
          }
        },
      },
      "-=0.5"
    );
  }, [language]); // Re-run the animation when language changes

  return (
    <>
      <div
        ref={loadingRef}
        className={`fixed inset-0 ${
          theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        } z-50 flex items-center justify-center`}
      >
        <div>GRUPO HIJUELAS</div>
      </div>
      <div ref={contentRef} className="relative h-screen w-full opacity-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 min-h-full min-w-full object-cover -z-1"
        >
          <source src="/assets/videos/landing.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />

        <div className="absolute inset-0 z-20 flex flex-col justify-center items-end p-8 md:p-16 lg:p-24">
          <div className="max-w-4xl text-right">
            <div
              ref={textRef}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-white leading-tight mb-6"
            >
              {texts[language].map((line, lineIndex) => (
                <div key={lineIndex} className="line whitespace-nowrap">
                  {line.split("").map((char, charIndex) => (
                    <span
                      key={charIndex}
                      className="letter inline-block opacity-0"
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <StyledButton />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 text-white text-center">
          <p className="text-sm mb-2">
            {language === "en" ? "Scroll Down" : "Desplázate hacia abajo"}
          </p>
          <ChevronDown className="w-6 h-6 mx-auto animate-bounce" />
        </div>
      </div>
    </>
  );
}
