import React from 'react'
import logo from '../assets/owner.png'
export const Team = () => {
  return (
    <div className='flex flex-col justify-center items-center p-10  md:w-1/2 space-y-6 m-auto'>
        <h1 className="text-2xl font-bold underline transition-transform duration-300 hover:scale-150 font-custom text-center mb-4">Meet The Owner</h1>
        <div className='flex justify-center items-center'>
        <img src={logo} alt='owner pic' className='pb-6 w-96'/>
        </div>
        
        <h1 className='text-2xl font-custom text-center '>Anisha Lamichhane Aryal</h1>
        <div className='flex justify-center items-center'>
        <p className='text-justify md:w-full p-6 mt-[-8px] '>
        Anisha Lamichhane Aryal is the passionate owner of Brows By Ani, where she transforms beauty into an art form. With a keen eye for detail and a deep appreciation for aesthetics, Anisha has dedicated herself to enhancing the natural beauty of her clients. Her journey in this field is fueled by a love for creating elegant, polished looks that empower individuals to feel confident and beautiful. Through her expertise and commitment to quality, Anisha continually strives to redefine beauty standards, making every visit to Brow By Ani a memorable experience.
        </p>
        </div>
        
    </div>
  )
}
