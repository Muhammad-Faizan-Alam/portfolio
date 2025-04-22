'use client';

import Image from 'next/image';

const Skills = () => {
  const skillBadges = [
    'nextjs', 'reactjs', 'mongodb', 'javascript', 'typescript', 'redux-toolkit', 'tailwind', 'c++', 'css', 'html', 'github', 'docker', 'git'
  ];

  return (
    <div className="overflow-hidden whitespace-nowrap py-4">
      <div className="animate-marquee inline-block whitespace-nowrap">
        {Array.from({ length: 2 }).map((_, loopIdx) => (
          <div key={loopIdx} className="inline-flex items-center space-x-3 mx-4">
            {skillBadges.map((data, idx) => (
              <div key={idx} className="p-2 bg-black rounded-xl">
                {data}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;