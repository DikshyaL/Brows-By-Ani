import React from 'react';
import g1 from '../assets/g1.jpg';
import g2 from '../assets/g2.jpg';
import g3 from '../assets/g3.jpg';
import g4 from '../assets/g4.jpg';
import g5 from '../assets/g5.jpg';
import g6 from '../assets/g6.jpg';
import g7 from '../assets/g7.jpg';

export const Gallery = () => {
    return (
        <div className='flex flex-col justify-center items-center p-10  md:w-full space-y-6 m-auto'>
            <h1 className='text-2xl font-custom underline text-center transition-transform duration-300 hover:scale-150 '>
                Gallery
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 w-full  gap-4 pr-10 pl-10 pb-10'>
                {data.map((item, index) => (
                    <div key={index} className='p-4 relative z-1'>
                        <img 
                            src={item.image} 
                            alt={`Gallery ${index + 1}`} 
                            className='w-full object-cover' 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

const data = [
    { image: g7 }, 
    { image: g2 }, 
    { image: g3 },
    { image: g4 },
    { image: g5 },
    { image: g6 },
    { image: g1 },
   
];
