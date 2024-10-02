import React from 'react';
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import { Services } from './Components/Services';
import { Location } from './Components/Location';
import { Testimonials } from './Components/Testimonials';
import { Gallery } from './Components/Gallery';
import { Contact } from './Components/Contact';
import { FAQ } from './Components/FAQ';
import { Info } from './Components/Info';
import Booknow from './Components/Booknow';
import { Team } from './Components/Team';

export const Page = () => {
  return (
    <div className='bg-rose-200'>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="services"><Services /></div>
      <div id="location"><Location /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="gallery"><Gallery /></div>
      <div id="team"><Team /></div>
      <div id="faq"><FAQ /></div>
      <div id="contact"><Contact /></div>
      <div id="info"><Info /></div>
      <Booknow />
    </div>
  );
};

export default Page;
