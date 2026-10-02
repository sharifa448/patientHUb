import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import FoodCard from '../components/FoodCard';
import { foodItems, searchResults } from '../data/marketplace';
import { Search } from 'lucide-react';

const FindMarketPlace = () => {
  return (
    <DashboardLayout title="Marketplace">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Search Marketplaces and order what you need
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {foodItems.map((item) => (
          <FoodCard key={item.id} item={item} />
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="font-bold text-gray-800 mb-4">
          Other results for healthy diet search
        </h2>

        <div className="flex flex-wrap gap-3 mb-4">
          <select className="border rounded-lg px-3 py-2 text-sm">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <input
            type="text"
            placeholder="enters zip code"
            className="border rounded-lg px-3 py-2 text-sm flex-1 min-w-[200px]"
          />
          <button className="bg-white border rounded-lg px-4 py-2 text-sm flex items-center gap-2">
            <Search className="w-4 h-4" />
            Search
          </button>
        </div>

        <div className="hidden md:grid grid-cols-7 gap-4 px-4 py-3 bg-gray-50 rounded-lg text-xs text-gray-500 font-semibold mb-2">
          <span className="col-span-2">NAME</span>
          <span>TYPE</span>
          <span>DELIVERED</span>
          <span>POPULARITY</span>
          <span>RATING</span>
          <span>PRICE</span>
        </div>

        {searchResults.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 md:grid-cols-7 gap-4 px-4 py-3 border-b border-gray-100 items-center text-sm"
          >
            <div className="col-span-2 flex items-center gap-3">
              <span className="text-2xl">{item.logo}</span>
              <span className="font-medium text-gray-800">{item.name}</span>
            </div>
            <span className="text-gray-500 text-xs">{item.type}</span>
            <span className="text-gray-500 text-xs">{item.delivered}</span>
            <span className="text-gray-500 text-xs">{item.popularity}</span>
            <span className="text-gray-500 text-xs">{item.rating}</span>
            <span className="font-bold text-gray-800">
              {item.price} RM
              <span className="text-xs text-gray-400 ml-2">{item.code}</span>
            </span>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default FindMarketPlace;