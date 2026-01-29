import { Bell } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function TopBar({ onMenuClick }) {
  const location = useLocation();


  const titleMap = {
    '/': 'Dashboard Overview',
    '/call-logs': 'Call Logs & History',
    '/appointments': 'Appointments',
    '/settings': 'Settings',
  
  };

 
  const currentTitle = titleMap[location.pathname] || 'Dashboard';

  return (
    <header className="h-16 border-b border-zinc-800/70 bg-zinc-950/80 backdrop-blur-xl flex items-center px-5 lg:px-8 z-40">
      <button
        className="lg:hidden p-2 -ml-2 text-zinc-400 hover:text-white transition-colors"
        onClick={onMenuClick}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <h1 className="font-display text-2xl lg:text-[28px] font-semibold tracking-tight flex-1 ml-4 lg:ml-0 text-white">
        {currentTitle}
      </h1>

      <div className="flex items-center gap-6 lg:gap-8">
        <button className="relative text-zinc-400 hover:text-white transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full ring-2 ring-zinc-950" />
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
    </header>
  );
}