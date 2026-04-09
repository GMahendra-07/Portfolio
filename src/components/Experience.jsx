import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';

const Experience = () => {
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
    <section id="experience" className="relative pt-[40px] pb-[60px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black" />
        <div className="absolute left-1/4 top-1/3 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mt-6 lg:mt-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="inline-block px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 mb-4"
            variants={itemVariants}
          >
            <span className="text-xs font-semibold text-blue-400 tracking-widest">💼 EXPERIENCE</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            variants={itemVariants}
          >
            Industrial <span className="text-blue-400">Training Journey</span>
          </motion.h2>

          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Real-world exposure through intensive, industry-oriented training programs.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative mt-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Timeline items */}
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              className="mb-6 md:mb-10 relative"
              variants={itemVariants}
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-3 z-10">
                <motion.div
                  className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 shadow-lg shadow-blue-500/50 border-4 border-slate-900"
                  whileHover={{ scale: 1.2 }}
                />
              </div>

              {/* Content */}
              <motion.div
                className="mx-auto w-full md:w-[80%] xl:max-w-[1000px] md:px-8"
                whileHover={{ x: 0 }}
              >
                <div className="bg-slate-800/50 border border-blue-400/20 rounded-2xl p-10 hover:border-blue-400/40 transition-all group">
                  {/* Header */}
                  <div className="mb-5">
                    <div className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-2">
                      🗓 {exp.period}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                    <p className="text-blue-300 font-medium mb-1">{exp.company}</p>
                    <p className="text-sm text-gray-400 mb-4">{exp.location}</p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-blue-500/30 to-transparent mb-5" />

                  {/* Description */}
                  <p className="text-gray-300 text-[18px] leading-[1.8] mb-5">
                    {exp.description}
                  </p>

                  {/* Key responsibilities */}
                  <p className="text-gray-400 text-[18px] leading-[1.8] italic mb-5">
                    <strong>Key Responsibilities:</strong> {exp.keyResponsibilities}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 mt-5">
                    {exp.tags.map((tag, tagIdx) => (
                      <motion.span
                        key={tagIdx}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 hover:bg-blue-500/20 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
