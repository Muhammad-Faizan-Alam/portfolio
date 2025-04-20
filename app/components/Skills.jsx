// components/SkillsCarousel.jsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const skills = [
  {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    bgColor: '#000000',
  },
  {
    name: 'React.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    bgColor: '#61DAFB',
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    bgColor: '#47A248',
  },
];

const Skills = () => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-10">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index}>
            <div
              className="flex flex-col items-center justify-center rounded-xl shadow-lg p-6 text-white transition-transform hover:scale-105"
              style={{ backgroundColor: skill.bgColor }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-20 h-20 mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Skills;