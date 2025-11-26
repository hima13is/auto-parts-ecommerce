export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">
          <h1 className="text-2xl font-bold text-blue-600">AutoParts</h1>

          <nav className="hidden md:flex gap-6 text-gray-600">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600">Products</a>
            <a href="#" className="hover:text-blue-600">Contact</a>
          </nav>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
            Cart (0)
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            Premium Automotive Parts Delivered Fast
          </h2>
          <p className="text-lg mb-6">
            High-quality parts for all vehicles. Trusted by thousands of mechanics.
          </p>

          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow">
            Shop Now
          </button>
        </div>
      </section>

      {/* Featured Products placeholder */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold mb-4">Featured Products</h3>
        <p className="text-gray-600">
          Product listings will appear here soon.
        </p>
      </section>
    </main>
  );
}
