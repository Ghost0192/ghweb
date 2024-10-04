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
    <div className="min-h-screen">
      <div className="max-w-[410px] se:max-w-[400px] 12pro:max-w-[410px] xr:max-w-none mx-auto ">
        <section className="h-[100svh] w-full overflow-hidden">
          <Landing />
        </section>
        <section className=" w-full">
          <Section1 />
        </section>

        <section className="w-full bg-white">
          <Section3 />
        </section>
        <section className="w-full bg-black">
          <Section4 />
        </section>
        <section className="min-h-[100svh] w-full">
          <Section5 />
        </section>
        <section className="min-h-[100svh] w-full bg-white">
          <Section2 />
        </section>
        <section className="min-h-[100svh] w-full bg-black">
          <Section6 />
        </section>
        <section className="bg-[#094F30]">
          <Footer />
        </section>
      </div>
    </div>
  );
}
