"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useCart } from "../../context/CartContext";

interface ProductPageProps {
  params: { id: string };
}

const allProducts = [
  {
    id: "1",
    title: "Premium Brake Pads",
    price: 2499,
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
    description:
      "High-performance brake pads suitable for most vehicles. Ensures smooth braking and long-lasting durability."
  },
  {
    id: "2",
    title: "High-Performance Engine Oil",
    price: 1199,
    image: "https://images.unsplash.com/photo-1581091215367-59ab6b3e7bd2",
    description:
      "Fully synthetic engine oil for superior lubrication and engine protection."
  },
  {
    id: "3",
    title: "LED Headlight Bulb",
    price: 899,
    image: "https://images.unsplash.com/photo-1601924638867-3ec2f8f7e603",
    description:
      "Bright white LED headlight bulb with high illumination and long lifespan."
  }
];

export default function ProductPage({ params }: ProductPageProps) {
  const { addToCart } = useCart();   // ✅ Cart Function Available
  const product = allProducts.find((p) => p.id === params.id);

  if (!product) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-24 p-10 text-center text-xl">Product not found.</div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <section className="pt-24 max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full rounded-lg shadow"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-2xl text-blue-600 font-semibold mb-6">
            ₹{product.price}
          </p>

          <p className="text-gray-700 mb-8">{product.description}</p>

          {/* ⭐ Add to Cart Button (Working) */}
          <button
            onClick={() =>
              addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                qty: 1
              })
            }
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>

      </section>

      <Footer />
    </main>
  );
}
