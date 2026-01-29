import React, { useState } from 'react';
import { sampleCalls } from '../data/mockData'; 
import CallDetails from '../components/CallDetails';

export default function CallLogs() {
  const [selectedCall, setSelectedCall] = useState(sampleCalls[0] || null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-900 p-4 sm:p-6 lg:p-8">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 lg:mb-8">
        <h1 className="font-display text-2xl lg:text-3xl font-semibold tracking-tight text-white">
          Call Logs & History
        </h1>

        
        <div className="flex items-center gap-5 sm:gap-6">
          <button className="relative text-zinc-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full ring-2 ring-zinc-950"></span>
          </button>

          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <div className="font-medium text-sm text-white">Jane D.</div>
              <div className="text-xs text-zinc-500">Store Manager</div>
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-zinc-700/70 ring-offset-2 ring-offset-zinc-950">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120"
                alt="Jane D."
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

    
      <div className="flex flex-wrap gap-3 mb-6 lg:mb-8">
        <div className="relative flex-1 min-w-[280px]">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search by phone number, issue type..."
            className="w-full bg-zinc-900/70 border border-zinc-700/60 rounded-2xl pl-11 pr-5 py-3.5 text-sm placeholder-zinc-500 focus:outline-none focus:border-blue-600/60 focus:ring-1 focus:ring-blue-600/30 transition-all"
          />
        </div>

        <button className="bg-zinc-900/70 border border-zinc-700/60 px-5 py-3.5 rounded-2xl text-sm flex items-center gap-2 hover:bg-zinc-800/70 transition-colors">
          All Type <span className="text-xs opacity-70">▼</span>
        </button>

        <button className="bg-zinc-900/70 border border-zinc-700/60 px-5 py-3.5 rounded-2xl text-sm flex items-center gap-2 hover:bg-zinc-800/70 transition-colors">
          All Issues <span className="text-xs opacity-70">▼</span>
        </button>

        <button className="bg-zinc-900/70 border border-zinc-700/60 px-5 py-3.5 rounded-2xl text-sm flex items-center gap-2 hover:bg-zinc-800/70 transition-colors">
          Today <span className="text-xs opacity-70">▼</span>
        </button>
      </div>

     
      <div className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] gap-6 lg:gap-8">
       
        <div className="space-y-3 lg:space-y-4">
          {sampleCalls.map((call) => {
            const isSelected = selectedCall?.id === call.id;

            let statusStyles = '';
            if (call.status === 'AI Resolved') {
              statusStyles = 'bg-emerald-900/50 text-emerald-400 border-emerald-800/40';
            } else if (call.status === 'Warm Transfer') {
              statusStyles = 'bg-amber-900/50 text-amber-400 border-amber-800/40';
            } else if (call.status === 'Appointment') {
              statusStyles = 'bg-blue-900/50 text-blue-400 border-blue-800/40';
            } else if (call.status === 'Dropped') {
              statusStyles = 'bg-red-900/50 text-red-400 border-red-800/40';
            }

            return (
              <div
                key={call.id}
                onClick={() => setSelectedCall(call)}
                className={`glass-card p-5 lg:p-6 cursor-pointer transition-all duration-150 border ${
                  isSelected
                    ? 'border-blue-600/60 bg-zinc-900/95 shadow-[0_0_20px_rgba(59,130,246,0.25)]'
                    : 'border-zinc-800/60 hover:border-zinc-700/70 hover:bg-zinc-900/80'
                } rounded-2xl lg:rounded-3xl`}
              >
                <div className="flex items-start gap-4 lg:gap-5">
            
                  <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>

                  <div className="flex-1 min-w-0">
                   
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                      <div className="font-mono text-base lg:text-lg font-semibold text-zinc-100">
                        {call.phone}
                      </div>
                      <div className="text-xs lg:text-sm text-zinc-500 whitespace-nowrap">
                        {call.date}
                      </div>
                    </div>

                  
                    <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs lg:text-sm text-zinc-400">
                      <span>{call.time}</span>
                      <span className="text-zinc-600">•</span>
                      <span>{call.duration}</span>
                    </div>

                   
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span
                        className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-medium border ${statusStyles}`}
                      >
                        {call.status}
                      </span>

                      {call.issue && (
                        <span className="inline-flex items-center px-3.5 py-1.5 bg-zinc-800/70 text-zinc-300 text-xs rounded-full border border-zinc-700/50">
                          {call.issue}
                        </span>
                      )}

                      {call.type && (
                        <span className="inline-flex items-center px-3.5 py-1.5 bg-zinc-800/50 text-zinc-400 text-xs rounded-full border border-zinc-700/40">
                          {call.type}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        
        <div className="lg:sticky lg:top-6 h-fit">
          <CallDetails call={selectedCall} />
        </div>
      </div>
    </div>
  );
}