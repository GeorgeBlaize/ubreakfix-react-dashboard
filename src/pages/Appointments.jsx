
import React from 'react';
import {
  HiOutlineDocumentDuplicate,    
  HiOutlineCalendar,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiChevronLeft,
  HiChevronRight,
} from 'react-icons/hi2';

import { appointments } from '../data/mockData';

export default function Appointments() {
  return (
    <div className="p-5 lg:p-6 xl:p-8 space-y-6 lg:space-y-8 bg-zinc-950/50">
   
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5">
      
        <div className="glass-card p-5 lg:p-6">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-sky-600/20 flex items-center justify-center flex-shrink-0">
              <HiOutlineCalendar className="w-7 h-7 text-sky-400" />
            </div>
            <div>
              <div className="text-zinc-400 text-sm ">Total Booked</div>
              <div className="text-4xl lg:text-5xl font-display font-bold text-white mt-1">34</div>
              <div className="text-emerald-400 text-sm mt-1.5">+8 this week</div>
            </div>
          </div>
        </div>

        <div className="glass-card p-5 lg:p-6">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-emerald-600/20 flex items-center justify-center flex-shrink-0">
              <HiOutlineCheckCircle className="w-7 h-7 text-emerald-400" />
            </div>
            <div>
              <div className="text-zinc-400 text-sm">AI Booked</div>
              <div className="text-4xl lg:text-5xl font-display font-bold text-white mt-1">28</div>
              <div className="text-zinc-300 text-sm mt-1.5">82% of total</div>
            </div>
          </div>
        </div>

       
        <div className="glass-card p-5 lg:p-6">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-amber-600/20 flex items-center justify-center flex-shrink-0">
              <HiOutlineClock className="w-7 h-7 text-amber-400" />
            </div>
            <div>
              <div className="text-zinc-400 text-sm">Pending</div>
              <div className="text-4xl lg:text-5xl font-display font-bold text-white mt-1">3</div>
              <div className="text-zinc-300 text-sm mt-1.5">Awaiting confirmation</div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="glass-card p-6 lg:p-7">
        <div className="text-sm font-medium text-zinc-400 mb-3 uppercase tracking-wider">Booking Link</div>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 bg-zinc-950/70 border border-zinc-700/50 rounded-2xl px-5 py-4 font-mono text-sm text-zinc-300 break-all">
            https://techstore.com/book?id=store123
          </div>
          <button className="bg-zinc-800/80 hover:bg-zinc-700/80 px-6 py-4 rounded-2xl font-medium transition-colors flex items-center gap-2.5">
            <HiOutlineDocumentDuplicate size={22} className="text-zinc-300" />
            Copy Link
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1100px]">
            <thead className="bg-zinc-950/60">
              <tr>
                {['Client Name', 'Client Phone', 'Client mail', 'Device', 'Repair Type', 'Date', 'Slot no', 'Start Time'].map(h => (
                  <th key={h} className="px-6 py-5 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50">
              {appointments.map((appt, i) => (
                <tr key={i} className="hover:bg-zinc-900/40 transition-colors">
                  <td className="px-6 py-5 text-sm text-zinc-200">{appt.name}</td>
                  <td className="px-6 py-5 text-sm font-mono text-zinc-300">{appt.phone}</td>
                  <td className="px-6 py-5 text-sm text-zinc-300">{appt.email}</td>
                  <td className="px-6 py-5 text-sm text-zinc-300">{appt.device}</td>
                  <td className="px-6 py-5 text-sm text-zinc-300">{appt.type}</td>
                  <td className="px-6 py-5 text-sm font-mono text-zinc-300">{appt.date}</td>
                  <td className="px-6 py-5 text-sm text-zinc-300">{appt.slot}</td>
                  <td className="px-6 py-5 text-sm font-mono text-zinc-300">{appt.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

     
        <div className="px-6 py-5 border-t border-zinc-800/50 flex items-center justify-between text-sm text-zinc-400">
          <button className="px-4 py-2 hover:bg-zinc-800/50 rounded-xl transition-colors flex items-center gap-1">
            <HiChevronLeft size={18} />
            Previous
          </button>

          <div className="flex gap-1">
            <button className="px-4 py-2 hover:bg-zinc-800/50 rounded-xl transition-colors">1</button>
            <button className="px-4 py-2 bg-blue-600/80 text-white rounded-xl">2</button>
            <button className="px-4 py-2 hover:bg-zinc-800/50 rounded-xl transition-colors">3</button>
            <span className="px-4 py-2">...</span>
            <button className="px-4 py-2 hover:bg-zinc-800/50 rounded-xl transition-colors">11</button>
          </div>

          <button className="px-4 py-2 hover:bg-zinc-800/50 rounded-xl transition-colors flex items-center gap-1">
            Next
            <HiChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}