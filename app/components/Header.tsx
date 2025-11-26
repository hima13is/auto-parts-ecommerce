"use client";

import { useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">

        {/* Brand Logo */}
        <h1 className="text-2xl font-bold text-blue-600">AutoParts</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-gray-600">
          <a href="#" className="hover:text-blue-600 transition">Home</a>
          <a href="/products" className="hover:text-blue-600">Products</a>
          <a href="#" className="hover:text-blue-600 transition">Contact</a>
        </nav>

        {/* Cart Button */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hidden md:block">
          Cart (0)
        </button>

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
          <a href="#" className="block text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Products</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Contact</a>
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md">
            Cart (0)
          </button>
        </div>
      )}
    </header>
  );
}
