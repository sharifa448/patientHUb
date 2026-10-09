import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, Calendar, Stethoscope, Building2,
  MessageSquare, ShoppingBag, Pill, Users, User,
  Settings
} from 'lucide-react';

const Sidebar = ({ isOpen, onClose, isMobile }) => {
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
 
    if (isMobile && onClose) onClose();
  };

  const sidebarClass = isMobile
    ? `w-64 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`
    : `${isOpen ? 'w-64' : 'w-20'}`;

  const showText = isMobile ? isOpen : isOpen;

  return (
    <>
      
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          bg-white h-screen flex flex-col border-r border-gray-200
          fixed left-0 top-0 z-50 transition-all duration-300
          ${sidebarClass}
        `}
      >
       
        <div className={`p-4 border-b border-gray-100 flex items-center ${
          showText ? 'justify-start gap-2' : 'justify-center'
        } h-20`}>
          <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          {showText && (
            <div>
              <h1 className="text-lg font-bold text-gray-800 whitespace-nowrap">MyPatientHUB</h1>
              <p className="text-xs text-gray-400 whitespace-nowrap">Healthcare Platform</p>
            </div>
          )}
        </div>

        
        <nav className="flex-1 overflow-y-auto py-4">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <div key={index} className="relative group">
                <button
                  onClick={() => handleNavigate(item.path)}
                  className={`flex items-center ${
                    showText
                      ? 'gap-3 px-6 w-[calc(100%-16px)] mx-2'
                      : 'justify-center px-3 w-[calc(100%-16px)] mx-2'
                  } py-3 text-sm font-medium transition-all rounded-lg ${
                    isActive
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {showText && <span className="whitespace-nowrap">{item.name}</span>}
                </button>

               
                {!isMobile && !isOpen && (
                  <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-md whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 pointer-events-none shadow-lg">
                    {item.name}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        
        <div className="p-3">
          {showText ? (
            <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-purple-700 rounded-2xl p-4 text-white relative overflow-hidden shadow-lg">
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-white bg-opacity-10 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white bg-opacity-10 rounded-full" />
              <div className="absolute top-3 right-3 w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <span className="text-white text-base font-bold">?</span>
              </div>
              <div className="relative z-10">
                <h4 className="text-lg font-bold mb-0.5">Download</h4>
                <p className="text-xs opacity-90 mb-3">MyPIHUB Mobile App</p>
                <div className="flex gap-2">
                  <button className="bg-black bg-opacity-40 hover:bg-opacity-60 rounded-lg py-2 flex-1 flex items-center justify-center transition">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="white">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                  </button>
                  <button className="bg-black bg-opacity-40 hover:bg-opacity-60 rounded-lg py-2 flex-1 flex items-center justify-center transition">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="white">
                      <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-2.86-1.31-6.08-1.31-8.94 0L5.65 5.67c-.19-.29-.58-.38-.87-.2-.28.18-.37.54-.22.83L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52zM7 15.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <button className="w-full bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl p-3 flex items-center justify-center text-white shadow-lg hover:opacity-90 transition">
              <span className="text-base font-bold">?</span>
            </button>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;