import React, { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import MedicineCard from '../components/MedicineCard';
import { medicineCards, medicineTable } from '../data/pharmacies';
import { ChevronDown, ArrowUpDown } from 'lucide-react';

const FindPharmacy = () => {

  const [searchTerm, setSearchTerm] = useState('');
 
  const [entriesPerPage, setEntriesPerPage] = useState(7);

 
  const filteredTable = medicineTable.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.serviceBy.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedTable = filteredTable.slice(0, entriesPerPage);

  return (
    <DashboardLayout title="Pharmacyplace">

      
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h1 className="text-lg font-bold text-gray-800 mb-5">
          Search Pharmacies for Medicines
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {medicineCards.map((item) => (
            <MedicineCard key={item.id} data={item} />
          ))}
        </div>
      </div>
 <div className="bg-white rounded-xl shadow-sm p-6">

     
        <h2 className="text-lg font-bold text-gray-800 mb-6">
          6 Medicine returned for the keyword Esso
        </h2>

       
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
         
          <div className="flex items-center gap-3">
            <div className="relative">
              <select
                value={entriesPerPage}
                onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                className="appearance-none border border-gray-200 rounded-lg px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
              >
                <option value={7}>7</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
              <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            <span className="text-sm text-gray-500">entries per page</span>
          </div>

          <div className="relative w-full md:w-64">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        
        <div className="hidden md:block">

         
          <div className="grid grid-cols-6 gap-4 px-4 py-3 border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase">
            <div className="flex items-center gap-1">
              NAME <ArrowUpDown className="w-3 h-3 text-gray-300" />
            </div>
            <div>CATEGORY</div>
            <div>SERVICE BY</div>
            <div className="flex items-center gap-1">
              DISCOUNT <ArrowUpDown className="w-3 h-3 text-gray-300" />
            </div>
            <div className="flex items-center gap-1">
              PRICE <ArrowUpDown className="w-3 h-3 text-gray-300" />
            </div>
            <div className="flex items-center gap-1">
              ID <ArrowUpDown className="w-3 h-3 text-gray-300" />
               </div>
          </div>

     
          {paginatedTable.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-6 gap-4 px-4 py-4 border-b border-gray-100 items-center text-sm hover:bg-gray-50 transition"
            >
             
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <span className="font-medium text-gray-800">{item.name}</span>
              </div>

              
              <div className="text-gray-500">{item.category}</div>

             
              <div className="flex items-center gap-2">
                <img
                  src={item.serviceLogo}
                  alt={item.serviceBy}
                  className="w-10 h-10 rounded object-cover flex-shrink-0"
                />
                <span className="font-medium text-gray-800">{item.serviceBy}</span>
              </div>

             
              <div className="text-gray-500">{item.discount}</div>

             
              <div className="text-gray-800">{item.price} RM</div>

             
              <div className="text-gray-500">{item.code}</div>
            </div>
          ))}

         
          {paginatedTable.length === 0 && (
            <div className="text-center py-10 text-gray-400 text-sm">
              No results found
            </div>
          )}
        </div>

       
        <div className="text-sm text-gray-400 mt-6 pt-4 border-t border-gray-100">
          Showing 1 to {paginatedTable.length} of {medicineTable.length} entries
        </div>

      </div>

     
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 text-xs text-gray-400">
        <div>
          © 2026, made with ❤️ by <strong className="text-gray-700">MyPiHUB</strong> for a better web.
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-purple-500 transition">MyPatientHUB</a>
          <a href="#" className="hover:text-purple-500 transition">About Us</a>
          <a href="#" className="hover:text-purple-500 transition">Blog</a>
        </div>
      </div>

    </DashboardLayout>
  );
};

export default FindPharmacy;