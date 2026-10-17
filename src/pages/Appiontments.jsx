import React, { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import {
  calendarAppointments,
  monthlyData,
  previousAppointments,
  upcomingAppointments,
  proceduresData,
  treatmentsData,
} from '../data/appointments';
import {
  TrendingUp, Calendar as CalendarIcon, List, Plus, MoreVertical,
  ChevronLeft, ChevronRight,
} from 'lucide-react';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid,
} from 'recharts';

const Appointments = () => {
  const [activeTab, setActiveTab] = useState('appointments');
  const [activeRange, setActiveRange] = useState('days');

  return (
    <DashboardLayout title="Appointment">

      
      <div className="flex justify-center mb-6">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-2 flex gap-2 border border-slate-100 dark:border-slate-700">
          <button
            onClick={() => setActiveTab('appointments')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'appointments'
                ? 'bg-white dark:bg-slate-700 shadow-sm text-purple-600 dark:text-purple-400'
                : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            <CalendarIcon className="w-4 h-4" />
            Appointments
          </button>
          <button
            onClick={() => setActiveTab('booking')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'booking'
                ? 'bg-white dark:bg-slate-700 shadow-sm text-purple-600 dark:text-purple-400'
                : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            <List className="w-4 h-4" />
            New Booking
          </button>
        </div>
      </div>

     
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
        <StatCard title="Procedures Taken" value={30} change="+3" data={proceduresData} />
        <StatCard title="Treatments Taken" value={12} change="+1" data={treatmentsData} />

        <button className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6 flex flex-col items-center justify-center hover:shadow-md transition-all min-h-[180px]">
          <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mb-3">
            <Plus className="w-6 h-6 text-slate-600 dark:text-slate-300" />
          </div>
          <p className="font-bold text-slate-800 dark:text-white text-lg">
            New Appointment
          </p>
        </button>
      </div>

     
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6">
          <CalendarHeader />
          <CalendarGrid />
        </div>

        <div className="lg:col-span-1 space-y-6">
          <BarChartCard data={monthlyData} />

          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6">
            <h3 className="font-bold text-slate-800 dark:text-white mb-5">
              Previous Appointments
            </h3>
            <AppointmentsListInner items={previousAppointments} />
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6">
            <h3 className="font-bold text-slate-800 dark:text-white mb-4">
              Up Coming Appointments
            </h3>
            <div className="bg-cyan-50 dark:bg-slate-700 rounded-xl p-1 flex gap-1 mb-5">
              {['days', 'months', 'years'].map((r) => (
                <button
                  key={r}
                  onClick={() => setActiveRange(r)}
                  className={`flex-1 py-2 rounded-lg text-xs font-semibold capitalize ${
                    activeRange === r
                      ? 'bg-white dark:bg-slate-800 shadow-sm text-slate-800 dark:text-white'
                      : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
            <AppointmentsListInner items={upcomingAppointments} />
          </div>
        </div>
      </div>

    </DashboardLayout>
  );
};

const StatCard = ({ title, value, change, data }) => (
  <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6">
    <div className="flex justify-between items-center mb-3">
      <p className="text-slate-500 dark:text-slate-400 text-sm">{title}</p>
      <TrendingUp className="w-4 h-4 text-slate-400" />
    </div>
    <div className="flex items-baseline gap-2 mb-4">
      <span className="text-3xl font-bold text-slate-800 dark:text-white">{value}</span>
      <span className="text-sm font-bold text-green-500">{change}</span>
    </div>
    <div className="h-24 -mx-2">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Tooltip
            contentStyle={{
              backgroundColor: '#1e293b',
              border: 'none',
              borderRadius: '8px',
              color: '#fff',
              fontSize: '12px',
            }}
          />
          <Line type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const CalendarHeader = () => (
  <div className="flex justify-between items-center mb-6">
    <h3 className="text-xl font-bold text-slate-800 dark:text-white">April 2022</h3>
    <div className="flex gap-2">
      <button className="px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300">
        today
      </button>
      <button className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg">
        <ChevronLeft className="w-4 h-4 text-slate-700 dark:text-slate-300" />
      </button>
      <button className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg">
        <ChevronRight className="w-4 h-4 text-slate-700 dark:text-slate-300" />
      </button>
    </div>
  </div>
);

const CalendarGrid = () => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const daysInMonth = 30;
  const startOffset = 5;

  const days = [];
  for (let i = 0; i < startOffset; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  return (
    <div>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {daysOfWeek.map((d) => (
          <div key={d} className="text-center text-xs font-bold text-slate-400 py-2">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <div
            key={index}
            className={`min-h-[80px] p-2 border-t border-slate-100 dark:border-slate-700 ${
              day ? 'hover:bg-slate-50 dark:hover:bg-slate-700/50' : ''
            } transition`}
          >
            {day && (
              <>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">{day}</p>
                <div className="space-y-1">
                  {calendarAppointments[day]?.map((apt, i) => (
                    <div
                      key={i}
                      className="text-[10px] text-white font-semibold px-2 py-1 rounded truncate"
                      style={{ backgroundColor: apt.color }}
                    >
                      {apt.label}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


const BarChartCard = ({ data }) => (
  <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6">
    <div className="flex justify-between items-center mb-5">
      <h3 className="font-bold text-slate-800 dark:text-white">Appointment</h3>
      <button className="text-slate-400">
        <List className="w-4 h-4" />
      </button>
    </div>

    <div className="h-56">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barSize={12}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis dataKey="month" tick={{ fontSize: 10 }} stroke="#94a3b8" />
          <YAxis tick={{ fontSize: 10 }} stroke="#94a3b8" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1e293b',
              border: 'none',
              borderRadius: '8px',
              color: '#fff',
              fontSize: '12px',
            }}
          />
          <Bar dataKey="emergency" stackId="a" fill="#3b82f6" />
          <Bar dataKey="examination" stackId="a" fill="#22c55e" />
          <Bar dataKey="consultation" stackId="a" fill="#f59e0b" />
          <Bar dataKey="routine" stackId="a" fill="#ef4444" />
        </BarChart>
      </ResponsiveContainer>
    </div>

    <div className="mt-4 space-y-2 text-xs">
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded bg-blue-500"></span>
        <span className="text-slate-600 dark:text-slate-300">Emergency</span>
        <span className="w-3 h-3 rounded bg-green-500 ml-4"></span>
        <span className="text-slate-600 dark:text-slate-300">Examination</span>
      </div>
      <div className="flex items-center gap-2 ml-6">
        <span className="w-3 h-3 rounded bg-amber-500"></span>
        <span className="text-slate-600 dark:text-slate-300">Consultation</span>
      </div>
      <div className="flex items-center gap-2 ml-6">
        <span className="w-3 h-3 rounded bg-red-500"></span>
        <span className="text-slate-600 dark:text-slate-300">Routine Checkup</span>
      </div>
    </div>
  </div>
);


const AppointmentsListInner = ({ items }) => (
  <div className="space-y-4">
    {items.map((apt) => (
      <div key={apt.id} className="flex items-center gap-3">
        <img
          src={apt.avatar}
          alt={apt.name}
          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-slate-800 dark:text-white text-sm truncate">
            {apt.name}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 truncate capitalize">
            {apt.type}
          </p>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 text-right whitespace-pre-line flex-shrink-0">
          {apt.date}
        </p>
        <button className="text-slate-400 p-1">
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>
    ))}
  </div>
);

export default Appointments;
