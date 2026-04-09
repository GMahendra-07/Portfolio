import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, socialLinks, siteConfig } from '../data/portfolio';

const Footer = () => {
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
      transition: { duration: 0.6 },
    },
  };

  const socialButtons = [
    {
      url: socialLinks.email,
      label: 'Email',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M2.25 5.75A2.75 2.75 0 0 1 5 3h14a2.75 2.75 0 0 1 2.75 2.75v12.5A2.75 2.75 0 0 1 19 21H5A2.75 2.75 0 0 1 2.25 18.25V5.75zm2.3.83l6.2 4.28 6.2-4.28a.75.75 0 1 0-.86-1.2L12 9.92 5.41 5.38a.75.75 0 1 0-.86 1.2zM4 7.4v10.85c0 .41.34.75.75.75h14.5a.75.75 0 0 0 .75-.75V7.4l-7.5 5.18L4 7.4z" />
        </svg>
      ),
    },
    {
      url: socialLinks.linkedin,
      label: 'LinkedIn',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M4.98 3.5C4.98 4.6 4.07 5.5 2.98 5.5S1 4.6 1 3.5 1.91 1.5 2.98 1.5 4.98 2.4 4.98 3.5zM0 24V7.5h4.5V24H0zm7.5-16.5H12v2.03c.64-1.21 2.24-2.47 4.6-2.47 4.92 0 5.83 3.24 5.83 7.46V24H18v-7.68c0-1.83-.03-4.18-2.55-4.18-2.55 0-2.94 2-2.94 4.06V24H7.5V7.5z" />
        </svg>
      ),
    },
    {
      url: socialLinks.facebook,
      label: 'Facebook',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M22 12a10 10 0 1 0-11.5 9.93v-7.04h-2.17V12h2.17V9.8c0-2.15 1.28-3.34 3.25-3.34.94 0 1.93.17 1.93.17v2.12h-1.08c-1.07 0-1.4.66-1.4 1.34V12h2.39l-.38 2.89h-2.01v7.04A10 10 0 0 0 22 12z" />
        </svg>
      ),
    },
    {
      url: socialLinks.instagram,
      label: 'Instagram',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.056 1.968.247 2.425.415a4.9 4.9 0 0 1 1.79 1.145 4.9 4.9 0 0 1 1.145 1.79c.168.457.36 1.219.415 2.425.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.206-.247 1.968-.415 2.425a4.9 4.9 0 0 1-1.145 1.79 4.9 4.9 0 0 1-1.79 1.145c-.457.168-1.219.36-2.425.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.056-1.968-.247-2.425-.415a4.9 4.9 0 0 1-1.79-1.145 4.9 4.9 0 0 1-1.145-1.79c-.168-.457-.36-1.219-.415-2.425C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.206.247-1.968.415-2.425a4.9 4.9 0 0 1 1.145-1.79 4.9 4.9 0 0 1 1.79-1.145c.457-.168 1.219-.36 2.425-.415C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.78.128 4.743.326 3.958.623c-.8.301-1.477.7-2.148 1.37C1.137 2.663.738 3.34.437 4.14.14 4.925-.058 5.962-.116 7.234-.174 8.514-.187 8.923-.187 12s.012 3.486.07 4.766c.058 1.272.256 2.309.553 3.094.301.8.7 1.477 1.37 2.148.67.67 1.348 1.069 2.148 1.37.785.297 1.822.495 3.094.553 1.28.058 1.689.07 4.766.07s3.486-.012 4.766-.07c1.272-.058 2.309-.256 3.094-.553.8-.301 1.477-.7 2.148-1.37.67-.67 1.069-1.348 1.37-2.148.297-.785.495-1.822.553-3.094.058-1.28.07-1.689.07-4.766s-.012-3.486-.07-4.766c-.058-1.272-.256-2.309-.553-3.094-.301-.8-.7-1.477-1.37-2.148C20.8.723 20.122.324 19.322.023c-.785-.297-1.822-.495-3.094-.553C15.486.012 15.077 0 12 0z" />
          <path d="M12 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A4 4 0 1 1 16 12a4 4 0 0 1-4 4z" />
          <circle cx="18.406" cy="5.594" r="1.44" />
        </svg>
      ),
    },
    {
      url: socialLinks.github,
      label: 'GitHub',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.79 8.205 11.387.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.753-1.333-1.753-1.09-.745.082-.73.082-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.81 1.102.81 2.222 0 1.606-.015 2.896-.015 3.286 0 .32.21.694.825.576C20.565 21.79 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
        </svg>
      ),
    },
  ];

  const footerNavs = [
    {
      title: 'Navigation',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Experience', href: '#experience' },
        { label: 'Projects', href: '#projects' },
      ],
    },
    {
      title: 'Projects',
      links: [
        { label: 'ABC Bank System', href: 'https://github.com/GMahendra-07/ABC_-Bank_Customer_self_Service_System' },
        { label: 'Hotel Management', href: 'https://github.com/GMahendra-07/Hotel_Management' },
      ],
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-black border-t border-blue-400/20 overflow-hidden">
      {/* Glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-8 py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <motion.div className="col-span-1" variants={itemVariants}>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent mb-3">
                GM<span className="text-white">.</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Java Full Stack Developer based in Chennai, India. Building scalable systems and clean code every day.
              </p>
            </motion.div>

            {/* Navigation links */}
            {footerNavs.map((nav, idx) => (
              <motion.div key={idx} className="col-span-1" variants={itemVariants}>
                <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-widest">{nav.title}</h4>
                <ul className="space-y-2">
                  {nav.links.map((link, lidx) => (
                    <li key={lidx}>
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : '_self'}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div className="col-span-1" variants={itemVariants}>
              <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-widest">Connect</h4>
              <div className="flex gap-3">
                {socialButtons.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-800/50 border border-blue-400/30 flex items-center justify-center text-lg hover:bg-blue-400/20 hover:border-blue-400/60 transition-all"
                    whileHover={{ y: -3, scale: 1.1 }}
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-blue-400/10" />

        {/* Bottom footer */}
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-8 py-8"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div>
              © {siteConfig.year} {personalInfo.fullName}. All rights reserved.
            </div>
            <div>
              Built with <span className="text-blue-400">passion</span> using React & modern web technologies ☕
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
