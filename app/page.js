import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='md:p-20 p-12 bg-black h-screen'>
      <div className='md:text-3xl text-2xl font-bold text-gray-400'>Welcome, I&#39;m
        <div className='md:text-4xl text-3xl text-purple-500 pl-12'>Muhammad Faizan Alam</div>
      </div>
      <Link href="/Dashboard">
        <div className='md:w-[30%] w-[70%] mx-auto'>
          <video autoPlay loop muted playsInline className="w-full h-auto">
            <source src="/videos/cube.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Link>
      <p className='text-white text-center'>Click on cube to open my Dura Box</p>
    </div>
  )
}

export default page