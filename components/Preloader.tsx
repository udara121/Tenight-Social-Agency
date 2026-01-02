import React from 'react';
import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';

const Preloader: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          className="w-24 h-24 border-t-4 border-l-4 border-purple-600 rounded-full mb-4 absolute"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="relative z-10 flex items-center justify-center w-24 h-24"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
           <Crown size={32} className="text-yellow-400" />
        </motion.div>
        <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mt-28"
        >
            Tenight
        </motion.span>
      </div>
    </motion.div>
  );
};

export default Preloader;