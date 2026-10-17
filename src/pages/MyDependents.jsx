import React, { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';

const MyDependents = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    month: '',
    day: '',
    year: '',
    relation: '',
    gender: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', form);
  };

  return (
    <DashboardLayout title="MyDependents">

    
      <div className="text-center mb-16 mt-8">
        <h1 className="text-4xl font-bold text-slate-800 mb-3">
          Build Your Profile
        </h1>
        <p className="text-lg text-slate-500">
          This information will let us know more about your Family.
        </p>
      </div>

     
      <div className="flex items-start justify-center max-w-4xl mx-auto mb-16 px-4">

       
        <div className="flex flex-col items-center flex-shrink-0 w-40">
          <div className="w-5 h-5 rounded-full bg-slate-800 mb-3"></div>
          <p className="text-sm font-semibold text-slate-800 text-center leading-tight">
            Dependents Registration
          </p>
        </div>

       
        <div className="flex-1 h-0.5 bg-slate-200 mt-2.5"></div>

        
        <div className="flex flex-col items-center flex-shrink-0 w-40">
          <div className="w-5 h-5 rounded-full bg-slate-200 border-2 border-slate-300 mb-3"></div>
          <p className="text-sm text-slate-400 text-center leading-tight">
            Dependents Health Records
          </p>
        </div>

        
        <div className="flex-1 h-0.5 bg-slate-200 mt-2.5"></div>

        
        <div className="flex flex-col items-center flex-shrink-0 w-40">
          <div className="w-5 h-5 rounded-full bg-slate-200 border-2 border-slate-300 mb-3"></div>
          <p className="text-sm text-slate-400 text-center leading-tight">
            Family Care Plan
          </p>
        </div>

      </div>

    
      <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 max-w-3xl mx-auto">

        <h2 className="text-2xl font-bold text-slate-800 text-center mb-3">
          Let's start with the basic information
        </h2>
        <p className="text-sm text-slate-500 text-center mb-12">
          Let us know With name and last name. contacting you at
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8">

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="flex flex-col">
              <label className="text-sm font-semibold text-slate-800 mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="Eg. Michael"
                className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm text-slate-800 outline-none transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 placeholder:text-slate-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold text-slate-800 mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Eg. Tomson"
                className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm text-slate-800 outline-none transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 placeholder:text-slate-400"
              />
            </div>

          </div>

         
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-slate-800 mb-2">
              Birth Date
            </label>
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-4">

             
              <select
                name="month"
                value={form.month}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm text-slate-800 outline-none transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 bg-white"
              >
                <option value="">February</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>

             
              <select
                name="day"
                value={form.day}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm text-slate-800 outline-none transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 bg-white"
              >
                <option value="">Day</option>
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>

             
              <select
                name="year"
                value={form.year}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm text-slate-800 outline-none transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 bg-white"
              >
                <option value="">Year</option>
                {Array.from({ length: 100 }, (_, i) => {
                  const year = new Date().getFullYear() - i;
                  return <option key={year} value={year}>{year}</option>;
                })}
              </select>

            </div>
          </div>

         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="flex flex-col">
              <label className="text-sm font-semibold text-slate-800 mb-2">
                Relation
              </label>
              <input
                type="text"
                name="relation"
                value={form.relation}
                onChange={handleChange}
                placeholder="Eg. Brother,Child"
                className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm text-slate-800 outline-none transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 placeholder:text-slate-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold text-slate-800 mb-2">
                I'm
              </label>
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm text-slate-800 outline-none transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 bg-white"
              >
                <option value="">Male</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

          </div>

         
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="bg-slate-800 hover:bg-slate-900 text-white px-12 py-3 rounded-lg text-sm font-bold tracking-wider transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              NEXT
            </button>
          </div>

        </form>
      </div>

    </DashboardLayout>
  );
};

export default MyDependents;