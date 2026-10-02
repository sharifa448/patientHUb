import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, Calendar, Stethoscope, Building2,
  MessageSquare, ShoppingBag, Pill, Users, User,
  Settings, HelpCircle, X
} from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { name: 'Appointments', icon: Calendar, path: '/appointments' },
    { name: 'Find Doctor', icon: Stethoscope, path: '/find-doctor' },
    { name: 'Find Clinic', icon: Building2, path: '/find-clinic' },
    { name: 'Chat', icon: MessageSquare, path: '/chat' },
    { name: 'Find MarketPlace', icon: ShoppingBag, path: '/find-marketplace' },
    { name: 'Find Pharmacy', icon: Pill, path: '/find-pharmacy' },
    { name: 'My Dependents', icon: Users, path: '/my-dependents' },
    { name: 'My Account', icon: User, path: '/my-account' },
    { name: 'Settings', icon: Settings, path: '/settings' },
  ];

  const handleNavigate = (path) => {
    navigate(path);
    if (onClose) onClose();
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          w-64 bg-white h-screen flex flex-col border-r border-gray-200
          fixed left-0 top-0 z-50 transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-800">MyPatientHUB</h1>
              <p className="text-xs text-gray-400">Healthcare Platform</p>
            </div>
          </div>
          <button onClick={onClose} className="lg:hidden text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <button
                key={index}
                onClick={() => handleNavigate(item.path)}
                className={`w-full flex items-center gap-3 px-6 py-3 text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white mx-3 rounded-lg w-[calc(100%-24px)]'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-4">
          <button className="w-full bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-lg p-4 flex items-center justify-center">
            <HelpCircle className="w-6 h-6" />
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;