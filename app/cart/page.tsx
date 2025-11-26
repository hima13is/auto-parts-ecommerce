"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();
//fefe
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <section className="pt-24 max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-600 text-lg">Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-6 p-4 bg-white shadow rounded-lg mb-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 rounded"
                />

                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-blue-600 font-bold">₹{item.price}</p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>

                    <span>{item.qty}</span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Subtotal Section */}
            <div className="mt-6 p-4 bg-white shadow rounded-lg text-right">
              <h3 className="text-xl font-semibold">
                Subtotal: ₹{subtotal}
              </h3>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
