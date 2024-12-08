import React from "react";

const BestsellerProducts = () => {
  const products = [
    {
      id: 1,
      img: "https://source.unsplash.com/300x400/?woman",
      name: "Graphic Design",
      dept: "English Department",
      oldPrice: "$16.54",
      newPrice: "$6.48",
    },
    {
      id: 2,
      img: "https://source.unsplash.com/300x400/?man",
      name: "Graphic Design",
      dept: "English Department",
      oldPrice: "$16.54",
      newPrice: "$6.48",
    },
    {
      id: 3,
      img: "https://source.unsplash.com/300x400/?fashion",
      name: "Graphic Design",
      dept: "English Department",
      oldPrice: "$16.54",
      newPrice: "$6.48",
    },
    {
      id: 4,
      img: "https://source.unsplash.com/300x400/?jacket",
      name: "Graphic Design",
      dept: "English Department",
      oldPrice: "$16.54",
      newPrice: "$6.48",
    },
    {
      id: 5,
      img: "https://source.unsplash.com/300x400/?coat",
      name: "Graphic Design",
      dept: "English Department",
      oldPrice: "$16.54",
      newPrice: "$6.48",
    },
    {
      id: 6,
      img: "https://source.unsplash.com/300x400/?clothing",
      name: "Graphic Design",
      dept: "English Department",
      oldPrice: "$16.54",
      newPrice: "$6.48",
    },
    {
      id: 7,
      img: "https://source.unsplash.com/300x400/?hoodie",
      name: "Graphic Design",
      dept: "English Department",
      oldPrice: "$16.54",
      newPrice: "$6.48",
    },
    {
      id: 8,
      img: "https://source.unsplash.com/300x400/?tshirt",
      name: "Graphic Design",
      dept: "English Department",
      oldPrice: "$16.54",
      newPrice: "$6.48",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-gray-50 py-8">
      <h2 className="text-xl text-gray-800 uppercase">Featured Products</h2>
      <h1 className="text-2xl font-bold text-gray-800 mt-2">
        BESTSELLER PRODUCTS
      </h1>
      <p className="text-sm text-gray-500 mt-2">
        Problems trying to resolve the conflict between
      </p>

      <div className="grid grid-cols-4 gap-6 mt-8 max-w-6xl">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden p-4 hover:shadow-lg"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-56 object-cover rounded-md"
            />
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500">{product.dept}</p>
              <div className="flex items-center mt-2">
                <span className="text-sm line-through text-gray-400">
                  {product.oldPrice}
                </span>
                <span className="ml-2 text-lg font-semibold text-gray-800">
                  {product.newPrice}
                </span>
              </div>
              <div className="flex items-center mt-2 space-x-2">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`w-3 h-3 rounded-full ${
                      i === 0 ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestsellerProducts;
