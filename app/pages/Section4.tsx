"use client";

import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Section4() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const contentRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const values = [
    {
      title: "Surpass Goals",
      content: [
        "We strive to understand the challenging areas of the businesses that we work with.",
        "By leveraging cutting-edge technology, we strive to create a broader impact that drives meaningful progress and innovation across industries.",
      ],
    },
    {
      title: "Innovate Continuously",
      content: [
        "We embrace change and constantly seek new ways to improve our products and services.",
        "Our team is encouraged to think outside the box, challenging conventional wisdom to stay ahead of industry trends and customer needs.",
      ],
    },
    {
      title: "Empower Teams",
      content: [
        "We believe in the power of collaborative and autonomous teams.",
        "Our flat organizational structure promotes quick decision-making and personal responsibility, fostering an inclusive environment where diverse perspectives are valued.",
      ],
    },
    {
      title: "Customer Centric",
      content: [
        "Our customers are at the heart of everything we do.",
        "We actively seek and act on customer feedback to improve our products and services, striving to build long-term relationships based on trust and mutual success.",
      ],
    },
    {
      title: "Sustainable Growth",
      content: [
        "We believe in growing our business responsibly and sustainably.",
        "Environmental considerations are integrated into our decision-making processes, balancing profitability with social and environmental responsibility.",
      ],
    },
  ];

  const splitWords = (
    phrase: string,
    refArray: React.MutableRefObject<(HTMLSpanElement | null)[]>
  ) => {
    return phrase.split(" ").map((word, i) => (
      <span key={word + "_" + i} className="inline-block mr-2">
        {splitLetters(word, refArray)}
      </span>
    ));
  };

  const splitLetters = (
    word: string,
    refArray: React.MutableRefObject<(HTMLSpanElement | null)[]>
  ) => {
    return word.split("").map((letter, i) => (
      <span
        key={letter + "_" + i}
        ref={(el) => {
          if (el) refArray.current.push(el);
        }}
        className="opacity-20 transition-opacity duration-200"
      >
        {letter}
      </span>
    ));
  };

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const windowCenter = windowHeight / 2;

      [...titleRefs.current, ...contentRefs.current].forEach((el) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          const elementCenter = rect.top + rect.height / 2;
          const distanceFromCenter = Math.abs(windowCenter - elementCenter);
          const opacity = Math.max(0.2, 1 - distanceFromCenter / windowCenter);
          el.style.opacity = opacity.toString();
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-black text-white h-screen overflow-y-auto"
    >
      <div className="max-w-6xl mx-auto px-4 py-12 min-h-full flex flex-col">
        <header className="flex justify-between items-center mb-16">
          <h1 className="text-2xl font-light">Our Values</h1>
          <div className="text-sm">01</div>
        </header>

        <div className="flex-grow flex flex-col justify-between">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:space-x-8 mb-24 md:mb-32 last:mb-0"
            >
              <div className="md:w-2/5 mb-4 md:mb-0">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light sticky top-24">
                  {splitWords(value.title, titleRefs)}
                </h2>
              </div>
              <div className="md:w-3/5 space-y-4">
                {value.content.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className={`text-xl font-light ${
                      pIndex === 1 ? "text-gray-400" : "text-gray-300"
                    }`}
                  >
                    {splitWords(paragraph, contentRefs)}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-8 right-8">
        <Button
          onClick={() => {
            if (sectionRef.current) {
              sectionRef.current.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="bg-white text-black hover:bg-gray-200"
        >
          Back to Top
        </Button>
      </div>
    </div>
  );
}
