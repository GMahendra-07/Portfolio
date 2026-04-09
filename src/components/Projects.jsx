import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolio';

const ProjectCard = ({ project, idx }) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-3xl border border-blue-400/20 hover:border-blue-400/40 transition-all"
      whileHover={{ y: -12 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: idx * 0.15 }}
    >
      {/* Card background */}
      <div className="absolute inset-0 bg-slate-800/30 group-hover:bg-slate-800/50 transition-all" />

      {/* Thumbnail section */}
      <div
        className="h-56 relative overflow-hidden bg-gradient-to-br flex items-center justify-center group"
        style={{ background: project.gradient }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-all">
          <div className="absolute inset-0 bg-radial-gradient from-white/20 to-transparent" />
        </div>

        {/* Icon */}
        <motion.div
          className="text-6xl relative z-10 group-hover:scale-110 transition-transform"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {project.icon}
        </motion.div>

        {/* Tech pills */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 z-10">
          {project.technologies.map((tech, tidx) => (
            <span
              key={tidx}
              className="px-3 py-1 text-xs font-semibold rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Content section */}
      <div className="relative z-20 p-6 lg:p-8">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-300 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {project.features.slice(0, 3).map((feature, fidx) => (
            <li key={fidx} className="text-sm text-gray-400 flex gap-2">
              <span className="text-blue-400 flex-shrink-0">▸</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-blue-400/20">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-blue-400/40 text-blue-400 font-semibold hover:bg-blue-400/20 transition-all group/btn"
          >
            <span>🐙</span>
            <span>GitHub Repo</span>
            <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
          </a>
          <span className="text-xs text-gray-500 font-medium">{project.date}</span>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <section id="projects" className="relative py-10 lg:py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black" />
        <div className="absolute right-1/4 bottom-1/4 w-96 h-96 bg-violet-500/10 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="inline-block px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 mb-4"
            variants={itemVariants}
          >
            <span className="text-xs font-semibold text-blue-400 tracking-widest">🚀 PROJECTS</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            variants={itemVariants}
          >
            Real-Time <span className="text-blue-400">Projects</span>
          </motion.h2>

          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Production-grade applications built during industrial training following complete SDLC methodology.
          </motion.p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
