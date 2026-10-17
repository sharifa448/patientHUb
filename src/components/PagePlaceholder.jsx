import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';

const PagePlaceholder = ({ title, description, icon: Icon }) => {
  return (
    <DashboardLayout title={title}>
      <div className="flex flex-col items-center justify-center py-20">
        <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
          {Icon && <Icon className="w-10 h-10 text-white" />}
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
        <p className="text-gray-500 text-center max-w-md">{description}</p>
        <div className="mt-8 px-6 py-3 bg-yellow-100 text-yellow-800 rounded-lg text-sm">
          
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PagePlaceholder;