import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Rocket, Crown } from 'lucide-react';

const words = ["Amplify", "Scale", "Rule"];

const Hero: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient Elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-700/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[0%] right-[-5%] w-[400px] h-[400px] bg-pink-600/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-yellow-500/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        {/* Animated King's Crown */}
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="mb-8 relative"
        >
          <motion.div
            animate={{ 
              y: [-10, 10, -10],
              rotate: [-2, 2, -2],
              filter: [
                "drop-shadow(0 0 15px rgba(250, 204, 21, 0.4))", 
                "drop-shadow(0 0 30px rgba(250, 204, 21, 0.7))", 
                "drop-shadow(0 0 15px rgba(250, 204, 21, 0.4))"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Crown size={88} className="text-yellow-400 fill-yellow-400/20" strokeWidth={1.5} />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1 mb-6 backdrop-blur-sm"
        >
          <span className="text-sm font-medium text-gray-300 tracking-wider uppercase">The Royal Standard in Social</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight mb-6"
        >
          Build Your <br />
          <span className="gradient-text relative inline-block min-w-[300px]">
            {words[currentWordIndex]}
            <motion.span
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"
              layoutId="underline"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
        >
          We are Tenight. A digital-first agency crafting strategies that connect, content that captivates, and campaigns that reign supreme.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 flex items-center gap-2"
          >
            Start Your Reign <Rocket size={18} />
          </a>
          <a
            href="#portfolio"
            className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all hover:scale-105"
          >
            View Our Work
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="text-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;