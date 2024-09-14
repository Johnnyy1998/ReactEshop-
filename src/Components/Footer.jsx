import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-orange-950 text-white py-8'>
      <div className='container mx-auto px-8'>
        <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
          {/* Company Info */}
          <div className='mb-4 md:mb-0'>
            <h2 className='text-2xl font-bold'>WebCenter</h2>
            <p className='text-gray-400 mt-2'>
              &copy; {new Date().getFullYear()} WebCenter. All rights reserved.
            </p>
          </div>

          {/* Social Media Links */}
          <div className='flex gap-4'>
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white'>
              <FaFacebookF className='h-6 w-6' />
            </a>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white'>
              <FaTwitter className='h-6 w-6' />
            </a>
            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white'>
              <FaInstagram className='h-6 w-6' />
            </a>
            <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white'>
              <FaLinkedinIn className='h-6 w-6' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
