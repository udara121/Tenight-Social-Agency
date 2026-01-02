import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  stats: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Apex Athletics",
    category: "Paid Social",
    image: "https://picsum.photos/id/453/800/600",
    stats: [{ label: "ROAS", value: "4.5x" }, { label: "Reach", value: "2M+" }]
  },
  {
    id: 2,
    title: "Lumina Tech",
    category: "Brand Strategy",
    image: "https://picsum.photos/id/180/800/800",
    stats: [{ label: "Growth", value: "+120%" }, { label: "Leads", value: "500+" }]
  },
  {
    id: 3,
    title: "Urban Coffee",
    category: "Content Creation",
    image: "https://picsum.photos/id/425/800/500",
    stats: [{ label: "Engagement", value: "8.2%" }, { label: "Views", value: "150k" }]
  },
  {
    id: 4,
    title: "Velvet Fashion",
    category: "Influencer Campaign",
    image: "https://picsum.photos/id/338/800/700",
    stats: [{ label: "Sales", value: "$50k" }, { label: "Creators", value: "12" }]
  },
  {
    id: 5,
    title: "TechFlow App",
    category: "Growth Hacking",
    image: "https://picsum.photos/id/3/800/600",
    stats: [{ label: "Installs", value: "10k" }, { label: "CPA", value: "$2.10" }]
  },
  {
    id: 6,
    title: "EcoLiving",
    category: "Social Management",
    image: "https://picsum.photos/id/292/800/800",
    stats: [{ label: "Followers", value: "+25k" }, { label: "Viral Posts", value: "5" }]
  },
];

const Portfolio: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <section id="portfolio" className="py-24 bg-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16"
        >
          <div>
            <h2 className="text-sm font-bold tracking-widest text-pink-500 uppercase mb-3">Our Work</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Recent Case Studies</h3>
          </div>
          <button className="mt-6 md:mt-0 text-gray-400 hover:text-white transition-colors border-b border-gray-700 hover:border-white pb-1">
            View All Projects
          </button>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              layoutId={`card-${project.id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedId(project.id)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${index === 1 || index === 3 ? 'md:row-span-2 md:h-full' : ''}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-purple-400 text-sm font-bold mb-1">{project.category}</span>
                <h4 className="text-2xl font-bold">{project.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedId && selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                onClick={() => setSelectedId(null)}
              />
              
              <motion.div
                layoutId={`card-${selectedId}`}
                className="bg-neutral-900 w-full max-w-3xl rounded-3xl overflow-hidden relative z-10 border border-white/10"
              >
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-4 right-4 z-20 p-2 bg-black/50 rounded-full text-white hover:bg-white hover:text-black transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="relative h-64 md:h-80">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
                  <div className="absolute bottom-6 left-6 md:left-10">
                    <span className="bg-purple-600 text-xs font-bold px-3 py-1 rounded-full text-white mb-2 inline-block">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold mt-2">{selectedProject.title}</h3>
                  </div>
                </div>

                <div className="p-6 md:p-10 grid md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="text-lg font-bold mb-4 text-gray-200">Project Overview</h5>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      We partnered with {selectedProject.title} to revolutionize their digital presence. Through targeted campaigns and creative storytelling, we achieved remarkable growth in key metrics within just 3 months.
                    </p>
                    <button className="flex items-center gap-2 text-purple-400 font-medium hover:text-purple-300 transition-colors">
                      View Live Project <ExternalLink size={16} />
                    </button>
                  </div>
                  
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                    <h5 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">Key Results</h5>
                    <div className="grid grid-cols-2 gap-6">
                      {selectedProject.stats.map((stat, idx) => (
                        <div key={idx}>
                          <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                          <div className="text-xs text-gray-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;