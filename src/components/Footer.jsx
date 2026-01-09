import React from 'react';
import { FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import { FcFeedback } from 'react-icons/fc';
import { IoLogoInstagram } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-[#152127] text-neutral-content p-10">
      <aside>
          <h1 className='footer-title font-bold text-3xl'>Home Nest</h1>
        <Link to="/" className='font-medium'>
          terms and conditions
          <br />
          privacy policy
        </Link>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a href='https://www.facebook.com'>
               <FaFacebookF size={24} />

          </a>

          <a href='https://www.instagram.com'>
            <IoLogoInstagram size={24}/>

          </a>
          <a href='https://www.x.com'>
           <FaXTwitter size={24} />

          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;