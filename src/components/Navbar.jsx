import React, { use } from 'react';
import { Link, Links, NavLink } from 'react-router';
import { AuthContext } from '../context/AuthContext';


const Navbar = () => {
    const links = <>
        <NavLink to="/" className="mr-3 mb-3 lg:mb-3 text-[15px] text-[#0c121c] font-regular"><li>Home</li></NavLink>
        <NavLink to="/allProperties" className="mr-3 mb-3 lg:mb-3 text-[15px] text-[#0c121c] font-regular"><li>All Properties</li></NavLink>
        <NavLink to="/addProperties" className="mr-3 mb-3 lg:mb-3 text-[15px] text-[#0c121c] font-regular"><li>Add Properties</li></NavLink>
        <NavLink to="/myProperties" className="mr-3 mb-3 lg:mb-3 text-[15px] text-[#0c121c] font-regular"><li>My Properties</li></NavLink>
        <NavLink to="/myRatings" className="mr-3 mb-3 lg:mb-3 text-[15px] text-[#0c121c] font-regular"><li>My Ratings</li></NavLink>
    </>

    const { user, signOutUser } = use(AuthContext)
    const handleLogOut = () => {
        signOutUser()
    }
    return (





        <div className="navbar   pl-4  ">
            <div className="navbar-start">



                <div className="">
                    <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        
                        
                        <label htmlFor="my-drawer-1" className="">
                               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>

                        </label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 min-h-full text-center w-80 p-4">
                           
                            {links}
                            <Link to="/auth/logIn" className="btn btn-sm mr-4 mb-3 btn-outline w-full btn-primary">LogIn</Link>
                            <Link to="/auth/register" className="btn btn-sm w-full btn-primary ">Register</Link>
                        </ul>
                    </div>
                </div>


                <div className="dropdown">
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




                </div>
                <a href='/' className=" text-2xl text-center font-semibold ml-4 ">Home Nest</a>

            </div>

            <div className="navbar-end hidden lg:flex pr-4">
                <ul className="menu menu-horizontal px-1 hidden lg:flex justify-between ">
                    {links}
                </ul>
                {
                    user ?
                        <div className="flex gap-2">

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
                                    <li className=''>
                                        <a className="justify-between mb-3 ">
                                            {user?.displayName}
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a className='mb-3 p-2'>{user?.email}</a></li>
                                    <button onClick={handleLogOut} className='btn btn-sm btn-outline btn-primary '>LogOut</button>

                                </ul>
                            </div>
                        </div>
                        :
                        <>
                            <Link to="/auth/logIn" className="btn btn-sm mr-4 btn-outline btn-primary">LogIn</Link>
                            <Link to="/auth/register" className="btn btn-sm btn-primary ">Register</Link>
                        </>
                }

            </div>
        </div>
    );
};

export default Navbar;