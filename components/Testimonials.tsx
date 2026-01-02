import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CMO, TechNova",
    image: "https://picsum.photos/id/64/100/100",
    text: "Tenight completely transformed our social presence. The engagement rates have tripled in just two months. Their team is proactive, creative, and data-focused.",
    rating: 5
  },
  {
    name: "David Chen",
    role: "Founder, Brew&Co",
    image: "https://picsum.photos/id/91/100/100",
    text: "I was skeptical about agency work, but these guys delivered. The content quality is unmatched, and the paid ad strategy brought our CPA down by 40%.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Director, Luxe Interiors",
    image: "https://picsum.photos/id/65/100/100",
    text: "Professional, stylish, and effective. They captured our brand voice perfectly from day one. Highly recommend for any lifestyle brand.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-neutral-950 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16"
        >
          Trusted by <span className="gradient-text">Visionaries</span>
        </motion.h2>

        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-3xl relative"
            >
              <Quote size={48} className="absolute top-8 left-8 text-purple-500/20" />
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-500 mb-6 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                  <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-xl md:text-2xl text-gray-200 font-medium italic mb-8 relative z-10">
                  "{testimonials[currentIndex].text}"
                </p>

                <div>
                  <h4 className="text-lg font-bold text-white">{testimonials[currentIndex].name}</h4>
                  <p className="text-purple-400 text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-4">
            <button onClick={prevSlide} className="p-3 rounded-full bg-white/5 hover:bg-white/20 transition-colors text-white">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className="p-3 rounded-full bg-white/5 hover:bg-white/20 transition-colors text-white">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;