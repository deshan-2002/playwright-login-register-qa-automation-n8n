import { useAuth } from '../context/AuthContext';
import {
  FiUsers, FiDollarSign, FiActivity, FiTrendingUp,
  FiArrowUpRight, FiArrowDownRight,
  FiCalendar, FiDownload, FiPlus,
  FiCheckCircle, FiClock, FiAlertCircle,
  FiEye, FiEdit3, FiTrash2, FiSearch,
  FiMessageSquare, FiShoppingCart, FiBarChart2,
  FiStar, FiPaperclip,
} from 'react-icons/fi';

const stats = [
  { label: 'Total Revenue', value: '$84,520', change: '+23.5%', up: true, icon: FiDollarSign, color: 'from-emerald-500 to-teal-500', shadow: 'shadow-emerald-200/40', light: 'bg-emerald-50', iconColor: 'text-emerald-600' },
  { label: 'Active Users', value: '2,846', change: '+12.3%', up: true, icon: FiUsers, color: 'from-blue-500 to-cyan-500', shadow: 'shadow-blue-200/40', light: 'bg-blue-50', iconColor: 'text-blue-600' },
  { label: 'Page Views', value: '48.2k', change: '+8.1%', up: true, icon: FiBarChart2, color: 'from-violet-500 to-purple-500', shadow: 'shadow-violet-200/40', light: 'bg-violet-50', iconColor: 'text-violet-600' },
  { label: 'Bounce Rate', value: '18.7%', change: '-3.2%', up: false, icon: FiTrendingUp, color: 'from-rose-500 to-pink-500', shadow: 'shadow-rose-200/40', light: 'bg-rose-50', iconColor: 'text-rose-600' },
];

const chartData = [
  { label: 'Mon', value: 65, color: 'from-indigo-500 to-blue-500' },
  { label: 'Tue', value: 78, color: 'from-indigo-500 to-blue-500' },
  { label: 'Wed', value: 92, color: 'from-indigo-500 to-blue-500' },
  { label: 'Thu', value: 55, color: 'from-indigo-500 to-blue-500' },
  { label: 'Fri', value: 88, color: 'from-indigo-500 to-purple-500' },
  { label: 'Sat', value: 42, color: 'from-indigo-500 to-purple-500' },
  { label: 'Sun', value: 35, color: 'from-indigo-500 to-purple-500' },
];

const maxValue = Math.max(...chartData.map(d => d.value));

const transactions = [
  { id: '#INV-0245', customer: 'Olivia Martin', email: 'olivia@email.com', amount: '+$1,999.00', status: 'Completed', date: 'Jan 15, 2026' },
  { id: '#INV-0244', customer: 'Ava Johnson', email: 'ava@email.com', amount: '+$39.00', status: 'Pending', date: 'Jan 14, 2026' },
  { id: '#INV-0243', customer: 'Michael Chen', email: 'michael@email.com', amount: '+$299.00', status: 'Completed', date: 'Jan 13, 2026' },
  { id: '#INV-0242', customer: 'Sofia Davis', email: 'sofia@email.com', amount: '+$99.00', status: 'Cancelled', date: 'Jan 12, 2026' },
  { id: '#INV-0241', customer: 'James Wilson', email: 'james@email.com', amount: '+$2,499.00', status: 'Completed', date: 'Jan 11, 2026' },
  { id: '#INV-0240', customer: 'Emma Thompson', email: 'emma@email.com', amount: '+$149.00', status: 'Processing', date: 'Jan 10, 2026' },
];

const quickActions = [
  { label: 'New Invoice', icon: FiPaperclip, color: 'from-indigo-500 to-purple-500', bg: 'bg-indigo-50' },
  { label: 'Send Message', icon: FiMessageSquare, color: 'from-emerald-500 to-teal-500', bg: 'bg-emerald-50' },
  { label: 'Create Task', icon: FiCheckCircle, color: 'from-orange-500 to-amber-500', bg: 'bg-orange-50' },
  { label: 'View Reports', icon: FiBarChart2, color: 'from-rose-500 to-pink-500', bg: 'bg-rose-50' },
];

const recentOrders = [
  { product: 'Wireless Headphones', customer: 'Sarah Johnson', amount: '$299', status: 'Shipped', date: 'Today, 2:34 PM' },
  { product: 'Smart Watch Pro', customer: 'Michael Chen', amount: '$449', status: 'Processing', date: 'Today, 1:20 PM' },
  { product: 'Laptop Stand', customer: 'Emily Davis', amount: '$79', status: 'Delivered', date: 'Yesterday' },
  { product: 'USB-C Hub', customer: 'James Wilson', amount: '$59', status: 'Shipped', date: 'Yesterday' },
  { product: 'Mechanical Keyboard', customer: 'Lisa Brown', amount: '$189', status: 'Pending', date: '2 days ago' },
];

const statusStyles = {
  'Completed': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Pending': 'bg-amber-50 text-amber-700 border-amber-200',
  'Cancelled': 'bg-rose-50 text-rose-700 border-rose-200',
  'Processing': 'bg-blue-50 text-blue-700 border-blue-200',
  'Shipped': 'bg-violet-50 text-violet-700 border-violet-200',
  'Delivered': 'bg-teal-50 text-teal-700 border-teal-200',
};

const projects = [
  { name: 'Mobile App Redesign', progress: 75, color: 'from-indigo-500 to-purple-500' },
  { name: 'API Integration', progress: 45, color: 'from-emerald-500 to-teal-500' },
  { name: 'Dashboard Analytics', progress: 90, color: 'from-orange-500 to-amber-500' },
  { name: 'Cloud Migration', progress: 30, color: 'from-rose-500 to-pink-500' },
];

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-8">

      {/* ====== HERO WELCOME SECTION ====== */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-8 lg:p-10 animate-fade-in">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-2xl font-bold shadow-lg ring-1 ring-white/20">
              {user?.name?.charAt(0)?.toUpperCase() || 'U'}
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-white">
                Welcome back, {user?.name?.split(' ')[0] || 'User'}!
              </h1>
              <p className="text-white/70 mt-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                System is running smoothly
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/15 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/25 transition-all ring-1 ring-white/20">
              <FiCalendar className="w-4 h-4" />
              {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-indigo-700 text-sm font-semibold hover:bg-white/90 transition-all shadow-lg shadow-black/10">
              <FiDownload className="w-4 h-4" />
              Download Report
            </button>
          </div>
        </div>
      </div>

      {/* ====== STATS GRID ====== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-lg shadow-gray-200/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 animate-slide-up"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="flex items-center justify-between mb-5">
              <div className={`w-12 h-12 rounded-xl ${stat.light} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                <stat.icon className={`w-5 h-5 ${stat.iconColor}`} />
              </div>
              <span className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${stat.up ? 'text-emerald-700 bg-emerald-50' : 'text-rose-700 bg-rose-50'}`}>
                {stat.up ? <FiArrowUpRight className="w-3 h-3" /> : <FiArrowDownRight className="w-3 h-3" />}
                {stat.change}
              </span>
            </div>
            <p className="text-sm text-gray-500 font-medium mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
          </div>
        ))}
      </div>

      {/* ====== MAIN GRID: CHART + QUICK ACTIONS ====== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Bar Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-lg shadow-gray-200/40 animate-slide-up">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Weekly Revenue</h2>
              <p className="text-sm text-gray-500">Total earnings for this week</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="btn-ghost text-xs">Week</button>
              <button className="btn-ghost text-xs bg-gray-100 text-gray-900">Month</button>
              <button className="btn-ghost text-xs">Year</button>
            </div>
          </div>
          <div className="flex items-end justify-between gap-3 h-56">
            {chartData.map((item, i) => (
              <div key={item.label} className="flex-1 flex flex-col items-center gap-3 group/chart">
                <span className="text-xs text-gray-400 font-medium opacity-0 group-hover/chart:opacity-100 transition-opacity">
                  ${item.value}k
                </span>
                <div className="w-full relative rounded-xl overflow-hidden" style={{ height: `${(item.value / maxValue) * 100}%` }}>
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-80 group-hover/chart:opacity-100 transition-opacity`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent" />
                </div>
                <span className="text-xs text-gray-500 font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions + Projects */}
        <div className="space-y-5 animate-slide-up">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg shadow-gray-200/40">
            <h2 className="text-lg font-bold text-gray-900 mb-5">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action) => (
                <button
                  key={action.label}
                  className={`flex flex-col items-center gap-3 p-4 rounded-xl ${action.bg} hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group`}
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <action.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-gray-700">{action.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg shadow-gray-200/40">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-bold text-gray-900">Projects</h2>
              <button className="text-xs text-indigo-600 font-semibold hover:text-indigo-700">View All</button>
            </div>
            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.name}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium text-gray-700">{project.name}</span>
                    <span className="text-xs font-semibold text-gray-500">{project.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${project.color} transition-all duration-1000`}
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ====== TRANSACTIONS TABLE ====== */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-lg shadow-gray-200/40 animate-slide-up overflow-hidden">
        <div className="p-6 lg:p-8 border-b border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Recent Transactions</h2>
              <p className="text-sm text-gray-500">Latest payment activities on your account</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 rounded-xl border border-gray-200 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 w-48"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-200/50">
                <FiPlus className="w-4 h-4" />
                New
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-4">Invoice</th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-4">Customer</th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-4">Amount</th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-4">Status</th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-4">Date</th>
                <th className="text-right text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t, idx) => (
                <tr key={t.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors group">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{t.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
                        {t.customer.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{t.customer}</p>
                        <p className="text-xs text-gray-500">{t.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">{t.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${statusStyles[t.status] || 'bg-gray-50 text-gray-700 border-gray-200'}`}>
                      {t.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{t.date}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 rounded-lg text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all"><FiEye className="w-4 h-4" /></button>
                      <button className="p-2 rounded-lg text-gray-400 hover:text-amber-600 hover:bg-amber-50 transition-all"><FiEdit3 className="w-4 h-4" /></button>
                      <button className="p-2 rounded-lg text-gray-400 hover:text-rose-600 hover:bg-rose-50 transition-all"><FiTrash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ====== BOTTOM GRID: RECENT ORDERS + ACCOUNT INFO ====== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-lg shadow-gray-200/40 animate-slide-up overflow-hidden">
          <div className="p-6 lg:p-8 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-900">Recent Orders</h2>
                <p className="text-sm text-gray-500">Latest customer orders</p>
              </div>
              <button className="text-sm text-indigo-600 font-semibold hover:text-indigo-700">View All</button>
            </div>
          </div>
          <div className="divide-y divide-gray-50">
            {recentOrders.map((order, idx) => (
              <div key={idx} className="flex items-center justify-between px-6 lg:px-8 py-4 hover:bg-gray-50/50 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center text-indigo-600 text-sm font-bold">
                    {order.product.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{order.product}</p>
                    <p className="text-xs text-gray-500">{order.customer}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">{order.amount}</p>
                    <p className="text-xs text-gray-500">{order.date}</p>
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${statusStyles[order.status] || 'bg-gray-50 text-gray-700'}`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Account Info Card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-lg shadow-gray-200/40 animate-slide-up overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-2xl font-bold mx-auto shadow-lg ring-1 ring-white/20 mb-3">
              {user?.name?.charAt(0)?.toUpperCase() || 'U'}
            </div>
            <h3 className="text-white font-bold text-lg">{user?.name || 'User'}</h3>
            <p className="text-indigo-200 text-sm">Administrator</p>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between py-2 border-b border-gray-50">
              <span className="text-sm text-gray-500">Email</span>
              <span className="text-sm font-medium text-gray-900 truncate ml-4">{user?.email || '—'}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-50">
              <span className="text-sm text-gray-500">Status</span>
              <span className="text-sm font-medium flex items-center gap-1.5 text-emerald-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                Active
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-50">
              <span className="text-sm text-gray-500">Member Since</span>
              <span className="text-sm font-medium text-gray-900">Jan 2026</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-gray-500">Role</span>
              <span className="text-sm font-medium text-gray-900">Administrator</span>
            </div>
          </div>
          <div className="px-6 pb-6 grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-200/40">
              <FiEdit3 className="w-4 h-4" />
              Edit
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-200 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition-all">
              <FiStar className="w-4 h-4" />
              Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
