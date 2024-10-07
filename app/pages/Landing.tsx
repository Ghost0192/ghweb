"use client";

import React, { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import StyledButton from "@/components/shared/button/StyledButton";
import { useLanguage } from "../../context/language";
import AnimatedLogo from "@/components/shared/logo";

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
      duration: 0.4,
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
        className="fixed inset-0 bg-[#F2F2F2] z-50 flex flex-col items-center justify-center p-4"
      >
        <div className="flex flex-col lg:flex-row items-center">
          <div className="text-[#0A5F3C] font-bold text-center lg:text-left mb-4 lg:mb-0 lg:mr-4">
            <div className="text-5xl sm:text-6xl lg:text-7xl">GRUPO</div>
            <div className="text-5xl sm:text-6xl lg:text-7xl">HIJUELAS</div>
          </div>
          <div className="mt-4 lg:mt-0">
            <AnimatedLogo />
          </div>
        </div>
      </div>
      <div
        ref={contentRef}
        className="relative h-screen w-full opacity-0 overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/videos/landing.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />

        <div className="absolute inset-0 z-20 flex flex-col justify-center items-end p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
          <div className="w-full max-w-4xl text-right">
            <div
              ref={textRef}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white leading-tight mb-6"
            >
              {texts[language].map((line, lineIndex) => (
                <div
                  key={lineIndex}
                  className="line whitespace-normal sm:whitespace-nowrap mb-2"
                >
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

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 text-white text-center">
          <p className="text-xs sm:text-sm mb-2">
            {language === "en" ? "Scroll Down" : "Desplázate hacia abajo"}
          </p>
          <ChevronDown className="w-4 h-4 sm:w-6 sm:h-6 mx-auto animate-bounce" />
        </div>
      </div>
    </>
  );
}
