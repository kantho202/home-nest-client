import React, { use } from 'react';
import { Link, Links, NavLink } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import button from 'daisyui/components/button';

const Navbar = () => {
    const links = <>
        <NavLink to="/" className="mr-3 mb-3 lg:mb-0 text-[15px] text-[#0c121c] font-regular"><li>Home</li></NavLink>
        <NavLink to="/allProperties" className="mr-3 mb-3 lg:mb-0 text-[15px] text-[#0c121c] font-regular"><li>All Properties</li></NavLink>
        <NavLink to="/addProperties" className="mr-3 mb-3 lg:mb-0 text-[15px] text-[#0c121c] font-regular"><li>Add Properties</li></NavLink>
        <NavLink to="/myProperties" className="mr-3 mb-3 lg:mb-0 text-[15px] text-[#0c121c] font-regular"><li>My Properties</li></NavLink>
        <NavLink to="/myRatings" className="mr-3 mb-3 lg:mb-0 text-[15px] text-[#0c121c] font-regular"><li>My Ratings</li></NavLink>
    </>

    const { user ,signOutUser} = use(AuthContext)
    const handleLogOut =()=>{
        signOutUser()
    }
    return (

        <div className="navbar  lg:w-10/12 mx-auto ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                        <Link to="/auth/logIn" className="btn mr-5 mb-3 lg:mb-0 btn-outline btn-primary">LogIn</Link>
                        <Link to="/auth/register" className="btn btn-primary mr-5">Register</Link>
                    </ul>




                </div>
                <a href='/' className=" text-2xl text-center font-semibold  ">Home Nest</a>

            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 hidden lg:flex justify-between ">
                    {links}
                </ul>
                {
                    user ? <button onClick={handleLogOut} className='btn btn-sm btn-outline btn-primary '>LogOut</button>
                        :
                        <>
                            <Link to="/auth/logIn" className="btn btn-sm mr-4 btn-outline btn-primary">LogIn</Link>
                            <Link to="/auth/register" className="btn btn-sm btn-primary">Register</Link>
                        </>
                }

            </div>
        </div>
    );
};

export default Navbar;