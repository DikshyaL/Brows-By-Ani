import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Home } from './Home';
import { Services } from './Services';
import { Location } from './Location';
import { Testimonials } from './Testimonials';
import { Gallery } from './Gallery';
import { Contact } from './Contact';
import { Appointments } from './Appointments';
import { FAQ } from './FAQ';
import { Info } from './Info';


const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/location" element={<Location />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/appointments" element={<Appointments />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/info" element={<Info />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
