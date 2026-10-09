import React from "react";

const MedicineCard = ({ data }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition">

      
      <div className="bg-gray-50 rounded-lg mb-4 flex items-center justify-center py-6">
        <img
          src={data.image}
          alt={data.name}
          className="w-32 h-32 object-contain"
        />
      </div>

      
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-800 text-sm">
          {data.name}
        </h3>
        <span className="text-cyan-500 font-bold text-sm">
          {data.price} RM
        </span>
      </div>

      
      <div className="flex items-center gap-2 mb-2">
        <img
          src={data.logo}
          alt={data.pharmacy}
          className="w-8 h-8 rounded-full object-cover"
        />
        <h4 className="font-bold text-gray-800 text-base">
          {data.pharmacy}
        </h4>
      </div>

      
      <p className="text-xs text-gray-400 mb-4 line-clamp-3 min-h-[48px]">
        {data.description}
      </p>

      
      <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold py-2.5 rounded-md hover:opacity-90 transition">
        BUY NOW
      </button>

    </div>
  );
};

export default MedicineCard;