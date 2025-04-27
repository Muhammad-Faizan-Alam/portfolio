"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import CircularProgress from "./components/CircularProgress";
import LineProgressBar from "./components/LineProgressBar";
import Skills from "./components/skills";
import GithubStats from "./components/GithubStats";

const Page = () => {
  const boxRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -150, y: -150 });

  const handleMouseMove = (e) => {
    const rect = boxRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

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

      {/* Content with hover web effect */}
      <div
        ref={boxRef}
        onMouseMove={handleMouseMove}
        className="relative z-10 w-2/3 mx-auto md:p-12 p-4 rounded-3xl border-2 border-gray-300 bg-gradient-to-br from-black/60 to-black/60 flex flex-wrap gap-3 justify-between overflow-hidden"
      >
        {/* Hover Grid Effect */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            maskImage: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,1) 4%, rgba(255,255,255,0) 20%)`,
            WebkitMaskImage: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,1) 4%, rgba(255,255,255,0) 20%)`,
          }}
        >
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute top-0 bottom-0 w-[2px] bg-white/40"
              style={{ left: `${(i / 30) * 100}%` }}
            />
          ))}
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute left-0 right-0 h-[2px] bg-white/40"
              style={{ top: `${(i / 15) * 100}%` }}
            />
          ))}
        </div>

        {/* IDENTITY */}
        <div className='flex flex-wrap justify-between items-center w-full z-10'>
          <h1 className="text-2xl md:text-6xl font-bold text-white">Faizan</h1>
          <div className='rounded-full'>
            <Image src="/images/id.jpg" alt="IDENTITY" width={100} height={100} className='rounded-full' />
          </div>
        </div>

        {/* INTRO */}
        <div className='md:w-[48%] bg-gray-700/70 text-white p-5 rounded-3xl z-10'>
          <h2>
            <LineProgressBar percentage={80} label="Web-Developer" color="bg-gradient-to-r from-cyan-500 to-fuchsia-800" />
          </h2>
          <div>
            A <span className='text-blue-500'>Computer Scientist</span> specializing in web development. I create fast, optimized websites using the latest technologies
          </div><br />
          — That's why you can say me as a <span className='text-blue-500'>Web Developer</span>.
        </div>

        {/* SKILLS */}
        <div className='md:w-[48%] bg-gray-700/70 text-white p-5 rounded-3xl z-10'>
          <h2>
            <LineProgressBar percentage={80} label="Skills" color="bg-gradient-to-r from-cyan-500 to-fuchsia-800" textSize='text-2xl' />
          </h2>
          <div className="flex gap-3 flex-wrap justify-center">
            <CircularProgress percentage={80} label="Web Tech" color="text-blue-500" />
            <CircularProgress percentage={65} label="Tools" color="text-green-500" />
            <CircularProgress percentage={70} label="Languages" color="text-purple-500" />
          </div>
          <div className='md:w-auto w-36 mx-auto overflow-hidden'>
            <Skills />
          </div>
        </div>

        {/* github stats */}
        {/* <div className="w-full z-10">
          <GithubStats />
        </div> */}

      </div>
    </div>
  );
};

export default Page;