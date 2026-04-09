import React from 'react';
import { motion } from 'framer-motion';
import { aboutContent, highlights, education } from '../data/portfolio';

const About = () => {
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
    <section id="about" className="relative py-10 lg:py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl" />
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
            <span className="text-xs font-semibold text-blue-400 tracking-widest">ABOUT ME</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            variants={itemVariants}
          >
            The Developer{' '}
            <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
              Behind the Code
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            variants={itemVariants}
          >
            A passionate fresher with industrial training, real-time project experience, and a relentless drive to build things that matter.
          </motion.p>
        </motion.div>

        {/* Content grid */}
        <motion.div
          className="grid grid-cols-1 gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="lg:py-8" variants={itemVariants}>
            <div className="grid gap-4 sm:grid-cols-2 mb-10">
              <div className="rounded-3xl bg-slate-900/80 border border-blue-400/20 p-6 shadow-xl">
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300 mb-3">
                  Education
                </div>
                <div className="text-white text-xl font-semibold mb-1">{education.degree}</div>
                <div className="text-gray-400 text-sm">{education.school}</div>
                <div className="text-gray-400 text-sm mt-1">{education.year}</div>
              </div>
              <div className="rounded-3xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-blue-400/20 p-6 shadow-xl">
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300 mb-3">
                  Training
                </div>
                <div className="text-white text-4xl font-bold">6+</div>
                <div className="text-gray-300 text-sm mt-1">Months Industrial Training</div>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-snug">
              Hi, I'm Mahendra 👋
              <br />
              I build <span className="text-blue-400">backend systems</span> that scale.
            </h3>

            <div className="space-y-4 mb-8 text-gray-300 leading-relaxed">
              <p>{aboutContent.description1}</p>
              <p>{aboutContent.description2}</p>
              <p>{aboutContent.description3}</p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-800/50 border border-blue-400/20 hover:border-blue-400/40 transition-all group"
                  whileHover={{ y: -3 }}
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Traits */}
            <div className="flex flex-wrap gap-2">
              {aboutContent.traits.map((trait, idx) => (
                <motion.div
                  key={idx}
                  className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-sm text-blue-300 font-medium hover:bg-blue-500/20 transition-colors cursor-default"
                  whileHover={{ scale: 1.05 }}
                >
                  {trait}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
