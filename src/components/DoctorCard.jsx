import React from 'react';
import { MapPin, Phone, Globe } from 'lucide-react';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 mb-4 flex flex-col md:flex-row gap-4 hover:shadow-md transition">
      <img
        src={doctor.avatar}
        alt={doctor.name}
        className="w-24 h-24 rounded-lg object-cover mx-auto md:mx-0"
      />
      <div className="flex-1">
        <h3 className="font-bold text-gray-800 text-lg">{doctor.name}</h3>
        <p className="text-sm text-gray-500">{doctor.specialty}</p>
        <p className="text-xs text-gray-400 mb-3">{doctor.title}</p>
        <div className="space-y-1 text-xs text-gray-500">
          <div className="flex items-start gap-2">
            <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
            <span>{doctor.address}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-3 h-3" />
            <span>{doctor.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-3 h-3" />
            <span>{doctor.language}</span>
          </div>
        </div>
        <button className="mt-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold px-4 py-2 rounded-md hover:opacity-90 transition">
          NEXT AVAILABLE: {doctor.nextAvailable}
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;