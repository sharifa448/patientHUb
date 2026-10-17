import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { Wifi, Plus, Pencil, Trash2, FileText, ArrowUp, ArrowDown, Calendar, AlertCircle, Building2, Wallet, CreditCard } from 'lucide-react';

const MyAccount = () => {
  return (
    <DashboardLayout title="Myaccount">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

        
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-5">

          <div className="md:col-span-2 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-2xl p-6 text-white relative overflow-hidden shadow-xl">
            
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full"></div>
            <div className="absolute -bottom-16 -left-16 w-52 h-52 bg-white/5 rounded-full"></div>

            <div className="relative z-10">
             
              <div className="mb-8">
                <Wifi className="w-6 h-6" />
              </div>

              
              <p className="text-xl md:text-2xl font-mono tracking-wider mb-8">
                4562 1122 4594 7852
              </p>

              
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs text-white/60 mb-1">Card Holder</p>
                  <p className="font-semibold text-sm">Jack Peterson</p>
                </div>
                <div>
                  <p className="text-xs text-white/60 mb-1">Expires</p>
                  <p className="font-semibold text-sm">11/22</p>
                </div>
               
                <div className="flex -space-x-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full opacity-90"></div>
                  <div className="w-8 h-8 bg-yellow-500 rounded-full opacity-90"></div>
                </div>
              </div>
            </div>
          </div>

         
          <div className="bg-white rounded-2xl shadow-sm p-5 flex flex-col justify-between">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-slate-800 font-semibold mb-1">Account Balance</p>
              <p className="text-xs text-slate-500 mb-4">Payments</p>
              <p className="text-2xl font-bold text-slate-800">+$2000</p>
            </div>
          </div>

         
          <div className="bg-white rounded-2xl shadow-sm p-5 flex flex-col justify-between">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-slate-800 font-semibold mb-1">Wallet Bank Card</p>
              <p className="text-xs text-slate-500 mb-4">Payments</p>
              <p className="text-2xl font-bold text-slate-800">$455.00</p>
            </div>
          </div>
        </div>

        {/* ============ ستون راست - Invoices ============ */}
        <div className="lg:col-span-1 bg-white rounded-2xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800">Invoices</h3>
            <button className="text-cyan-500 text-xs font-bold border border-cyan-500 px-3 py-1.5 rounded-lg hover:bg-cyan-50 transition">
              VIEW ALL
            </button>
          </div>

          <div className="space-y-5">
            {[
              { date: 'March, 01, 2020', code: '#MS-415646', price: '$180' },
              { date: 'February, 10, 2021', code: '#RV-126749', price: '$250' },
              { date: 'April, 05, 2020', code: '#QW-103578', price: '$120' },
              { date: 'June, 25, 2019', code: '#MS-415646', price: '$180' },
              { date: 'March, 01, 2019', code: '#AR-803481', price: '$300' },
            ].map((inv, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-800">{inv.date}</p>
                  <p className="text-xs text-slate-400">{inv.code}</p>
                </div>
                <span className="text-sm text-slate-700">{inv.price}</span>
                <button className="flex items-center gap-1 text-slate-700 hover:text-purple-500 transition">
                  <FileText className="w-4 h-4" />
                  <span className="text-xs font-bold">PDF</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-slate-800">Payment Method</h3>
          <button className="bg-slate-800 hover:bg-slate-900 text-white px-4 py-2.5 rounded-lg text-xs font-bold flex items-center gap-2 transition">
            <Plus className="w-4 h-4" />
            ADD NEW CARD
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
     
          <div className="border border-slate-200 rounded-xl p-4 flex items-center gap-4 hover:shadow-sm transition">
            <div className="flex -space-x-3">
              <div className="w-7 h-7 bg-red-500 rounded-full"></div>
              <div className="w-7 h-7 bg-yellow-500 rounded-full"></div>
            </div>
            <div className="flex-1">
              <p className="text-sm text-slate-500 tracking-wider">**** **** **** 7852</p>
            </div>
            <button className="text-slate-500 hover:text-purple-500 transition">
              <Pencil className="w-4 h-4" />
            </button>
          </div>

        
          <div className="border border-slate-200 rounded-xl p-4 flex items-center gap-4 hover:shadow-sm transition">
            <span className="text-blue-700 font-bold italic text-lg">VISA</span>
            <div className="flex-1">
              <p className="text-sm text-slate-500 tracking-wider">**** **** **** 5248</p>
            </div>
            <button className="text-slate-500 hover:text-purple-500 transition">
              <Pencil className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

     
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="font-bold text-slate-800 mb-6">Billing Information</h3>

          <div className="space-y-4">
            {[
              {
                name: 'Oliver Liam',
                company: 'Viking Burrito',
                email: 'oliver@burrito.com',
                vat: 'FRB1235476',
              },
              {
                name: 'Lucas Harper',
                company: 'Stone Tech Zone',
                email: 'lucas@stone-tech.com',
                vat: 'FRB1235476',
              },
              {
                name: 'Ethan James',
                company: 'Fiber Notion',
                email: 'ethan@fiber.com',
                vat: 'FRB1235476',
              },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-4">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-slate-800">{item.name}</h4>
                  <div className="flex gap-3">
                    <button className="flex items-center gap-1 text-red-500 text-xs font-bold hover:text-red-600 transition">
                      <Trash2 className="w-3.5 h-3.5" />
                      DELETE
                    </button>
                    <button className="flex items-center gap-1 text-slate-700 text-xs font-bold hover:text-purple-500 transition">
                      <Pencil className="w-3.5 h-3.5" />
                      EDIT
                    </button>
                  </div>
                </div>
                <div className="space-y-1.5 text-xs">
                  <p className="text-slate-500">
                    Company Name: <span className="text-slate-800 font-medium ml-1">{item.company}</span>
                  </p>
                  <p className="text-slate-500">
                    Email Address: <span className="text-slate-800 font-medium ml-1">{item.email}</span>
                  </p>
                  <p className="text-slate-500">
                    VAT Number: <span className="text-slate-800 font-medium ml-1">{item.vat}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

     
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800">Your Transaction's</h3>
            <div className="flex items-center gap-2 text-slate-500 text-xs">
              <Calendar className="w-4 h-4" />
              <span>23 - 30 March 2020</span>
            </div>
          </div>

        
          <p className="text-xs font-bold text-slate-500 mb-3">NEWEST</p>
          <div className="space-y-5 mb-6">
            <TransactionItem
              type="out"
              title="Food"
              date="27 March 2020, at 12:30 PM"
              amount="-$2,500"
            />
            <TransactionItem
              type="in"
              title="Medicine"
              date="27 March 2020, at 04:30 AM"
              amount="+$2,000"
            />
          </div>

          
          <p className="text-xs font-bold text-slate-500 mb-3">YESTERDAY</p>
          <div className="space-y-5">
            <TransactionItem
              type="in"
              title="Appointment"
              date="26 March 2020, at 13:45 PM"
              amount="+$750"
            />
            <TransactionItem
              type="in"
              title="MarketPlace"
              date="26 March 2020, at 12:30 PM"
              amount="+$1,000"
            />
            <TransactionItem
              type="in"
              title="Pharmacy"
              date="26 March 2020, at 08:30 AM"
              amount="+$2,500"
            />
            <TransactionItem
              type="pending"
              title="Bookings"
              date="26 March 2020, at 05:00 AM"
              amount="Pending"
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};


const TransactionItem = ({ type, title, date, amount }) => {
  const iconClasses = {
    in: 'bg-green-100 text-green-600',
    out: 'bg-red-100 text-red-500',
    pending: 'bg-slate-100 text-slate-500',
  };

  const amountClasses = {
    in: 'text-green-500',
    out: 'text-red-500',
    pending: 'text-slate-700',
  };

  return (
    <div className="flex items-center gap-4">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${iconClasses[type]}`}>
        {type === 'in' && <ArrowUp className="w-5 h-5" />}
        {type === 'out' && <ArrowDown className="w-5 h-5" />}
        {type === 'pending' && <AlertCircle className="w-5 h-5" />}
      </div>
      <div className="flex-1">
        <p className="font-semibold text-slate-800 text-sm">{title}</p>
        <p className="text-xs text-slate-400">{date}</p>
      </div>
      <p className={`font-bold text-sm ${amountClasses[type]}`}>{amount}</p>
    </div>
  );
};

export default MyAccount;