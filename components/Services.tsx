import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Video, BarChart2, MousePointer, Mic, Share2 } from 'lucide-react';

const services = [
  {
    icon: <Instagram size={32} className="text-pink-500" />,
    title: "Social Media Management",
    description: "Daily community engagement, posting schedules, and profile optimization to keep your brand active."
  },
  {
    icon: <Video size={32} className="text-purple-500" />,
    title: "Content Creation",
    description: "High-quality reels, photos, and copy tailored to stop the scroll and capture attention."
  },
  {
    icon: <MousePointer size={32} className="text-blue-500" />,
    title: "Paid Advertising",
    description: "Strategic ROI-focused ad campaigns across Meta, TikTok, and LinkedIn to drive targeted traffic."
  },
  {
    icon: <Mic size={32} className="text-yellow-500" />,
    title: "Influencer Marketing",
    description: "Connecting your brand with authentic voices to amplify reach and build trust."
  },
  {
    icon: <BarChart2 size={32} className="text-green-500" />,
    title: "Analytics & Reporting",
    description: "Deep dive data analysis to understand what works and refine strategies for growth."
  },
  {
    icon: <Share2 size={32} className="text-orange-500" />,
    title: "Brand Strategy",
    description: "Comprehensive roadmaps defining your voice, visual identity, and long-term goals."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-purple-500 uppercase mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Services Built for Growth</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We don't just post content; we create ecosystems that nurture your audience and convert followers into loyal customers.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl group-hover:bg-purple-600/20 transition-all duration-500 translate-x-10 -translate-y-10" />
              
              <div className="bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">{service.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;