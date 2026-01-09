import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
<<<<<<< HEAD
import { Outlet } from 'react-router-dom';
=======
import { Outlet } from 'react-router';
>>>>>>> 99fe351fefc9a8c02f989191d2cf7ee7295cb60c
import Banner from '../Pages/Home/Banner';

const MainLayout = () => {
    return (
        <div>
            <div>
                <div className='relative'>

                <Navbar></Navbar>
                
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;