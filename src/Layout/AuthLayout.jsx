import React from 'react';
import LogIn from '../Pages/Auth/LogIn';
<<<<<<< HEAD
import { Outlet } from 'react-router-dom';
=======
<<<<<<< HEAD
import { Outlet } from 'react-router-dom';
=======
import { Outlet } from 'react-router';
>>>>>>> 99fe351fefc9a8c02f989191d2cf7ee7295cb60c
>>>>>>> 05d8a8a325472d1fe675c66b29ed241ceb7f6d5f
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