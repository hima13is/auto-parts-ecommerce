interface ProductCardProps {
  title: string;
  price: number;
  image: string;
}

export default function ProductCard({ title, price, image }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />

      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-blue-600 font-bold mt-1">₹{price}</p>

      <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
}
