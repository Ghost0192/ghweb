"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Section8() {
  const container = useRef<HTMLDivElement>(null);
  const stickyMask = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (stickyMask.current && container.current && content.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: () => `+=${window.innerHeight * 3}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(stickyMask.current, {
        scale: getScale(),
        duration: 1,
      });

      tl.to(
        content.current,
        {
          opacity: 0,
          duration: 0.5,
        },
        0.5
      );

      const handleResize = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        tl.kill();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    }
  }, []);

  const getScale = () => {
    const vw = window.innerWidth;
    if (vw < 640) return 3;
    if (vw < 1024) return 4;
    return 5;
  };

  return (
    <div
      ref={container}
      className="bg-white text-black h-screen relative overflow-hidden"
    >
      <div
        ref={content}
        className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 h-full"
      >
        {/* Header Section */}
        <div className="pt-8 sm:pt-10 lg:pt-12">
          <header className="flex justify-between items-center mb-2">
            <h1 className="text-xl sm:text-2xl font-light">Our Purpose</h1>
            <div className="text-sm">01</div>
          </header>
          <hr className="border-gray-300" />
        </div>

        {/* Main Content */}
        <div className="mt-32 sm:mt-36 lg:mt-40 space-y-12 sm:space-y-16 lg:space-y-20">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-black/90">
            At GRUPO HIJUELAS
          </h2>
          <p className="text-2xl sm:text-3xl lg:text-5xl text-justify font-light leading-tight text-black/80 text-right max-w-4xl ml-auto">
            In each plant we grow, we see the promise of life. Blending
            sustainable practices and innovation with community dedication, we
            aim to foster a future full of growth and possibility for all.
          </p>
        </div>

        {/* Reduced spacer */}
        <div className="h-4 sm:h-6 lg:h-8"></div>
      </div>

      {/* Image with Mask Effect */}
      <div
        ref={stickyMask}
        className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 absolute bottom-4 sm:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2 overflow-hidden"
        style={{
          maskImage:
            "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100' height='100' fill='black'/%3E%3C/svg%3E\")",
          maskPosition: "center",
          maskRepeat: "no-repeat",
          maskSize: "100%",
          WebkitMaskImage:
            "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100' height='100' fill='black'/%3E%3C/svg%3E\")",
          WebkitMaskPosition: "center",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "100%",
        }}
      >
        <Image
          src="/assets/images/b23.jpg"
          alt="Greenhouse facility"
          fill
          className="object-cover"
          sizes="(max-width: 640px) 16rem, (max-width: 1024px) 20rem, 24rem"
          priority
        />
      </div>
    </div>
  );
}
