import React, { useState } from 'react';

export const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleDescription = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const scrollToAppointments = () => {
    const appointmentsSection = document.getElementById('appointments');
    if (appointmentsSection) {
      appointmentsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const servicesData = [
    { title: "Eyebrows", description: "Our eyebrow services are essential for beautifully shaped brows. We offer quick cleanups for a polished look, as well as detailed shaping tailored to enhance your facial features. ", Price: "$15" },
    { title: "Brow Lamination", description: "Transform your brows with our brow lamination service. This trending treatment uses a gentle chemical solution to lift and straighten your brow hairs, resulting in a fuller and more defined look. Please avoid wetting your brows for 24 hours post-treatment. ",Price: "$75"  },
    { title: "Brow Lamination with Tint", description: "Experience the best of both worlds with our brow lamination combined with tinting. This service not only lifts and shapes your brows but also adds a rich color that enhances your features, ensuring they look effortlessly polished. ",Price: "$85"  },
    { title: "Brow Lamination with Tint and Thread", description: "Achieve the ultimate brow transformation with our brow lamination, tint, and threading service. This comprehensive treatment defines and colors your brows while eliminating any stray hairs for a perfectly groomed appearance. ", Price: "$95"  },
    { title: "Brow Lamination with Thread", description: "Our brow lamination with threading service provides a polished look by lifting and shaping your brows while also tidying up any unwanted hairs. This combination gives you beautifully defined brows. ", Price: "$80"  },
    { title: "Brow Henna", description: "If you're looking for fuller, thicker brows or dealing with patchy areas, our brow henna service is perfect for you! This treatment enhances your natural shape with rich color, resulting in Instagram-worthy brows. Avoid wetting your brows for 24 hours after your appointment.",Price: "$30"  },
    { title: "Tint (Darkening)", description: "Enhance your natural beauty with our darkening tint service for brows and lashes. This treatment deepens your natural color, creating a fuller look that lasts without daily makeup. Avoid wetting the area for 24 hours post-appointment.",Price: "$20"  },
    { title: "Tint (Lightening)", description: "Brighten your brows and lashes with our lightening tint service. This gentle treatment softens your color, providing a lighter, more delicate look that enhances your features effortlessly. Avoid wetting the area for 24 hours after your session.", Price: "$20"  },
    { title: "Lash Lift & Tint", description: "Elevate your lashes with our lash lift and tint service! This semi-permanent treatment lifts and curls your natural lashes while the tint adds definition. Enjoy stunning lashes without the daily hassle—just remember to come in with clean lashes. ", Price:"$80" },
    { title: "Lash Tint", description: "Revitalize your lashes with our lash tint service, creating the effect of wearing mascara without the morning routine. This service provides beautifully defined lashes while allowing you to enjoy a natural look. Avoid wetting your lashes for 24 hours after your appointment. ", Price: "$50" },
    { title: "Lash Lift", description: "Transform your natural lashes with our lash lift service, giving them a beautiful curl and lift. This treatment enhances your lashes, making them look fuller and more defined without the need for mascara. Avoid wetting your lashes for 24 hours post-service.", Price: "$70" },
    { title: "Forehead", description: "Achieve a smooth forehead with our threading service! Our expert technique removes unwanted baby hairs, giving you a polished look without the hassle of constant maintenance.", Price: "$10" },
    { title: "SideBurns", description: "Refresh your look with our sideburns threading service! Our precise technique shapes and cleans up sideburns, giving you a modern, clean-cut appearance. ", Price: "$12" },
    { title: "Upper Lip", description: "Gently remove unwanted hair from your upper lip with our threading service. This precise method leaves your upper lip smooth and well-defined, enhancing your overall appearance. ", Price: "$10"  },
    { title: "Full Face", description: "Achieve a flawless look with our full face threading service. This thorough treatment removes unwanted hair, leaving your skin smooth and radiant. Enjoy a polished appearance without irritation. ", Price: "$45"  },
    { title: "Chin", description: "Tired of stubborn chin hairs? Our threading service will effectively remove them, ensuring your chin looks smooth and well-groomed. Gain confidence with a polished appearance. ", Price: "$10" },
    { title: "Neck", description: "Remove unwanted neck hair with our threading service, ensuring a clean and well-groomed look. This service gives you a polished neck appearance, helping you feel confident and fresh. ", Price: "$12"  },
  ];

  return (
    <div className="flex flex-col justify-between space-y-8 p-4 items-center w-full">
      <h1 className="text-2xl font-bold underline transition-transform duration-300 hover:scale-150 font-custom">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {servicesData.map((service, index) => (
          <div 
            key={index} 
            className={`flex flex-col justify-between space-y-2 items-center bg-rose-100 backdrop-blur-md p-4 rounded-2xl shadow-lg transition-all duration-300 ${activeIndex === index ? 'h-auto' : 'h-16'} cursor-pointer`} 
            onClick={() => toggleDescription(index)}
          >
            <h1 className="text-lg font-custom">
              {service.title}
            </h1>
            {activeIndex === index && (
            <div className='bg-white rounded-2xl p-2 text-center'>
                <p className="text-md text-center pl-2 pr-2 font-custom">{`Pricing: ${service.Price}`}</p>
                <p className="text-md text-justify pl-2 pr-2">{service.description}</p>
                <button onClick={scrollToAppointments} className="bg-rose-200  text-black font-custom p-2 rounded-xl">Book Now</button>
            </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}
