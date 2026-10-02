import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { Info } from 'lucide-react';
import DonutChart from '../components/DonutChart';
import ChartLegend from '../components/ChartLegend';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const Dashboard = () => {
  const clinicData = [
    { name: 'Klinik Lee Healthcare', value: 19, color: '#d91b8a' },
    { name: 'Klinik Bandar Baru Nilai', value: 4, color: '#3b82f6' },
    { name: 'Klinik Mediviron Giant Nilai', value: 10, color: '#facc15' },
    { name: 'Klinik Nilai Impian', value: 21, color: '#22c55e' },
    { name: 'Klinik Mediviron', value: 2, color: '#1e293b' },
  ];

  const pharmacyData = [
    { name: 'ALPRO PHARMACY NILAI', value: 15, color: '#d91b8a' },
    { name: 'ALPRO PHARMACY PEKAN NILAI', value: 12, color: '#3b82f6' },
    { name: 'OK PHARMACY', value: 5, color: '#22c55e' },
    { name: 'PHARMART PHARMACY NILAI', value: 9, color: '#cbd5e1' },
    { name: 'Health Lane Family Pharmacy', value: 14, color: '#1e3a8a' },
  ];

  const marketData = [
    { name: 'Food Panda', value: 25, color: '#d91b8a' },
    { name: 'Grab Food', value: 3, color: '#3b82f6' },
    { name: 'Zomato', value: 12, color: '#facc15' },
    { name: 'Lazada', value: 7, color: '#22c55e' },
    { name: 'Uber Eats', value: 10, color: '#1e293b' },
  ];

  const healthData = [
    { month: 'Jan', value: 60 },
    { month: 'Feb', value: 65 },
    { month: 'Mar', value: 62 },
    { month: 'Apr', value: 70 },
    { month: 'May', value: 68 },
    { month: 'Jun', value: 75 },
    { month: 'Jul', value: 72 },
    { month: 'Aug', value: 78 },
    { month: 'Sep', value: 74 },
    { month: 'Oct', value: 80 },
    { month: 'Nov', value: 78 },
    { month: 'Dec', value: 100 },
  ];

  return (
    <DashboardLayout title="Dashboard">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Welcome To MyPatientHUB!</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-700">Promotion by Clinics</h3>
            <Info className="w-5 h-5 text-gray-400" />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-1/2"><DonutChart data={clinicData} /></div>
            <div className="w-full md:w-1/2"><ChartLegend items={clinicData} /></div>
          </div>
          <button className="mt-4 bg-slate-500 hover:bg-slate-600 text-white text-sm font-semibold px-6 py-2 rounded-md transition">
            MORE DETAILS
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-700">Promotion by Pharmacies</h3>
            <Info className="w-5 h-5 text-gray-400" />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-1/2"><DonutChart data={pharmacyData} /></div>
            <div className="w-full md:w-1/2"><ChartLegend items={pharmacyData} /></div>
          </div>
          <button className="mt-4 bg-slate-500 hover:bg-slate-600 text-white text-sm font-semibold px-6 py-2 rounded-md transition">
            MORE DETAILS
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-700">Smart Market Usage by app</h3>
            <Info className="w-5 h-5 text-gray-400" />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-1/2"><DonutChart data={marketData} /></div>
            <div className="w-full md:w-1/2"><ChartLegend items={marketData} /></div>
          </div>
          <button className="mt-4 bg-slate-500 hover:bg-slate-600 text-white text-sm font-semibold px-6 py-2 rounded-md transition">
            SEE ALL REFERRALS
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="font-semibold text-gray-700 mb-2">Health Index</h3>
          <p className="text-2xl font-bold text-gray-800 mb-4">
            70% <span className="text-sm text-green-500">+3%</span>
          </p>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={healthData}>
                <XAxis dataKey="month" hide />
                <YAxis hide />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '12px',
                  }}
                  formatter={(value) => [`${value}`, 'Health']}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#1e3a8a"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;