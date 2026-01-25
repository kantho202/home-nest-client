import React from 'react';
import ImageLogo from '../assets/marketing-agency.png'
import { Link } from 'react-router-dom';
const Logo = () => {
    return (
        <Link to={'/'}>

            <div className="flex relative  items-center gap-2">
                <img src={ImageLogo} className="w-7 h-10 object-contain " alt="Home Nest Logo" />
                <h3 className="text-3xl font-semibold  font-mono">Home Nest</h3>
            </div>
        </Link>
    );
};

export default Logo;