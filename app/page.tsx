import ProductCard from "./components/ProductCard";
import Header from "./components/Header";
import Footer from "./components/Footer";

const sampleProducts = [
  {
    title: "Premium Brake Pads",
    price: 2499,
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952"
  },
  {
    title: "High-Performance Engine Oil",
    price: 1199,
    image: "https://images.unsplash.com/photo-1581091215367-59ab6b3e7bd2"
  },
  {
    title: "LED Headlight Bulb",
    price: 899,
    image: "https://images.unsplash.com/photo-1601924638867-3ec2f8f7e603"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header Component */}
      <Header />

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

      {/* Featured Products Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold mb-6">Featured Products</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sampleProducts.map((p, index) => (
            <ProductCard
              key={index}
              title={p.title}
              price={p.price}
              image={p.image}
            />
          ))}
        </div>
      </section>

      {/* Footer Component */}
      <Footer />

    </main>
  );
}
