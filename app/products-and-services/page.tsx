import Image from "next/image";

const crops = [
  { name: "Blueberries", image: "/placeholder.svg?height=50&width=50" },
  { name: "Raspberries", image: "/placeholder.svg?height=50&width=50" },
  { name: "Blackberries", image: "/placeholder.svg?height=50&width=50" },
  { name: "Hazelnuts", image: "/placeholder.svg?height=50&width=50" },
  { name: "Almonds", image: "/placeholder.svg?height=50&width=50" },
  { name: "Walnuts", image: "/placeholder.svg?height=50&width=50" },
  { name: "Chestnuts", image: "/placeholder.svg?height=50&width=50" },
  { name: "Pistachios", image: "/placeholder.svg?height=50&width=50" },
  {
    name: "Grapes (table and wine)",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    name: "Cherry (rootstock and varieties)",
    image: "/placeholder.svg?height=50&width=50",
  },
  { name: "Kiwifruit", image: "/placeholder.svg?height=50&width=50" },
  {
    name: "Apples & Pears (TBA)",
    image: "/placeholder.svg?height=50&width=50",
  },
  { name: "Avocado", image: "/placeholder.svg?height=50&width=50" },
  { name: "Citrus", image: "/placeholder.svg?height=50&width=50" },
  { name: "Superfruits", image: "/placeholder.svg?height=50&width=50" },
  {
    name: "Ornamental plants and bulbs",
    image: "/placeholder.svg?height=50&width=50",
  },
  { name: "Others upon request", image: "/placeholder.svg?height=50&width=50" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Mission Page */}
      <section className="min-h-screen flex flex-col justify-center p-8">
        <div className="max-w-8xl mx-auto w-full">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-2 md:mb-0">Our mission</h2>
            </div>
            <div>
              <p className="text-xl text-gray-600">
                Create a greener, healthier world through selling more plants
              </p>
            </div>
          </div>
          <div className="border-t border-gray-200 my-8"></div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-2 md:mb-0">Our vision</h2>
            </div>
            <div>
              <p className="text-xl text-gray-600">
                Become the global leader in sustainable plant seller
              </p>
            </div>
          </div>
          <div className="border-t border-gray-200 my-8"></div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-2 md:mb-0">Business goal</h2>
            </div>
            <div>
              <p className="text-xl text-gray-600">
                Grow active plant ownership
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Crop Table */}
      <section className="min-h-screen flex flex-col justify-center p-8">
        <div className="max-w-8xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-2">
            Crops Involved with Grupo Hijuelas
          </h2>
          <div className="h-px bg-black mb-8"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {crops.map((crop, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    src={crop.image}
                    alt={crop.name}
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                </div>
                <span className="text-lg text-gray-800">{crop.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Page */}
      <section className="min-h-screen flex flex-col justify-center p-8 bg-black text-white">
        <h2 className="text-4xl font-bold mb-8">METHODOLOGY</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Timeline</h3>
            <p className="text-5xl font-bold mb-2">3</p>
            <p className="text-2xl mb-2">weeks</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Panel size</h3>
            <p className="text-5xl font-bold mb-2">1,000</p>
            <p className="text-2xl mb-2">participants</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Mode</h3>
            <p className="text-5xl font-bold mb-2">20</p>
            <p className="text-2xl mb-2">question survey</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Summary Page */}
      <section className="min-h-screen flex flex-col justify-center p-8">
        <h2 className="text-4xl font-bold mb-8">EXECUTIVE SUMMARY</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Theme 1</h3>
            <p className="mb-4">
              A very important finding that we uncovered. It&apos;s one of the
              biggest takeaways from this report, so we highlight it here.
            </p>
            <p>
              We should reorient our work around this finding, and prioritize
              solving for it in our product roadmap.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Theme 2</h3>
            <p className="mb-4">
              A very important finding that we uncovered. It&apos;s one of the
              biggest takeaways from this report, so we highlight it here.
            </p>
            <p>
              We should reorient our work around this finding, and prioritize
              solving for it in our product roadmap.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Theme 3</h3>
            <p className="mb-4">
              A very important finding that we uncovered. It&apos;s one of the
              biggest takeaways from this report, so we highlight it here.
            </p>
            <p>
              We should reorient our work around this finding, and prioritize
              solving for it in our product roadmap.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
