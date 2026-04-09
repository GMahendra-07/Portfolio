import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, heroStats } from '../data/portfolio';

const Hero = ({ onDownloadResume, onViewResume }) => {
  const profileImage = '/pic/My image.jpeg';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
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

  const photoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.1 },
    },
  };

  const floatVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  const rotateVariants = {
    animate: {
      rotate: 360,
      transition: { duration: 20, repeat: Infinity, ease: 'linear' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-black opacity-100" />
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full filter blur-3xl" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            className="flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              className="mb-6 inline-flex items-center gap-2 w-max"
              variants={itemVariants}
            >
              <div className="px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-xs font-semibold text-blue-400 tracking-widest">
                  AVAILABLE FOR ROLES
                </span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="mb-2 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
              variants={itemVariants}
            >
              <span className="text-white">{personalInfo.name}</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                {personalInfo.lastName}
              </span>
            </motion.h1>

            {/* Role */}
            <motion.p
              className="text-lg md:text-xl text-blue-400 font-semibold mb-2"
              variants={itemVariants}
            >
              {personalInfo.designation}
            </motion.p>

            {/* Subtitle */}
            <motion.p className="text-sm md:text-base text-gray-400 mb-1" variants={itemVariants}>
              {personalInfo.heroSubtitle}
            </motion.p>

            {/* Tagline */}
            <motion.p
              className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-lg"
              variants={itemVariants}
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div className="flex flex-wrap gap-4 mb-8" variants={itemVariants}>
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/40 transform hover:-translate-y-1 transition-all duration-300"
              >
                View Projects
              </a>
              <button
                onClick={onViewResume}
                className="px-6 py-3 rounded-full border-2 border-blue-400/40 text-blue-400 font-semibold hover:bg-blue-400/10 transform hover:-translate-y-1 transition-all duration-300"
              >
                View Resume
              </button>
              <button
                onClick={onDownloadResume}
                className="px-6 py-3 rounded-full border-2 border-violet-400/40 text-violet-400 font-semibold hover:bg-violet-400/10 transform hover:-translate-y-1 transition-all duration-300"
              >
                Download Resume
              </button>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full border-2 border-violet-400/40 text-violet-400 font-semibold hover:bg-violet-400/10 transform hover:-translate-y-1 transition-all duration-300"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div className="flex gap-8" variants={itemVariants}>
              {heroStats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
                  <div className="text-xs md:text-sm text-gray-400 font-medium">{stat.unit}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Profile image */}
          <motion.div
            className="flex justify-center items-center"
            variants={photoVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full shadow-[0_45px_120px_rgba(59,130,246,0.22)]"
              animate="animate"
              variants={floatVariants}
            >
              {/* Soft glow layer */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-transparent to-violet-500/10 blur-3xl" />

              {/* Image frame */}
              <div className="absolute inset-0 rounded-full border border-white/10 bg-slate-900/80 backdrop-blur-xl overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.2),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.18),_transparent_30%)]" />
                <div className="relative w-full h-full p-4">
                  <div className="w-full h-full rounded-full overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/10">
                    <img
                      id="heroPhoto"
                      src={profileImage}
                      alt="Mahendra Profile"
                      className="w-full h-full object-cover object-center rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Rotating rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-blue-400/30"
                variants={rotateVariants}
                animate="animate"
              />
              <motion.div
                className="absolute -inset-8 rounded-full border border-dashed border-violet-400/20"
                variants={rotateVariants}
                animate="animate"
                style={{ animationDirection: 'reverse', animationDuration: '30s' }}
              />

              {/* Mini badge */}
              <div className="absolute left-1/2 bottom-2 -translate-x-1/2 rounded-full bg-slate-900/90 border border-blue-400/30 px-4 py-2 text-xs text-white shadow-xl backdrop-blur-sm">
                Java Full Stack
              </div>

              {/* Tech icons orbiting */}
              {[
                { icon: '☕', delay: 0 },
                { icon: '🍃', delay: 1.2 },
                { icon: '🐬', delay: 2.4 },
                { icon: '⚛️', delay: 3.6 },
                { icon: '🐙', delay: 4.8 },
                { icon: '📮', delay: 6 },
              ].map((tech, idx) => (
                <motion.div
                  key={idx}
                  className="absolute w-14 h-14 rounded-xl bg-slate-800/80 border border-blue-400/30 flex items-center justify-center text-2xl shadow-lg hover:shadow-blue-500/50 cursor-pointer"
                  animate={{
                    y: [-15, 15, -15],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: tech.delay * 0.2,
                  }}
                  style={{
                    left: `${Math.cos((idx * Math.PI * 2) / 6) * 120 + 130}px`,
                    top: `${Math.sin((idx * Math.PI * 2) / 6) * 120 + 130}px`,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-xs text-gray-500 uppercase tracking-widest">Scroll</p>
          <div className="w-1 h-6 rounded-full border border-gray-600 relative overflow-hidden">
            <motion.div
              className="w-full h-1 bg-gradient-to-b from-blue-500 to-transparent"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
 