import React from "react";
import dynamic from "next/dynamic";
import LocationBadge from "@/components/shared/badge";

const Globe3D = dynamic(
  () => import("@/components/shared/map/Globe3D").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    ),
  }
);

const Section5 = () => {
  return (
    <section className="relative w-full min-h-screen bg-white">
      <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-full flex flex-col">
        <header className="flex justify-between items-center mb-2">
          <h1 className="text-2xl font-light">Our Presence</h1>
          <div className="text-sm">03</div>
        </header>
        <hr className="border-gray-700 mb-8" />
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 lg:mb-12">
          We bring solutions worldwide
        </h2>
        <div className="flex flex-col lg:flex-row flex-grow">
          <div className="w-full lg:w-1/2 h-[50vh] lg:h-[60vh] mb-8 lg:mb-0">
            <div className="w-full h-full">
              <Globe3D />
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8 flex flex-col justify-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Key Locations</h3>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                  Chile
                </h3>
                <div className="flex flex-wrap gap-2">
                  <LocationBadge name="Hijuelas" />
                  <LocationBadge name="Osorno" />
                </div>
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                  Peru
                </h3>
                <div className="text-sm md:text-base">
                  <LocationBadge name="Ica" />
                </div>
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                  Mexico
                </h3>
                <div className="text-sm md:text-base">
                  <LocationBadge name="Mexico" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
