import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolio';

const SkillCard = ({ icon, name, proficiency, idx }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), idx * 100);
    return () => clearTimeout(timer);
  }, [idx]);

  return (
    <motion.div
      className="group relative"
      whileHover={{ y: -8, scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: idx * 0.05 }}
    >
      <div className="p-6 rounded-2xl bg-slate-800/50 border border-blue-400/20 hover:border-blue-400/40 overflow-hidden transition-all relative">
        {/* Hover glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-violet-500/0 group-hover:from-blue-500/10 group-hover:to-violet-500/10 transition-all" />

        <div className="relative z-10">
          <div className="text-4xl mb-3 group-hover:scale-110 group-hover:rotate-12 transition-transform">
            {icon}
          </div>
          <h4 className="font-semibold text-white mb-3">{name}</h4>

          {/* Proficiency bar */}
          <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"
              initial={{ width: 0 }}
              animate={isVisible ? { width: `${proficiency}%` } : {}}
              transition={{ duration: 1.5, ease: 'easeOut', delay: idx * 0.05 + 0.3 }}
            />
          </div>
          <div className="text-xs text-gray-500 mt-1">{proficiency}%</div>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
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

  const skillCategories = [
    { title: '🔧 Backend Development', skills: skillsData.backend },
    { title: '🎨 Frontend Development', skills: skillsData.frontend },
    { title: '🗄️ Database & Tools', skills: skillsData.tools },
  ];

  return (
    <section id="skills" className="relative py-10 lg:py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black" />
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-violet-500/10 rounded-full filter blur-3xl" />
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
            <span className="text-xs font-semibold text-blue-400 tracking-widest">⚡ TECHNICAL SKILLS</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            variants={itemVariants}
          >
            My <span className="text-blue-400">Tech Arsenal</span>
          </motion.h2>

          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Technologies I work with to build production-grade, scalable applications.
          </motion.p>
        </motion.div>

        {/* Skills by category */}
        <div className="space-y-12">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                {category.title}
                <div className="flex-1 h-px bg-gradient-to-r from-blue-400/40 to-transparent" />
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, idx) => (
                  <SkillCard
                    key={idx}
                    icon={skill.icon}
                    name={skill.name}
                    proficiency={skill.proficiency}
                    idx={catIdx * 10 + idx}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
