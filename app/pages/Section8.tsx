import React from "react";
import Image from "next/image";

const Section8 = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <div className="max-w-6xl mx-auto px-4 w-full flex flex-col min-h-screen">
        {/* Header Section */}
        <div className="pt-12 pb-36">
          <header className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-light text-white">Our Purpose</h1>
            <div className="text-sm text-white">01</div>
          </header>
          <hr className="border-gray-300 mb-12" />
        </div>

        {/* Main Content with Background Image */}
        <div className="relative flex-grow flex flex-col justify-center">
          <main className="relative z-10">
            <h2 className="text-white text-7xl md:text-8xl lg:text-9xl font-black leading-none mb-8 tracking-tight">
              CULTIVATE
              <br />
              LIFE.
            </h2>
            <p className="text-white text-xl md:text-2xl max-w-2xl font-light leading-relaxed">
              At GRUPOHIJUELAS, we are dedicated to nurturing growth and
              fostering sustainable practices. Our mission is to cultivate life
              in all its forms, from the soil to the communities we serve. We
              believe in creating a greener, more vibrant world for generations
              to come.
            </p>
          </main>

          {/* Background Image */}
          <div className="absolute top-[5%] right-0 w-1/2 h-[80%]">
            <Image
              src="/assets/images/b23.jpg"
              alt="Greenhouse facility"
              layout="fill"
              objectFit="cover"
              className="opacity-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section8;
