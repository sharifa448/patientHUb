import React, { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { Search, Pencil, Video, Phone, Send, Paperclip, Smile } from 'lucide-react';

const Chat = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [newMessage, setNewMessage] = useState('');

 
  const contacts = [
    {
      id: 1,
      name: 'noman khan',
      message: 'short message here...',
      time: '2:30',
      avatar: 'https://i.pravatar.cc/150?img=11',
    },
    {
      id: 2,
      name: 'noman khan',
      message: 'short message here...',
      time: '2:30',
      avatar: 'https://i.pravatar.cc/150?img=12',
    },
    {
      id: 3,
      name: 'noman khan',
      message: 'short message here...',
      time: '2:30',
      avatar: 'https://i.pravatar.cc/150?img=13',
    },
    {
      id: 4,
      name: 'noman khan',
      message: 'short message here...',
      time: '2:30',
      avatar: 'https://i.pravatar.cc/150?img=14',
    },
  ];

  const messages = [
    {
      id: 1,
      sender: 'noman khan',
      text: 'Hi hope you feel better',
      time: '2:30',
      avatar: 'https://i.pravatar.cc/150?img=12',
    },
    {
      id: 2,
      sender: 'noman khan',
      text: 'Hi hope you feel better',
      time: '2:30',
      avatar: 'https://i.pravatar.cc/150?img=12',
    },
    {
      id: 3,
      sender: 'noman khan',
      text: 'Hi hope you feel better',
      time: '2:30',
      avatar: 'https://i.pravatar.cc/150?img=12',
    },
  ];

  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSend = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      console.log('Message sent:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <DashboardLayout title="Chat">

      <div className="grid grid-cols-1 md:grid-cols-3 bg-white rounded-2xl shadow-sm overflow-hidden min-h-[calc(100vh-180px)]">

      
        <aside className="md:col-span-1 border-r border-slate-100 flex flex-col">

         
          <div className="p-5 border-b border-slate-100 flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/150?img=52"
              alt="Pro Murtaza"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="font-bold text-slate-800">Pro Murtaza</h3>
              <p className="text-xs text-green-500">online</p>
            </div>
            <button className="text-slate-500 hover:text-purple-500 transition">
              <Pencil className="w-4 h-4" />
            </button>
          </div>

          
          <div className="p-4 border-b border-slate-100">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Contacts"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-4 pr-10 py-2.5 border border-slate-200 rounded-lg text-sm outline-none focus:border-purple-500 placeholder:text-slate-400"
              />
              <Search className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          
          <div className="flex-1 overflow-y-auto">
            {filteredContacts.map((contact) => (
              <button
                key={contact.id}
                className="w-full flex items-center gap-3 px-5 py-4 hover:bg-slate-50 transition border-b border-slate-50 text-left"
              >
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-slate-800 text-sm truncate">
                    {contact.name}
                  </h4>
                  <p className="text-xs text-slate-400 truncate">
                    {contact.message}
                  </p>
                </div>
                <span className="text-xs text-slate-400 flex-shrink-0">
                  {contact.time}
                </span>
              </button>
            ))}
          </div>
        </aside>

     
        <section className="md:col-span-2 flex flex-col">

          
          <div className="p-5 border-b border-slate-100 flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/150?img=15"
              alt="ahmadi khan"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="font-bold text-slate-800">ahmadi khan</h3>
              <p className="text-xs text-green-500">online</p>
            </div>
            <button className="text-pink-500 hover:text-pink-600 transition p-2">
              <Video className="w-5 h-5" />
            </button>
            <button className="text-pink-500 hover:text-pink-600 transition p-2">
              <Phone className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
            {messages.map((msg) => (
              <div key={msg.id} className="flex items-start gap-3">
                <img
                  src={msg.avatar}
                  alt={msg.sender}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <h5 className="text-sm font-semibold text-slate-800 mb-1">
                    {msg.sender}
                  </h5>
                  <p className="text-slate-600 text-sm">{msg.text}</p>
                </div>
                <span className="text-xs text-slate-400 flex-shrink-0">
                  {msg.time}
                </span>
              </div>
            ))}
          </div>

         
          <form onSubmit={handleSend} className="p-4 border-t border-slate-100 flex items-center gap-3">

           
            <button
              type="button"
              className="text-slate-400 hover:text-purple-500 transition p-2"
            >
              <Smile className="w-5 h-5" />
            </button>

           
            <button
              type="button"
              className="text-slate-400 hover:text-purple-500 transition p-2"
            >
              <Paperclip className="w-5 h-5" />
            </button>

            
            <input
              type="text"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 px-4 py-2.5 border border-slate-200 rounded-lg text-sm outline-none focus:border-purple-500 placeholder:text-slate-400"
            />

        
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-3 rounded-lg hover:opacity-90 transition"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </section>
      </div>

    </DashboardLayout>
  );
};

export default Chat;