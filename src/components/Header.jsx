import React from 'react';
import { Search, Settings, Bell, LogOut, Menu } from 'lucide-react';

const Header = ({ title = 'Dashboard', onMenuClick }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 md:px-6 py-4 flex items-center justify-between sticky top-0 z-30">
      {/* سمت چپ: دکمه همبرگر + عنوان */}
      <div className="flex items-center gap-4">
        {/* دکمه همبرگر - فقط در موبایل و تبلت نمایش داده می‌شود */}
        <button 
          onClick={onMenuClick}
          className="lg:hidden text-gray-600 hover:text-primary"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div>
          <p className="text-xs text-gray-400">Dashboard</p>
          <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        </div>
      </div>

      {/* سمت راست: جستجو و آیکون‌ها */}
      <div className="flex items-center gap-2 md:gap-4">
        <div className="relative hidden md:block">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Type here..."
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary w-48 lg:w-64"
          />
        </div>
        
        <button className="flex items-center gap-2 text-gray-600 hover:text-primary text-sm font-medium">
          <LogOut className="w-4 h-4" />
          <span className="hidden md:inline">Log out</span>
        </button>
        
        <Settings className="w-5 h-5 text-gray-500 cursor-pointer hover:text-primary" />
        <Bell className="w-5 h-5 text-gray-500 cursor-pointer hover:text-primary" />
      </div>
    </header>
  );
};

export default Header;