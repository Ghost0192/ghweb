"use client";

export default function Section3() {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="pt-12 pb-36">
          <header className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-light">Our Business</h1>
            <div className="text-sm">02</div>
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
      </div>
    </div>
  );
}
