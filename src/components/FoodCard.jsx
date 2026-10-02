import React from 'react';

const FoodCard = ({ item }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition">
      <div className="relative mb-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-40 object-cover rounded-lg"
        />
      </div>
      <div className="flex items-center gap-2 mb-2">
        <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
          <img src={item.logo} alt={item.name} className="w-full h-full object-cover" />
        </div>
        <h3 className="font-bold text-gray-800 text-sm">{item.name}</h3>
      </div>
      <p className="text-xs text-gray-400 mb-3 line-clamp-2">
        {item.description}
      </p>
      <div className="flex items-center justify-between">
        <button className="bg-pink-500 hover:bg-pink-600 text-white text-xs font-bold px-4 py-1.5 rounded-md transition">
          BUY NOW
        </button>
        <span className="font-bold text-gray-800 text-sm">{item.price} RM</span>
      </div>
    </div>
  );
};

export default FoodCard;