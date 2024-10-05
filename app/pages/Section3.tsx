"use client";

import Image from "next/image";

export default function Section3() {
  return (
    <div>
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-4 pt-12 pb-0 min-h-full flex flex-col">
        <header className="flex justify-between items-center mb-2">
          <h1 className="text-2xl font-light">Our Business</h1>
          <div className="text-sm">01</div>
        </header>
        <hr className="border-gray-700 pb-6" />

        {/* Description Section with Bold Black Text */}
        <p className="text-5xl md:text-7xl lg:text-7xl xl:text-7xl font-bold mb-12">
          Our model contemplates full vertical integration, ensuring the quality
          of our products and enabling rapid scalability to meet our
          client&apos;s needs.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Simplified Layout: Two Prominent Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-100 rounded-lg p-8 flex flex-col justify-center items-center">
            <h2 className="text-lg font-bold mb-4">Vitro Propagation</h2>
            <Image
              src="/assets/images/vitro.webp"
              alt="Plant in tissue culture"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
          <div className="bg-gray-100 rounded-lg p-8 flex flex-col justify-center items-center">
            <h2 className="text-lg font-bold mb-4">Hardening</h2>
            <Image
              src="/assets/images/tray.webp"
              alt="Plants in trays"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </div>

        {/* Full-width Box */}
        <div className="bg-gray-100 rounded-lg p-8 flex justify-center items-center mb-16">
          <h2 className="text-3xl font-bold text-center">
            From genetics to consumer, more than 50 years in the industry.
          </h2>
        </div>

        {/* Additional Content (Optional) */}
        {/* You can add another image or text block here if needed */}
      </div>
    </div>
  );
}
