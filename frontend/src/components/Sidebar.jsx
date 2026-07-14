import { NavLink } from 'react-router-dom';
import { FiGrid, FiUser, FiSettings, FiLogOut, FiActivity, FiBell, FiDollarSign } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';

const navItems = [
  { to: '/dashboard', icon: FiGrid, label: 'Dashboard' },
  { to: '/dashboard/profile', icon: FiUser, label: 'Profile' },
  { to: '/dashboard/analytics', icon: FiActivity, label: 'Analytics' },
  { to: '/dashboard/revenue', icon: FiDollarSign, label: 'Revenue' },
  { to: '/dashboard/notifications', icon: FiBell, label: 'Notifications' },
  { to: '/dashboard/settings', icon: FiSettings, label: 'Settings' },
];

export default function Sidebar({ collapsed, onToggle }) {
  const { logout } = useAuth();

  return (
    <aside
      className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 z-30 transition-all duration-300 flex flex-col ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className="flex items-center gap-3 px-6 h-16 border-b border-gray-100">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
          A
        </div>
        <span
          className={`font-bold text-lg text-gray-800 transition-opacity duration-300 ${
            collapsed ? 'opacity-0 invisible w-0' : 'opacity-100'
          }`}
        >
          AuthFlow
        </span>
      </div>

      <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive
                  ? 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 font-semibold'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
              }`
            }
          >
            <Icon className="w-5 h-5 flex-shrink-0" />
            <span
              className={`text-sm whitespace-nowrap transition-opacity duration-300 ${
                collapsed ? 'opacity-0 invisible w-0' : 'opacity-100'
              }`}
            >
              {label}
            </span>
          </NavLink>
        ))}
      </nav>

      <div className="px-3 pb-6 space-y-1 border-t border-gray-100 pt-4">
        <button
          onClick={logout}
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-red-50 hover:text-red-600 transition-all duration-200 w-full text-sm"
        >
          <FiLogOut className="w-5 h-5 flex-shrink-0" />
          <span
            className={`whitespace-nowrap transition-opacity duration-300 ${
              collapsed ? 'opacity-0 invisible w-0' : 'opacity-100'
            }`}
          >
            Logout
          </span>
        </button>

        <button
          onClick={onToggle}
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition-all duration-200 w-full text-sm"
        >
          <svg className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${collapsed ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
          <span
            className={`whitespace-nowrap transition-opacity duration-300 ${
              collapsed ? 'opacity-0 invisible w-0' : 'opacity-100'
            }`}
          >
            Collapse
          </span>
        </button>
      </div>
    </aside>
  );
}
