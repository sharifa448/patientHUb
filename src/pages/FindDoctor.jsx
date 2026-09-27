import React, { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import DoctorCard from '../components/DoctorCard';
import { doctorsData, specialties } from '../data/doctors';
import { Search, Map, List } from 'lucide-react';

const FindDoctor = () => {
  const [viewMode, setViewMode] = useState('list');

  return (
    <DashboardLayout title="Find a Doctor">
      <div className="bg-gradient-to-br from-purple-700 via-purple-500 to-pink-500 rounded-xl p-8 mb-6 text-white">
        <h1 className="text-3xl font-bold text-center mb-2">Find a Doctor</h1>
        <p className="text-center text-sm opacity-90 mb-6">
          Search Doctors and schedule an appointment
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-3xl mx-auto">
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search a doctor by name, specialty"
              className="w-full pl-10 pr-3 py-2 rounded-lg text-sm text-gray-800 focus:outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="Zip Code or Neighborhood"
            className="px-3 py-2 rounded-lg text-sm text-gray-800 focus:outline-none"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg text-sm transition">
            SEARCH
          </button>
        </div>
      </div>

      <div className="flex justify-center gap-2 mb-6">
        <button
          onClick={() => setViewMode('map')}
          className={`flex items-center gap-2 px-6 py-2 rounded-lg font-semibold text-sm transition ${
            viewMode === 'map'
              ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
              : 'bg-white text-gray-600 border'
          }`}
        >
          <Map className="w-4 h-4" />
          Map
        </button>
        <button
          onClick={() => setViewMode('list')}
          className={`flex items-center gap-2 px-6 py-2 rounded-lg font-semibold text-sm transition ${
            viewMode === 'list'
              ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
              : 'bg-white text-gray-600 border'
          }`}
        >
          <List className="w-4 h-4" />
          List
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <aside className="lg:col-span-1 bg-white rounded-xl shadow-sm p-5 h-fit">
          <h3 className="font-bold text-gray-700 mb-4">Filter By</h3>
          <div className="space-y-3">
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Specialty</label>
              <select className="w-full border rounded-lg p-2 text-sm">
                <option>All</option>
                {specialties.map((s, i) => (<option key={i}>{s}</option>))}
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Gender</label>
              <select className="w-full border rounded-lg p-2 text-sm">
                <option>All</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Condition</label>
              <select className="w-full border rounded-lg p-2 text-sm">
                <option>All</option>
                <option>Heart</option>
                <option>Diabetes</option>
              </select>
            </div>
          </div>
        </aside>

        <div className="lg:col-span-3">
          {viewMode === 'list' ? (
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">Sort By</span>
                <div className="flex gap-2">
                  <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold px-3 py-1.5 rounded-md">
                    NEXT AVAILABLE
                  </button>
                  <button className="bg-white border text-gray-600 text-xs font-bold px-3 py-1.5 rounded-md">
                    DISTANCE
                  </button>
                </div>
              </div>
              {doctorsData.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm p-6 h-96 flex items-center justify-center">
              <p className="text-gray-400">🗺️ نقشه به زودی اینجا قرار می‌گیرد</p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FindDoctor;
