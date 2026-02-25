import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
export function Hero() {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 50,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  return <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 pb-12 overflow-hidden">
      <motion.div className="max-w-7xl mx-auto w-full flex flex-col justify-center flex-1" variants={containerVariants} initial="hidden" animate="visible">
        {/* Editorial Top Label */}
        

        {/* Massive Name Treatment */}
        <div className="relative z-10">
          <motion.h1 variants={itemVariants} className="font-serif font-black text-[12vw] leading-[0.85] tracking-tight text-ink">
            Basil
          </motion.h1>
          <motion.h1 variants={itemVariants} className="font-serif font-black text-[12vw] leading-[0.85] tracking-tight text-ink ml-[5vw] sm:ml-[10vw]">
            Lone
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.div variants={itemVariants} className="mt-12 max-w-2xl ml-auto mr-[5vw]">
          <div className="h-[1px] w-24 bg-accent mb-6"></div>
          
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div className="absolute bottom-8 left-6 md:left-12 flex items-center space-x-4" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.5,
      duration: 1
    }}>
        <span className="font-sans text-[10px] tracking-[0.2em] text-muted uppercase">
          Scroll to explore
        </span>
        <motion.div animate={{
        y: [0, 5, 0]
      }} transition={{
        repeat: Infinity,
        duration: 2,
        ease: 'easeInOut'
      }}>
          <ArrowDown className="w-4 h-4 text-accent" />
        </motion.div>
      </motion.div>
    </section>;
}