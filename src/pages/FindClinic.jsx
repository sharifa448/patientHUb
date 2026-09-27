import React, { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import ClinicCard from '../components/ClinicCard';
import MapView from '../components/MapView';
import { clinicsData } from '../data/clinics';
import { Search, Map, List } from 'lucide-react';

const FindClinic = () => {
  const [viewMode, setViewMode] = useState('map');

  return (
    <DashboardLayout title="Find a Clinic">
      {/* هدر گرادیان */}
      <div className="bg-gradient-to-br from-purple-700 via-purple-500 to-pink-500 rounded-xl p-8 mb-6 text-white">
        <h1 className="text-3xl font-bold text-center mb-2">Find a Clinic</h1>
        <p className="text-center text-sm opacity-90 mb-6">
          Search Clinics and schedule an appointment with doctors through Clinic
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-3xl mx-auto">
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Clinic name"
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

      {/* تب‌های Map/List */}
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

      {/* محتوای اصلی */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* سایدبار فیلترها */}
        <aside className="lg:col-span-1 bg-white rounded-xl shadow-sm p-5 h-fit">
          <h3 className="font-bold text-gray-700 mb-4">Filter By</h3>

          <div className="space-y-3">
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Primary Care</label>
              <select className="w-full border rounded-lg p-2 text-sm">
                <option>All</option>
                <option>General</option>
                <option>Specialist</option>
              </select>
            </div>

            <div>
              <label className="text-xs text-gray-500 mb-1 block">Specialty</label>
              <select className="w-full border rounded-lg p-2 text-sm">
                <option>All</option>
                <option>Cardiology</option>
                <option>Dermatology</option>
                <option>Pediatrics</option>
                <option>Neurology</option>
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

            <div>
              <label className="text-xs text-gray-500 mb-1 block">Languages</label>
              <select className="w-full border rounded-lg p-2 text-sm">
                <option>All</option>
                <option>English</option>
                <option>Malay</option>
                <option>Chinese</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Providers Who Treat</h4>
            <div className="space-y-1 text-sm">
              <label className="flex items-center gap-2"><input type="checkbox" /> All Ages</label>
              <label className="flex items-center gap-2"><input type="checkbox" /> Children</label>
              <label className="flex items-center gap-2"><input type="checkbox" /> Adults</label>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">View Only</h4>
            <div className="space-y-1 text-sm">
              <label className="flex items-center gap-2"><input type="checkbox" /> Online Scheduling</label>
              <label className="flex items-center gap-2"><input type="checkbox" /> Primary Care</label>
            </div>
          </div>
        </aside>

        {/* نقشه یا لیست */}
        <div className="lg:col-span-3">
          {viewMode === 'map' ? (
            <MapView clinics={clinicsData} />
          ) : (
            <div>
              {clinicsData.map((clinic) => (
                <ClinicCard key={clinic.id} clinic={clinic} />
              ))}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FindClinic;