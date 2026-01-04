import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';
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