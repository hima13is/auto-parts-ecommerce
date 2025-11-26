"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function CheckoutPage() {
  const { cart } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const deliveryCharge = subtotal > 0 ? 99 : 0;
  const totalAmount = subtotal + deliveryCharge;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pin: "",
  });

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function placeOrder() {
    if (!form.name || !form.phone || !form.address) {
      alert("Please fill required details (Name, Phone, Address)");
      return;
    }

    alert("Order placed successfully! (Dummy Step for Now)");
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <section className="pt-24 max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left: Customer Info */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-6">Shipping Details</h2>

          <div className="space-y-4">
            <input
              className="w-full border p-3 rounded"
              placeholder="Full Name *"
              name="name"
              onChange={handleChange}
            />

            <input
              className="w-full border p-3 rounded"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />

            <input
              className="w-full border p-3 rounded"
              placeholder="Mobile Number *"
              name="phone"
              onChange={handleChange}
            />

            <textarea
              className="w-full border p-3 rounded"
              placeholder="Full Address *"
              name="address"
              rows={3}
              onChange={handleChange}
            />

            <input
              className="w-full border p-3 rounded"
              placeholder="City"
              name="city"
              onChange={handleChange}
            />

            <input
              className="w-full border p-3 rounded"
              placeholder="State"
              name="state"
              onChange={handleChange}
            />

            <input
              className="w-full border p-3 rounded"
              placeholder="PIN Code"
              name="pin"
              onChange={handleChange}
            />

            {/* Payment Method - COD */}
            <div className="mt-4">
              <label className="font-semibold">Payment Method</label>
              <div className="mt-2 flex items-center gap-3">
                <input type="radio" checked readOnly />
                <span>Cash on Delivery (COD)</span>
              </div>
            </div>

            <button
              onClick={placeOrder}
              className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 hover:bg-blue-700"
            >
              Place Order
            </button>
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

          {cart.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between border-b py-3"
                >
                  <span>{item.title} (x{item.qty})</span>
                  <span>₹{item.price * item.qty}</span>
                </div>
              ))}

              <div className="flex justify-between pt-3 font-semibold">
                <span>Subtotal:</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="flex justify-between pt-1 font-semibold">
                <span>Delivery Charge:</span>
                <span>₹{deliveryCharge}</span>
              </div>

              <div className="flex justify-between pt-3 text-xl font-bold">
                <span>Total:</span>
                <span>₹{totalAmount}</span>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
