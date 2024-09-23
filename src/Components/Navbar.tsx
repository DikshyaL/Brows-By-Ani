import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';
import '../index.css';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const scrollToAppointments = () => {
    const appointmentsSection = document.getElementById('appointments');
    if (appointmentsSection) {
      appointmentsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white sticky top-0 z-50 h-16 w-full p-2 flex flex-row justify-between mx-auto items-center shadow-2xl text-black rounded-xl">
      <div className="flex flex-row font-custom justify-between space-x-6 justify-center items-center">
        <img src={logo} alt="Brand Logo" className="h-12 w-12 rounded-full ml-2" />
        <h1 className="text-2xl font-bold">BROWS BY ANI</h1>
      </div>

      <div className="hidden justify-between md:flex space-x-4 p-4 w-4/6 text-lg">
        {['Home', 'Services', 'Location', 'Testimonials', 'Gallery', 'Appointments', 'Contact', 'FAQ',].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className='transition-transform duration-300 hover:scale-150'>
            {item}
          </a>
        ))}
        <button onClick={scrollToAppointments} className="bg-rose-200 text-black font-custom p-2 rounded-xl">Book Now</button>
      </div>

      <div className="md:hidden">
        <button onClick={toggleNavbar} className="text-black text-2xl">
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
      </div>

      {isOpen && (
        <div className="flex flex-col space-y-6 bg-white w-full h-screen p-4 absolute top-16 left-0 z-50 md:hidden items-center text-lg text-black">
          {['Home', 'Services', 'Location', 'Testimonials', 'Gallery', 'Appointments', 'Contact', 'FAQ'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className='transition-transform duration-300 hover:scale-150'>
              {item}
            </a>
          ))}
          <button onClick={scrollToAppointments} className="bg-rose-200 text-black font-custom p-2 rounded-xl">Book Now</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
