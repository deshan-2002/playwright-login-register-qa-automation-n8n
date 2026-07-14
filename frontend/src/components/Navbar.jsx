import { FiMenu, FiSearch, FiBell, FiChevronDown } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';

export default function Navbar({ onMenuClick }) {
  const { user } = useAuth();

  return (
    <header className="h-16 bg-white/80 backdrop-blur-xl border-b border-gray-200/60 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-20">
      <div className="flex items-center gap-2 md:gap-4 min-w-0 flex-1">
        <button
          onClick={onMenuClick}
          className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors xl:hidden flex-shrink-0"
        >
          <FiMenu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 bg-gray-100/80 rounded-xl px-3 py-2.5 border border-gray-200/60 focus-within:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-100/50 transition-all min-w-0 flex-1 max-w-md">
          <FiSearch className="w-4 h-4 text-gray-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm text-gray-600 min-w-0 w-full placeholder:text-gray-400"
          />
          <kbd className="hidden xl:inline-flex text-xs text-gray-400 bg-gray-200/60 px-1.5 py-0.5 rounded font-mono flex-shrink-0">Ctrl+K</kbd>
        </div>
      </div>

      <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
        <button className="relative p-2.5 rounded-xl text-gray-500 hover:bg-gray-100/80 hover:text-gray-700 transition-all">
          <FiBell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-r from-red-500 to-rose-500 rounded-full ring-2 ring-white" />
        </button>

        <button className="flex items-center gap-2 md:gap-3 pl-2 md:pl-3 border-l border-gray-200/60 group">
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-sm font-semibold shadow-lg shadow-indigo-200/50 flex-shrink-0">
            {user?.name?.charAt(0)?.toUpperCase() || 'U'}
          </div>
          <div className="hidden lg:block text-left min-w-0">
            <p className="text-sm font-semibold text-gray-800 leading-tight truncate">{user?.name || 'User'}</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
          <FiChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors hidden lg:block flex-shrink-0" />
        </button>
      </div>
    </header>
  );
}
