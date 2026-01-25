import { use, useEffect, useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import {
    FiHome,
    FiUser,
    FiSettings,
    FiLogOut,
    FiMenu,
    FiX,
    FiPlus,
    FiList
} from 'react-icons/fi';
import ImageLogo from '../assets/key.png'

const DashboardLayout = () => {
    const { user, signOutUser } = use(AuthContext);
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

    const handleLogout = () => {
        signOutUser()
            .then(() => {
                toast.success('Logged out successfully');
                navigate('/');
            })
            .catch((error) => {
                toast.error('Error logging out');
                console.error(error);
            });
    };

    const sidebarMenuItems = [
        {
            title: 'Dashboard Home',
            icon: <FiHome className="w-5 h-5" />,
            path: '/dashboard'
        },
        {
            title: 'Profile Settings',
            icon: <FiSettings className="w-5 h-5" />,
            path: '/dashboard/profile'
        }
    ];

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

    useEffect(() => {
        const html = document.querySelector('html')
        html.setAttribute("data-theme", theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    const handleTheme = (checked) => {
        setTheme(checked ? 'dark' : 'light')
    }

    return (
        <div className="min-h-screen ">
            {/* Top Navbar */}
            <nav className=" shadow-sm border-b  fixed w-full top-0 z-50 bg-base-100">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Left side - Logo and Menu Toggle */}
                        <div className="flex items-center">
                            <button
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                                className="p-2 rounded-md    focus:outline-none focus:ring-2 
                                  lg:hidden"
                            >
                                {sidebarOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                            </button>

                            <Link to="/" className="flex items-center ml-4 lg:ml-0">
                                <div className="flex relative  items-center gap-2">
                                    <img src={ImageLogo} className="w-7 h-10 object-contain" alt="Home Nest Logo" />
                                    <h3 className="text-3xl font-semibold  font-mono">Home Nest</h3>
                                </div>
                            </Link>
                        </div>

                        {/* Right side - Profile Dropdown */}
                        <div className="relative flex  items-center">
                            {/* theme */}
                            <label className="swap swap-rotate  ">
                                <input type="checkbox" onChange={(e) => handleTheme(e.target.checked)} 
                                className="theme-controller" value="synthwave" />

                                {/* sun icon */}
                                <svg
                                    className="swap-off h-10 w-10 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 30 30">
                                    <path
                                        d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                </svg>

                                {/* moon icon */}
                                <svg
                                    className="swap-on h-10 w-10 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 30 30">
                                    <path
                                        d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                </svg>
                            </label>
                            <button
                                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                                className="flex items-center space-x-3 p-2 rounded-md  focus:outline-none focus:ring-2"
                            >
                                <div className="w-8 h-8  rounded-full flex items-center justify-center">
                                    <span className=" text-sm font-medium flex justify-center">
                                        <img src={user.photoURL} className='rounded-full' alt="" />
                                    </span>
                                </div>
                                <div className="hidden md:block text-left">
                                    <p className="text-sm font-medium ">
                                        {user?.displayName || 'User'}
                                    </p>
                                    <p className="text-xs nav">{user?.email}</p>
                                </div>
                            </button>

                            {/* Profile Dropdown Menu */}
                            {profileDropdownOpen && (
                                <div className="absolute right-0 mt-50 w-48  rounded-md shadow-lg py-1 z-50 border-0
                                 bg-base-100">
                                    <Link
                                        to="/dashboard/profile"
                                        className="flex items-center px-4 py-2 text-sm "
                                        onClick={() => setProfileDropdownOpen(false)}
                                    >
                                        <FiUser className="w-4 h-4 mr-3" />
                                        Profile
                                    </Link>
                                    <Link
                                        to="/dashboard"
                                        className="flex items-center px-4 py-2 text-sm "
                                        onClick={() => setProfileDropdownOpen(false)}
                                    >
                                        <FiHome className="w-4 h-4 mr-3" />
                                        Dashboard Home
                                    </Link>
                                    <hr className="my-1" />
                                    <button
                                        onClick={handleLogout}
                                        className="flex items-center w-full px-4 py-2 text-sm text-red-600 cursor-pointer"
                                    >
                                        <FiLogOut className="w-4 h-4 mr-3" />
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            <div className="flex pt-16">
                {/* Sidebar */}
                <div className={` 
                    fixed inset-y-0 left-0 z-40 w-64  shadow-lg transform transition-transform duration-300 ease-in-out pt-16
                    ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                    lg:translate-x-0 lg:static lg:inset-0 lg:pt-0
                    `}>
                    <div className="flex flex-col h-full">
                        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                            <nav className="mt-5 flex-1 px-2 space-y-1">
                                {sidebarMenuItems.map((item, index) => (
                                    <Link
                                        key={index}
                                        to={item.path}
                                        className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        {item.icon}
                                        <span className="ml-3">{item.title}</span>
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>

                {/* Mobile sidebar overlay */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 z-30 bg-gray-600 bg-opacity-50 lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    ></div>
                )}

                {/* Main Content */}
                <div className="flex-1 lg:pl-0">
                    <main className="p-4 sm:p-6 lg:p-8">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;