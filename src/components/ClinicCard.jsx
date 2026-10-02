import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const ClinicCard = ({ clinic }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 mb-4 flex flex-col md:flex-row gap-4 hover:shadow-md transition">
      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
        <span className="text-white font-bold text-2xl">K</span>
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-gray-800 text-lg">{clinic.name}</h3>
        <p className="text-xs text-purple-600 mb-2">{clinic.type}</p>
        <div className="space-y-1 text-xs text-gray-500">
          <div className="flex items-start gap-2">
            <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
            <span>{clinic.address}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-3 h-3" />
            <span>{clinic.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3 h-3" />
            <span>Open 9:00 AM - 9:00 PM</span>
          </div>
        </div>
        <button className="mt-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold px-4 py-2 rounded-md hover:opacity-90 transition">
          BOOK APPOINTMENT
        </button>
      </div>
    </div>
  );
};

export default ClinicCard;