import React, { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import {
  User, List, Lock, Shield, Monitor, Trash2,
  Camera, Smartphone, Check, X
} from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const menuItems = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'basic', name: 'Basic Info', icon: List },
    { id: 'password', name: 'Change Password', icon: Lock },
    { id: '2fa', name: '2FA', icon: Shield },
    { id: 'sessions', name: 'Sessions', icon: Monitor },
    { id: 'delete', name: 'Delete Account', icon: Trash2 },
  ];

  return (
    <DashboardLayout title="Settings">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        
        <aside className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm p-3 sticky top-24">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl mb-1 transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-sm'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        </aside>

       
        <div className="lg:col-span-3">

      
          {activeTab === 'profile' && (
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-6">Profile</h2>

              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="relative">
                  <img
                    src="https://i.pravatar.cc/150?img=12"
                    alt="Azam Shah"
                    className="w-28 h-28 rounded-2xl object-cover"
                  />
                  <button className="absolute -bottom-2 -right-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white p-2.5 rounded-full shadow-lg hover:opacity-90 transition">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-slate-800 mb-1">
                    Azam Shah
                  </h3>
                  <p className="text-slate-500 mb-4">Patient</p>

                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <span className="text-sm text-slate-600">
                      Switch to invisible
                    </span>
                    <button className="relative w-12 h-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full transition">
                      <span className="absolute top-0.5 right-0.5 w-5 h-5 bg-white rounded-full"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

        
          {activeTab === 'basic' && (
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-6">Basic Info</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Alec"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Thompson"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    I'm
                  </label>
                  <select className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm outline-none focus:border-purple-500 bg-white">
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Birth Date
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <select className="px-3 py-3 border border-slate-200 rounded-xl text-sm bg-white">
                      <option>February</option>
                    </select>
                    <select className="px-3 py-3 border border-slate-200 rounded-xl text-sm bg-white">
                      <option>1</option>
                    </select>
                    <select className="px-3 py-3 border border-slate-200 rounded-xl text-sm bg-white">
                      <option>2021</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Blood Group
                  </label>
                  <input
                    type="text"
                    placeholder="A+"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Your Location
                  </label>
                  <input
                    type="text"
                    placeholder="Sydney, A"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="+40 735 631 620"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Height
                  </label>
                  <input
                    type="text"
                    placeholder="Height"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Weight
                  </label>
                  <input
                    type="text"
                    placeholder="Weight"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="flex justify-end mt-6 pt-6 border-t border-slate-100">
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-xl text-sm font-bold hover:opacity-90 transition">
                  SAVE CHANGES
                </button>
              </div>
            </div>
          )}

          
          {activeTab === 'password' && (
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-6">
                Change Password
              </h2>

              <div className="space-y-5 max-w-lg">
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Current Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter current password"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm outline-none focus:border-purple-500 placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter new password"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm outline-none focus:border-purple-500 placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm outline-none focus:border-purple-500 placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="mt-8 p-5 bg-slate-50 rounded-xl">
                <h3 className="text-base font-bold text-slate-800 mb-3">
                  Password requirements
                </h3>
                <p className="text-sm text-slate-500 mb-4">
                  Please follow this guide for a strong password
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    One special character
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Min 6 characters
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    One number (2 recommended)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Change it often
                  </li>
                </ul>
              </div>

              <div className="flex justify-end mt-6">
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-xl text-sm font-bold hover:opacity-90 transition">
                  UPDATE PASSWORD
                </button>
              </div>
            </div>
          )}

        
          {activeTab === '2fa' && (
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-slate-800">
                  Two-factor authentication
                </h2>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                  ENABLED
                </span>
              </div>

              <div className="divide-y divide-slate-100">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 py-5">
                  <div>
                    <p className="font-semibold text-slate-800">Security keys</p>
                    <p className="text-sm text-slate-500">
                      No Security keys
                    </p>
                  </div>
                  <button className="border border-slate-300 hover:border-purple-500 hover:text-purple-500 px-5 py-2.5 rounded-xl text-sm font-semibold transition">
                    ADD
                  </button>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 py-5">
                  <div>
                    <p className="font-semibold text-slate-800">SMS number</p>
                    <p className="text-sm text-slate-500">+3012374423</p>
                  </div>
                  <button className="border border-slate-300 hover:border-purple-500 hover:text-purple-500 px-5 py-2.5 rounded-xl text-sm font-semibold transition">
                    EDIT
                  </button>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 py-5">
                  <div>
                    <p className="font-semibold text-slate-800">
                      Authenticator app
                    </p>
                    <p className="text-sm text-slate-500">Not Configured</p>
                  </div>
                  <button className="border border-slate-300 hover:border-purple-500 hover:text-purple-500 px-5 py-2.5 rounded-xl text-sm font-semibold transition">
                    SET UP
                  </button>
                </div>
              </div>
            </div>
          )}

          
          {activeTab === 'sessions' && (
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-2">Sessions</h2>
              <p className="text-sm text-slate-500 mb-6">
                This is a list of devices that have logged into your account.
                Remove those that you do not recognize.
              </p>

              <div className="space-y-3">
                <SessionItem
                  icon={<Monitor className="w-5 h-5" />}
                  device="Bucharest 68.133.163.201"
                  detail="Your current session"
                  country="EU"
                  active
                />
                <SessionItem
                  icon={<Monitor className="w-5 h-5" />}
                  device="Chrome on macOS"
                  country="US"
                />
                <SessionItem
                  icon={<Smartphone className="w-5 h-5" />}
                  device="Safari on iPhone"
                  country="US"
                />
              </div>
            </div>
          )}

          {activeTab === 'delete' && (
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-2">
                Delete Account
              </h2>
              <p className="text-sm text-slate-500 mb-6">
                Once you delete your account, there is no going back. Please be
                certain.
              </p>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded border-slate-300 accent-pink-500"
                  />
                  <div>
                    <p className="font-semibold text-slate-800">Confirm</p>
                    <p className="text-sm text-slate-500">
                      I want to delete my account.
                    </p>
                  </div>
                </label>

                <div className="flex gap-3">
                  <button className="border border-slate-300 hover:bg-slate-50 px-6 py-3 rounded-xl text-sm font-bold transition">
                    DEACTIVATE
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl text-sm font-bold transition">
                    DELETE ACCOUNT
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};


const SessionItem = ({ icon, device, detail, country, active }) => (
  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-slate-600 flex-shrink-0">
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <p className="font-semibold text-slate-800 text-sm truncate">{device}</p>
      {detail && <p className="text-xs text-slate-500">{detail}</p>}
    </div>
    {active && (
      <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
        ACTIVE
      </span>
    )}
    <span className="text-sm text-slate-500">{country}</span>
    <button className="text-cyan-500 text-sm font-medium hover:underline">
      See more →
    </button>
  </div>
);

export default Settings;