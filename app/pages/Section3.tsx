import React from "react";
export default function Section3() {
  return (
    <div>
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-4 pt-12 pb-0 min-h-full flex flex-col">
        <header className="flex justify-between items-center">
          <h1 className="text-2xl font-light">Our Bussiness</h1>
          <div className="text-sm">01</div>
        </header>
        <hr className="border-gray-700 pb-12" />

        {/* Description Section with Bold Black Text */}
        <p className="text-3xl font-bold text-black leading-snug mt-6">
          Our model contemplates full vertical integration, ensuring the quality
          of our products and enabling rapid scalability to meet our
          clients&apos; needs.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* First Box: Full-width with fixed height */}
        <div className="bg-gray-100 rounded-lg p-8 flex justify-center items-center mb-16 h-64">
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              Bundle Apple TV+ with up to five other great services.
            </h2>
            <p className="mt-2 text-lg">And enjoy more for less.</p>
          </div>
        </div>

        {/* Second Box: Full-width with fixed height */}
        <div className="bg-gray-100 rounded-lg p-8 flex justify-center items-center mb-16 h-64">
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              The Apple Music Student Plan comes with Apple TV+ for free.
            </h2>
          </div>
        </div>

        {/* Third Row: Two boxes with larger height */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 rounded-lg p-8 flex justify-center items-center h-80">
            <div className="text-center">
              <h2 className="text-3xl font-bold">
                The Apple experience. Cinematic in every sense.
              </h2>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-8 flex justify-center items-center h-80">
            <div className="text-center">
              <h2 className="text-3xl font-bold">
                Bring Apple TV+ to a screen near you.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
