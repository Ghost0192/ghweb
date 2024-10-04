import Image from "next/image";

export default function Section3() {
  return (
    <div>
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-4 pt-12 pb-0 min-h-full flex flex-col">
        <header className="flex justify-between items-center">
          <h1 className="text-2xl font-light">Our Business</h1>
          <div className="text-sm">01</div>
        </header>
        <hr className="border-gray-700 pb-12" />

        {/* Description Section with Bold Black Text */}
        <p className="text-5xl md:text-7xl lg:text-7xl xl:text-7xl font-bold  lg:top-24 mb-4">
          Our model contemplates full vertical integration, ensuring the quality
          of our products and enabling rapid scalability to meet our
          clients&apos; needs.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* First Box: Split into three sections with images and titles */}

        {/* Second Box: Full-width with fixed height */}
        <div className="bg-gray-100 rounded-lg p-8 flex justify-center items-center mb-16 h-64">
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              From genetics to consumer, more than 50 years in the industry.
            </h2>
          </div>
        </div>

        {/* Third Row: Two boxes with images and titles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 rounded-lg p-8 flex flex-col justify-center items-center h-80">
            <h2 className="text-lg font-bold mb-4">Farms</h2>
            <div className="mix-blend-darken bg-gray-100 p-4">
              <Image
                src="/assets/images/field.webp"
                alt="Field image"
                width={250}
                height={250}
                className="object-contain"
              />
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-8 flex flex-col justify-center items-center h-80">
            <h2 className="text-lg font-bold mb-4">Fruit Export</h2>
            <div className="mix-blend-darken bg-gray-100 p-4">
              <Image
                src="/assets/images/vitro.webp"
                alt="Vitro image"
                width={250}
                height={250}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
