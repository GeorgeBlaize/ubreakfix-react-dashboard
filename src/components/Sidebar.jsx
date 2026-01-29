import { NavLink } from 'react-router-dom';
import { LogOut, Home, Phone, Calendar, Settings as SettingsIcon } from 'lucide-react';

export default function Sidebar({ mobileOpen, onClose }) {
  const navItems = [
    { to: '/', icon: Home, label: 'Dashboard Overview' },
    { to: '/call-logs', icon: Phone, label: 'Call Logs' },
    { to: '/appointments', icon: Calendar, label: 'Appointments' },
    { to: '/settings', icon: SettingsIcon, label: 'Settings' },
  ];

  return (
    <>
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden " onClick={onClose} />
      )}

      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-zinc-950/95 backdrop-blur-xl border-r border-zinc-800/70 flex flex-col transform transition-transform duration-300 lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full min-h-screen bg-gradient-to-br from-[#020618] via-[#162456] to-[#0F172B] text-white'
        }`}
      >
        
        <div className="p-6 border-b border-zinc-800/50">
          <div className="items-center gap-3">
            <div className="w-11 h-11 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-900/40">
              <span className="text-white text-3xl font-black justify-center">⚡</span>
            </div>
            
          </div>
        </div>

        
        <nav className="flex-1 px-3 py-6 space-y-1.5">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all duration-200 ${
                  isActive
                    ? 'bg-zinc-800/70 border-l-4 border-blue-600 text-white shadow-inner shadow-blue-950/30'
                    : 'text-zinc-400 hover:bg-zinc-900/50 hover:text-zinc-200'
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>

       
        <div className="p-6 border-t border-zinc-800/50">
          <button className="flex items-center gap-3 w-full px-5 py-3.5 rounded-2xl text-red-400 hover:bg-red-950/30 hover:text-red-300 transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Log Out</span>
          </button>
        </div>
      </aside>
    </>
  );
}