import React from 'react';

const Dashboard = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content - Adjusted Position */}
      <div className="absolute
      md:top-[51%] top-[50.5%]

      md:left-[18.5%] sm:left-[20%] left-[0%] [@media(min-width:700px)]:left-[18.5%] [@media(min-width:640px)]:left-[18.5%]

      md:w-[53vw] sm:w-[67.5vw] w-[100vw] [@media(min-width:700px)]:w-[53%] [@media(min-width:640px)]:w-[53%] [@media(min-width:639px)]:w-[100%]
      h-[70vh] rounded-sm z-50" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1722111091429-dd3dc55979d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFsaWVuc3xlbnwwfDB8MHx8fDA%3D"}}>
        <div className='w-[100%] h-[100%] bg-gray-500 opacity-80 rounded-sm'>
            ashdg
        </div>
      </div>

      <div className='absolute top-[100vh] w-[100%] h-[50vh] bg-[#090B0D] text-white'></div>
    </div>
  );
};

export default Dashboard;