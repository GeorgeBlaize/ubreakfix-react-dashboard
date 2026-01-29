
import React from 'react';
export default function Settings() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020618] via-[#162456] to-[#0F172B] p-5 lg:p-8">
      <div className="max-w-4xl mx-auto">
    
        <div className="flex border-b border-zinc-800/50 pb-4 mb-10">
          <button className="px-7 py-3 font-medium text-white border-b-2 border-cyan-500 pb-2.5">
            Profile
          </button>
          <button className="px-7 py-3 font-medium text-zinc-400 hover:text-zinc-200 transition-colors">
            Password Settings
          </button>
        </div>

        
        <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-700/40 rounded-2xl lg:rounded-3xl p-7 lg:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
         
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-12">
            <div className="relative flex-shrink-0">
              <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden ring-4 ring-cyan-900/40 ring-offset-2 ring-offset-zinc-950">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
                  alt="Jane D."
                  className="w-full h-full object-cover"
                />
              </div>

             
              <button className="absolute -bottom-2 -right-2 bg-zinc-950 p-1 rounded-full shadow-lg shadow-cyan-900/30">
                <div className="bg-cyan-600 w-10 h-10 rounded-full flex items-center justify-center text-xl hover:bg-cyan-500 transition-colors">
                  ✏
                </div>
              </button>
            </div>

            <div className="pt-2">
              <div className="uppercase text-xs tracking-widest font-medium text-zinc-400 mb-1">
                Profile Image
              </div>
             
            </div>
          </div>

         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-9">
           
            <div>
              <label className="block text-xs uppercase tracking-wider font-medium text-zinc-400 mb-2.5">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="Jane D."
                className="w-full bg-zinc-950/70 border border-zinc-700/60 rounded-xl px-6 py-4 text-zinc-100 placeholder-zinc-600 focus:border-cyan-600/60 focus:ring-1 focus:ring-cyan-600/30 outline-none transition-all"
              />
            </div>

          
            <div>
              <label className="block text-xs uppercase tracking-wider font-medium text-zinc-400 mb-2.5">
                Email
              </label>
              <input
                type="email"
                defaultValue="jane@gmail.com"
                className="w-full bg-zinc-950/70 border border-zinc-700/60 rounded-xl px-6 py-4 text-zinc-100 placeholder-zinc-600 focus:border-cyan-600/60 focus:ring-1 focus:ring-cyan-600/30 outline-none transition-all"
              />
            </div>

         
            <div>
              <label className="block text-xs uppercase tracking-wider font-medium text-zinc-400 mb-2.5">
                Store Name
              </label>
              <input
                type="text"
                defaultValue="Ubreakfix Store"
                className="w-full bg-zinc-950/70 border border-zinc-700/60 rounded-xl px-6 py-4 text-zinc-100 placeholder-zinc-600 focus:border-cyan-600/60 focus:ring-1 focus:ring-cyan-600/30 outline-none transition-all"
              />
            </div>

      
            <div>
              <label className="block text-xs uppercase tracking-wider font-medium text-zinc-400 mb-2.5">
                Store Address
              </label>
              <input
                type="text"
                defaultValue="123 Main Street, New York, NY 10001"
                className="w-full bg-zinc-950/70 border border-zinc-700/60 rounded-xl px-6 py-4 text-zinc-100 placeholder-zinc-600 focus:border-cyan-600/60 focus:ring-1 focus:ring-cyan-600/30 outline-none transition-all"
              />
            </div>
          </div>

         
          <div className="mt-12 flex justify-center md:justify-center">
            <button className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold px-16 py-5 rounded-2xl transition-all shadow-lg shadow-emerald-900/40 text-lg">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}