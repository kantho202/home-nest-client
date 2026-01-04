import React from 'react';
import ImageLogo from '../assets/home (1).png'
import { Link } from 'react-router';
const Logo = () => {
    return (
        <Link to={'/'}>
        
        <div className="flex relative  items-center gap-2">
  {/* <img src={ImageLogo} className="w-32 sn -top-15 object-contain" alt="Home Nest Logo" /> */}
  <h3 className="text-3xl font-semibold dm-serif-display-regular ">Home Nest</h3>
</div>
        </Link>
    );
};

export default Logo;