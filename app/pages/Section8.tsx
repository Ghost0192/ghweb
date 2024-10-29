"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Section8 = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const stickyMask = useRef<HTMLDivElement | null>(null);
  const content = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (stickyMask.current && container.current && content.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          onEnter: () => {
            gsap.set(container.current, { height: "400vh" });
          },
          onLeaveBack: () => {
            gsap.set(container.current, { height: "100vh" });
          },
        },
      });

      tl.to(stickyMask.current, {
        scale: 5,
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

      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    }
  }, []);

  return (
    <div
      ref={container}
      className="bg-black text-white h-screen relative overflow-hidden"
    >
      <div
        ref={content}
        className="max-w-6xl mx-auto px-4 w-full relative z-10 h-full flex flex-col justify-between"
      >
        {/* Header Section */}
        <div className="pt-8">
          <header className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-light text-white">Our Purpose</h1>
            <div className="text-sm text-white">01</div>
          </header>
          <hr className="border-gray-300" />
        </div>

        {/* Main Content */}
        <div className="flex flex-col justify-center flex-grow">
          <main className="text-center px-4">
            <p className="text-white text-4xl sm:text-5xl md:text-6xl font-light leading-tight">
              At GRUPOHIJUELAS, in each plant we grow, we see the promise of
              life. Blending sustainable practices and innovation with community
              dedication, we aim to foster a future full of growth and
              possibility for all.
            </p>
          </main>
        </div>

        {/* Spacer for additional margin between text and image */}
        <div className="h-24"></div>
      </div>

      {/* Image Square with Mask Effect */}
      <div
        ref={stickyMask}
        className="w-96 h-96 absolute bottom-16 left-1/2 transform -translate-x-1/2 overflow-hidden"
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
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Section8;
