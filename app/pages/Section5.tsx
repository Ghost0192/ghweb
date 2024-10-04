import React from "react";
import dynamic from "next/dynamic";

const Globe3D = dynamic(
  () =>
    import("../../components/shared/map/Globe3D").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        Loading...
      </div>
    ),
  }
);

const Section5 = () => {
  return (
    <section className="relative w-full min-h-screen bg-white">
      <div className="bg-white max-w-6xl mx-auto px-4 py-12 min-h-full flex flex-col">
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-light">Our Presence</h1>
          <div className="text-sm">03</div>
        </header>
        <hr className="border-gray-700 mb-8" />
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          We deliver worldwide from our main locations
        </h2>
        <div className="flex flex-col md:flex-row flex-grow">
          <div className="w-full md:w-1/2 h-[50vh] md:h-[60vh]">
            <Globe3D />
          </div>
          <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">Chile</h3>
                <p className="text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie
                  vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh
                  porttitor.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Peru</h3>
                <p className="text-sm md:text-base">
                  Phasellus molestie magna non est bibendum non venenatis nisl
                  tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris
                  iaculis porttitor posuere. Praesent id metus massa, ut blandit
                  odio.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Mexico</h3>
                <p className="text-sm md:text-base">
                  Donec congue lacinia dui, a porttitor lectus condimentum
                  laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus
                  vestibulum faucibus eget in metus. In pellentesque faucibus
                  vestibulum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
