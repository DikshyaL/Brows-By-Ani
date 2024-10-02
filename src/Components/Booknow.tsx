import React from 'react';
import '../index.css';

const Footer = () => {
  const goToBookingPage = () => {
    window.location.href = 'https://squareup.com/appointments/book/wnu3kkm3ou3mzg/LR9195PEZSSME/start';
  };

  return (
    <div className="bg-white p-4 shadow-2xl w-full flex justify-center items-center fixed bottom-0 left-0 z-50">
      <button
        onClick={goToBookingPage}
        className="bg-rose-200 text-black font-custom p-3 rounded-xl text-lg hover:bg-rose-300 transition-colors duration-300"
      >
        Book Now
      </button>
    </div>
  );
};

export default Footer;
