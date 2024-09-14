import React from 'react';

const About = () => {
  return (
    <div id='about-us' className='bg-red-100 py-12 px-4 md:px-8'>
      <div className='container mx-auto'>
        <h2 className='text-4xl font-bold text-gray-800 text-center mb-8'>
          About Us
        </h2>
        <div className='flex flex-col md:flex-row md:space-x-8'>
          <div className='md:w-1/2 mb-8 md:mb-0'>
            <img
              src='https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800'
              alt='Team'
              className='w-full h-auto rounded-lg shadow-lg'
            />
          </div>
          <div className='md:w-1/2'>
            <p className='text-lg text-gray-800 mb-4'>
              Welcome to our company! We are dedicated to providing the best products and services to our customers. Our team is passionate about what we do, and we strive to deliver exceptional value and quality.
            </p>
            <p className='text-lg text-gray-800 mb-4'>
              With years of experience in the industry, we have built a reputation for excellence and innovation. Our mission is to exceed customer expectations and continuously improve our offerings.
            </p>
            <p className='text-lg text-gray-800'>
              Thank you for visiting our site. We look forward to serving you and building a lasting relationship.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

