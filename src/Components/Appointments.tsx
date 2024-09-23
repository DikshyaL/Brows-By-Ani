import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

export const Appointments = () => {
  const form = useRef();
  const today = new Date().toISOString().split('T')[0];
  const [selectedServices, setSelectedServices] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const servicePrices = {
    'brow_lamination': 75,
    'brow_lamination with Tint': 85,
    'brow_lamination with Tint and Thread': 95,
    'brow_lamination with Thread': 80,
    'lash_lift_tint': 80,
    'lash_tint': 50,
    'lash_lift': 70,
    'brow_henna': 30,
    'full_face': 45,
    'eyebrows': 15,
    'tint_darkening': 20,
    'tint_lightening': 20,
    'forehead': 10,
    'sideburns': 12,
    'upper_lip': 10,
    'chin': 10,
    'neck': 12,
  };

  const handleServiceChange = (e) => {
    const service = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedServices((prev) => [...prev, service]);
      setTotalPrice((prev) => prev + (servicePrices[service] || 0));
    } else {
      setSelectedServices((prev) => prev.filter((s) => s !== service));
      setTotalPrice((prev) => prev - (servicePrices[service] || 0));
    }
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
  
    // Create a string of selected services
    const selectedServicesString = selectedServices.join(', ');
  
    // Set up the form data to be sent to EmailJS
    emailjs.send('service_dqs8yel', 'template_ie5zwem', {
      name: form.current.name.value,
      phone: form.current.phone.value,
      email: form.current.email.value,
      date: form.current.date.value,
      time: selectedTime,
      services: selectedServicesString, // Send the list of services as a string
      price: totalPrice,
      message: form.current.message.value,
    }, 'D27CPhcKan1F1Zda7')
      .then((result) => {
        console.log(result.text);
        alert('Email sent successfully!');
        form.current.reset(); 
        setIsSubmitted(true); 
      }, (error) => {
        console.log(error.text);
        alert('Error sending email. Please try again.');
      });
  };
  
  const getDayOfWeek = (dateString) => {
    const date = new Date(dateString);
    return date.getDay(); 
  };

  const isWeekend = (dateString) => {
    const day = getDayOfWeek(dateString);
    return day === 0 || day === 6; 
  };

  const generateTimeSlots = () => {
    const times = [];
    for (let hour = 10; hour <= 17; hour++) {
      times.push(`${hour}:00`, `${hour}:30`);
    }
    return (
      <select 
        name="time" 
        className="border-2 border-none rounded-md p-2 w-full" 
        value={selectedTime} 
        onChange={(e) => setSelectedTime(e.target.value)} 
        required
      >
        <option value="">Select a Time</option>
        {times.map((time, index) => (
          <option key={index} value={time}>{time}</option>
        ))}
      </select>
    );
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-10'>
      <div className='flex flex-col justify-center items-center p-10 lg:m-1/2 md:w-1/2 space-y-6 m-auto'>
        <h1 className="text-2xl font-custom underline text-center mt-[-20px] transition-transform duration-300 hover:scale-150 p-4">Contact Us</h1>

        <div className="flex flex-row justify-between items-center space-x-8 w-full m-auto">
          <input type="text" name="name" className="border-2 border-none rounded-md p-2 w-2/3" placeholder="Name:" required />
          <input type="text" name="phone" className="border-2 border-none rounded-md p-2" placeholder="Phone No:" required />
        </div>

        <input type="email" name="email" className="border-2 border-none rounded-md p-2 w-full" placeholder="Email:" required />
        <input 
          type="date" 
          name="date" 
          className="border-2 border-none rounded-md p-2 w-full" 
          min={today} 
          value={selectedDate} 
          onChange={handleDateChange} 
          required 
        />

        {selectedDate && (
          <>
            {generateTimeSlots()}
            {isWeekend(selectedDate) && (
              <p className="text-lg text-black">
                Weekend appointments will be confirmed manually. Please proceed to book your preferred time.
              </p>
            )}
          </>
        )}

        <div className="relative w-full">
          <div className="border-2 border-none rounded-md p-2 w-full bg-white text-black cursor-pointer" onClick={toggleDropdown}>
            {/* Display selected services or "Select Services" if none are selected */}
            {selectedServices.length > 0 
              ? selectedServices.map(service => service.replace('_', ' ')).join(', ')
              : 'Select Services'}
          </div>
          {dropdownOpen && (
            <div className="absolute bg-white border rounded-md w-full max-h-60 overflow-y-auto mt-2">
              {Object.keys(servicePrices).map((service, index) => (
                <div key={index} className="flex items-center space-x-3 p-2 hover:bg-gray-100">
                  <input 
                    type="checkbox" 
                    id={service} 
                    value={service} 
                    onChange={handleServiceChange} 
                    checked={selectedServices.includes(service)} // Make sure the checkbox remains checked
                  />
                  <label htmlFor={service}>{service.replace('_', ' ')} - ${servicePrices[service]}</label>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="w-full">
          <input 
            type="text" 
            value={`Total Price: $${totalPrice}`} 
            readOnly 
            className="border-2 border-none rounded-md p-2 w-full bg-gray-200 text-gray-800" 
          />
        </div>

        <input type="hidden" name="price" value={totalPrice} />
        <input type="hidden" name="services" value={selectedServices.join(', ')} /> {/* Hidden field to send services */}

        <textarea name="message" className="border-2 border-none rounded-md p-2 w-full h-48" placeholder="Message:"></textarea>
        <button type='submit' className='bg-white rounded-full p-3 w-1/3 m-auto text-black font-custom text-2xl items-center'>Book Now</button>
      </div>

      {isSubmitted && (
        <div className="text-center text-black text-2xl font-custom mt-6">
          <p>Thank you!! We will contact you soon.</p>
        </div>
      )}
    </form>
  );
};
