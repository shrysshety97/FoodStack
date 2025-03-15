import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id='contact' className='bg-[#222] text-white py-12 w-full'>
      <div className='max-w-screen-xl mx-auto px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
          <div className='flex flex-col items-center md:items-start'>
            <Link to={'/'} className='bold-24 mb-4'>
              <h3>Food<span className='text-secondary'>Stack</span></h3>
            </Link>
            <p className='text-center md:text-left'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida neque nisi, et ornare magna pellentesque sed!.
            </p>
          </div>
          <div className='flex flex-col items-center md:items-start'>
            <h4 className='bold-20 mb-4'>Quick Links</h4>
            <ul className='space-y-2 regular-15 text-gray-30'>
              <li>
                <Link to={'/'} className='hover:text-secondary'>Home</Link>
              </li>
              <li>
                <Link to={'/menu'} className='hover:text-secondary'>Menu</Link>
              </li>
              <li>
                <Link to={'/foods'} className='hover:text-secondary'>Foods</Link>
              </li>
              <li>
                <Link to={'/contact'} className='hover:text-secondary'>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className='flex flex-col items-center md:items-start'>
            <h4 className='bold-20 mb-4'>Policies</h4>
            <ul className='space-y-2 regular-15 text-gray-30'>
              <li>
                <Link to={'/terms'} className='hover:text-secondary'>Terms Of Service</Link>
              </li>
              <li>
                <Link to={'/privacy'} className='hover:text-secondary'>Privacy Policy</Link>
              </li>
              <li>
                <Link to={'/shipping'} className='hover:text-secondary'>Shipping Policy</Link>
              </li>
              <li>
                <Link to={'/returns'} className='hover:text-secondary'>Return Policy</Link>
              </li>
            </ul>
          </div>
          <div className='flex flex-col items-center md:items-start'>
            <h4 className='bold-20 mb-4'>Contact Us</h4>
            <p>
              Email: <a href="mailto:support@foodstack.com" className='hover:text-secondary'>support@foodstack.com</a>
            </p>
            <p>
              Phone: <a href="tel:+1234567890" className='hover:text-secondary'>+1234567890</a>
            </p>
            <p>
              Address: 123 Glam street, city, Country
            </p>
          </div>
        </div>
        <div className='flex flex-col items-center mt-8'>
          <hr className='h-[1px] w-full max-w-screen-md my-4 border-white' />
          <p className='text-center text-sm'>&copy; {new Date().getFullYear()} FoodStack | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
