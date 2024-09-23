import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Info = () => {
    return (
        <div className='flex flex-col justify-center items-center border-t-2 border-rose-300'>
            <div className="md:p-10 py-8 flex flex-col sm:flex-row md:w-1/2 justify-between items-center text-black h-40">

               <div className='flex flex-col items-center space-y-2'>
                    <a
                        href="https://www.instagram.com/browsby_ani/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-rose-300"
                    >
                        <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                        <span className='text-black'>@browsby_ani</span>
                    </a>
                    <a
                        href="https://www.facebook.com/profile.php?id=61566122826029"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-rose-300"
                    >
                        <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
                        <span className='text-black'>browsby ani</span>
                    </a>
                </div>
                
                <div className="text-center mt-4 sm:mt-0">
                    <p>
                        <FontAwesomeIcon icon={faPhoneAlt} /> 617-932-1046
                    </p>
                   
                    <p>
                        <a
                            href="mailto:browbyani@gmail.com"
                            className="text-black"
                        >
                            <FontAwesomeIcon icon={faEnvelope} /> browbyani@gmail.com
                        </a>
                    </p>
                </div>
            </div>

            
            <div className="mt-4 sm:mt-0 text-center pb-8">
                <p>&copy; 2024 Brow By Ani. All rights reserved.</p>
            </div>
        </div>
    );
};
