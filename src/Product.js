import React from "react";

function Product({ imgUrl, title, category, rating, price }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300">
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-100 object-cover rounded-md mb-3"
      />
      <h3 className="text-gray-500 font-semibold">{title}</h3>
      <p className="font-bold">{category}</p>
      <div className="text-yellow-500 text-sm">{"⭐".repeat(rating)}</div>
      <p className="text-blue-600 font-bold mt-2">${price}</p>
    </div>
  );
}

export default Product;
