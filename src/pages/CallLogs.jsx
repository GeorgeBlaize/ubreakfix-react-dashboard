// src/pages/CallLogs.jsx
import React, { useState } from 'react';
import CallDetails from '../components/CallDetails';

// Data taken directly from your message (no mockData.js needed anymore)
const callsData = [
  {
    id: 1,
    phone: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "5:23",
    status: "AI Resolved",
    issue: "Screen",
    type: "Quote Provided",
    extraInfo: "◎ Quote Provided Screen",
    hasTranscript: true,
    transcript: [
      { speaker: "AI Assistant", text: "Thank you for calling UBreakFix! How can I help you today?" },
      { speaker: "Customer", text: "Hi, my iPhone 13 screen is cracked. How much would it cost to repair?" },
      { speaker: "AI Assistant", text: "I can help you with that! For an iPhone 13 screen repair, our price is $199. This includes parts, labor, and comes with a 90-day warranty. Would you like to book an appointment?" },
      { speaker: "Customer", text: "Yes, please! When are you available?" },
      { speaker: "AI Assistant", text: "Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM. Which works better for you?" },
    ],
  },
  {
    id: 2,
    phone: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "10:45 AM",
    duration: "5:23",
    status: "Warm Transfer",
    issue: "Screen",
    type: "Escalated to technician",
    extraInfo: "◎ Quote Provided Screen",
  },
  {
    id: 3,
    phone: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "5:23",
    status: "Appointment",
    issue: "Software",
    type: "Escalated to technician",
    extraInfo: "◎ Escalated to technician Software",
  },
  {
    id: 4,
    phone: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "5:23",
    status: "Appointment",
    issue: "Battery",
    type: "Appointment Booked",
    extraInfo: "◎ Appointment Booked Battery",
  },
  {
    id: 5,
    phone: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "0:20",
    status: "Dropped",
    issue: "Unknown",
    type: "Call Dropped",
    extraInfo: "◎ Call Dropped Unknown",
  },
  {
    id: 6,
    phone: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "5:23",
    status: "AI Resolved",
    issue: "Screen",
    type: "Quote Provided",
    extraInfo: "◎ Quote Provided Screen",
  },
];

export default function CallLogs() {
  const [selectedCall, setSelectedCall] = useState(callsData[0] || null);

  return (
    <div className="min-h-screen  from-zinc-950 via-zinc-950 to-zinc-900 p-4 sm:p-6 lg:p-8">
   
    
 
      <div className="flex flex-wrap gap-3 mb-6 lg:mb-8">
        <div className="relative flex-1 min-w-[260px]">
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
          {callsData.map((call) => {
            const isSelected = selectedCall?.id === call.id;

            let statusClass = 'bg-zinc-800/70 text-zinc-300 border-zinc-700/50';
            if (call.status === 'AI Resolved') {
              statusClass = 'bg-emerald-900/50 text-emerald-400 border-emerald-800/40';
            } else if (call.status === 'Warm Transfer') {
              statusClass = 'bg-amber-900/50 text-amber-400 border-amber-800/40';
            } else if (call.status === 'Appointment') {
              statusClass = 'bg-blue-900/50 text-blue-400 border-blue-800/40';
            } else if (call.status === 'Dropped') {
              statusClass = 'bg-red-900/50 text-red-400 border-red-800/40';
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
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
                        className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-medium border ${statusClass}`}
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

                      {call.extraInfo && (
                        <span className="inline-flex items-center px-3 py-1 bg-zinc-800/40 text-zinc-400 text-xs rounded-full border border-zinc-700/30">
                          {call.extraInfo}
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