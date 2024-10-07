import React from "react";
import Image from "next/image";

const logos = [
  "/placeholder-logo.svg",
  "/placeholder-logo.svg",
  "/placeholder-logo.svg",
  "/placeholder-logo.svg",
  "/placeholder-logo.svg",
  "/placeholder-logo.svg",
];

export default function LogoBanner() {
  return (
    <div className="bg-black text-white max-w-6xl mx-auto px-4 pt-12 pb-16 min-h-full flex flex-col">
      <header className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-light">Our Partners and Clients</h1>
        <div className="text-sm">04</div>
      </header>
      <hr className="border-gray-700 mb-12" />
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 lg:mb-12">
        Long term work with great businesses and industry leaders.
      </h2>

      <div className="w-full overflow-hidden">
        <div className="flex animate-scroll py-12">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 mx-8">
              <Image
                src={logo}
                alt={`Company logo ${index + 1}`}
                width={120}
                height={60}
                className="object-contain brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
