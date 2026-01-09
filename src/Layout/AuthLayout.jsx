import React from 'react';
import LogIn from '../Pages/Auth/LogIn';
<<<<<<< HEAD
import { Outlet } from 'react-router-dom';
=======
import { Outlet } from 'react-router';
>>>>>>> 99fe351fefc9a8c02f989191d2cf7ee7295cb60c
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
        <div className='flex justify-center items-center'>
        <Outlet></Outlet>
       </div>
       </div>
    );
};

export default AuthLayout;