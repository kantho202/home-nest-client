import React, { use, useEffect, useState } from 'react';
import { Link, Links, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Logo from './logo';
import { CiLogout } from "react-icons/ci";


const Navbar = () => {
    const { user, signOutUser } = use(AuthContext)
      const [bg, setBg] = useState('bg-transparent');
    const [textColor, setTextColor] = useState('text-base-100');
    const links = <>
        <NavLink to="/" className={`mr-5 mb-3 lg:mb-3 text-[15.5px] text-base-100 font-regular ${textColor}`}><li>Home</li></NavLink>
        <NavLink to="/allProperties" className={`mr-5 mb-3 lg:mb-3 text-[15.5px] text-base-100 font-regular ${textColor}`}><li>All Properties</li></NavLink>
        <NavLink to="/addProperties" className={`mr-5 mb-3 lg:mb-3 text-[15.5px] text-base-100 font-regular ${textColor}`}><li>Add Properties</li></NavLink>
        {
            user && <>

                <NavLink to="/myProperties" className={`mr-5 mb-3 lg:mb-3 text-[15.5px] text-base-100 font-regular ${textColor}`}><li>My Properties</li></NavLink>
                <NavLink to="/dashboard" className={`mr-5 mb-3 lg:mb-3 text-[15.5px] text-base-100 font-regular ${textColor}`}><li>Dashboard</li></NavLink>
            </>
        }
        <NavLink to="/myRatings" className={`mr-5 mb-3 lg:mb-3 text-[15.5px] text-base-100 font-regular ${textColor}`}><li>My Ratings</li></NavLink>
    </>



    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

    useEffect(() => {
        const html = document.querySelector('html')
        html.setAttribute("data-theme", theme)
        localStorage.setItem('theme', theme)
    }, [theme])
    const handleLogOut = () => {
        signOutUser()
    }

    const handleTheme = (checked) => {
        setTheme(checked ? 'dark' : 'light')
        // console.log(checked)
        // const html = document.querySelector('html')
        // if (checked) {
        //     html.setAttribute("data-theme", "dark")
        // }
        // else {
        //     html.setAttribute("data-theme", "light")
        // }

    }

  

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setBg('bg-base-100 shadow-md');
                if (theme === 'light') {
                    setTextColor('text-black');
                } else {
                    setTextColor('text-white');
                }
            } else {
                setBg('bg-transparent');
                setTextColor(theme === 'light' ? 'text-black' : 'text-white');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [theme]);

    return (


        // <nav className="fixed top-0 left-0 w-full z-50  backdrop-blur">
        // <nav className={`fixed top-0 left-0 w-full z-50 transition-colors bg-color-base-100 duration-300 ${bg}`}>
<<<<<<< HEAD
        <nav className={`fixed top-0 left-0 w-full z-50 px-2 lg:px-8 transition-colors duration-300 ${bg}`}>



            <div className="navbar flex justify-between items-center  g:justify-between
          ">

                <div className="flex  items-center justify-between ">



                    <div className="lg:hidden pr-2">
=======
        <nav className={`fixed top-0 left-0 w-full z-50 px-8 transition-colors duration-300 ${bg}`}>



            <div className="navbar flex justify-between items-center 
          ">

                <div className="flex items-center justify-between ">



                    <div className="lg:hidden">
>>>>>>> 99fe351fefc9a8c02f989191d2cf7ee7295cb60c
                        <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">


                            <label htmlFor="my-drawer-1" className="">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>

                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
<<<<<<< HEAD
                            <ul className="menu bg-base-100 min-h-full text-center w-80 p-4   items-center">
=======
                            <ul className="menu bg-base-200 min-h-full text-center w-80 p-4">
>>>>>>> 99fe351fefc9a8c02f989191d2cf7ee7295cb60c

                                {links}
                                <Link to="/auth/logIn" className="btn btn-sm mr-4 mb-3 btn-outline outline-[#ff3333] w-full ">LogIn</Link>
                                <Link to="/auth/register" className="btn btn-sm w-full btn-outline my-btn ">Register</Link>
                            </ul>
                        </div>
                    </div>


<<<<<<< HEAD
                    <div className="flex flex-1 justify-center lg:justify-start text-center">
=======
                    <div className="">
>>>>>>> 99fe351fefc9a8c02f989191d2cf7ee7295cb60c
                        {/* <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                        <Link to="/auth/logIn" className="btn mr-5 mb-3 lg:mb-0 btn-outline btn-primary">LogIn</Link>
                        <Link to="/auth/register" className="btn btn-primary mr-5">Register</Link>
                    </ul> */}




                        {/* <a href='/' className=" text-2xl text-center font-semibold ml-4 ">Home Nest</a> */}
<<<<<<< HEAD
                        <Logo className="text-center lg:mx-0  mx-auto"></Logo>
=======
                        <Logo></Logo>
>>>>>>> 99fe351fefc9a8c02f989191d2cf7ee7295cb60c
                    </div>

                </div>

                <div className=' flex '>
                    <ul className='hidden lg:flex '
                    >
                        {links}

                    </ul>
                </div>

                <div className="  flex items-center ">
                    <ul className="menu menu-horizontal px-1 hidden lg:flex justify-between  items-center">



                        {/* {links} */}
                    </ul>
                    {
                        user ?
                            <div className="flex gap-2 mr-4">

                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt="Tailwind CSS Navbar component"
                                                src={user?.photoURL} />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex="-1"
                                        className="menu menu-md dropdown-content bg-base-100 rounded-box z-2 mt-3 w-70 p-2 shadow">
                                            <li><a className='mb-3 p-2'>My Profile</a></li>
                                        <li className=''>
                                            <a className="justify-between mb-3 ">
                                                {user?.displayName}
                                                <span className="badge">New</span>
                                            </a>
                                        </li>
                                        {/* <li><a className='mb-3 p-2'>{user?.email}</a></li> */}
                                        
                                        <button onClick={handleLogOut} className='btn btn-sm btn-outline my-btn border-0 '>
                                            <CiLogout size={20} /> LogOut</button>

                                    </ul>
                                </div>
                            </div>
                            :
                            <>
<<<<<<< HEAD
                                <Link to="/auth/logIn" className="btn btn-sm mr-4 btn-outline border-0 my-btn hidden lg:flex">LogIn</Link>
                                <Link to="/auth/register" className="btn btn-sm my-btn mr-4 border-0 hidden lg:flex">Register</Link>
=======
                                <Link to="/auth/logIn" className="btn btn-sm mr-4 btn-outline border-0 my-btn">LogIn</Link>
                                <Link to="/auth/register" className="btn btn-sm my-btn mr-4 border-0">Register</Link>
>>>>>>> 99fe351fefc9a8c02f989191d2cf7ee7295cb60c
                            </>
                    }
                    {/* theme */}
                    <label className="swap swap-rotate text-gray-600 ">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" onChange={(e) => handleTheme(e.target.checked)} className="theme-controller" value="synthwave" />

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


                </div>
            </div>
        </nav>
    );
};

export default Navbar;