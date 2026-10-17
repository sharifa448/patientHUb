import React from "react";
import { Search, Settings, Bell, LogOut, Menu, Home } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useNavigate } from "react-router-dom";

const Header = ({ title = "Dashboard", onMenuClick }) => {
  const navigate = useNavigate();
  return (
    <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-4 md:px-6 py-4 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-4">
        <div>
          <div className="flex items-center gap-1 text-xs text-slate-400 mb-0.5">
            <Home className="w-3 h-3" />
            <span>/</span>
            <span>{title}</span>
          </div>
          <h2 className="text-lg font-bold text-slate-800 dark:text-white">
            {title}
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <div className="relative hidden md:block">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Type here..."
            className="pl-10 pr-4 py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 w-48 lg:w-64 placeholder:text-slate-400"
          />
        </div>

        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 text-slate-600 hover:text-purple-500 text-sm font-medium"
        >
          <LogOut className="w-4 h-4" />
          <span className="hidden md:inline">Log out</span>
        </button>

        <ThemeToggle />

        <Settings className="w-5 h-5 text-slate-500 dark:text-slate-400 cursor-pointer hover:text-purple-500 transition" />
        <Bell className="w-5 h-5 text-slate-500 dark:text-slate-400 cursor-pointer hover:text-purple-500 transition" />
      </div>
    </header>
  );
};

export default Header;
