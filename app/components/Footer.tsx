export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">AutoParts</h3>
          <p>Your trusted partner for premium automotive parts.</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">Home</a></li>
            <li><a href="#" className="hover:text-blue-400">Products</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Contact Us</h4>
          <p>Email: support@autoparts.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} AutoParts. All rights reserved.
      </div>
    </footer>
  );
}
