import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, CheckCircle, Award, TrendingUp } from 'lucide-react';

const stats = [
  { icon: <TrendingUp size={24} />, value: 150, suffix: '%', label: "Avg. ROI" },
  { icon: <CheckCircle size={24} />, value: 85, suffix: '+', label: "Projects Done" },
  { icon: <Users size={24} />, value: 40, suffix: '+', label: "Happy Clients" },
  { icon: <Award size={24} />, value: 5, suffix: 'yrs', label: "Experience" },
];

const Counter: React.FC<{ value: number; suffix: string }> = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = (duration / end) * 1; // Speed adjust

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, Math.max(incrementTime, 10)); // Prevent minimal timeout

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-black relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold tracking-widest text-purple-500 uppercase mb-3">Why Tenight?</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Data-Driven Creativity That Delivers</h3>
          <p className="text-gray-400 mb-8 leading-relaxed">
            We bridge the gap between aesthetic excellence and hard data. While others guess, we test. We combine proprietary analytics tools with top-tier creative talent to ensure every pixel serves a purpose.
          </p>
          
          <ul className="space-y-4 mb-10">
            {['Transparent Reporting', '24/7 Dedicated Support', 'Custom Strategy Roadmaps'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                  <CheckCircle size={14} />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-900 border border-white/10 p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:border-purple-500/50 transition-colors group"
            >
              <div className="mb-4 p-3 bg-white/5 rounded-lg text-purple-400 group-hover:text-white group-hover:bg-purple-600 transition-all">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;