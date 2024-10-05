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
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none mb-4">
            What we do <br />
            best
          </h2>
          <div className="flex justify-start">
            <ul className="text-sm sm:text-base space-y-1 text-left">
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
