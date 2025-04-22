import Image from 'next/image'
import React from 'react'
import CircularProgress from './components/CircularProgress'
import LineProgressBar from './components/LineProgressBar'
import Skills from './components/skills'

const page = () => {
  return (
    <div className="relative w-full min-h-screen py-12">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full bg-black z-[-1]"
      >
        <source src="videos/globe2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content over video */}
      <div className="relative z-10 w-2/3 mx-auto md:p-12 p-4 rounded-3xl border-2 border-gray-300 bg-gradient-to-br from-black/60 to-black/60 flex flex-wrap gap-3 justify-between">
        {/* IDENTITY */}
        <div className='flex flex-wrap justify-between items-center w-full'>
          <h1 className="text-2xl md:text-6xl font-bold text-white">Faizan</h1>
          <div className='rounded-full'>
            <Image src="/images/id.jpg" alt="IDENTITY" width={100} height={100} className='rounded-full' />
          </div>
        </div>

        {/* INTRO */}
        <div className='md:w-[48%] bg-gray-700/70 text-white p-5 rounded-3xl'>
          <h2>
            <LineProgressBar percentage={80} label="Web-Developer" color="bg-gradient-to-r from-cyan-500 to-fuchsia-800" textSize='text-2xl' />
          </h2>
          <div>
            A <span className='text-blue-500'>Computer Scientist</span> specializing in web development. I create fast, optimized websites using the latest technologies
          </div><br />
          — That's why you can say me as a <span className='text-blue-500'>Web Developer</span>.
        </div>

        {/* SKILLS */}
        <div className='md:w-[48%] bg-gray-700/70 text-white p-5 rounded-3xl'>
          <h2>
            <LineProgressBar percentage={80} label="Skills" color="bg-gradient-to-r from-cyan-500 to-fuchsia-800" textSize='text-2xl' />
          </h2>
          <div className="flex gap-3 flex-wrap justify-center">
            <CircularProgress percentage={80} label="Web Tech" color="text-blue-500" />
            <CircularProgress percentage={65} label="Tools" color="text-green-500" />
            <CircularProgress percentage={70} label="Languages" color="text-purple-500" />
          </div>
          <div className='mx-3'>
            <Skills />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page