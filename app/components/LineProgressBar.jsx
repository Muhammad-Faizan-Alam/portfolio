"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const LineProgressBar = ({
  percentage = 80,
  label = "Skill",
  color = "bg-blue-500",
  // textSize = "md:text-2xl text-lg",
}) => {
  const [showLabel, setShowLabel] = useState(false);

  return (
    <div className="w-full my-4">
      <div className="lg:w-2/3 w-full bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className={`rounded-full h-8 flex items-center justify-center text-white font-semibold ${color} lg:text-2xl text-sm`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          onAnimationComplete={() => setShowLabel(true)}
        >
          {showLabel && label}
        </motion.div>
      </div>
    </div>
  );
};

export default LineProgressBar;