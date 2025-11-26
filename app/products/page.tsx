import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

const productList = [
  {
    id: "1",
    title: "Premium Brake Pads",
    price: 2499,
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952"
  },
  {
    id: "2",
    title: "High-Performance Engine Oil",
    price: 1199,
    image: "https://images.unsplash.com/photo-1581091215367-59ab6b3e7bd2"
  },
  {
    id: "3",
    title: "LED Headlight Bulb",
    price: 899,
    image: "https://images.unsplash.com/photo-1601924638867-3ec2f8f7e603"
  }
];


export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <section className="pt-24 max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8">All Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {productList.map((p, index) => (
            <ProductCard
              key={index}
              title={p.title}
              price={p.price}
              image={p.image}
              id={p.id}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
