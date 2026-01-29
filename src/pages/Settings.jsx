export default function Settings() {
  return (
    <div className="p-5 lg:p-6 xl:p-8 max-w-4xl mx-auto bg-zinc-950/50 min-h-screen">
    
      <div className="flex border-b border-zinc-800/70 pb-5 mb-10">
        <button className="px-6 py-2 font-medium border-b-2 border-blue-600 text-white pb-1">
          Profile
        </button>
        <button className="px-6 py-2 font-medium text-zinc-400 hover:text-zinc-300 transition-colors">
          Password Settings
        </button>
      </div>

      <div className="glass-card p-7 lg:p-10">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-12">
          <div className="relative">
            <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden ring-4 ring-zinc-900/70">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300"
                alt="Jane D."
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute -bottom-2 -right-2 bg-zinc-900 p-1.5 rounded-2xl shadow-lg">
              <div className="bg-blue-600 w-10 h-10 rounded-xl flex items-center justify-center text-xl hover:bg-blue-500 transition-colors">
                ✏
              </div>
            </button>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-zinc-500 font-medium mb-1">
              PROFILE IMAGE
            </div>
           
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-9">
          <div>
            <label className="block text-xs uppercase tracking-wider text-zinc-400 font-medium mb-2.5">
              Full Name
            </label>
            <input
              defaultValue="Jane D."
              className="w-full bg-zinc-950/70 border border-zinc-700/50 rounded-2xl px-6 py-4 text-zinc-100 focus:border-blue-600/50 focus:ring-1 focus:ring-blue-600/30 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-zinc-400 font-medium mb-2.5">
              Email
            </label>
            <input
              defaultValue="jane@gmail.com"
              className="w-full bg-zinc-950/70 border border-zinc-700/50 rounded-2xl px-6 py-4 text-zinc-100 focus:border-blue-600/50 focus:ring-1 focus:ring-blue-600/30 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-zinc-400 font-medium mb-2.5">
              Store Name
            </label>
            <input
              defaultValue="Ubreakfix Store"
              className="w-full bg-zinc-950/70 border border-zinc-700/50 rounded-2xl px-6 py-4 text-zinc-100 focus:border-blue-600/50 focus:ring-1 focus:ring-blue-600/30 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-zinc-400 font-medium mb-2.5">
              Store Address
            </label>
            <input
              defaultValue="123 Main Street, New York, NY 10001"
              className="w-full bg-zinc-950/70 border border-zinc-700/50 rounded-2xl px-6 py-4 text-zinc-100 focus:border-blue-600/50 focus:ring-1 focus:ring-blue-600/30 outline-none transition-all"
            />
          </div>
        </div>

        <div className="mt-12 flex justify-center md:justify-start">
          <button className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold px-16 py-4 rounded-2xl transition-all shadow-lg shadow-emerald-900/30">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}