'use client'
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import AnimatedCounter from './AnimatedCounter'

const CircularProgress = ({ percentage, label, color = 'text-blue-500' }) => {
  const radius = 40;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = 2 * Math.PI * normalizedRadius;

  const controls = useAnimation();

  useEffect(() => {
    controls.start({ strokeDashoffset: circumference - (percentage / 100) * circumference });
  }, [percentage]);

  return (
    <div className="relative w-[90px] h-[90px]">
      <svg height="90" width="90" className="rotate-[-90deg]">
        {/* Background circle */}
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx="45"
          cy="45"
        />
        {/* Animated progress circle */}
        <motion.circle
          stroke="currentColor"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={controls}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className={`${color}`}
          r={normalizedRadius}
          cx="45"
          cy="45"
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        
        <div className="text-xs font-bold"><AnimatedCounter from={0} to={percentage} duration={1.5} />%</div>
        <div className="text-[10px]">{label}</div>
      </div>
    </div>
  );
};

export default CircularProgress;