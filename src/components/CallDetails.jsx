import React from 'react';

export default function CallDetails({ call }) {
  if (!call) {
    return (
      <div className="bg-zinc-900/90 backdrop-blur-sm border border-zinc-800/70 rounded-2xl lg:rounded-3xl p-6 lg:p-7 text-center text-zinc-500">
        Select a call from the list to view details
      </div>
    );
  }

  const isAIResolved = call.status === 'AI Resolved';

  return (
    <div className="bg-zinc-900/95 backdrop-blur-sm border border-zinc-800/70 rounded-2xl lg:rounded-3xl p-6 lg:p-7 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
     
      <div className="text-xs uppercase tracking-wider font-medium text-zinc-500 mb-6">
        CALL DETAILS
      </div>

   
      <div className="grid grid-cols-2 gap-x-6 gap-y-6 text-sm mb-8">
        <div>
          <div className="text-zinc-500 text-xs uppercase tracking-wide mb-1.5">Phone Number</div>
          <div className="font-mono font-medium text-zinc-100">{call.phone}</div>
        </div>

        <div>
          <div className="text-zinc-500 text-xs uppercase tracking-wide mb-1.5">Duration</div>
          <div className="text-zinc-100">{call.duration}</div>
        </div>

        <div>
          <div className="text-zinc-500 text-xs uppercase tracking-wide mb-1.5">Date & Time</div>
          <div className="text-zinc-100">{call.date} {call.time}</div>
        </div>

        <div>
          <div className="text-zinc-500 text-xs uppercase tracking-wide mb-1.5">Issue Type</div>
          <div className="text-zinc-100">{call.issue || 'Unknown'}</div>
        </div>

        <div className="col-span-2">
          <div className="text-zinc-500 text-xs uppercase tracking-wide mb-1.5">Call Type</div>
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
            {call.status}
          </div>
        </div>
      </div>

    
      <div className="bg-purple-950/30 border border-purple-900/40 rounded-2xl p-5 mb-8 flex items-center gap-4 cursor-pointer hover:bg-purple-950/50 transition-colors group">
        <div className="w-12 h-12 lg:w-14 lg:h-14 bg-purple-700 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-105 transition-transform">
          ▶
        </div>
        <div>
          <div className="font-medium text-zinc-100 group-hover:text-white transition-colors">
            Play Audio Recording
          </div>
          <div className="text-purple-300 text-xs lg:text-sm mt-0.5">
            3:12 • High quality
          </div>
        </div>
      </div>

     
      <div className="mb-8 pb-6 border-b border-zinc-800/60">
        <div className="text-xs uppercase tracking-wider text-zinc-500 font-medium mb-2">Outcome</div>
        <div className="text-zinc-100 font-medium">
          {call.type || 'Call completed'}
        </div>
      </div>

    
      {call.transcript && (
        <div>
          <div className="flex items-center gap-3 mb-5">
            <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="font-medium text-zinc-200 text-lg">Conversation Transcript</h3>
          </div>

          <div className="space-y-6 text-sm max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900/40">
            {call.transcript.map((msg, index) => (
              <div key={index} className={msg.speaker.includes('AI') ? 'pl-6' : ''}>
                <div className={`font-medium text-xs lg:text-sm mb-1.5 ${
                  msg.speaker.includes('AI') 
                    ? 'text-emerald-400' 
                    : 'text-blue-400'
                }`}>
                  {msg.speaker}:
                </div>
                <div className="leading-relaxed text-zinc-300">
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}