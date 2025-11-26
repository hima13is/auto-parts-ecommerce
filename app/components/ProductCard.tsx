"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";


interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
}

export default function ProductCard({ id, title, price, image }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
      <Link href={`/products/${id}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-lg mb-3"
        />
      </Link>

      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-blue-600 font-bold mt-1">₹{price}</p>

      <button
        onClick={() =>
          addToCart({ id, title, price, image, qty: 1 })
        }
        className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}
