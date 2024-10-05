import React from "react";

export default function Section7() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <div className="max-w-6xl mx-auto px-4 pt-12 pb-4 w-full">
        <header className="flex justify-between items-center mb-2">
          <h1 className="text-2xl font-light">Our Value Proposition</h1>
          <div className="text-sm">04</div>
        </header>
        <hr className="border-gray-700" />
      </div>
      <div className="flex-grow flex items-center max-w-6xl mx-auto px-4 w-full">
        <div className="w-full">
          {/* Updated font sizes */}
          <h2 className="text-8xl sm:text-[7rem] md:text-[9rem] lg:text-[10rem] xl:text-[12rem] font-bold leading-none mb-4">
            What we do <br />
            best
          </h2>
          <div className="flex justify-start">
            <ul className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl space-y-1 text-left font-bold">
              <li>Propagation</li>
              <li>Hardening</li>
              <li>Plant Nursery</li>
              <li>Farm</li>
              <li>Fruit Export</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
