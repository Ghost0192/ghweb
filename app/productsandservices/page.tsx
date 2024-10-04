export default function Home() {
  return (
    <main className="p-4 pr-[100px]">
      <h1 className="text-4xl font-bold mb-8">Welcome to Minimap Demo</h1>
      {[...Array(10)].map((_, index) => (
        <section key={index} className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Section {index + 1}</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </section>
      ))}
    </main>
  );
}
