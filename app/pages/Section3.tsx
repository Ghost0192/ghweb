"use client";

export default function Section3() {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="pt-12 pb-36">
          <header className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-light">Our Business</h1>
            <div className="text-sm">01</div>
          </header>
          <hr className="border-gray-300 mb-12" />
          {/* Description Section with Bold Black Text - No Justification */}
          <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
            Our model contemplates full vertical{" "}
            <span className="whitespace-nowrap">integration</span>, ensuring the
            quality of our products and enabling rapid scalability to meet our
            client&apos;s needs.
          </p>
        </div>

        {/* Metrics Section */}
        <div className="bg-green-900 text-white py-24 px-4 mb-40">
          <h2 className="text-3xl font-light mb-16">
            The following metrics have been established:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-7xl font-bold mb-4">96%</h3>
              <p className="text-2xl font-bold mb-2">
                DRIVING BUSINESS CONNECTIONS
              </p>
              <p className="text-md">
                of our attendees said they made an important business connection
                at our events
              </p>
            </div>
            <div>
              <h3 className="text-7xl font-bold mb-4">95</h3>
              <p className="text-3xl font-semibold mb-2">NPS</p>
              <p className="text-md">A blended score of 95 across our events</p>
            </div>
            <div>
              <h3 className="text-7xl font-bold mb-4">96%</h3>
              <p className="text-2xl font-semibold mb-2">UNLOCKING SOLUTIONS</p>
              <p className="text-md">
                of our attendees said the event opened up meaningful business
                solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
