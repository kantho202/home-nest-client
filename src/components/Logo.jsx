import React from 'react';
import ImageLogo from '../assets/home (1).png'
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import { Link } from 'react-router';
>>>>>>> 99fe351fefc9a8c02f989191d2cf7ee7295cb60c
const Logo = () => {
    return (
        <Link to={'/'}>
        
<<<<<<< HEAD
        <div className="flex   relative  items-center gap-2">
  {/* <img src={ImageLogo} className="w-32 sn -top-15 object-contain" alt="Home Nest Logo" /> */}
  <h3 className="text-[19px] text-center lg:text-3xl font-semibold dm-serif-display-regular ">Home Nest</h3>
=======
        <div className="flex relative  items-center gap-2">
  {/* <img src={ImageLogo} className="w-32 sn -top-15 object-contain" alt="Home Nest Logo" /> */}
  <h3 className="text-3xl font-semibold dm-serif-display-regular ">Home Nest</h3>
>>>>>>> 99fe351fefc9a8c02f989191d2cf7ee7295cb60c
</div>
        </Link>
    );
};

export default Logo;