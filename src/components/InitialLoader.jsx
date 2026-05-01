import React from 'react';
import { motion } from 'framer-motion';
import oliveLogo from '../assets/cliniclogo002.png';

const InitialLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.4, ease: "easeInOut" }
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Logo Container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1]
            }
          }}
          className="mb-8"
        >
          <img
            src={oliveLogo}
            alt="Olive Dental"
            className="h-20 sm:h-24 w-auto object-contain"
          />
        </motion.div>

        {/* Loading Bar Container */}
        <div className="w-48 h-[2px] bg-gray-100 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ left: "-100%" }}
            animate={{
              left: "100%",
              transition: {
                repeat: Infinity,
                duration: 1.5,
                ease: "linear"
              }
            }}
            className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        </div>

        {/* Text Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.5 }
          }}
          className="mt-6 text-gray-400 text-xs font-bold uppercase tracking-[0.3em]"
        >
          Healthcare Excellence
        </motion.p>
      </div>

      {/* Background Decorative Element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.03,
          transition: { duration: 2 }
        }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span className="text-[30vw] font-black leading-none">OLIVE</span>
      </motion.div>
    </motion.div>
  );
};

export default InitialLoader;
