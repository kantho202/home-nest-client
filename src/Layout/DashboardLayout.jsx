import { use, useEffect, useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { FiHome, FiUser, FiSettings, FiLogOut, FiPlus, FiList } from 'react-icons/fi';
import ImageLogo from '../assets/key.png';

const sidebarMenuItems = [
    { title: 'Dashboard Home', icon: <FiHome className="w-5 h-5" />, path: '/dashboard' },
    { title: 'My Properties', icon: <FiList className="w-5 h-5" />, path: '/dashboard/my-properties' },
    { title: 'Add Property', icon: <FiPlus className="w-5 h-5" />, path: '/dashboard/add-property' },
    { title: 'Profile Settings', icon: <FiSettings className="w-5 h-5" />, path: '/dashboard/profile' },
];

const DashboardLayout = () => {
    const { user, signOutUser } = use(AuthContext);
    const navigate = useNavigate();

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const handleLogout = () => {
        signOutUser()
            .then(() => { toast.success('Logged out successfully'); navigate('/'); })
            .catch(() => toast.error('Error logging out'));
    };

    return (
        <div className="drawer lg:drawer-open">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

            {/* Page content */}
            <div className="drawer-content flex flex-col min-h-screen">

                {/* Navbar */}
                <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-4">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="dashboard-drawer" className="btn btn-ghost btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                className="inline-block w-5 h-5 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </label>
                    </div>

                    <div className="flex-1"></div>

                    {/* Right side */}
                    <div className="flex-none flex items-center gap-2">
                        {/* Theme toggle */}
                        <label className="swap swap-rotate">
                            <input type="checkbox" className="theme-controller"
                                onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')} />
                            <svg className="swap-off h-8 w-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>
                            <svg className="swap-on h-8 w-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                        </label>

                        {/* Profile dropdown */}
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-9 rounded-full">
                                    <img src={user?.photoURL} alt={user?.displayName} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 shadow-lg mt-2">
                                <li className="menu-title px-4 py-2">
                                    <p className="font-semibold text-sm">{user?.displayName || 'User'}</p>
                                    <p className="text-xs opacity-60">{user?.email}</p>
                                </li>
                                <div className="divider my-0"></div>
                                <li><Link to="/dashboard/profile"><FiUser className="w-4 h-4" /> Profile</Link></li>
                                <li><Link to="/dashboard"><FiHome className="w-4 h-4" /> Dashboard</Link></li>
                                <div className="divider my-0"></div>
                                <li>
                                    <button onClick={handleLogout} className="text-error">
                                        <FiLogOut className="w-4 h-4" /> Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Main content */}
                <main className="flex-1 p-4 sm:p-6 lg:p-8">
                    <Outlet />
                </main>
            </div>

            {/* Sidebar */}
            <div className="drawer-side z-40">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <aside className="bg-base-100 w-64 min-h-full shadow-lg flex flex-col">
                    {/* Sidebar header */}
                    <div className="p-4 border-b border-base-200">
                        <Link to="/" className="flex items-center gap-2">
                            <img src={ImageLogo} className="w-7 h-10 object-contain" alt="Home Nest Logo" />
                            <span className="text-xl font-semibold dm-serif-display-regular">Home Nest</span>
                        </Link>
                    </div>

                    {/* Menu */}
                    <ul className="menu p-4 flex-1 gap-1">
                        {sidebarMenuItems.map((item, index) => (
                            <li key={index}>
                                <Link to={item.path} className="flex items-center gap-3 rounded-lg">
                                    {item.icon}
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Logout at bottom */}
                    <div className="p-4 border-t border-base-200">
                        <button onClick={handleLogout}
                            className="btn btn-ghost btn-block text-error justify-start gap-3">
                            <FiLogOut className="w-5 h-5" />
                            Logout
                        </button>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default DashboardLayout;
