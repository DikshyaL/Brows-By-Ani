import React from 'react'
import react from '../assets/logo.png';
export const Home: React.FC = () => {
    
  return (
    <div  >
        <div className='p-8 w-full flex flex-row  items-center justify-center'>
            <div className=' sm:ml-20 md:ml-40  ml-4 justify-center item-center'>
                <h1 className=" text-6xl text-black font-custom mt-4 text-center">
                    BROWS BY ANI
                </h1>
                <h3 className='text-xl font-custom sm:text-center'>elevate your natural beauty</h3>
                
            </div>
            <div className="hidden md:flex md:w-1/3 flex p-10 ">
            <img src={react} alt="React Logo" className="w-48 rounded-full" />
            </div>
           
        </div>
    </div>
  )
}
