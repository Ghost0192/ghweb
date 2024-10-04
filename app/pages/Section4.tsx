"use client";

import React, { useRef, useEffect } from "react";

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
    <div ref={sectionRef} className={` bg-black text-white`}>
      <div className="max-w-7xl mx-auto px-4 py-24">
        <header className="flex justify-between items-center mb-16">
          <h1 className="text-4xl font-light">Our Values</h1>
          <div className="text-xl">02</div>
        </header>
        <hr className="border-gray-700 mb-24" />
        <div className="space-y-40">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row lg:space-x-16"
            >
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h2 className="text-6xl lg:text-7xl xl:text-7xl font-bold lg:sticky lg:top-24">
                  {splitWords(value.title, titleRefs)}
                </h2>
              </div>
              <div className="lg:w-1/2 space-y-8">
                {value.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-2xl font-light text-gray-300">
                    {splitWords(paragraph, contentRefs)}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
