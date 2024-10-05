"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Landing from "./pages/Landing";
import Section1 from "./pages/Section1";
import Section2 from "./pages/Section2";
import Section3 from "./pages/Section3";
import Section4 from "./pages/Section4";
import Section5 from "./pages/Section5";
import Footer from "../components/shared/footer/index";
import Section6 from "./pages/Section6";
import Section7 from "./pages/Section7";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen ">
      <div className="w-full max-w-full mx-auto">
        {/* Landing section */}
        <section className="h-screen w-full overflow-hidden">
          <Landing />
        </section>

        <section className="w-full ">
          <Section1 />
        </section>

        {/* Other sections with overflow hidden */}
        <section className="w-full bg-white overflow-hidden">
          <Section3 />
        </section>
        <section className="w-full bg-black ">
          <Section4 />
        </section>
        <section className="min-h-screen w-full overflow-hidden">
          <Section5 />
        </section>
        <section className="min-h-screen w-full bg-white overflow-hidden">
          <Section7 />
        </section>
        <section className="min-h-screen w-full bg-white overflow-hidden">
          <Section2 />
        </section>
        <section className="min-h-screen w-full bg-black overflow-hidden">
          <Section6 />
        </section>

        {/* Footer */}
        <section className="w-full bg-[#094F30] overflow-hidden">
          <Footer />
        </section>
      </div>
    </div>
  );
}
