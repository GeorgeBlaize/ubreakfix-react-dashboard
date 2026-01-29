import { NavLink } from 'react-router-dom';
import { LogOut, Home, Phone, Calendar, Settings as SettingsIcon } from 'lucide-react';

export default function Sidebar({ mobileOpen, onClose }) {
  const navItems = [
    { to: '/', icon: Home, label: 'Dashboard Overview' },
    { to: '/call-logs', icon: Phone, label: 'Call Logs' },
    { to: '/appointments', icon: Calendar, label: 'Appointments' },
    { to: '/settings', icon: SettingsIcon, label: 'Settings' },
  ];


  return(
  
    <>
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto">
          <nav className="mt-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 text-sm font-medium ${
                    isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
                onClick={onClose}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="p-4 border-t border-gray-200">
          <button
            className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
            onClick={() => {
              // Handle logout logic here
            }}
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </div>
    </>
  );

}