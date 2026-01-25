import React from 'react';
import LogIn from '../Pages/Auth/LogIn';
import { Outlet } from 'react-router-dom';
import Logo from '../components/logo';

const AuthLayout = () => {
    return (
        // <div>
        //     <Logo></Logo>
        //     <div>
        //         <Outlet></Outlet>
        //     </div>
            
        // </div>
        <div className=''>
        <div className='flex justify-center'>
            <Logo className="mx-auto"></Logo>
        </div>
        <div className='flex justify-center items-center pt-5'>
        <Outlet></Outlet>
       </div>
       </div>
    );
};

export default AuthLayout;