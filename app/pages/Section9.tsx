"use client";

export default function Section9() {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Metrics Section */}
        <div className="bg-green-900 text-white py-24 px-4 mb-40">
          <h2 className="text-5xl font-light mb-16">
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
