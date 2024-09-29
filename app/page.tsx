"use client";
import Landing from "./pages/Landing";
import Section1 from "./pages/Section1";
import Section2 from "./pages/Section2";
import Footer from "../components/shared/footer/index";
import Section3 from "./pages/Section3";
import Section4 from "./pages/Section4";
import Section5 from "./pages/Section5";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  useEffect(() => {
    // Configure Lenis to adjust the smoothness and scroll speed
    const lenis = new Lenis({
      duration: 1.2, // The lower the value, the slower the scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function for smoothness
      smoothWheel: true, // Enable smooth scrolling with the mouse wheel
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Clean up Lenis when the component unmounts
    };
  }, []);

  return (
    <div className="min-h-screen ">
      <section className="h-screen w-full">
        <Landing />
      </section>
      <section className="h-screen w-full">
        <Section1 />
      </section>
      <section className="h-screen w-full bg-black flex items-center justify-center">
        <Section2 />
      </section>
      <section className="h-screen w-full bg-gray-300 flex items-center justify-center">
        <Section3 />
      </section>
      <section className="h-screen w-full bg-black flex items-center justify-center">
        <Section4 />
      </section>
      <section className="h-screen w-full bg-gray-300 flex items-center justify-center">
        <Section5 />
      </section>
      <section className="h-screen w-full bg-black flex items-center justify-center">
        <h2 className="text-4xl font-bold">Section 3</h2>
      </section>
      <Footer />
    </div>
  );
}
