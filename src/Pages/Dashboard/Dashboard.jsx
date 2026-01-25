import { use } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useDashboardData } from '../../hook/useDashboardData';
import { 
    FiHome, 
    FiPlus, 
    FiList, 
    FiUser, 
    FiEye,
    FiTrendingUp,
    FiDollarSign,
    FiCalendar,
    FiMapPin,
    FiStar,
    FiArrowRight,
     FiActivity ,
    FiBarChart2, 
    FiPieChart,
    FiSettings,
    FiBell,
    FiRefreshCw
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {
    MonthlyPropertiesChart,
    ViewsLineChart,
    PropertyTypesPieChart,
    RevenueAreaChart
} from '../../components/DashboardCharts';
import DashboardTable from '../../components/DashboardTable';

const Dashboard = () => {
    const { user } = use(AuthContext);
    const { overview, chartData, recentProperties, loading, error } = useDashboardData();

    const dashboardStats = [
        {
            title: 'Total Properties',
            count: loading ? '...' : overview.totalProperties,
            change: '+12%',
            changeType: 'increase',
            icon: <FiHome className="w-5 h-5 sm:w-6 sm:h-6" />,
            color: 'bg-blue-500',
            bgColor: 'bg-blue-50',
            textColor: 'text-blue-600',
            gradient: 'from-blue-500 to-blue-600'
        },
        {
            title: 'Active Listings',
            count: loading ? '...' : overview.activeListings,
            change: '+8%',
            changeType: 'increase',
            icon: <FiList className="w-5 h-5 sm:w-6 sm:h-6" />,
            color: 'bg-green-500',
            bgColor: 'bg-green-50',
            textColor: 'text-green-600',
            gradient: 'from-green-500 to-green-600'
        },
        {
            title: 'Total Views',
            count: loading ? '...' : overview.totalViews?.toLocaleString(),
            change: '+23%',
            changeType: 'increase',
            icon: <FiEye className="w-5 h-5 sm:w-6 sm:h-6" />,
            color: 'bg-purple-500',
            bgColor: 'bg-purple-50',
            textColor: 'text-purple-600',
            gradient: 'from-purple-500 to-purple-600'
        },
        {
            title: 'Monthly Revenue',
            count: loading ? '...' : `$${overview.monthlyRevenue?.toLocaleString()}`,
            change: '+15%',
            changeType: 'increase',
            icon: <FiDollarSign className="w-5 h-5 sm:w-6 sm:h-6" />,
            color: 'bg-orange-500',
            bgColor: 'bg-orange-50',
            textColor: 'text-orange-600',
            gradient: 'from-orange-500 to-orange-600'
        }
    ];

    const quickActions = [
        {
            title: 'Add New Property',
            description: 'List a new property for sale or rent',
            icon: <FiPlus className="w-6 h-6 sm:w-8 sm:h-8" />,
            link: '/addProperties',
            color: 'bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800',
            iconBg: 'bg-white/20 backdrop-blur-sm',
            shadow: 'shadow-blue-500/25'
        },
        {
            title: 'Manage Properties',
            description: 'View and edit your existing listings',
            icon: <FiList className="w-6 h-6 sm:w-8 sm:h-8" />,
            link: '/myProperties',
            color: 'bg-gradient-to-br from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800',
            iconBg: 'bg-white/20 backdrop-blur-sm',
            shadow: 'shadow-green-500/25'
        },
        {
            title: 'View Analytics',
            description: 'Check your property performance',
            icon: <FiTrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />,
            // link: '/dashboard/analytics',
            color: 'bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 hover:from-purple-600 hover:via-purple-700 hover:to-purple-800',
            iconBg: 'bg-white/20 backdrop-blur-sm',
            shadow: 'shadow-purple-500/25'
        }
    ];

    const recentActivities = [
        {
            type: 'inquiry',
            message: 'New inquiry received for Modern Villa',
            time: '2 hours ago',
            icon: <FiUser className="w-4 h-4" />,
            color: 'text-blue-600 bg-blue-100',
            dot: 'bg-blue-500'
        },
        {
            type: 'view',
            message: 'Property viewed 15 times today',
            time: '4 hours ago',
            icon: <FiEye className="w-4 h-4" />,
            color: 'text-green-600 bg-green-100',
            dot: 'bg-green-500'
        },
        {
            type: 'update',
            message: 'Cozy Apartment listing updated',
            time: '1 day ago',
            icon: <FiActivity  className="w-4 h-4" />,
            color: 'text-purple-600 bg-purple-100',
            dot: 'bg-purple-500'
        },
        {
            type: 'rating',
            message: 'Received 5-star rating from client',
            time: '2 days ago',
            icon: <FiStar className="w-4 h-4" />,
            color: 'text-yellow-600 bg-yellow-100',
            dot: 'bg-yellow-500'
        }
    ];

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="bg-red-50 border border-red-200 rounded-xl p-6 sm:p-8 text-center max-w-md w-full">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FiRefreshCw className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-red-900 mb-2">Error Loading Dashboard</h3>
                    <p className="text-red-600 mb-4">{error}</p>
                    <button 
                        onClick={() => window.location.reload()} 
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6 sm:space-y-8">
            {/* Welcome Header - Enhanced Mobile Design */}
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-2xl shadow-blue-500/25 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl"></div>
                <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-48 sm:h-48 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="mb-4 lg:mb-0">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 leading-tight">
                            Welcome back, {user?.displayName?.split(' ')[0] || 'User'}! 👋
                        </h1>
                        <p className="text-blue-100 text-base sm:text-lg opacity-90">
                            Here's what's happening with your properties today.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                        <div className="flex items-center space-x-2 text-blue-100 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                            <FiCalendar className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="text-sm sm:text-base font-medium">
                                {new Date().toLocaleDateString('en-US', { 
                                    weekday: 'short', 
                                    month: 'short', 
                                    day: 'numeric' 
                                })}
                            </span>
                        </div>
                        <button className="flex items-center space-x-2 text-blue-100 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 hover:bg-white/20 transition-colors">
                            <FiBell className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="text-sm sm:text-base font-medium">3 New</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Overview Cards - Enhanced Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {dashboardStats.map((stat, index) => (
                    <div key={index} className={`rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 hover:shadow-lg hover:shadow-${stat.color.split('-')[1]}-500/10 transition-all duration-300 transform hover:-translate-y-1 group`}>
                        <div className="flex items-center justify-between mb-3 sm:mb-4">
                            <div className={`${stat.bgColor} p-2.5 sm:p-3 rounded-lg sm:rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                                <div className={stat.textColor}>
                                    {stat.icon}
                                </div>
                            </div>
                            <div className={`flex items-center text-xs sm:text-sm font-medium ${
                                stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                            } bg-green-50 px-2 py-1 rounded-full`}>
                                <FiTrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                                {stat.change}
                            </div>
                        </div>
                        <div>
                            <p className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 leading-none">{stat.count}</p>
                            <p className="text-xs sm:text-sm text-gray-600 font-medium">{stat.title}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick Actions - Enhanced Mobile Layout */}
            <div className=" rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <h2 className="text-lg sm:text-xl font-semibold ">Quick Actions</h2>
                    <FiSettings className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {quickActions.map((action, index) => (
                        <Link
                            key={index}
                            to={action.link}
                            className={`${action.color} ${action.shadow} text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl group relative overflow-hidden`}
                        >
                            {/* Background Pattern */}
                            <div className="absolute inset-0 bg-white/5"></div>
                            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                            
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-3 sm:mb-4">
                                    <div className={`${action.iconBg} p-2.5 sm:p-3 rounded-lg sm:rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                                        {action.icon}
                                    </div>
                                    <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </div>
                                <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">{action.title}</h3>
                                <p className="text-xs sm:text-sm opacity-90 leading-relaxed">{action.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Dynamic Charts Section - Enhanced Responsive Layout */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
                {/* Monthly Properties Bar Chart */}
                <div className="rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <h2 className="text-lg sm:text-xl font-semibold  flex items-center">
                            <div className="w-8 h-8  rounded-lg flex items-center justify-center mr-3">
                                <FiBarChart2 className="w-4 h-4 sm:w-5 sm:h-5 " />
                            </div>
                            <span className="hidden sm:inline">Monthly Properties</span>
                            <span className="sm:hidden">Properties</span>
                        </h2>
                        <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">6M</div>
                    </div>
                    {loading ? (
                        <div className="h-[250px] sm:h-[300px] flex items-center justify-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 "></div>
                        </div>
                    ) : (
                        <div className="h-[250px] sm:h-[300px]">
                            <MonthlyPropertiesChart data={chartData.monthlyStats} />
                        </div>
                    )}
                </div>

                {/* Views Line Chart */}
                <div className=" rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <h2 className="text-lg sm:text-xl font-semibold  flex items-center">
                            <div className="w-8 h-8  rounded-lg flex items-center justify-center mr-3">
                                <FiTrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                            </div>
                            <span className="hidden sm:inline">Views Trend</span>
                            <span className="sm:hidden">Views</span>
                        </h2>
                        <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">Live</div>
                    </div>
                    {loading ? (
                        <div className="h-[250px] sm:h-[300px] flex items-center justify-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
                        </div>
                    ) : (
                        <div className="h-[250px] sm:h-[300px]">
                            <ViewsLineChart data={chartData.monthlyStats} />
                        </div>
                    )}
                </div>

                {/* Property Types Pie Chart */}
                <div className=" rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <h2 className="text-lg sm:text-xl font-semibold  flex items-center">
                            <div className="w-8 h-8  rounded-lg flex items-center justify-center mr-3">
                                <FiPieChart className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                            </div>
                            <span className="hidden sm:inline">Property Types</span>
                            <span className="sm:hidden">Types</span>
                        </h2>
                        <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">All</div>
                    </div>
                    {loading ? (
                        <div className="h-[250px] sm:h-[300px] flex items-center justify-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
                        </div>
                    ) : (
                        <div className="h-[250px] sm:h-[300px]">
                            <PropertyTypesPieChart data={chartData.propertyTypes} />
                        </div>
                    )}
                </div>

                {/* Revenue Area Chart */}
                <div className=" rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <h2 className="text-lg sm:text-xl font-semibold  flex items-center">
                            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                                <FiDollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                            </div>
                            <span className="hidden sm:inline">Revenue Breakdown</span>
                            <span className="sm:hidden">Revenue</span>
                        </h2>
                        <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">YTD</div>
                    </div>
                    {loading ? (
                        <div className="h-[250px] sm:h-[300px] flex items-center justify-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600"></div>
                        </div>
                    ) : (
                        <div className="h-[250px] sm:h-[300px]">
                            <RevenueAreaChart data={chartData.revenueData} />
                        </div>
                    )}
                </div>
            </div>

            {/* Dynamic Data Table - Enhanced Mobile Experience */}
            {/* <div className="overflow-hidden">
                <DashboardTable properties={recentProperties} loading={loading} />
            </div> */}

            {/* Recent Activity - Enhanced Mobile Layout */}
            <div className=" rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <h2 className="text-lg sm:text-xl font-semibold ">Recent Activity</h2>
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-gray-500">Live</span>
                    </div>
                </div>
                <div className="space-y-3 sm:space-y-4">
                    {recentActivities.map((activity, index) => (
                        <div key={index} className="flex items-start space-x-3 sm:space-x-4 p-3 rounded-lg
                         hover:bg-gray-50 hover:text-base-100 transition-colors duration-200">
                            <div className="relative">
                                <div className={`p-2 rounded-lg ${activity.color}`}>
                                    {activity.icon}
                                </div>
                                <div className={`absolute -top-1 -right-1 w-3 h-3 ${activity.dot} rounded-full border-2
                                 border-white`}></div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium leading-relaxed">{activity.message}</p>
                                <p className="text-xs  mt-1 flex items-center">
                                    <FiCalendar className="w-3 h-3 mr-1" />
                                    {activity.time}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4 sm:mt-6 pt-4 border-t border-gray-100">
                    <Link 
                        // to="/dashboard/activity" 
                        className="text-red-600 hover:text-red-700 text-sm font-medium 
                        flex items-center justify-center py-2 px-4 rounded-lg hover:bg-blue-50
                         transition-colors duration-200"
                    >
                        View All Activity <FiArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;