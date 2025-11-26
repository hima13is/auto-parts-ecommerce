"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const { cart } = useCart();  // ⭐ Live cart count

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">

        {/* Brand Logo */}
        <Link href="/">
          <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
            AutoParts
          </h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-gray-600">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/products" className="hover:text-blue-600 transition">
            Products
          </Link>
          <Link href="#" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </nav>

        {/* Cart Button (Desktop) */}
        <Link href="/cart" className="hidden md:block">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
            Cart ({cart.length})
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setOpenMenu(!openMenu)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {openMenu && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-3 border-t">
          <Link
            href="/"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setOpenMenu(false)}
          >
            Home
          </Link>

          <Link
            href="/products"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setOpenMenu(false)}
          >
            Products
          </Link>

          <Link
            href="#"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setOpenMenu(false)}
          >
            Contact
          </Link>

          {/* Cart Button (Mobile) */}
          <Link href="/cart">
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md">
              Cart ({cart.length})
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
